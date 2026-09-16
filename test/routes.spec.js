import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import routes from '@/router/routes'
import projects from '@/data/projects'
import posts from '@/data/posts'
import messages from '@/i18n'
import { readFileSync } from 'node:fs'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/utils/preferences'

function router() {
  return createRouter({ history: createMemoryHistory(), routes })
}

describe('routes', () => {
  it('resolves every navigation entry to a named route, in each locale', async () => {
    const r = router()
    for (const locale of AVAILABLE_LOCALES) {
      for (const name of ['home', 'about', 'projects', 'contact', 'blog']) {
        const resolved = r.resolve({ name, params: { locale } })
        expect(resolved.matched.length, `${name} in "${locale}"`).toBeGreaterThan(0)
        expect(resolved.path, `${name} in "${locale}"`).toMatch(new RegExp(`^/${locale}\\b`))
      }

      // 'article' is parameterised: resolving it without a slug matches nothing.
      const article = r.resolve({ name: 'article', params: { locale, slug: posts[0].slug } })
      expect(article.matched.length, locale).toBeGreaterThan(0)
    }
  })

  // La langue est dans l'adresse depuis le lot 28 : une adresse sans préfixe
  // est une adresse d'avant, et elle rejoint l'anglais en gardant son chemin.
  it('sends an unprefixed path to its English equivalent', async () => {
    const r = router()
    for (const [avant, apres] of [
      ['/about', '/en/about'],
      ['/projects', '/en/projects'],
      [`/blog/${posts[0].slug}`, `/en/blog/${posts[0].slug}`],
      ['/', `/${DEFAULT_LOCALE}`]
    ]) {
      await r.push(avant)
      expect(r.currentRoute.value.path, avant).toBe(apres)
    }
  })

  it('sends unknown paths to the 404 page', async () => {
    const r = router()
    await r.push('/en/no/such/page')
    expect(r.currentRoute.value.name).toBe('not-found')
  })

  it('resolves internal project shortcodes', () => {
    const shortcode = projects.find(p => p.target === 'internal').link
    const resolved = router().resolve(`/de/projects/${shortcode}`)
    expect(resolved.name).toBe('project')
    expect(resolved.params.shortcode).toBe(shortcode)
    expect(resolved.params.locale).toBe('de')
  })
})

describe('projects data', () => {
  it('has unique names and a screenshot for each project', () => {
    const names = projects.map(p => p.name)
    expect(new Set(names).size).toBe(names.length)
    for (const project of projects) {
      expect(project.img, project.name).toBeTruthy()
      expect(project.infoKey, project.name).toBeTruthy()
    }
  })
})

describe('posts data', () => {
  it('has unique slugs and an i18n key that exists in both locales', () => {
    const slugs = posts.map(post => post.slug)
    expect(new Set(slugs).size).toBe(slugs.length)

    for (const post of posts) {
      expect(post.cover, post.slug).toBeTruthy()
      expect(post.illustrations, post.slug).toBeTruthy()
      for (const locale of Object.keys(messages)) {
        const bundle = messages[locale][post.key]
        expect(bundle, `${post.slug} in "${locale}"`).toBeTruthy()
        expect(Array.isArray(bundle.sections), `${post.slug} in "${locale}"`).toBe(true)
      }
    }
  })
})

describe('blog routing', () => {
  it('sends the blog\'s former single-article URL to the oldest post', async () => {
    const r = router()
    // Sous chaque langue, et sans préfixe — la forme partagée à l'époque.
    for (const prefixe of ['', ...AVAILABLE_LOCALES.map(l => `/${l}`)]) {
      await r.push(`${prefixe}/blog/article`)
      const attendu = `${prefixe || `/${DEFAULT_LOCALE}`}/blog/${posts[posts.length - 1].slug}`
      expect(r.currentRoute.value.path, prefixe || '(sans préfixe)').toBe(attendu)
    }
  })

  // Le routeur ne redirige que le navigateur : un moissonneur reçoit ce que
  // NGINX répond. Les deux nomment donc la même cible, à deux endroits — et
  // c'est ce qui se désaccorde en silence.
  it('agrees with the redirect NGINX serves for the same URL', () => {
    const conf = readFileSync(`${process.cwd()}/nginx/default.conf`, 'utf8')
    const redirect = conf.match(/location = \/blog\/article \{\s*return 301 (\S+);/)

    expect(redirect, 'no `location = /blog/article` block in nginx/default.conf').not.toBeNull()
    expect(redirect[1]).toBe(`/${DEFAULT_LOCALE}/blog/${posts[posts.length - 1].slug}`)
  })

  // `/` n'est plus une page : les trois langues sont préfixées, et la racine
  // redirige vers l'anglais — la même cible que le `x-default` des instantanés.
  it('redirects the root to the default locale, as x-default says', () => {
    const conf = readFileSync(`${process.cwd()}/nginx/default.conf`, 'utf8')
    const racine = conf.match(/location = \/ \{\s*return 301 (\S+);/)

    expect(racine, 'no `location = /` redirect in nginx/default.conf').not.toBeNull()
    expect(racine[1]).toBe(`/${DEFAULT_LOCALE}`)
  })

  // Les adresses d'avant le préfixe sont indexées et partagées : NGINX les
  // redirige, sinon elles tomberaient sur une 404 et le signal se perdrait.
  it('redirects the pre-prefix URLs to their English equivalent', () => {
    const conf = readFileSync(`${process.cwd()}/nginx/default.conf`, 'utf8')
    const heritees = conf.match(/location ~ \^\/\(([^)]+)\)[^{]*\{\s*return 301 ([^;]+);/)

    expect(heritees, 'no legacy-path redirect in nginx/default.conf').not.toBeNull()
    expect(heritees[1].split('|').sort()).toEqual(['about', 'blog', 'contact', 'projects'])
    expect(heritees[2]).toContain(`/${DEFAULT_LOCALE}/`)
  })

  it('lets a known slug through', async () => {
    const r = router()
    await r.push(`/fr/blog/${posts[0].slug}`)
    expect(r.currentRoute.value.name).toBe('article')
  })

  // Entering directly is the record guard's job. The param-only change from one
  // article to another is a component guard, so it is covered in pages.spec.js.
  it('sends an unknown slug to the 404 page', async () => {
    const r = router()
    await r.push('/en/blog/does-not-exist')
    expect(r.currentRoute.value.name).toBe('not-found')
  })
})

describe('unknown project shortcode', () => {
  it('is redirected to the 404 page by the route guard', async () => {
    const r = router()
    await r.push('/en/projects/does-not-exist')
    expect(r.currentRoute.value.name).toBe('not-found')
  })

  it('lets a known shortcode through', async () => {
    const r = router()
    const shortcode = projects.find(p => p.target === 'internal').link
    await r.push(`/de/projects/${shortcode}`)
    expect(r.currentRoute.value.name).toBe('project')
  })
})
