import { beforeEach, describe, expect, it, vi } from 'vitest'

import { creerApp } from '../src/app.js'

const ORIGINE = 'https://alex.baskewitsch.lu'

const CONFIG = {
  origines: [ORIGINE],
  limite: { fenetreMs: 60_000, maximum: 3 },
  faireConfianceAuProxy: true
}

const CHARGE = {
  name: 'Une personne',
  email: 'personne@example.com',
  message: 'Bonjour',
  token: 'jeton-valide'
}

const journalMuet = { info: () => {}, warn: () => {}, error: () => {} }

function monter(surcharges = {}) {
  const envoyerCourriel = surcharges.envoyerCourriel ?? vi.fn(async () => {})
  const verifierJeton =
    surcharges.verifierJeton ?? vi.fn(async () => ({ accepte: true, score: 0.9 }))

  const app = creerApp({
    config: { ...CONFIG, ...surcharges.config },
    verifierJeton,
    envoyerCourriel,
    journal: journalMuet
  })

  return { app, envoyerCourriel, verifierJeton }
}

function poster(app, corps, entetes = {}) {
  return app.request('/api/mail', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: ORIGINE,
      'x-forwarded-for': '203.0.113.7',
      ...entetes
    },
    body: typeof corps === 'string' ? corps : JSON.stringify(corps)
  })
}

describe('POST /api/mail', () => {
  let contexte

  beforeEach(() => {
    contexte = monter()
  })

  it('relaie une demande valide et ne rend aucun corps', async () => {
    const reponse = await poster(contexte.app, CHARGE)

    expect(reponse.status).toBe(204)
    expect(contexte.envoyerCourriel).toHaveBeenCalledOnce()
  })

  it("ne transmet jamais le jeton à l'expéditeur", async () => {
    await poster(contexte.app, CHARGE)

    const demande = contexte.envoyerCourriel.mock.calls[0][0]
    expect(demande).toEqual({
      name: 'Une personne',
      email: 'personne@example.com',
      message: 'Bonjour'
    })
    expect(demande.token).toBeUndefined()
  })

  it('refuse une charge incomplète sans appeler Google', async () => {
    const reponse = await poster(contexte.app, { ...CHARGE, email: undefined })

    expect(reponse.status).toBe(400)
    expect(contexte.verifierJeton).not.toHaveBeenCalled()
  })

  it('refuse un courriel mal formé', async () => {
    const reponse = await poster(contexte.app, { ...CHARGE, email: 'pas-une-adresse' })

    expect(reponse.status).toBe(400)
    await expect(reponse.json()).resolves.toEqual({ error: 'courriel_invalide' })
  })

  it('refuse un corps illisible', async () => {
    const reponse = await poster(contexte.app, '{ceci n est pas du json')

    expect(reponse.status).toBe(400)
  })

  it("n'envoie rien quand le jeton est refusé", async () => {
    const { app, envoyerCourriel } = monter({
      verifierJeton: vi.fn(async () => ({ accepte: false, motif: 'score_insuffisant' }))
    })

    const reponse = await poster(app, CHARGE)

    expect(reponse.status).toBe(403)
    expect(envoyerCourriel).not.toHaveBeenCalled()
  })

  it('ne dit pas au client pourquoi le jeton est refusé', async () => {
    const { app } = monter({
      verifierJeton: vi.fn(async () => ({ accepte: false, motif: 'score_insuffisant:0.1' }))
    })

    const reponse = await poster(app, CHARGE)

    await expect(reponse.json()).resolves.toEqual({ error: 'jeton_refuse' })
  })

  it('rend 502, et non 500, quand la vérification est injoignable', async () => {
    const { app } = monter({
      verifierJeton: vi.fn(async () => {
        throw new Error('réseau')
      })
    })

    expect((await poster(app, CHARGE)).status).toBe(502)
  })

  it("rend 502 quand SMTP refuse, sans masquer l'échec", async () => {
    const { app } = monter({
      envoyerCourriel: vi.fn(async () => {
        throw new Error('smtp')
      })
    })

    expect((await poster(app, CHARGE)).status).toBe(502)
  })
})

