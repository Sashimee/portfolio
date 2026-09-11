import { describe, expect, it } from 'vitest'
import messages from '@/i18n'
import { LOCALES_CHARGEABLES, loadLocaleMessages } from '@/i18n/paquets'
import { i18n, setLocale } from '@/boot/i18n'
import { AVAILABLE_LOCALES, resolveLocale } from '@/utils/preferences'

/**
 * Flattens a message bundle into dotted key paths, arrays included.
 *
 * Descending into arrays is the whole point: an article body is
 * `sections: [{ title, paragraphs: [] }]`, so a guard that stops at the array
 * counts the longest text on the site as a single leaf — an empty paragraph,
 * or one section more in one locale than another, passed all three checks.
 */
function keyPaths(value, prefix = '') {
  if (Array.isArray(value)) {
    return value.flatMap((child, index) => keyPaths(child, `${prefix}[${index}]`))
  }

  if (typeof value !== 'object' || value === null) {
    return [prefix]
  }

  return Object.entries(value).flatMap(([key, child]) =>
    keyPaths(child, prefix === '' ? key : `${prefix}.${key}`)
  )
}

/** Reads a path produced by `keyPaths`, whose array steps are bracketed. */
function readPath(bundle, path) {
  return path
    .split('.')
    .flatMap(segment => segment.split(/[[\]]/).filter(Boolean))
    .reduce((node, key) => node?.[key], bundle)
}

describe('i18n bundles', () => {
  it('exposes exactly the declared locales', () => {
    expect(Object.keys(messages).sort()).toEqual([...AVAILABLE_LOCALES].sort())
  })

  it('keeps the same keys in every locale', () => {
    const [reference, ...others] = AVAILABLE_LOCALES
    const referenceKeys = keyPaths(messages[reference]).sort()

    for (const locale of others) {
      expect(keyPaths(messages[locale]).sort(), `locale "${locale}"`).toEqual(referenceKeys)
    }
  })

  it('has no empty translation', () => {
    for (const locale of AVAILABLE_LOCALES) {
      const empty = keyPaths(messages[locale]).filter(path => {
        // `img: ""` déclare une section sans illustration ; c'est la
        // convention du dépôt, pas une traduction oubliée.
        if (path.endsWith('.img')) return false
        const value = readPath(messages[locale], path)
        return typeof value === 'string' && value.trim() === ''
      })
      expect(empty, `locale "${locale}"`).toEqual([])
    }
  })
})

describe('resolveLocale', () => {
  it('accepts an exact locale', () => {
    expect(resolveLocale('fr')).toBe('fr')
  })

  it('falls back to the language subtag, which is what browsers report', () => {
    expect(resolveLocale('fr-FR')).toBe('fr')
    expect(resolveLocale('en-US')).toBe('en')
    expect(resolveLocale('fr_BE')).toBe('fr')
    expect(resolveLocale('de-DE')).toBe('de')
    expect(resolveLocale('de-AT')).toBe('de')
    expect(resolveLocale('de_LU')).toBe('de')
  })

  it('falls back to English for anything unsupported', () => {
    expect(resolveLocale('es-ES')).toBe('en')
    expect(resolveLocale('lb')).toBe('en')
    expect(resolveLocale('')).toBe('en')
    expect(resolveLocale(undefined)).toBe('en')
    expect(resolveLocale(null)).toBe('en')
  })
})

// Les trois paquets étaient importés statiquement — par l'entrée du bundle et
// par `MainLayout` : 166 006 octets bruts, 63 641 compressés, les trois langues
// sur chaque page pour n'en afficher qu'une.
describe('le chargement à la demande', () => {
  it('a un paquet par langue déclarée, et pas un de plus', () => {
    expect([...LOCALES_CHARGEABLES].sort()).toEqual([...AVAILABLE_LOCALES].sort())
  })

  it('rend, pour chaque langue, ce que le fichier réuni contient', async () => {
    for (const locale of AVAILABLE_LOCALES) {
      const charge = await loadLocaleMessages(locale)
      expect(keyPaths(charge).sort(), locale).toEqual(keyPaths(messages[locale]).sort())
    }
  })

  // `resolveLocale` rabat déjà l'inconnu sur l'anglais : y arriver signifierait
  // que `AVAILABLE_LOCALES` et la table des paquets ont divergé, et la page
  // afficherait ses clés brutes.
  it('lève sur une langue sans paquet, au lieu de rendre des clés', async () => {
    await expect(loadLocaleMessages('lb')).rejects.toThrow(/paquets\.js/)
  })
})

describe('setLocale', () => {
  it("ne charge que la langue demandée, puis bascule dessus", async () => {
    expect(i18n.global.availableLocales).toEqual([])

    await setLocale('de-AT')

    expect(i18n.global.availableLocales).toEqual(['de'])
    expect(i18n.global.locale.value).toBe('de')
    expect(document.documentElement.getAttribute('lang')).toBe('de')
  })

  // Le second passage sur une langue déjà là ne doit pas la redemander.
  it('garde les langues déjà chargées', async () => {
    await setLocale('fr')
    await setLocale('de')

    expect([...i18n.global.availableLocales].sort()).toEqual(['de', 'fr'])
    expect(i18n.global.locale.value).toBe('de')
  })

  // Les messages doivent être en place *avant* la bascule : l'ordre inverse
  // rendrait les clés brutes le temps du téléchargement.
  it('a les messages en place au moment où la langue change', async () => {
    await setLocale('en')
    expect(i18n.global.getLocaleMessage('en').layout.home).toBeTruthy()
  })
})
