/**
 * Lecture et validation de la configuration.
 *
 * Le service précédent (`api.bask.lu`) a disparu avec son domaine, et rien
 * n'écrivait ce dont il avait besoin pour tourner. D'où ce fichier : une seule
 * liste de variables, vérifiée **au démarrage**. Un secret manquant arrête le
 * conteneur tout de suite, avec le nom de la variable en clair — plutôt que de
 * laisser le service accepter des requêtes et échouer à la première.
 */

/** Les variables sans lesquelles le service ne peut rien faire. */
const REQUISES = [
  'RECAPTCHA_SECRET',
  'SMTP_HOST',
  'SMTP_USER',
  'SMTP_PASSWORD',
  'MAIL_FROM',
  'MAIL_TO'
]

function nombre(valeur, defaut) {
  const n = Number(valeur)
  return Number.isFinite(n) ? n : defaut
}

function booleen(valeur, defaut) {
  if (valeur === undefined || valeur === '') return defaut
  return valeur === 'true' || valeur === '1'
}

export function chargerConfig(env = process.env) {
  const manquantes = REQUISES.filter(nom => !env[nom])
  if (manquantes.length > 0) {
    throw new Error(
      `Configuration incomplète, variables manquantes : ${manquantes.join(', ')}. ` +
        'Voir service/mail/.env.example.'
    )
  }

  return {
    port: nombre(env.PORT, 3000),

    recaptcha: {
      secret: env.RECAPTCHA_SECRET,
      // reCAPTCHA v3 rend un score, pas un verdict. 0.5 est le seuil que Google
      // donne en exemple ; au-dessus, un formulaire de contact commence à
      // refuser des humains sur navigateur durci.
      seuil: nombre(env.RECAPTCHA_SCORE_MIN, 0.5),
      // Les deux appels du front (`Contact.vue`, `blog/article.vue`) demandent
      // le jeton pour l'action « submit ». Vérifier l'action empêche qu'un
      // jeton pris ailleurs sur le site serve ici.
      action: env.RECAPTCHA_ACTION || 'submit'
    },

    smtp: {
      host: env.SMTP_HOST,
      port: nombre(env.SMTP_PORT, 465),
      // OVH écoute en SSL direct sur 465 ; 587 se négocie en STARTTLS.
      secure: booleen(env.SMTP_SECURE, nombre(env.SMTP_PORT, 465) === 465),
      user: env.SMTP_USER,
      password: env.SMTP_PASSWORD
    },

    courriel: {
      // OVH refuse un `From` qui n'est pas la boîte authentifiée : l'adresse du
      // visiteur va en `Reply-To`, jamais en expéditeur.
      from: env.MAIL_FROM,
      to: env.MAIL_TO,
      sujet: env.MAIL_SUBJECT_PREFIX || '[portfolio]'
    },

    // Origines autorisées à appeler le service, séparées par des virgules.
    origines: (env.ALLOWED_ORIGINS || 'https://alex.baskewitsch.lu')
      .split(',')
      .map(o => o.trim())
      .filter(Boolean),

    limite: {
      fenetreMs: nombre(env.RATE_LIMIT_WINDOW_MS, 15 * 60 * 1000),
      maximum: nombre(env.RATE_LIMIT_MAX, 5)
    },

    // Derrière Traefik, l'adresse du client est dans `X-Forwarded-For`. Sans
    // proxy devant, s'y fier laisserait n'importe qui choisir son identité pour
    // le compteur de débit : le drapeau est donc explicite, et faux par défaut.
    faireConfianceAuProxy: booleen(env.TRUST_PROXY, false)
  }
}

export { REQUISES }