describe('débit', () => {
  it('bloque au-delà du maximum, par adresse', async () => {
    const { app } = monter()

    for (let i = 0; i < 3; i += 1) {
      expect((await poster(app, CHARGE)).status).toBe(204)
    }

    const bloquee = await poster(app, CHARGE)
    expect(bloquee.status).toBe(429)
    expect(bloquee.headers.get('retry-after')).toBeTruthy()

    // Une autre adresse garde son propre compteur.
    const autre = await poster(app, CHARGE, { 'x-forwarded-for': '203.0.113.8' })
    expect(autre.status).toBe(204)
  })

  it("ignore l'en-tête transmise quand aucun proxy n'est déclaré", async () => {
    const { app } = monter({ config: { faireConfianceAuProxy: false } })

    for (let i = 0; i < 3; i += 1) {
      await poster(app, CHARGE, { 'x-forwarded-for': `203.0.113.${i}` })
    }

    // Les quatre appels tombent sur le même compteur : l'en-tête ne compte pas.
    expect((await poster(app, CHARGE, { 'x-forwarded-for': '203.0.113.99' })).status).toBe(429)
  })
})

describe('origines', () => {
  it('refuse une origine tierce', async () => {
    const { app, envoyerCourriel } = monter()

    const reponse = await poster(app, CHARGE, { origin: 'https://exemple-tiers.test' })

    expect(reponse.status).toBe(403)
    expect(envoyerCourriel).not.toHaveBeenCalled()
  })

  it('accepte un appel sans origine (sonde, curl)', async () => {
    const { app } = monter()

    const reponse = await app.request('/api/mail', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(CHARGE)
    })

    expect(reponse.status).toBe(204)
  })

  // Le preflight sort du middleware lui-même ; la réponse au POST, elle, est
  // fabriquée par le gestionnaire. Si Hono ne reportait pas les en-têtes posées
  // avant `next()`, le navigateur bloquerait une réponse pourtant réussie — et
  // le visiteur verrait une erreur pour un message bien parti.
  it("porte l'en-tête CORS sur la réponse au POST, pas seulement au preflight", async () => {
    const { app } = monter()

    const reponse = await poster(app, CHARGE)

    expect(reponse.status).toBe(204)
    expect(reponse.headers.get('access-control-allow-origin')).toBe(ORIGINE)
  })

  it('porte aussi les en-têtes CORS sur une réponse en erreur', async () => {
    const { app } = monter()

    const reponse = await poster(app, { ...CHARGE, email: 'invalide' })

    expect(reponse.status).toBe(400)
    expect(reponse.headers.get('access-control-allow-origin')).toBe(ORIGINE)
  })

  it('répond au preflight que le navigateur envoie avant le POST', async () => {
    const { app } = monter()

    const reponse = await app.request('/api/mail', {
      method: 'OPTIONS',
      headers: { origin: ORIGINE, 'access-control-request-method': 'POST' }
    })

    expect(reponse.status).toBe(204)
    expect(reponse.headers.get('access-control-allow-origin')).toBe(ORIGINE)
    expect(reponse.headers.get('access-control-allow-headers')).toContain('content-type')
  })

  it('ne donne pas les en-têtes CORS à une origine tierce', async () => {
    const { app } = monter()

    const reponse = await app.request('/api/mail', {
      method: 'OPTIONS',
      headers: { origin: 'https://exemple-tiers.test' }
    })

    expect(reponse.status).toBe(403)
    expect(reponse.headers.get('access-control-allow-origin')).toBeNull()
  })
})

describe('santé', () => {
  it('répond sans configuration ni jeton', async () => {
    const { app } = monter()

    const reponse = await app.request('/health')

    expect(reponse.status).toBe(200)
    await expect(reponse.json()).resolves.toEqual({ ok: true })
  })
})
