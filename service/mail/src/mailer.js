/**
 * Transport SMTP.
 *
 * `From` est la boîte authentifiée — OVH refuse tout autre expéditeur — et
 * l'adresse du visiteur va en `Reply-To` : répondre depuis le client de
 * messagerie écrit donc bien à la personne, sans que le message soit envoyé
 * en son nom.
 */
import nodemailer from 'nodemailer'

/** Un en-tête ne tolère ni retour à la ligne ni retour chariot (injection). */
function assainirSujet(valeur) {
  return valeur.replace(/[\r\n]+/g, ' ').slice(0, 120)
}

export function creerExpediteur({ smtp, courriel, transport }) {
  const transporteur =
    transport ||
    nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: { user: smtp.user, pass: smtp.password }
    })

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
