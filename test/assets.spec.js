import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import projects from '@/data/projects'
import posts from '@/data/posts'
import messages from '@/i18n'
import { AVAILABLE_LOCALES } from '@/utils/preferences'

// Under the jsdom environment `import.meta.url` is an http: URL, not a file:
// one; Vitest runs from the project root, so cwd is the reliable anchor.
const publicDir = `${process.cwd()}/public`

/**
 * Screenshots are referenced by a string built at render time — `img` is a
 * basename, never an import — so a typo produces a broken image at runtime and
 * nothing at build time. These paths are cheap to check, and this is the only
 * place that can catch them.
 */
describe('referenced images exist', () => {
  it('has a screenshot for every project', () => {
    for (const project of projects) {
      const path = `${publicDir}/screenshots/${project.img}.webp`
      expect(existsSync(path), `${project.name} -> ${path}`).toBe(true)
    }
  })

  it('has an illustration for every section that asks for one', () => {
    for (const post of posts) {
      for (const locale of AVAILABLE_LOCALES) {
        const sections = messages[locale][post.key].sections
        for (const section of sections) {
          if (!section.img) continue
          const path = `${publicDir}/screenshots/${post.illustrations}/${section.img}.webp`
          expect(existsSync(path), `${post.slug} (${locale}) -> ${path}`).toBe(true)
        }
      }
    }
  })

  // Both bundles drive the same <img>: a section illustrated in one language and
  // not in the other would silently change the article's rhythm per locale.
  it('illustrates the same sections in every locale', () => {
    for (const post of posts) {
      const [reference, ...others] = AVAILABLE_LOCALES
      const expected = messages[reference][post.key].sections.map(section => section.img)

      for (const locale of others) {
        const actual = messages[locale][post.key].sections.map(section => section.img)
        expect(actual, `${post.slug} in "${locale}"`).toEqual(expected)
      }
    }
  })
})
