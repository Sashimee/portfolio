/**
 * Transport SMTP.
 *
 * `From` est une adresse que le serveur a le droit d'émettre, et l'adresse du
 * visiteur va en `Reply-To` : répondre depuis le client de messagerie écrit
 * donc bien à la personne, sans que le message soit envoyé en son nom.
 *
 * Deux serveurs possibles, et la différence tient en une clé : le relais
 * postfix partagé de la machine n'attend **aucune** authentification depuis
 * `dokploy-network` (c'est lui qui s'authentifie auprès d'OVH), tandis qu'un
 * SMTP classique en exige une. Passer `auth` avec des chaînes vides n'est pas
 * neutre — nodemailer tente alors un AUTH que le relais refuse — donc la clé
 * est omise, et non vidée.
 */
import nodemailer from 'nodemailer'

/** Un en-tête ne tolère ni retour à la ligne ni retour chariot (injection). */
function assainirSujet(valeur) {
  return valeur.replace(/[\r\n]+/g, ' ').slice(0, 120)
}

/**
 * Options passées à nodemailer. Extraites pour être vérifiables sans ouvrir de
 * connexion : c'est l'absence de la clé `auth` qui compte, et elle ne se voit
 * pas depuis un message envoyé.
 */
export function optionsTransport(smtp) {
  return {
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    ...(smtp.user ? { auth: { user: smtp.user, pass: smtp.password } } : {})
  }
}

export function creerExpediteur({ smtp, courriel, transport }) {
  const transporteur = transport || nodemailer.createTransport(optionsTransport(smtp))

  return async function envoyer({ name, email, message }) {
    await transporteur.sendMail({
      from: courriel.from,
      to: courriel.to,
      replyTo: `${assainirSujet(name)} <${email}>`,
      subject: `${courriel.sujet} ${assainirSujet(name)}`,
      text: [`Nom : ${name}`, `Courriel : ${email}`, '', message].join('\n')
    })
  }
}

export { assainirSujet }
