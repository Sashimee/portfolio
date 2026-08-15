import { LocalStorage } from 'quasar'

export const DARK_KEY = 'pref_dark'
export const LOCALE_KEY = 'pref_locale'
export const HAND_KEY = 'pref_left_hand'

export const AVAILABLE_LOCALES = ['en', 'fr']
export const DEFAULT_LOCALE = 'en'

/**
 * Quasar reports browser locales as "fr-FR" / "en-US" while our message bundles
 * are keyed "fr" / "en", so a raw value never matched and everyone got English.
 */
export function resolveLocale(candidate, available = AVAILABLE_LOCALES) {
  if (typeof candidate !== 'string' || candidate === '') return DEFAULT_LOCALE

  const normalized = candidate.toLowerCase().replace('_', '-')
  if (available.includes(normalized)) return normalized

  const base = normalized.split('-')[0]
  return available.includes(base) ? base : DEFAULT_LOCALE
}

export function getStoredLocale() {
  const stored = LocalStorage.getItem(LOCALE_KEY)
  return AVAILABLE_LOCALES.includes(stored) ? stored : null
}

export function setStoredLocale(locale) {
  LocalStorage.set(LOCALE_KEY, locale)
}

/** null when the visitor never chose, so the OS preference can win. */
export function getStoredDark() {
  const stored = LocalStorage.getItem(DARK_KEY)
  return typeof stored === 'boolean' ? stored : null
}

export function setStoredDark(value) {
  LocalStorage.set(DARK_KEY, value)
}

export function getStoredLeftHand() {
  return LocalStorage.getItem(HAND_KEY) === true
}

export function setStoredLeftHand(value) {
  LocalStorage.set(HAND_KEY, value)
}
