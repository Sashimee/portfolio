import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/utils/preferences'

/**
 * Les adresses portent leur langue : `/en/about`, `/fr/about`, `/de/about`.
 *
 * Les trois langues partageaient une seule adresse, choisie côté client : un
 * moissonneur ne voyait que l'anglais, les paquets FR et DE — mêmes clés, mêmes
 * articles — ne rapportaient aucune visite de recherche. Les trois sont donc
 * préfixées, l'anglais compris : une seule forme à expliquer, et `/` redirige
 * vers `/en/` (`nginx/default.conf`).
 *
 * Ce module est la seule chose qui sache composer et décomposer ces adresses.
 */

/** `/fr/blog/x` → `{ locale: 'fr', path: '/blog/x' }` ; sinon `locale: null`. */
export function splitLocalePath(fullPath) {
  const [, premier = '', ...reste] = String(fullPath || '/').split('/')

  if (!AVAILABLE_LOCALES.includes(premier)) {
    return { locale: null, path: normalize(fullPath) }
  }

  return { locale: premier, path: normalize(`/${reste.join('/')}`) }
}

/** `('/about', 'fr')` → `/fr/about` ; la racine donne `/fr`, jamais `/fr/`. */
export function localePath(path, locale = DEFAULT_LOCALE) {
  const nu = normalize(splitLocalePath(path).path)
  return nu === '/' ? `/${locale}` : `/${locale}${nu}`
}

/** Les trois adresses d'une même page, pour les liens `hreflang`. */
export function localeAlternates(path) {
  const nu = splitLocalePath(path).path
  return AVAILABLE_LOCALES.map(locale => ({ locale, path: localePath(nu, locale) }))
}

function normalize(path) {
  const valeur = String(path || '/')
  const sansBarre = valeur.length > 1 ? valeur.replace(/\/+$/, '') : valeur
  return sansBarre.startsWith('/') ? sansBarre || '/' : `/${sansBarre}`
}

/**
 * `$lp('/projects')` dans un gabarit : l'adresse, dans la langue courante.
 *
 * Posé en greffon plutôt qu'au démarrage, pour que les tests montent les
 * composantes avec la même fonction que l'application — un lien interne sans
 * préfixe partirait sinon sur une redirection, et personne ne le verrait.
 */
export const localeLinks = {
  install(app, { locale }) {
    app.config.globalProperties.$lp = path => localePath(path, locale())
  }
}
