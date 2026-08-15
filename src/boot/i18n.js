import { defineBoot } from '#q-app'
import { createI18n } from 'vue-i18n'
import { Quasar } from 'quasar'
import messages from '@/i18n'
import {
  AVAILABLE_LOCALES,
  DEFAULT_LOCALE,
  getStoredLocale,
  resolveLocale,
  setStoredLocale
} from '@/utils/preferences'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  availableLocales: AVAILABLE_LOCALES,
  messages
})

/** Single entry point for locale changes: i18n, <html lang> and persistence. */
export function setLocale(locale) {
  const resolved = resolveLocale(locale)
  i18n.global.locale.value = resolved
  setStoredLocale(resolved)

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', resolved)
  }

  return resolved
}

export function currentLocale() {
  return i18n.global.locale.value
}

export default defineBoot(({ app }) => {
  app.use(i18n)
  // Stored choice first, browser locale second — "fr-FR" resolves to "fr".
  setLocale(getStoredLocale() || Quasar.lang.getLocale())
})

export { i18n }
