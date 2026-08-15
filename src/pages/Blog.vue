<template>
  <q-page class="blog">
    <section class="section container">
      <header class="blog__head">
        <p class="eyebrow">{{ $t('blog.eyebrow') }}</p>
        <h1 class="title-xl">
          <span class="reveal-line"><span>{{ $t('seo.blog.title') }}</span></span>
        </h1>
        <p class="lead" data-reveal style="--d: 0.15s">{{ $t('blog.lead') }}</p>
      </header>

      <article v-if="featured" class="post" data-reveal style="--d: 0.2s">
        <router-link class="post__link" :to="featured.link">
          <div class="post__text">
            <p class="post__meta mono">
              <span>01</span>
              <span>{{ $t('blog.reading_time', { minutes: featured.minutes }) }}</span>
            </p>

            <h2 class="post__title">{{ featured.title }}</h2>
            <p class="post__excerpt" v-html="featured.excerpt"></p>

            <span class="post__cta">
              {{ $t('blog.read') }}
              <q-icon name="arrow_forward" size="16px" />
            </span>
          </div>

          <div class="post__media">
            <img :src="featured.cover" :alt="featured.title" loading="lazy" decoding="async" />
          </div>
        </router-link>
      </article>
    </section>
  </q-page>
</template>

<script>
import { usePageMeta } from '@/composables/use-page-meta'
import { useReveal } from '@/composables/use-reveal'
import cover from '@/assets/gc_info_fr.webp'

/** ~200 mots/minute, la moyenne retenue pour un texte de blog. */
const WORDS_PER_MINUTE = 200

export default {
  name: 'PageBlog',
  setup() {
    usePageMeta({
      titleKey: 'seo.blog.title',
      descriptionKey: 'seo.blog.description',
      path: '/blog'
    })
    useReveal()
  },
  computed: {
    featured() {
      const sections = this.$tm('blogPost1.sections')
      const words = (Array.isArray(sections) ? sections : [])
        .flatMap(section => section.paragraphs || [])
        .join(' ')
        .split(/\s+/)
        .filter(Boolean).length

      return {
        cover,
        title: this.$t('blogPost1.title'),
        excerpt: this.$t('blogPost1.title2'),
        link: this.$t('blogPost1.link'),
        minutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE))
      }
    }
  }
}
</script>

<style lang="sass">
.blog__head
  max-width: 40ch
  margin-bottom: clamp(2rem, 4vw, 3rem)

// Un seul article : il occupe toute la largeur, en une une de journal plutôt
// qu'en carte perdue dans une grille vide.
.post
  border-top: var(--hairline) solid var(--border-strong)
  border-bottom: var(--hairline) solid var(--border)

.post__link
  display: grid
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr)
  gap: clamp(1.5rem, 4vw, 3.5rem)
  align-items: center
  padding-block: clamp(1.75rem, 3.5vw, 3rem)
  color: var(--ink)
  text-decoration: none

  @media (max-width: 820px)
    grid-template-columns: 1fr

.post__meta
  display: flex
  gap: 1.25rem
  margin: 0 0 1.5rem
  color: var(--ink-3)

.post__title
  margin: 0
  font-size: var(--step-3)
  font-weight: 600
  letter-spacing: -0.035em
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)

.post__excerpt
  margin: 1rem 0 0
  color: var(--ink-2)
  font-size: var(--step-1)
  max-width: 40ch

  strong
    color: var(--ink)
    font-weight: 600

.post__cta
  display: inline-flex
  align-items: center
  gap: 0.6rem
  margin-top: 2rem
  font-family: var(--font-mono)
  font-size: 0.75rem
  letter-spacing: 0.12em
  text-transform: uppercase
  color: var(--ink)
  border-bottom: 2px solid var(--acc)
  padding-bottom: 0.35rem

  .q-icon
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)

.post__media
  aspect-ratio: 5 / 4
  overflow: hidden
  border-radius: var(--radius)
  border: var(--hairline) solid var(--border)
  background: var(--surface-2)

  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: top center
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)

.post__link:hover
  .post__media img
    transform: scale(1.03)

  .post__cta .q-icon
    transform: translateX(4px)
</style>
