/**
 * reCAPTCHA Enterprise, chargé à la demande.
 *
 * C'était un fichier d'amorçage (`src/boot/recap.js`), donc `VueReCaptcha`
 * s'installait dans l'entrée du bundle et son `install()` injectait aussitôt le
 * script de Google. Toute visite le payait : 90 695 octets de greffon, une
 * requête vers google.com et un cookie `_GRECAPTCHA`, sur l'accueil, `/about`,
 * `/projects` et l'index du blog — qui n'ont pas de formulaire. Et cela avant
 * toute réponse au bandeau de consentement, dont le texte ne mentionne que
 * Google Analytics.
 *
 * Seules deux pages postent : `/contact` et un article (l'inscription à la
 * lettre d'information). Elles appellent `preloadRecaptcha()` à leur montage —
 * le script est donc prêt quand le visiteur valide — et `executeRecaptcha()` à
 * l'envoi.
 *
 * La clé de **site**, publique, doit rester identique au `RECAPTCHA_SITE_KEY`
 * du service : Google évalue le jeton pour cet enregistrement-là, et un jeton
 * signé par un autre revient `valid: false`.
 *
 * `useEnterprise` n'est pas cosmétique : il fait charger
 * `recaptcha/enterprise.js` au lieu de `recaptcha/api.js`. Sans lui, le jeton
 * vient du mauvais point d'entrée et l'évaluation le rejette en `MALFORMED`.
 */
export const RECAPTCHA_SITE_KEY = '6LdMd50tAAAAAI2C4RJMsBKEbHy-zjMG355X2Y-h'

let loading = null

/** Démarre le chargement, une seule fois, et rend la promesse de l'instance. */
export function preloadRecaptcha() {
  loading ??= import('recaptcha-v3').then(({ load }) =>
    load(RECAPTCHA_SITE_KEY, { autoHideBadge: true, useEnterprise: true })
  )

  return loading
}

/** Le jeton pour une action. L'action est aussi vérifiée par le service. */
export async function executeRecaptcha(action) {
  const recaptcha = await preloadRecaptcha()
  return recaptcha.execute(action)
}
