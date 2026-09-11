import { defineBoot } from '#q-app'
import { createI18n } from 'vue-i18n'
import { Quasar } from 'quasar'
import { loadLocaleMessages } from '@/i18n/paquets'
import {
  AVAILABLE_LOCALES,
  DEFAULT_LOCALE,
  getStoredLocale,
  resolveLocale,
  setStoredLocale
} from '@/utils/preferences'

// Sans messages au départ : ils arrivent langue par langue, par `setLocale`.
// `fallbackLocale` ne sert donc jamais — les trois paquets portent les mêmes
// clés, aucune vide, et `test/i18n.spec.js` refuse qu'il en soit autrement.
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  availableLocales: AVAILABLE_LOCALES,
  messages: {}
})

/**
 * Single entry point for locale changes: i18n, <html lang> and persistence.
 *
 * Asynchrone depuis que chaque langue est un fragment à part : la bascule
 * n'a lieu qu'une fois les messages arrivés, sinon la page rendrait ses clés
 * brutes le temps du téléchargement.
 */
export async function setLocale(locale) {
  const resolved = resolveLocale(locale)

  if (!i18n.global.availableLocales.includes(resolved)) {
    i18n.global.setLocaleMessage(resolved, await loadLocaleMessages(resolved))
  }

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

// Attendu : l'application ne se monte pas avant que sa langue soit là.
export default defineBoot(async ({ app }) => {
  app.use(i18n)
  // Stored choice first, browser locale second — "fr-FR" resolves to "fr".
  await setLocale(getStoredLocale() || Quasar.lang.getLocale())
})

export { i18n }
