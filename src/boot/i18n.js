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
import { localeLinks, splitLocalePath } from '@/utils/locale-paths'

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

/**
 * Depuis le lot 28, **l'adresse porte la langue** : `/fr/about` est en
 * français, et rien d'autre ne le décide. Le choix mémorisé et celui du
 * navigateur ne servent plus qu'à une adresse sans préfixe — celles d'avant,
 * que le routeur rabat sur `/en/…`.
 */
function localeDeLAdresse() {
  if (typeof window === 'undefined') return null
  return splitLocalePath(window.location.pathname).locale
}

// Attendu : l'application ne se monte pas avant que sa langue soit là. Lire
// l'adresse ici évite de charger deux paquets : celui du choix mémorisé, puis
// celui que le garde imposerait à la première navigation.
export default defineBoot(async ({ app, router }) => {
  app.use(i18n)
  // Tout lien interne passe par ici : `$lp('/projects')` rend `/fr/projects`
  // quand la page est en français. Lu dans un rendu, `currentLocale()` est la
  // référence de vue-i18n, donc les liens se refont à la bascule de langue.
  app.use(localeLinks, { locale: currentLocale })
  // Stored choice first, browser locale second — "fr-FR" resolves to "fr".
  await setLocale(localeDeLAdresse() || getStoredLocale() || Quasar.lang.getLocale())

  router.beforeEach(async to => {
    const voulue = to.params.locale
    if (voulue && voulue !== currentLocale()) await setLocale(voulue)
    return true
  })
})

export { i18n }
