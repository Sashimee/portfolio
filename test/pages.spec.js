import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import routes from '@/router/routes'

import MainLayout from '@/layouts/MainLayout.vue'
import ProjectsPage from '@/pages/Projects.vue'

// Pages are QPages: they only render inside the layout, which is also what the
// router does in the real app.
async function mountAt(path) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  router.push(path)
  await router.isReady()

  const wrapper = mount(MainLayout, { global: { plugins: [router] } })
  await flushPromises()
  return wrapper
}

let errorSpy

beforeEach(() => {
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
})

describe('routes render', () => {
  const paths = [
    '/',
    '/about',
    '/projects',
    '/projects/pet4u',
    '/contact',
    '/blog',
    '/blog/article',
    '/nope'
  ]

  for (const path of paths) {
    it(`renders ${path} without console errors`, async () => {
      const wrapper = await mountAt(path)
      expect(wrapper.text().length, path).toBeGreaterThan(0)
      expect(errorSpy, path).not.toHaveBeenCalled()
    })
  }
})

describe('page content', () => {
  it('translates the home page instead of printing raw keys', async () => {
    const wrapper = await mountAt('/')
    expect(wrapper.text()).toContain("Hi, I'm Alex,")
    expect(wrapper.text()).not.toContain('home.hi')
  })

  // The sections used to be read with $t(), which returns a string: the whole
  // body rendered empty.
  it('renders the body of the blog article', async () => {
    const wrapper = await mountAt('/blog/article')
    expect(wrapper.text()).toContain('Introduction')
    expect(wrapper.text()).toContain('min read')
  })

  it('shows the 404 page for an unknown path', async () => {
    const wrapper = await mountAt('/nope')
    expect(wrapper.text()).toContain('404')
  })

  it('dates the footer with the current year', async () => {
    const wrapper = await mountAt('/')
    expect(wrapper.text()).toContain(`© 2021-${new Date().getFullYear()}`)
  })
})

describe('projects page', () => {
  it('lists every project by default and filters by category', async () => {
    const wrapper = await mountAt('/projects')
    const page = wrapper.findComponent(ProjectsPage)

    expect(page.vm.projectsList).toHaveLength(10)
    expect(page.vm.categories.map(c => c.value)).toEqual(['all', 'live', 'template', 'archive'])

    await page.setData({ categorySelect: 'archive' })
    expect(page.vm.projectsList.map(p => p.name)).toEqual(['Old Portfolio'])
  })
})
