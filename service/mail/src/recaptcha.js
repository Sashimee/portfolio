/**
 * Vérification du jeton reCAPTCHA v3 auprès de Google.
 *
 * La clé publique est dans `src/boot/recap.js` côté SPA ; la clé secrète ne
 * doit jamais quitter ce service. Elle vivait dans le service disparu avec
 * `bask.lu` : si elle est introuvable, régénérer la paire dans la console
 * reCAPTCHA et reporter la clé publique dans le boot du front.
 */
const URL_VERIFICATION = 'https://www.google.com/recaptcha/api/siteverify'

export function creerVerificateur({ secret, seuil, action, fetchImpl = fetch }) {
  /**
   * @returns {{ accepte: boolean, motif?: string, score?: number }}
   */
  return async function verifier(jeton, ip) {
    const corps = new URLSearchParams({ secret, response: jeton })
    // `remoteip` est facultatif chez Google et n'est envoyé que si le
    // limiteur a déjà retenu une adresse digne de confiance.
    if (ip) corps.set('remoteip', ip)

    const reponse = await fetchImpl(URL_VERIFICATION, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: corps,
      signal: AbortSignal.timeout(5000)
    })

    if (!reponse.ok) {
      return { accepte: false, motif: 'verification_indisponible' }
    }

    const resultat = await reponse.json()

    if (!resultat.success) {
      const codes = resultat['error-codes'] || []
      return { accepte: false, motif: `jeton_refuse:${codes.join(',') || 'sans_detail'}` }
    }

    // Un jeton pris pour une autre action ailleurs sur le site ne doit pas
    // ouvrir l'envoi de courriel.
    if (resultat.action && resultat.action !== action) {
      return { accepte: false, motif: `action_inattendue:${resultat.action}` }
    }

    if (typeof resultat.score === 'number' && resultat.score < seuil) {
      return { accepte: false, motif: 'score_insuffisant', score: resultat.score }
    }

    return { accepte: true, score: resultat.score }
  }
}

export { URL_VERIFICATION }
