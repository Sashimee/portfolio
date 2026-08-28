/**
 * Lecture et validation de la configuration.
 *
 * Le service précédent (`api.bask.lu`) a disparu avec son domaine, et rien
 * n'écrivait ce dont il avait besoin pour tourner. D'où ce fichier : une seule
 * liste de variables, vérifiée **au démarrage**. Un secret manquant arrête le
 * conteneur tout de suite, avec le nom de la variable en clair — plutôt que de
 * laisser le service accepter des requêtes et échouer à la première.
 */

/**
 * Les variables sans lesquelles le service ne peut rien faire.
 *
 * `SMTP_USER` et `SMTP_PASSWORD` n'en sont **pas** : le relais postfix partagé
 * de la machine (`mailrelay`) n'exige aucune authentification depuis
 * `dokploy-network`, parce que le sous-réseau overlay tombe dans son
 * `mynetworks`. C'est lui qui s'authentifie auprès d'OVH, pas nous. Les deux
 * variables restent acceptées pour parler à un serveur SMTP classique.
 */
const REQUISES = [
  'RECAPTCHA_PROJECT_ID',
  'RECAPTCHA_API_KEY',
  'RECAPTCHA_SITE_KEY',
  'SMTP_HOST',
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

  // Une authentification à moitié configurée est le cas dangereux : nodemailer
  // se rabattrait sur un envoi anonyme, et un identifiant oublié ressemblerait
  // à un service qui marche. Soit les deux, soit aucun.
  if (Boolean(env.SMTP_USER) !== Boolean(env.SMTP_PASSWORD)) {
    throw new Error(
      'SMTP_USER et SMTP_PASSWORD vont ensemble : renseigner les deux pour un ' +
        'serveur qui demande une authentification, ou aucun des deux pour le ' +
        'relais local. Voir service/mail/.env.example.'
    )
  }

  return {
    port: nombre(env.PORT, 3000),

    recaptcha: {
      // reCAPTCHA Enterprise, depuis la migration de la clé vers GCP : plus de
      // secret partagé, mais un projet, une clé d'API et la clé de site — qui
      // doit être **la même** que celle de `src/boot/recap.js`, sinon Google
      // évalue le jeton pour un autre enregistrement et le refuse.
      projet: env.RECAPTCHA_PROJECT_ID,
      cleApi: env.RECAPTCHA_API_KEY,
      cleSite: env.RECAPTCHA_SITE_KEY,
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
      // OVH écoute en SSL direct sur 465 ; 587 se négocie en STARTTLS, et
      // c'est le port du relais local.
      secure: booleen(env.SMTP_SECURE, nombre(env.SMTP_PORT, 465) === 465),
      // Vides pour le relais local : `creerExpediteur` omet alors `auth`.
      user: env.SMTP_USER || '',
      password: env.SMTP_PASSWORD || ''
    },

    courriel: {
      // L'adresse du visiteur va en `Reply-To`, jamais en expéditeur : le
      // message ne part pas en son nom, et le serveur ne le refuse pas pour un
      // `From` qu'il n'a pas le droit d'émettre.
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
