<template>
  <q-page class="projects">
    <section class="section container">
      <header class="projects__head">
        <p class="eyebrow">{{ $t('projects.eyebrow') }}</p>
        <h1 class="title-xl">
          <span class="reveal-line"><span>{{ $t('seo.projects.title') }}</span></span>
        </h1>
        <p class="lead" data-reveal style="--d: 0.15s">{{ $t('projects.lead') }}</p>
      </header>

      <div class="filters" role="group" :aria-label="$t('projects.categories.label')">
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

      <!-- La clé porte la catégorie : changer de filtre remonte un index neuf,
           donc rejoue l'animation d'entrée au lieu de permuter des lignes. -->
      <transition name="swap" mode="out-in">
        <project-index :key="categorySelect" :projects="projectsList" />
      </transition>
    </section>
  </q-page>
</template>

<script>
import ProjectIndex from '@/components/ProjectIndex.vue'
import { usePageMeta } from '@/composables/use-page-meta'
import { useReveal } from '@/composables/use-reveal'
import projectsData, { PROJECT_CATEGORIES } from '@/data/projects'

export default {
  name: 'PageProjects',
  components: { ProjectIndex },
  setup() {
    usePageMeta({
      titleKey: 'seo.projects.title',
      descriptionKey: 'seo.projects.description',
      path: '/projects'
    })
    useReveal()
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
.projects__head
  max-width: 34ch
  margin-bottom: clamp(2rem, 4vw, 3rem)

.filters
  display: flex
  flex-wrap: wrap
  gap: 0.4rem
  padding-bottom: clamp(1.25rem, 2.5vw, 2rem)

.filters__item
  display: inline-flex
  align-items: baseline
  gap: 0.45rem
  padding: 0.45rem 0.9rem
  font-family: var(--font-mono)
  font-size: 0.72rem
  font-weight: 500
  letter-spacing: 0.1em
  text-transform: uppercase
  color: var(--ink-2)
  background: transparent
  border: var(--hairline) solid var(--border)
  border-radius: var(--radius-pill)
  cursor: pointer
  transition: color 0.3s, border-color 0.3s, background 0.3s

  &:hover
    color: var(--ink)
    border-color: var(--border-strong)

  &.is-active
    color: var(--acc-ink)
    background: var(--acc)
    border-color: transparent

.filters__count
  font-size: 0.62rem
  font-variant-numeric: tabular-nums
  opacity: 0.6

.swap-enter-active
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)

.swap-leave-active
  transition: opacity 0.18s ease

.swap-enter-from
  opacity: 0
  transform: translateY(10px)

.swap-leave-to
  opacity: 0
</style>
