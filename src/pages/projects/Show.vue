<template>
  <q-page v-if="project" class="preview">
    <section class="section--tight container">
      <div class="preview__head">
        <q-btn
          class="app-btn app-btn--quiet preview__back"
          no-caps
          flat
          icon="arrow_back"
          to="/projects"
          :label="$t('projects.back')"
        />
        <div>
          <p class="overline">{{ $t('projects.preview') }}</p>
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
      <div class="card preview__frame">
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
.preview__head
  display: flex
  flex-wrap: wrap
  align-items: center
  gap: 1rem
  margin-bottom: 1.5rem

  .overline
    margin-bottom: 0.25rem

  .app-btn--ghost
    margin-left: auto

// Le bouton retour occupe sa propre ligne : on recale son contenu à gauche.
.preview__back
  flex-basis: 100%
  margin-left: -0.75rem

  .q-btn__content
    justify-content: flex-start

.preview__frame
  overflow: hidden
  padding: 0

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
  padding: 0.6rem 0.9rem
  border-bottom: 1px solid var(--border)
  background: var(--surface-2)

.preview__dots
  display: inline-flex
  gap: 0.3rem

  i
    width: 10px
    height: 10px
    border-radius: 50%
    background: var(--border-strong)

.preview__url
  font-family: var(--font-mono)
  font-size: 0.75rem
  color: var(--ink-3)
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
</style>
