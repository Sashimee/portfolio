import { describe, expect, it, vi } from 'vitest'

import { chargerConfig, REQUISES } from '../src/config.js'
import { assainirSujet, creerExpediteur, optionsTransport } from '../src/mailer.js'
import { creerLimiteur } from '../src/rate-limit.js'
import { creerVerificateur } from '../src/recaptcha.js'
import { BORNES, validerDemande } from '../src/validation.js'

const ENV_COMPLET = {
  RECAPTCHA_PROJECT_ID: 'baskewitsch',
  RECAPTCHA_API_KEY: 'cle-api',
  RECAPTCHA_SITE_KEY: '6LdMd50tAAAAAI2C4RJMsBKEbHy-zjMG355X2Y-h',
  SMTP_HOST: 'ssl0.ovh.net',
  SMTP_USER: 'boite@baskewitsch.lu',
  SMTP_PASSWORD: 'motdepasse',
  MAIL_FROM: 'boite@baskewitsch.lu',
  MAIL_TO: 'destinataire@baskewitsch.lu'
}

describe('configuration', () => {
  it('nomme les variables manquantes plutôt que de démarrer', () => {
    expect(() => chargerConfig({})).toThrow(/RECAPTCHA_PROJECT_ID/)
    expect(() => chargerConfig({ ...ENV_COMPLET, MAIL_TO: '' })).toThrow(/MAIL_TO/)
  })

  it('accepte un environnement complet et pose les valeurs par défaut', () => {
    const config = chargerConfig(ENV_COMPLET)

    expect(config.port).toBe(3000)
    expect(config.smtp.port).toBe(465)
    expect(config.smtp.secure).toBe(true)
    expect(config.recaptcha.seuil).toBe(0.5)
    expect(config.origines).toEqual(['https://alex.baskewitsch.lu'])
    expect(config.faireConfianceAuProxy).toBe(false)
  })

  it('bascule en STARTTLS quand le port est 587', () => {
    expect(chargerConfig({ ...ENV_COMPLET, SMTP_PORT: '587' }).smtp.secure).toBe(false)
  })

  it('découpe la liste des origines', () => {
    const config = chargerConfig({
      ...ENV_COMPLET,
      ALLOWED_ORIGINS: 'https://alex.baskewitsch.lu, http://localhost:8080'
    })

    expect(config.origines).toEqual(['https://alex.baskewitsch.lu', 'http://localhost:8080'])
  })

  it('exige six variables, ni plus ni moins', () => {
    // SMTP_USER et SMTP_PASSWORD n'en sont pas : le relais local n'authentifie
    // personne. Le compte est ecrit en dur pour qu'un ajout se remarque.
    expect(REQUISES).toHaveLength(6)
    expect(REQUISES).not.toContain('SMTP_USER')
    // L'ancien secret partage n'existe plus depuis la migration vers Enterprise.
    expect(REQUISES).not.toContain('RECAPTCHA_SECRET')
  })

  it('accepte un environnement sans identifiants SMTP (relais local)', () => {
    const config = chargerConfig({
      ...ENV_COMPLET,
      SMTP_HOST: 'mailrelay',
      SMTP_PORT: '587',
      SMTP_USER: undefined,
      SMTP_PASSWORD: undefined
    })

    expect(config.smtp.user).toBe('')
    expect(config.smtp.secure).toBe(false)
  })

  it('refuse une authentification a moitie configuree', () => {
    // Le cas dangereux : nodemailer se rabattrait sur un envoi anonyme, et un
    // identifiant oublie ressemblerait a un service qui marche.
    expect(() => chargerConfig({ ...ENV_COMPLET, SMTP_PASSWORD: '' })).toThrow(/vont ensemble/)
    expect(() => chargerConfig({ ...ENV_COMPLET, SMTP_USER: '' })).toThrow(/vont ensemble/)
  })
})

