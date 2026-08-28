/**
 * Vérification du jeton auprès de **reCAPTCHA Enterprise**.
 *
 * La clé a été migrée vers GCP : ce n'est plus `siteverify` avec un secret,
 * mais une « évaluation » (*assessment*) POSTée en JSON sur l'API Enterprise,
 * authentifiée par une clé d'API et adressée à un projet.
 *
 * Trois différences qui comptent, parce qu'elles changent la façon de lire la
 * réponse — et qu'aucune ne lève d'erreur si on l'ignore :
 *
 *  - le verdict n'est plus `success` mais `tokenProperties.valid`, avec un
 *    `invalidReason` (`MALFORMED`, `EXPIRED`, `DUPE`…) ;
 *  - le score n'est plus à la racine mais dans `riskAnalysis.score` ;
 *  - l'action vérifiée est `tokenProperties.action`. Passer `expectedAction`
 *    ne fait **pas** refuser un jeton d'une autre action : Google se contente
 *    de le rapporter. La comparaison reste donc à notre charge, sinon un jeton
 *    pris ailleurs sur le site ouvrirait l'envoi.
 *
 * La clé d'API ne quitte pas ce service. Elle voyage en paramètre d'URL, comme
 * l'exige l'API : `URL_EVALUATION` la reçoit à l'appel et n'est jamais
 * journalisée — un message d'erreur de Google recopie volontiers l'URL
 * demandée.
 */
const RACINE_API = 'https://recaptchaenterprise.googleapis.com/v1'

/** L'URL d'évaluation d'un projet. La clé d'API y est un paramètre. */
export function urlEvaluation(projet, cleApi) {
  return `${RACINE_API}/projects/${encodeURIComponent(projet)}/assessments?key=${encodeURIComponent(cleApi)}`
}

export function creerVerificateur({
  projet,
  cleApi,
  cleSite,
  seuil,
  action,
  fetchImpl = fetch
}) {
  /**
   * @returns {{ accepte: boolean, motif?: string, score?: number }}
   */
  return async function verifier(jeton, ip) {
    const evenement = { token: jeton, expectedAction: action, siteKey: cleSite }
    // Facultatif chez Google, et envoyé seulement si le limiteur a déjà retenu
    // une adresse digne de confiance.
    if (ip) evenement.userIpAddress = ip

    let reponse
    try {
      reponse = await fetchImpl(urlEvaluation(projet, cleApi), {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ event: evenement }),
        signal: AbortSignal.timeout(5000)
      })
    } catch {
      return { accepte: false, motif: 'verification_indisponible' }
    }

    if (!reponse.ok) {
      // Le corps d'erreur cite l'URL demandée, clé d'API comprise : on ne
      // garde que le code.
      return { accepte: false, motif: `verification_indisponible:${reponse.status}` }
    }

    const resultat = await reponse.json()
    const proprietes = resultat.tokenProperties || {}

    if (!proprietes.valid) {
      return { accepte: false, motif: `jeton_refuse:${proprietes.invalidReason || 'sans_detail'}` }
    }

    if (proprietes.action && proprietes.action !== action) {
      return { accepte: false, motif: `action_inattendue:${proprietes.action}` }
    }

    const score = resultat.riskAnalysis?.score
    if (typeof score === 'number' && score < seuil) {
      return { accepte: false, motif: 'score_insuffisant', score }
    }

    return { accepte: true, score }
  }
}

export { RACINE_API }
