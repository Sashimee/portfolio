/**
 * L'application Hono, sans effet de bord.
 *
 * Le vérificateur de jeton et l'expéditeur sont **injectés** : les tests font
 * tourner l'application entière sans appeler Google ni ouvrir de connexion
 * SMTP, et `server.js` reste le seul endroit qui touche au monde extérieur.
 *
 * Le chemin `/api/mail` et la charge `{ name, email, message, token }` sont
 * repris tels quels du service disparu : le front les envoie déjà, à
 * `Contact.vue` et à `blog/article.vue`, et rien ne justifiait de casser un
 * contrat qui n'avait pas de tort.
 */
import { Hono } from 'hono'

import { creerLimiteur } from './rate-limit.js'
import { validerDemande } from './validation.js'

/** Ce que le front reçoit ne dit jamais pourquoi c'est refusé : le motif reste au journal. */
function refus(c, statut, motif) {
  return c.json({ error: motif }, statut)
}

export function creerApp({ config, verifierJeton, envoyerCourriel, journal = console, horloge }) {
  const app = new Hono()
  const limiteur = creerLimiteur({ ...config.limite, horloge })

  const origineAutorisee = origine => Boolean(origine) && config.origines.includes(origine)

  // CORS. Le front poste du JSON, donc le navigateur envoie d'abord un
  // preflight : sans réponse à OPTIONS, l'appel échoue avant d'arriver ici.
  app.use('*', async (c, suite) => {
    const origine = c.req.header('origin')

    if (origineAutorisee(origine)) {
      c.res.headers.set('access-control-allow-origin', origine)
      c.res.headers.set('vary', 'origin')
    }

    if (c.req.method === 'OPTIONS') {
      if (!origineAutorisee(origine)) return c.body(null, 403)
      c.res.headers.set('access-control-allow-methods', 'POST, OPTIONS')
      c.res.headers.set('access-control-allow-headers', 'content-type')
      c.res.headers.set('access-control-max-age', '86400')
      return c.body(null, 204)
    }

    await suite()
  })

  app.get('/health', c => c.json({ ok: true }))

  app.post('/api/mail', async c => {
    const origine = c.req.header('origin')
    // Une origine absente est acceptée (curl, sonde) ; une origine présente et
    // inconnue ne l'est pas — c'est un site tiers qui se sert du formulaire.
    if (origine && !origineAutorisee(origine)) {
      journal.warn(`mail: origine refusée ${origine}`)
      return refus(c, 403, 'origine_refusee')
    }

    const ip = adresseClient(c, config.faireConfianceAuProxy)

    const debit = limiteur.verifier(ip)
    if (!debit.autorise) {
      journal.warn(`mail: débit dépassé pour ${ip}`)
      c.res.headers.set('retry-after', String(Math.ceil(debit.resteMs / 1000)))
      return refus(c, 429, 'trop_de_demandes')
    }

    let corps
    try {
      corps = await c.req.json()
    } catch {
      return refus(c, 400, 'corps_illisible')
    }

    const validation = validerDemande(corps)
    if (!validation.valide) {
      journal.warn(`mail: charge refusée (${validation.motif})`)
      return refus(c, 400, validation.motif)
    }

    const { token, ...demande } = validation.donnees

    let verdict
    try {
      verdict = await verifierJeton(token, config.faireConfianceAuProxy ? ip : undefined)
    } catch (erreur) {
      journal.error('mail: vérification du jeton impossible', erreur)
      return refus(c, 502, 'verification_indisponible')
    }

    if (!verdict.accepte) {
      journal.warn(`mail: jeton refusé (${verdict.motif})`)
      return refus(c, 403, 'jeton_refuse')
    }

    try {
      await envoyerCourriel(demande)
    } catch (erreur) {
      journal.error('mail: envoi SMTP échoué', erreur)
      return refus(c, 502, 'envoi_impossible')
    }

    journal.info(`mail: message relayé (score ${verdict.score ?? 'n/c'})`)
    return c.body(null, 204)
  })

  app.notFound(c => refus(c, 404, 'inconnu'))

  return app
}

/**
 * Derrière Traefik, l'adresse réelle est la **première** de `X-Forwarded-For` ;
 * les suivantes sont les proxys traversés. Sans proxy déclaré, l'en-tête est
 * ignoré : sinon n'importe qui choisirait son compteur de débit.
 */
export function adresseClient(c, faireConfianceAuProxy) {
  if (faireConfianceAuProxy) {
    const transmise = c.req.header('x-forwarded-for')
    if (transmise) {
      const premiere = transmise.split(',')[0].trim()
      if (premiere) return premiere
    }
  }

  return c.env?.incoming?.socket?.remoteAddress || 'inconnue'
}