describe('validation', () => {
  const valide = {
    name: 'Une personne',
    email: 'personne@example.com',
    message: 'Bonjour',
    token: 'jeton'
  }

  it('accepte une demande complète et rogne les blancs', () => {
    const resultat = validerDemande({ ...valide, name: '  Une personne  ' })

    expect(resultat.valide).toBe(true)
    expect(resultat.donnees.name).toBe('Une personne')
  })

  it.each([
    ['corps_invalide', null],
    ['corps_invalide', []],
    ['nom_manquant', { ...valide, name: '   ' }],
    ['courriel_manquant', { ...valide, email: undefined }],
    ['courriel_invalide', { ...valide, email: 'a@b' }],
    ['message_manquant', { ...valide, message: '' }],
    ['jeton_manquant', { ...valide, token: null }]
  ])('refuse avec le motif %s', (motif, corps) => {
    expect(validerDemande(corps)).toEqual({ valide: false, motif })
  })

  it('applique les bornes que le front annonce dans ses règles', () => {
    expect(BORNES).toEqual({ nom: 1024, message: 5120 })
    expect(validerDemande({ ...valide, name: 'a'.repeat(1024) }).motif).toBe('nom_trop_long')
    expect(validerDemande({ ...valide, message: 'a'.repeat(5120) }).motif).toBe('message_trop_long')
  })
})

describe('limiteur', () => {
  it('rouvre une fois la fenêtre passée', () => {
    let maintenant = 0
    const limiteur = creerLimiteur({ fenetreMs: 1000, maximum: 1, horloge: () => maintenant })

    expect(limiteur.verifier('a').autorise).toBe(true)
    expect(limiteur.verifier('a').autorise).toBe(false)

    maintenant = 1001
    expect(limiteur.verifier('a').autorise).toBe(true)
  })

  it('oublie les entrées expirées au lieu de croître sans fin', () => {
    let maintenant = 0
    const limiteur = creerLimiteur({ fenetreMs: 1000, maximum: 5, horloge: () => maintenant })

    for (let i = 0; i < 50; i += 1) limiteur.verifier(`ip-${i}`)
    expect(limiteur.taille).toBe(50)

    maintenant = 5000
    limiteur.verifier('ip-neuve')
    expect(limiteur.taille).toBe(1)
  })
})

