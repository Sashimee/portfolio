import { describe, expect, it } from 'vitest'
import messages from '@/i18n'
import { AVAILABLE_LOCALES, resolveLocale } from '@/utils/preferences'

/** Flattens a message bundle into dotted key paths, ignoring array contents. */
function keyPaths(value, prefix = '') {
  if (Array.isArray(value) || typeof value !== 'object' || value === null) {
    return [prefix]
  }

  return Object.entries(value).flatMap(([key, child]) =>
    keyPaths(child, prefix === '' ? key : `${prefix}.${key}`)
  )
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
        const value = path.split('.').reduce((node, key) => node?.[key], messages[locale])
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
  })

  it('falls back to English for anything unsupported', () => {
    expect(resolveLocale('de-DE')).toBe('en')
    expect(resolveLocale('')).toBe('en')
    expect(resolveLocale(undefined)).toBe('en')
    expect(resolveLocale(null)).toBe('en')
  })
})
