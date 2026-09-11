import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import routes from '@/router/routes'

import MainLayout from '@/layouts/MainLayout.vue'
import ProjectsPage from '@/pages/Projects.vue'
import TheHeader from '@/components/TheHeader.vue'
import { setLocale } from '@/boot/i18n'
import { AVAILABLE_LOCALES } from '@/utils/preferences'
import posts from '@/data/posts'
import projects from '@/data/projects'

// Pages are QPages: they only render inside the layout, which is also what the
// router does in the real app.
async function mountAt(path) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  router.push(path)
  await router.isReady()

  const wrapper = mount(MainLayout, { global: { plugins: [router] } })
  await flushPromises()
  wrapper.router = router
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
  // Dérivé des registres plutôt qu'énuméré : la liste écrite à la main avait
  // pris deux articles de retard, et un article ajouté n'était donc plus monté
  // — alors que c'est exactement ce que ce fichier promet de vérifier.
  const paths = [
    '/',
    '/about',
    '/projects',
    ...projects.filter(p => p.target === 'internal').map(p => `/projects/${p.link}`),
    '/contact',
    '/blog',
    '/blog/article',
    ...posts.map(post => `/blog/${post.slug}`),
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
    const wrapper = await mountAt('/blog/green-coding-fintech')
    expect(wrapper.text()).toContain('Introduction')
    expect(wrapper.text()).toContain('min read')
  })


  // The two articles share one component: it must read the slug, not a constant.
  it('renders the other article from the same component', async () => {
    const wrapper = await mountAt('/blog/schoulbus-claude-code')
    expect(wrapper.text()).toContain('Nineteen days for a school bus')
    expect(wrapper.text()).not.toContain('The future of Fintech')
  })

  // `beforeEnter` does not replay on a param-only change, so the article page
  // carries its own `beforeRouteUpdate`. That guard only runs on a mounted
  // component, which is why it is checked here and not in routes.spec.js.
  it('404s a bad slug reached from another article', async () => {
    const wrapper = await mountAt('/blog/schoulbus-claude-code')

    await wrapper.router.push('/blog/does-not-exist')
    await flushPromises()

    expect(wrapper.router.currentRoute.value.name).toBe('not-found')
  })

  it('lists every post on the blog index', async () => {
    const wrapper = await mountAt('/blog')
    expect(wrapper.text()).toContain('Nineteen days for a school bus')
    expect(wrapper.text()).toContain('The future of Fintech')
    expect(wrapper.text()).toContain('Twenty-seven megabytes of my own argument')
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

    expect(page.vm.projectsList).toHaveLength(13)
    expect(page.vm.categories.map(c => c.value)).toEqual(['all', 'live', 'template', 'archive'])

    await page.setData({ categorySelect: 'archive' })
    expect(page.vm.projectsList.map(p => p.name)).toEqual(['Old Portfolio'])
  })
})

describe('language selector', () => {
  it('opens a list of every available locale and closes on choice', async () => {
    const wrapper = await mountAt('/')
    const header = wrapper.findComponent(TheHeader)

    expect(header.find('.lang__list').exists()).toBe(false)

    await header.find('.lang__trigger').trigger('click')
    const items = header.findAll('.lang__item')
    expect(items.map(item => item.attributes('lang'))).toEqual([...AVAILABLE_LOCALES])
    expect(items.map(item => item.text())).toEqual(['EN English', 'FR Français', 'DE Deutsch'])
    for (const item of items) {
      const [code, ...reste] = item.text().split(' ')
      expect(reste.join(' '), `libellé de "${code}"`).not.toBe(code)
    }

    const german = items.find(item => item.attributes('lang') === 'de')
    await german.trigger('click')
    // `setLocale` attend le fragment de la langue : un `trigger` seul rend la
    // main avant que la bascule ait eu lieu.
    await flushPromises()

    expect(header.vm.locale).toBe('de')
    expect(header.find('.lang__list').exists()).toBe(false)
    expect(header.find('.lang__trigger').text()).toContain('DE')
    expect(document.documentElement.getAttribute('lang')).toBe('de')

    await setLocale('en')
  })

  it('marks the current locale and only that one', async () => {
    const wrapper = await mountAt('/')
    const header = wrapper.findComponent(TheHeader)

    await header.find('.lang__trigger').trigger('click')
    const checked = header
      .findAll('.lang__item')
      .filter(item => item.attributes('aria-checked') === 'true')

    expect(checked).toHaveLength(1)
    expect(checked[0].attributes('lang')).toBe('en')
  })

  it('closes on Escape without closing anything else', async () => {
    const wrapper = await mountAt('/')
    const header = wrapper.findComponent(TheHeader)

    await header.find('.lang__trigger').trigger('click')
    expect(header.find('.lang__list').exists()).toBe(true)

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await flushPromises()

    expect(header.find('.lang__list').exists()).toBe(false)
    expect(header.vm.menu).toBe(false)
  })

  it('opens the panel inward on mobile, where the trigger sits at the left edge', async () => {
    const wrapper = await mountAt('/')
    const header = wrapper.findComponent(TheHeader)

    await header.setData({ menu: true })
    await header.find('.menu-overlay .lang__trigger').trigger('click')

    // `.lang__list` est en `right: 0` : aligné sur le bord droit du
    // déclencheur, il s'étend vers la gauche. Dans l'en-tête le déclencheur est
    // à droite, donc le panneau rentre dans l'écran ; au pied du menu plein
    // écran il est à gauche, et le panneau sortait de l'écran par la gauche.
    expect(header.find('.menu-overlay .lang__list').classes()).toContain('lang__list--start')
    expect(header.find('.lang.gt-sm .lang__list').classes()).not.toContain('lang__list--start')
  })

  it('closes when the click lands outside it', async () => {
    const wrapper = await mountAt('/')
    const header = wrapper.findComponent(TheHeader)

    await header.find('.lang__trigger').trigger('click')
    expect(header.find('.lang__list').exists()).toBe(true)

    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await flushPromises()

    expect(header.find('.lang__list').exists()).toBe(false)
  })
})
