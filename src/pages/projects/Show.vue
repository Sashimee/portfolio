<template>
  <q-page v-if="project" class="preview">
    <section class="section--tight container">
      <q-btn
        class="app-btn app-btn--quiet preview__back"
        no-caps
        flat
        icon="arrow_back"
        to="/projects"
        :label="$t('projects.back')"
      />

      <div class="preview__head">
        <div>
          <p class="eyebrow">{{ $t('projects.preview') }}</p>
          <h1 class="title-lg">{{ project.name }}</h1>
        </div>
        <q-btn
          class="app-btn app-btn--ghost"
          no-caps
          unelevated
          type="a"
          :href="source"
          target="_blank"
          rel="noopener"
          icon-right="north_east"
          :label="$t('projects.open')"
        />
      </div>

      <!-- Faux chrome de navigateur : le rendu d'une démo statique est plus
           lisible quand on voit tout de suite que c'est un site dans le site. -->
      <div class="preview__frame">
        <div class="preview__bar">
          <span class="preview__dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="preview__url">{{ source }}</span>
        </div>
        <iframe :src="source" :title="project.name" loading="lazy"></iframe>
      </div>
    </section>
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePageMeta } from '@/composables/use-page-meta'
import projectsData from '@/data/projects'

export default {
  name: 'PageShowProject',
  setup() {
    const route = useRoute()
    // The route guard in src/router/routes.js already rejected unknown
    // shortcodes, so there is always a match here.
    const project = computed(() =>
      projectsData.find(p => p.target === 'internal' && p.link === route.params.shortcode)
    )

    usePageMeta({
      title: () => project.value.name,
      descriptionKey: 'seo.project.description',
      path: () => route.path,
      image: () => '/screenshots/' + project.value.img + '.webp'
    })

    return {
      project,
      source: computed(() => `/projects_folder/${project.value.link}/index.html`)
    }
  }
}
</script>

<style lang="sass">
.preview__back
  margin-bottom: 1.5rem
  margin-left: -0.5rem

  .q-btn__content
    justify-content: flex-start

.preview__head
  display: flex
  flex-wrap: wrap
  align-items: flex-end
  justify-content: space-between
  gap: 1rem
  padding-bottom: clamp(1.25rem, 2.5vw, 2rem)
  border-bottom: var(--hairline) solid var(--border-strong)
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem)

  .eyebrow
    margin-bottom: 0.75rem

.preview__frame
  overflow: hidden
  border: var(--hairline) solid var(--border-strong)
  border-radius: var(--radius)
  background: var(--surface)

  iframe
    display: block
    width: 100%
    height: min(78vh, 900px)
    border: 0
    background: #fff

.preview__bar
  display: flex
  align-items: center
  gap: 0.75rem
  padding: 0.65rem 0.9rem
  border-bottom: var(--hairline) solid var(--border)
  background: var(--surface-2)

.preview__dots
  display: inline-flex
  gap: 0.35rem

  i
    width: 9px
    height: 9px
    border-radius: 50%
    border: var(--hairline) solid var(--border-strong)

.preview__url
  font-family: var(--font-mono)
  font-size: 0.72rem
  letter-spacing: 0.02em
  color: var(--ink-3)
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
</style>
