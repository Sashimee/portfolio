<template>
  <q-page class="home">
    <section class="hero">
      <div class="aurora" aria-hidden="true"></div>

      <div class="container hero__inner">
        <p class="eyebrow reveal">{{ $t('home.eyebrow') }}</p>

        <h1 class="display reveal" style="--d: 0.06s">
          {{ $t('home.hi') }}<br />
          <span class="text-gradient">{{ $t('home.designation') }}</span>
        </h1>

        <p class="lead reveal" style="--d: 0.12s">{{ $t('home.detail_1') }}</p>
        <p class="lead reveal" style="--d: 0.16s">{{ $t('home.detail_2') }}</p>

        <div class="hero__actions reveal" style="--d: 0.22s">
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

      <div class="marquee reveal" style="--d: 0.3s" aria-hidden="true">
        <ul v-for="copy in 2" :key="copy" class="marquee__track">
          <li v-for="item in stack" :key="`${copy}-${item.label}`">
            <q-icon :name="item.icon" size="16px" />
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
        <project-card v-for="project in featured" :key="project.name" :project="project" />
      </div>
    </section>
  </q-page>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import { usePageMeta } from '@/composables/use-page-meta'
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
    }
  }
}
</script>

<style lang="sass">
.hero
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  min-height: min(88vh, 780px)
  padding-block: clamp(3rem, 10vh, 7rem) 0
  overflow: hidden

.hero__inner
  position: relative
  z-index: 1
  padding-bottom: clamp(2.5rem, 6vw, 4rem)

  .lead
    margin-bottom: 0.5rem

.hero .display
  margin-block: 0.6rem 1.5rem

.hero__actions
  display: flex
  flex-wrap: wrap
  align-items: center
  gap: 0.75rem
  margin-top: 2rem

// Bandeau de technologies : deux pistes identiques qui défilent en boucle.
.marquee
  position: relative
  z-index: 1
  display: flex
  gap: 2.5rem
  padding-block: 1.25rem
  border-block: 1px solid var(--border)
  background: color-mix(in srgb, var(--surface) 55%, transparent)
  overflow: hidden
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)

.marquee__track
  display: flex
  flex-shrink: 0
  gap: 2.5rem
  margin: 0
  padding: 0
  list-style: none
  animation: marquee 42s linear infinite

  li
    display: inline-flex
    align-items: center
    gap: 0.5rem
    font-size: 0.85rem
    font-weight: 500
    letter-spacing: 0.06em
    text-transform: uppercase
    color: var(--ink-3)
    white-space: nowrap

    .q-icon
      color: var(--brand)

@keyframes marquee
  from
    transform: translate3d(0, 0, 0)
  to
    transform: translate3d(calc(-100% - 2.5rem), 0, 0)

// Sans mouvement : plus de défilement, la liste devient simplement scrollable.
@media (prefers-reduced-motion: reduce)
  .marquee
    overflow-x: auto

  .marquee__track
    animation: none !important
    transform: none !important

  .marquee__track + .marquee__track
    display: none
</style>
