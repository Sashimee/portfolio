import { defineBoot } from '#q-app'
import { VueReCaptcha } from 'vue-recaptcha-v3'

/**
 * reCAPTCHA **Enterprise**, et non plus la v3 classique.
 *
 * La clé a été migrée vers GCP (projet `baskewitsch`) : l'ancienne paire
 * `6LfnC4ka…` ne vaut plus rien, et le couple à respecter est désormais
 *
 *   - ici, la clé de **site** — publique, elle part dans le bundle ;
 *   - dans `service/mail/`, un `RECAPTCHA_SITE_KEY` **identique**, plus une
 *     clé d'API et l'identifiant du projet, qui eux ne quittent pas le service.
 *
 * Les deux clés de site doivent rester égales : le service demande à Google
 * une évaluation *pour cette clé-là*, et un jeton signé par un autre
 * enregistrement est refusé. C'est la même règle qu'avant — les deux vont
 * ensemble — seulement elle porte maintenant sur trois valeurs, pas deux.
 *
 * `useEnterprise` n'est pas cosmétique : il fait charger
 * `recaptcha/enterprise.js` au lieu de `recaptcha/api.js`, et exécuter
 * `grecaptcha.enterprise.execute`. Sans lui, le jeton vient du mauvais
 * endpoint et l'évaluation le rejette en `MALFORMED`.
 */
export default defineBoot(({ app }) => {
  app.use(VueReCaptcha, {
    siteKey: '6LdMd50tAAAAAI2C4RJMsBKEbHy-zjMG355X2Y-h',
    loaderOptions: { autoHideBadge: true, useEnterprise: true }
  })
})
