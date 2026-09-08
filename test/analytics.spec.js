import { Cookies } from 'quasar'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const GA_ID = 'G-QLPDSF7Y6S'
const CONSENT_COOKIE = 'accepted_tracking_cookies'
const COOKIE_OPTIONS = { expires: 365, sameSite: 'Strict', path: '/' }

/**
 * Le module garde un verrou `scriptLoaded` au niveau du fichier : chaque cas
 * repart d'une importation neuve, sans quoi le second n'injecte plus rien.
 */
async function chargerModule() {
  vi.resetModules()
  return import('@/utils/analytics')
}

describe('consentement à la mesure d\'audience', () => {
  beforeEach(() => {
    Cookies.remove(CONSENT_COOKIE, { path: '/' })
    delete window[`ga-disable-${GA_ID}`]
    delete window.dataLayer
  })

  afterEach(() => {
    Cookies.remove(CONSENT_COOKIE, { path: '/' })
  })

  // La régression d'origine : `MainLayout` écrit un booléen, Quasar ne déballe
  // le JSON que pour un objet ou un tableau, et la lecture revenait en chaîne.
  // Comparer à `true` seul écartait donc tout visiteur ayant accepté.
  it('reconnaît le cookie tel que la mise en page l\'écrit', async () => {
    const { hasTrackingConsent } = await chargerModule()

    Cookies.set(CONSENT_COOKIE, true, COOKIE_OPTIONS)

    expect(Cookies.get(CONSENT_COOKIE)).toBe('true')
    expect(hasTrackingConsent()).toBe(true)
  })

  it('accepte aussi un booléen, si le lecteur venait à déballer le JSON', async () => {
    const { hasTrackingConsent } = await chargerModule()

    Cookies.set(CONSENT_COOKIE, 'true', COOKIE_OPTIONS)
    expect(hasTrackingConsent()).toBe(true)
  })

  it('refuse un refus, et l\'absence de cookie', async () => {
    const { hasTrackingConsent } = await chargerModule()

    expect(hasTrackingConsent()).toBe(false)

    Cookies.set(CONSENT_COOKIE, false, COOKIE_OPTIONS)
    expect(hasTrackingConsent()).toBe(false)
  })

  it('n\'injecte le script qu\'une fois, et seulement avec le consentement', async () => {
    const { loadAnalytics } = await chargerModule()
    const scripts = () => document.querySelectorAll(`script[src*="${GA_ID}"]`).length

    loadAnalytics()
    expect(scripts()).toBe(0)

    Cookies.set(CONSENT_COOKIE, true, COOKIE_OPTIONS)
    loadAnalytics()
    loadAnalytics()
    expect(scripts()).toBe(1)

    document.querySelectorAll(`script[src*="${GA_ID}"]`).forEach(n => n.remove())
  })

  // `clearAnalytics()` pose un drapeau que gtag lit avant chaque envoi. Rien ne
  // le levait : se réinscrire rechargeait le cookie et laissait la mesure morte.
  it('lève le drapeau de désactivation quand on se réinscrit', async () => {
    const { clearAnalytics, loadAnalytics } = await chargerModule()

    Cookies.set(CONSENT_COOKIE, true, COOKIE_OPTIONS)
    loadAnalytics()

    clearAnalytics()
    expect(window[`ga-disable-${GA_ID}`]).toBe(true)

    loadAnalytics()
    expect(window[`ga-disable-${GA_ID}`]).toBe(false)

    document.querySelectorAll(`script[src*="${GA_ID}"]`).forEach(n => n.remove())
  })

  it('ne relève pas le drapeau sans consentement', async () => {
    const { clearAnalytics, loadAnalytics } = await chargerModule()

    clearAnalytics()
    loadAnalytics()

    expect(window[`ga-disable-${GA_ID}`]).toBe(true)
  })
})
