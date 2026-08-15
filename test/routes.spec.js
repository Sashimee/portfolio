import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import routes from '@/router/routes'
import projects from '@/data/projects'

function router() {
  return createRouter({ history: createMemoryHistory(), routes })
}

describe('routes', () => {
  it('resolves every navigation entry to a named route', async () => {
    const r = router()
    for (const name of ['home', 'about', 'projects', 'contact', 'blog', 'article']) {
      const resolved = r.resolve({ name })
      expect(resolved.matched.length, name).toBeGreaterThan(0)
    }
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
