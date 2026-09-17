import { describe, expect, it } from 'vitest'
import { localeAlternates, localePath, splitLocalePath } from '@/utils/locale-paths'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/utils/preferences'

describe('splitLocalePath', () => {
  it('sépare la langue du chemin', () => {
    expect(splitLocalePath('/fr/blog/x')).toEqual({ locale: 'fr', path: '/blog/x' })
    expect(splitLocalePath('/de')).toEqual({ locale: 'de', path: '/' })
    expect(splitLocalePath('/en/')).toEqual({ locale: 'en', path: '/' })
  })

  // Les adresses d'avant le lot 28 n'ont pas de préfixe, et un projet peut
  // très bien s'appeler « de » : seule la première position compte.
  it('rend une langue nulle quand le chemin n\'en porte pas', () => {
    expect(splitLocalePath('/about')).toEqual({ locale: null, path: '/about' })
    expect(splitLocalePath('/')).toEqual({ locale: null, path: '/' })
    expect(splitLocalePath('/projects/de')).toEqual({ locale: null, path: '/projects/de' })
  })
})

describe('localePath', () => {
  it('pose le préfixe, sans barre finale sur la racine', () => {
    expect(localePath('/about', 'fr')).toBe('/fr/about')
    expect(localePath('/', 'de')).toBe('/de')
    expect(localePath('/', DEFAULT_LOCALE)).toBe(`/${DEFAULT_LOCALE}`)
  })

  // Reposer un préfixe sur une adresse qui en porte déjà un donnerait
  // `/fr/en/about` : c'est le cas qu'on rencontre en changeant de langue.
  it('remplace un préfixe existant au lieu de l\'empiler', () => {
    expect(localePath('/en/about', 'fr')).toBe('/fr/about')
    expect(localePath('/de/blog/x', 'en')).toBe('/en/blog/x')
    expect(localePath('/de', 'fr')).toBe('/fr')
  })
})

describe('localeAlternates', () => {
  it('donne les trois adresses d\'une page, dans l\'ordre de la liste', () => {
    const alternates = localeAlternates('/fr/projects')

    expect(alternates.map(a => a.locale)).toEqual(AVAILABLE_LOCALES)
    expect(alternates.map(a => a.path)).toEqual(
      AVAILABLE_LOCALES.map(locale => `/${locale}/projects`)
    )
  })
})
