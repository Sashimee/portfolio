<template>
  <q-page class="home">
    <section class="hero">
      <div class="grid-guides" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>

      <div class="container hero__inner">
        <p class="eyebrow hero__eyebrow">{{ $t('home.eyebrow') }}</p>

        <h1 class="display hero__title">
          <span class="reveal-line"><span>{{ $t('home.hi') }}</span></span>
          <span class="reveal-line hero__designation" style="--d: 0.12s">
            <span>{{ $t('home.designation') }}</span>
          </span>
        </h1>

        <div class="hero__foot">
          <div class="hero__pitch" data-reveal style="--d: 0.35s">
            <p class="lead">{{ $t('home.detail_1') }}</p>
            <p class="lead">{{ $t('home.detail_2') }}</p>
          </div>

          <div class="hero__actions" data-reveal style="--d: 0.45s">
            <q-btn
              class="app-btn app-btn--primary"
              no-caps
              unelevated
              to="/projects"
              icon-right="arrow_forward"
              :label="$t('buttons.projects')"
            />
            <q-btn class="app-btn app-btn--ghost" no-caps unelevated to="/contact" :label="$t('buttons.contact')" />
            <q-btn class="app-btn app-btn--quiet" no-caps flat to="/about" :label="$t('home.more')" />
          </div>
        </div>
      </div>

      <div class="marquee" aria-hidden="true">
        <ul v-for="copy in 2" :key="copy" class="marquee__track">
          <li v-for="item in stack" :key="`${copy}-${item.label}`">
            <q-icon :name="item.icon" size="14px" />
            {{ item.label }}
          </li>
        </ul>
      </div>
    </section>

    <section class="section container">
      <header class="section-head">
        <div>
          <p class="eyebrow">{{ $t('home.featured_eyebrow') }}</p>
          <h2 class="title-lg">{{ $t('home.featured_title') }}</h2>
        </div>
        <q-btn
          class="app-btn app-btn--ghost"
          no-caps
          unelevated
          to="/projects"
          icon-right="arrow_forward"
          :label="$t('home.featured_all')"
        />
      </header>

      <div class="grid grid--cards">
        <div
          v-for="(project, position) in featured"
          :key="project.name"
          data-reveal
          :style="`--d: ${position * 0.1}s`"
        >
          <project-card :project="project" />
        </div>
      </div>
    </section>

    <!-- Colophon : ce que le site fait lui-même de ce qu'il défend. Les trois
         points sont vérifiables dans le dépôt, pas des promesses. -->
    <section class="section container colophon">
      <header class="section-head">
        <div>
          <p class="eyebrow">{{ $t('home.colophon_eyebrow') }}</p>
          <h2 class="title-lg colophon__title">{{ $t('home.colophon_title') }}</h2>
        </div>
      </header>

      <ol class="colophon__list">
        <li
          v-for="(item, position) in colophon"
          :key="position"
          class="colophon__item"
          data-reveal
          :style="`--d: ${position * 0.08}s`"
        >
          <span class="colophon__num mono">{{ String(position + 1).padStart(2, '0') }}</span>
          <h3 class="colophon__heading">{{ item.title }}</h3>
          <p class="colophon__body">{{ item.body }}</p>
        </li>
      </ol>
    </section>
  </q-page>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import { usePageMeta } from '@/composables/use-page-meta'
import { useReveal } from '@/composables/use-reveal'
import projectsData from '@/data/projects'
import stack from '@/data/stack'

export default {
  name: 'PageIndex',
  components: { ProjectCard },
  setup() {
    usePageMeta({
      titleKey: 'seo.home.title',
      descriptionKey: 'seo.home.description',
      path: '/'
    })
    useReveal()
  },
  data() {
    return { stack }
  },
  computed: {
    /** Les trois sites en ligne : la vitrine la plus parlante en un écran. */
    featured() {
      return projectsData
        .filter(project => project.category === 'live')
        .slice(0, 3)
        .map(project => ({
          ...project,
          type: this.$t('projects.categories.' + project.category),
          info: this.$t('projects.texts.' + project.infoKey)
        }))
    },
    /** $tm() : le message est une liste d'objets, $t() rendrait une chaîne. */
    colophon() {
      const items = this.$tm('home.colophon')
      return Array.isArray(items) ? items : []
    }
  }
}
</script>

