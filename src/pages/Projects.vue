<template>
  <q-page class="projects">
    <section class="section container">
      <header class="section-head">
        <div>
          <p class="eyebrow reveal">{{ $t('projects.eyebrow') }}</p>
          <h1 class="title-xl reveal" style="--d: 0.05s">{{ $t('seo.projects.title') }}</h1>
          <p class="lead reveal" style="--d: 0.1s">{{ $t('projects.lead') }}</p>
        </div>
      </header>

      <div class="filters reveal" style="--d: 0.14s" role="group" :aria-label="$t('projects.categories.label')">
        <button
          v-for="category in categories"
          :key="category.value"
          type="button"
          class="filters__item"
          :class="{ 'is-active': category.value === categorySelect }"
          :aria-pressed="category.value === categorySelect"
          @click="categorySelect = category.value"
        >
          {{ category.label }}
          <span class="filters__count">{{ category.count }}</span>
        </button>
      </div>

      <transition-group tag="div" class="grid grid--cards projects__grid" name="cards" appear>
        <project-card v-for="project in projectsList" :key="project.name" :project="project" />
      </transition-group>
    </section>
  </q-page>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import { usePageMeta } from '@/composables/use-page-meta'
import projectsData, { PROJECT_CATEGORIES } from '@/data/projects'

export default {
  name: 'PageProjects',
  components: { ProjectCard },
  setup() {
    usePageMeta({
      titleKey: 'seo.projects.title',
      descriptionKey: 'seo.projects.description',
      path: '/projects'
    })
  },
  data() {
    return {
      categorySelect: 'all'
    }
  },
  computed: {
    categories() {
      // Values stay language-independent, only the labels are translated.
      return [
        { value: 'all', label: this.$t('projects.categories.all'), count: projectsData.length },
        ...PROJECT_CATEGORIES.map(category => ({
          value: category,
          label: this.$t('projects.categories.' + category),
          count: projectsData.filter(project => project.category === category).length
        }))
      ]
    },
    projectsList() {
      return projectsData
        .filter(project => this.categorySelect === 'all' || project.category === this.categorySelect)
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
.filters
  display: flex
  flex-wrap: wrap
  gap: 0.5rem
  margin-bottom: clamp(1.5rem, 3vw, 2.25rem)

.filters__item
  display: inline-flex
  align-items: center
  gap: 0.45rem
  padding: 0.5rem 1rem
  font: inherit
  font-size: 0.9rem
  font-weight: 500
  color: var(--ink-2)
  background: var(--surface)
  border: 1px solid var(--border)
  border-radius: var(--radius-pill)
  cursor: pointer
  transition: color 0.25s, border-color 0.25s, background 0.25s

  &:hover
    color: var(--ink)
    border-color: var(--border-strong)

  &.is-active
    color: var(--brand-on)
    background: var(--brand)
    border-color: transparent

.filters__count
  font-size: 0.72rem
  font-variant-numeric: tabular-nums
  opacity: 0.7

.projects__grid
  position: relative

.cards-enter-active
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)

// Pas de `position: absolute` sur les sorties : hors de la grille, la carte
// perdrait sa largeur de colonne et s'étirerait sur toute la ligne.
.cards-leave-active
  transition: opacity 0.2s ease

.cards-enter-from
  opacity: 0
  transform: translateY(12px)

.cards-leave-to
  opacity: 0

.cards-move
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)
</style>
