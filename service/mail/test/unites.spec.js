import { describe, expect, it, vi } from 'vitest'

import { chargerConfig, REQUISES } from '../src/config.js'
import { assainirSujet, creerExpediteur, optionsTransport } from '../src/mailer.js'
import { creerLimiteur } from '../src/rate-limit.js'
import { creerVerificateur } from '../src/recaptcha.js'
import { BORNES, validerDemande } from '../src/validation.js'

const ENV_COMPLET = {
  RECAPTCHA_SECRET: 'secret',
  SMTP_HOST: 'ssl0.ovh.net',
  SMTP_USER: 'boite@baskewitsch.lu',
  SMTP_PASSWORD: 'motdepasse',
  MAIL_FROM: 'boite@baskewitsch.lu',
  MAIL_TO: 'destinataire@baskewitsch.lu'
}

describe('configuration', () => {
  it('nomme les variables manquantes plutôt que de démarrer', () => {
    expect(() => chargerConfig({})).toThrow(/RECAPTCHA_SECRET/)
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

  it('exige quatre variables, ni plus ni moins', () => {
    // SMTP_USER et SMTP_PASSWORD n'en sont pas : le relais local n'authentifie
    // personne. Le compte est ecrit en dur pour qu'un ajout se remarque.
    expect(REQUISES).toHaveLength(4)
    expect(REQUISES).not.toContain('SMTP_USER')
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

describe('reCAPTCHA', () => {
  function verificateurAvec(charge, ok = true) {
    const fetchImpl = vi.fn(async () => ({ ok, json: async () => charge }))
    const verifier = creerVerificateur({
      secret: 'secret',
      seuil: 0.5,
      action: 'submit',
      fetchImpl
    })
    return { verifier, fetchImpl }
  }

  it('accepte un jeton au-dessus du seuil', async () => {
    const { verifier } = verificateurAvec({ success: true, score: 0.8, action: 'submit' })

    await expect(verifier('jeton')).resolves.toEqual({ accepte: true, score: 0.8 })
  })

  it('refuse un score sous le seuil', async () => {
    const { verifier } = verificateurAvec({ success: true, score: 0.2, action: 'submit' })

    const resultat = await verifier('jeton')
    expect(resultat.accepte).toBe(false)
    expect(resultat.motif).toBe('score_insuffisant')
  })

  it("refuse un jeton pris pour une autre action", async () => {
    const { verifier } = verificateurAvec({ success: true, score: 0.9, action: 'login' })

    expect((await verifier('jeton')).motif).toBe('action_inattendue:login')
  })

  it('rapporte les codes d\'erreur de Google', async () => {
    const { verifier } = verificateurAvec({
      success: false,
      'error-codes': ['timeout-or-duplicate']
    })

    expect((await verifier('jeton')).motif).toBe('jeton_refuse:timeout-or-duplicate')
  })

  it('ne joint pas l\'adresse quand elle n\'est pas fournie', async () => {
    const { verifier, fetchImpl } = verificateurAvec({ success: true, score: 0.9 })

    await verifier('jeton')
    expect(fetchImpl.mock.calls[0][1].body.has('remoteip')).toBe(false)

    await verifier('jeton', '203.0.113.7')
    expect(fetchImpl.mock.calls[1][1].body.get('remoteip')).toBe('203.0.113.7')
  })

  it('traite une réponse HTTP en échec comme une indisponibilité', async () => {
    const { verifier } = verificateurAvec({}, false)

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
