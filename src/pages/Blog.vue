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

      <article
        v-for="(post, index) in posts"
        :key="post.slug"
        class="post"
        data-reveal
        :style="`--d: ${0.2 + index * 0.06}s`"
      >
        <router-link class="post__link" :to="post.link">
          <div class="post__text">
            <p class="post__meta mono">
              <span>{{ post.number }}</span>
              <span>{{ post.date }}</span>
              <span>{{ $t('blog.reading_time', { minutes: post.minutes }) }}</span>
            </p>

            <h2 class="post__title">{{ post.title }}</h2>
            <p class="post__excerpt" v-html="post.excerpt"></p>

            <span class="post__cta">
              {{ $t('blog.read') }}
              <q-icon name="arrow_forward" size="16px" />
            </span>
          </div>

          <div class="post__media">
            <img :src="post.cover" :alt="post.title" loading="lazy" decoding="async" />
          </div>
        </router-link>
      </article>
    </section>
  </q-page>
</template>

<script>
import { usePageMeta } from '@/composables/use-page-meta'
import { useReveal } from '@/composables/use-reveal'
import { readingTime } from '@/utils/reading-time'
import registry from '@/data/posts'

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
    /**
     * Le registre, résolu dans la langue courante. `$tm()` et non `$t()` :
     * `sections` est un message tableau, sur lequel `$t()` rend une chaîne vide.
     */
    posts() {
      return registry.map((post, index) => ({
        slug: post.slug,
        cover: post.cover,
        number: String(index + 1).padStart(2, '0'),
        date: this.formatDate(post.date),
        title: this.$t(`${post.key}.title`),
        excerpt: this.$t(`${post.key}.title2`),
        link: `/blog/${post.slug}`,
        minutes: readingTime(this.$tm(`${post.key}.sections`))
      }))
    }
  },
  methods: {
    /** Mois et année suffisent : un billet n'est pas une dépêche. */
    formatDate(value) {
      return new Date(value).toLocaleDateString(this.$i18n.locale, {
        year: 'numeric',
        month: 'long'
      })
    }
  }
}
</script>

<style lang="sass">
.blog__head
  max-width: 40ch
  margin-bottom: clamp(2rem, 4vw, 3rem)

// Les articles occupent toute la largeur, en une de journal plutôt qu'en cartes
// perdues dans une grille à demi vide. Le filet fort n'ouvre que la liste : sur
// deux articles empilés, un filet par bord en dessinerait deux au milieu.
.post
  border-bottom: var(--hairline) solid var(--border)

  &:first-of-type
    border-top: var(--hairline) solid var(--border-strong)

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