<style lang="sass">
.hero
  position: relative
  display: flex
  flex-direction: column
  justify-content: flex-end
  min-height: min(94svh, 900px)
  padding-top: clamp(4rem, 12vh, 8rem)
  overflow: hidden

.hero__inner
  position: relative
  z-index: 1
  padding-bottom: clamp(2.5rem, 6vw, 4.5rem)

.hero__eyebrow
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem)

// Deux lignes de titre : le nom en pleine force, la désignation en retrait,
// contenue à 18ch pour qu'elle casse toujours au même endroit.
.hero__title
  margin: 0

.hero__designation
  max-width: 18ch
  font-size: var(--step-4)
  font-weight: 500
  letter-spacing: -0.04em
  color: var(--ink-3)

.hero__foot
  display: grid
  grid-template-columns: minmax(0, 1fr) auto
  align-items: end
  gap: clamp(1.5rem, 4vw, 3rem)
  margin-top: clamp(2.5rem, 6vw, 4.5rem)
  padding-top: clamp(1.5rem, 3vw, 2.25rem)
  border-top: var(--hairline) solid var(--border)

  @media (max-width: 900px)
    grid-template-columns: 1fr
    align-items: start

.hero__pitch
  .lead
    margin: 0 0 0.5rem
    max-width: 42ch

    &:last-child
      margin-bottom: 0

.hero__actions
  display: flex
  flex-wrap: wrap
  align-items: center
  gap: 0.6rem

// Bandeau de technologies : deux pistes identiques qui défilent en boucle.
.marquee
  position: relative
  z-index: 1
  display: flex
  gap: 3rem
  padding-block: 1.1rem
  border-block: var(--hairline) solid var(--border)
  overflow: hidden
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)

.marquee__track
  display: flex
  flex-shrink: 0
  gap: 3rem
  margin: 0
  padding: 0
  list-style: none
  animation: marquee 46s linear infinite

  li
    display: inline-flex
    align-items: center
    gap: 0.5rem
    font-family: var(--font-mono)
    font-size: 0.72rem
    font-weight: 500
    letter-spacing: 0.14em
    text-transform: uppercase
    color: var(--ink-3)
    white-space: nowrap

    .q-icon
      color: var(--ink-2)

@keyframes marquee
  from
    transform: translate3d(0, 0, 0)
  to
    transform: translate3d(calc(-100% - 3rem), 0, 0)

// Sans mouvement : plus de défilement, la liste devient simplement scrollable.
@media (prefers-reduced-motion: reduce)
  .marquee
    overflow-x: auto

  .marquee__track
    animation: none !important
    transform: none !important

  .marquee__track + .marquee__track
    display: none

.colophon__title
  max-width: 22ch

.colophon__list
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr))
  gap: 0
  margin: 0
  padding: 0
  list-style: none
  border-top: var(--hairline) solid var(--border)

.colophon__item
  padding: clamp(1.5rem, 3vw, 2.25rem) clamp(1.25rem, 2.5vw, 2rem)
  border-bottom: var(--hairline) solid var(--border)
  border-right: var(--hairline) solid var(--border)

  &:first-child
    border-left: var(--hairline) solid var(--border)

  @media (max-width: 640px)
    border-left: var(--hairline) solid var(--border)

.colophon__num
  color: var(--ink-3)

.colophon__heading
  margin: 1.5rem 0 0.75rem
  font-size: var(--step-1)
  font-weight: 600
  letter-spacing: -0.02em

.colophon__body
  margin: 0
  color: var(--ink-2)
  font-size: 0.95rem
  line-height: 1.6
</style>
