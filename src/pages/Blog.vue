<template>
  <q-page class="blog">
    <section class="section container">
      <header class="section-head">
        <div>
          <p class="eyebrow reveal">{{ $t('blog.eyebrow') }}</p>
          <h1 class="title-xl reveal" style="--d: 0.05s">{{ $t('seo.blog.title') }}</h1>
          <p class="lead reveal" style="--d: 0.1s">{{ $t('blog.lead') }}</p>
        </div>
      </header>

      <article v-if="featured" class="card card--interactive post reveal" style="--d: 0.14s">
        <div class="post__media">
          <img :src="featured.cover" :alt="featured.title" loading="lazy" decoding="async" />
        </div>

        <div class="post__body">
          <p class="overline">{{ $t('blog.reading_time', { minutes: featured.minutes }) }}</p>
          <h2 class="post__title">
            <router-link class="stretched-link" :to="featured.link">{{ featured.title }}</router-link>
          </h2>
          <p class="post__excerpt" v-html="featured.excerpt"></p>
          <span class="post__cta">
            {{ $t('blog.read') }}
            <q-icon name="arrow_forward" size="16px" />
          </span>
        </div>
      </article>
    </section>
  </q-page>
</template>

<script>
import { usePageMeta } from '@/composables/use-page-meta'
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
.post
  display: grid
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr)
  overflow: hidden

  @media (max-width: 780px)
    grid-template-columns: 1fr

// L'infographie est un format portrait très haut : le ratio fixe évite qu'elle
// n'impose sa hauteur naturelle à toute la carte.
.post__media
  aspect-ratio: 4 / 3
  overflow: hidden
  background: var(--surface-2)

  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: top center
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)

.post:hover .post__media img
  transform: scale(1.04)

.post__body
  display: flex
  flex-direction: column
  justify-content: center
  gap: 0.5rem
  padding: clamp(1.5rem, 4vw, 2.75rem)

.post__title
  margin: 0
  font-size: var(--step-3)

  a
    color: var(--ink)
    text-decoration: none

    &:hover
      color: var(--brand)

.post__excerpt
  margin: 0
  color: var(--ink-2)
  font-size: var(--step-1)

.post__cta
  display: inline-flex
  align-items: center
  gap: 0.4rem
  margin-top: 0.75rem
  font-weight: 600
  color: var(--brand)
</style>
