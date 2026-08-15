import { describe, expect, it } from 'vitest'
import { SITE_URL, pageMeta } from '@/utils/meta'

describe('pageMeta', () => {
  const meta = pageMeta({
    title: 'Projects',
    description: 'A selection of my web projects.',
    path: '/projects',
    locale: 'fr'
  })

  it('suffixes the title with the site name', () => {
    expect(meta.title).toBe('Projects | Alex Baskewitsch')
  })

  it('points canonical, og:url and twitter:url at the same absolute URL', () => {
    const url = `${SITE_URL}/projects`
    expect(meta.link.canonical.href).toBe(url)
    expect(meta.meta.ogUrl.content).toBe(url)
    expect(meta.meta.twitterUrl.content).toBe(url)
  })

  it('always ships an absolute social image', () => {
    expect(meta.meta.ogImage.content).toBe(`${SITE_URL}/screenshots/og.png`)
    expect(meta.meta.twitterImage.content).toBe(meta.meta.ogImage.content)
  })

  it('carries the page language', () => {
    expect(meta.htmlAttr.lang).toBe('fr')
  })

  it('does not set robots unless asked', () => {
    expect(meta.meta.robots).toBeUndefined()
    expect(pageMeta({ title: '404', description: '', path: '/x', noindex: true }).meta.robots.content).toBe(
      'noindex, follow'
    )
  })

  it('keeps an already absolute image untouched and defaults the home path', () => {
    const home = pageMeta({
      description: 'd',
      path: '/',
      image: 'https://cdn.example.com/a.png'
    })
    expect(home.title).toBe('Alex Baskewitsch')
    expect(home.link.canonical.href).toBe(`${SITE_URL}/`)
    expect(home.meta.ogImage.content).toBe('https://cdn.example.com/a.png')
  })
})
