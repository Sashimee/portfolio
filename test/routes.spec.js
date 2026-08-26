import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import routes from '@/router/routes'
import projects from '@/data/projects'
import posts from '@/data/posts'
import messages from '@/i18n'

function router() {
  return createRouter({ history: createMemoryHistory(), routes })
}

describe('routes', () => {
  it('resolves every navigation entry to a named route', async () => {
    const r = router()
    for (const name of ['home', 'about', 'projects', 'contact', 'blog']) {
      const resolved = r.resolve({ name })
      expect(resolved.matched.length, name).toBeGreaterThan(0)
    }

    // 'article' is parameterised: resolving it without a slug matches nothing.
    const article = r.resolve({ name: 'article', params: { slug: posts[0].slug } })
    expect(article.matched.length).toBeGreaterThan(0)
  })

  it('sends unknown paths to the 404 page', () => {
    const resolved = router().resolve('/no/such/page')
    expect(resolved.name).toBe('not-found')
  })

  it('resolves internal project shortcodes', () => {
    const shortcode = projects.find(p => p.target === 'internal').link
    const resolved = router().resolve(`/projects/${shortcode}`)
    expect(resolved.name).toBe('project')
    expect(resolved.params.shortcode).toBe(shortcode)
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
    await r.push('/blog/article')
    expect(r.currentRoute.value.path).toBe(`/blog/${posts[posts.length - 1].slug}`)
  })

  it('lets a known slug through', async () => {
    const r = router()
    await r.push(`/blog/${posts[0].slug}`)
    expect(r.currentRoute.value.name).toBe('article')
  })

  // Entering directly is the record guard's job. The param-only change from one
  // article to another is a component guard, so it is covered in pages.spec.js.
  it('sends an unknown slug to the 404 page', async () => {
    const r = router()
    await r.push('/blog/does-not-exist')
    expect(r.currentRoute.value.name).toBe('not-found')
  })
})

describe('unknown project shortcode', () => {
  it('is redirected to the 404 page by the route guard', async () => {
    const r = router()
    await r.push('/projects/does-not-exist')
    expect(r.currentRoute.value.name).toBe('not-found')
  })

  it('lets a known shortcode through', async () => {
    const r = router()
    const shortcode = projects.find(p => p.target === 'internal').link
    await r.push(`/projects/${shortcode}`)
    expect(r.currentRoute.value.name).toBe('project')
  })
})
