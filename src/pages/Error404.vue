<template>
  <q-page class="notfound">
    <div class="grid-guides" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
    </div>

    <div class="container notfound__inner">
      <p class="notfound__code" aria-hidden="true">404</p>

      <div class="notfound__text">
        <h1 class="title-lg">{{ $t('notFound.message') }}</h1>
        <p class="lead">{{ $t('notFound.hint') }}</p>

        <div class="cluster notfound__actions">
          <q-btn
            class="app-btn app-btn--primary"
            no-caps
            unelevated
            to="/"
            icon="arrow_back"
            :label="$t('notFound.home')"
          />
          <q-btn class="app-btn app-btn--ghost" no-caps unelevated to="/projects" :label="$t('buttons.projects')" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useRoute } from 'vue-router'
import { usePageMeta } from '@/composables/use-page-meta'

export default {
  name: 'ErrorNotFound',
  setup() {
    const route = useRoute()
    usePageMeta({
      titleKey: 'seo.notFound.title',
      descriptionKey: 'seo.notFound.description',
      path: () => route.path,
      noindex: true
    })
  }
}
</script>

<style lang="sass">
.notfound
  position: relative
  display: flex
  align-items: center
  overflow: hidden
  min-height: 78vh

.notfound__inner
  position: relative
  z-index: 1
  padding-block: clamp(3rem, 10vh, 6rem)

// Le code en contour : très grand, mais sans peser visuellement sur le
// message, qui reste la seule chose lisible d'un coup d'œil.
.notfound__code
  margin: 0 0 clamp(1.5rem, 4vw, 3rem)
  font-family: var(--font-display)
  font-size: var(--step-6)
  font-weight: 700
  line-height: 0.8
  letter-spacing: -0.06em
  color: transparent
  -webkit-text-stroke: 2px var(--border-strong)
  animation: line-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both

.notfound__text
  padding-top: clamp(1.25rem, 3vw, 2rem)
  border-top: var(--hairline) solid var(--border-strong)

.notfound__actions
  margin-top: 2rem
</style>