describe('reCAPTCHA Enterprise', () => {
  // La forme des reponses est celle relevee sur l'API le 2026-08-28, contre le
  // vrai projet : verdict dans `tokenProperties`, score dans `riskAnalysis`.
  function verificateurAvec(charge, ok = true) {
    const fetchImpl = vi.fn(async () => ({ ok, status: ok ? 200 : 503, json: async () => charge }))
    const verifier = creerVerificateur({
      projet: 'baskewitsch',
      cleApi: 'cle-api',
      cleSite: '6LdMd50tAAAAAI2C4RJMsBKEbHy-zjMG355X2Y-h',
      seuil: 0.5,
      action: 'submit',
      fetchImpl
    })
    return { verifier, fetchImpl }
  }

  const valide = (score, action = 'submit') => ({
    tokenProperties: { valid: true, action },
    riskAnalysis: { score }
  })

  it('accepte un jeton au-dessus du seuil', async () => {
    const { verifier } = verificateurAvec(valide(0.8))

    await expect(verifier('jeton')).resolves.toEqual({ accepte: true, score: 0.8 })
  })

  it('refuse un score sous le seuil', async () => {
    const { verifier } = verificateurAvec(valide(0.2))

    const resultat = await verifier('jeton')
    expect(resultat.accepte).toBe(false)
    expect(resultat.motif).toBe('score_insuffisant')
  })

  it('refuse un jeton pris pour une autre action', async () => {
    // Google rapporte l'action mais ne refuse pas : la comparaison est a notre
    // charge, sinon un jeton pris ailleurs sur le site ouvrirait l'envoi.
    const { verifier } = verificateurAvec(valide(0.9, 'login'))

    expect((await verifier('jeton')).motif).toBe('action_inattendue:login')
  })

  it('rapporte la raison du refus de Google', async () => {
    const { verifier } = verificateurAvec({
      tokenProperties: { valid: false, invalidReason: 'MALFORMED' },
      riskAnalysis: { score: 0 }
    })

    expect((await verifier('jeton')).motif).toBe('jeton_refuse:MALFORMED')
  })

  it('lit le verdict, pas le score, pour decider de la validite', async () => {
    // Un jeton expire revient avec un score de 0 : sans lire `valid`, il
    // tomberait en « score insuffisant », ce qui masquerait la vraie cause.
    const { verifier } = verificateurAvec({
      tokenProperties: { valid: false, invalidReason: 'EXPIRED' },
      riskAnalysis: { score: 0 }
    })

    expect((await verifier('jeton')).motif).toBe('jeton_refuse:EXPIRED')
  })

  it("cible le bon projet et joint l'adresse seulement si elle est fournie", async () => {
    const { verifier, fetchImpl } = verificateurAvec(valide(0.9))

    await verifier('jeton')
    const [url, options] = fetchImpl.mock.calls[0]
    expect(url).toContain('/v1/projects/baskewitsch/assessments')
    expect(url).toContain('key=cle-api')
    const premier = JSON.parse(options.body)
    expect(premier.event.siteKey).toBe('6LdMd50tAAAAAI2C4RJMsBKEbHy-zjMG355X2Y-h')
    expect(premier.event.expectedAction).toBe('submit')
    expect(premier.event).not.toHaveProperty('userIpAddress')

    await verifier('jeton', '203.0.113.7')
    expect(JSON.parse(fetchImpl.mock.calls[1][1].body).event.userIpAddress).toBe('203.0.113.7')
  })

  it('traite une réponse HTTP en échec comme une indisponibilité', async () => {
    const { verifier } = verificateurAvec({}, false)

    // Le corps d'erreur de Google recopie l'URL demandee, cle d'API comprise :
    // le motif ne garde que le code.
    const motif = (await verifier('jeton')).motif
    expect(motif).toBe('verification_indisponible:503')
    expect(motif).not.toContain('cle-api')
  })

  it('traite une panne réseau comme une indisponibilité', async () => {
    const fetchImpl = vi.fn(async () => {
      throw new Error('ECONNREFUSED')
    })
    const verifier = creerVerificateur({
      projet: 'baskewitsch',
      cleApi: 'cle-api',
      cleSite: 'cle-site',
      seuil: 0.5,
      action: 'submit',
      fetchImpl
    })

    expect((await verifier('jeton')).motif).toBe('verification_indisponible')
  })
})

describe('options de transport', () => {
  it('omet la cle auth quand il n\'y a pas d\'identifiants', () => {
    // Vider `auth` ne suffit pas : nodemailer tenterait un AUTH que le relais
    // refuse. La cle doit etre absente.
    const options = optionsTransport({ host: 'mailrelay', port: 587, secure: false, user: '' })

    expect(options).not.toHaveProperty('auth')
    expect(options.host).toBe('mailrelay')
  })

  it('passe auth quand un serveur en demande une', () => {
    const options = optionsTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      user: 'boite@baskewitsch.lu',
      password: 'motdepasse'
    })

    expect(options.auth).toEqual({ user: 'boite@baskewitsch.lu', pass: 'motdepasse' })
  })
})

describe('expéditeur', () => {
  const courriel = {
    from: 'boite@baskewitsch.lu',
    to: 'destinataire@baskewitsch.lu',
    sujet: '[portfolio]'
  }

  it("met le visiteur en Reply-To, jamais en From", async () => {
    const sendMail = vi.fn(async () => {})
    const envoyer = creerExpediteur({ courriel, transport: { sendMail } })

    await envoyer({ name: 'Une personne', email: 'personne@example.com', message: 'Bonjour' })

    const message = sendMail.mock.calls[0][0]
    expect(message.from).toBe('boite@baskewitsch.lu')
    expect(message.replyTo).toBe('Une personne <personne@example.com>')
    expect(message.subject).toBe('[portfolio] Une personne')
    expect(message.text).toContain('Bonjour')
  })

  it('neutralise une tentative d\'injection d\'en-tête par le nom', () => {
    expect(assainirSujet('Nom\r\nBcc: ailleurs@example.com')).toBe(
      'Nom Bcc: ailleurs@example.com'
    )
  })
})
