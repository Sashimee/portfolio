<template>
  <q-page class="notfound">
    <div class="aurora" aria-hidden="true"></div>

    <div class="container notfound__inner">
      <p class="notfound__code text-gradient" aria-hidden="true">404</p>
      <h1 class="title-xl">{{ $t('notFound.message') }}</h1>
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
  min-height: 70vh

.notfound__inner
  position: relative
  z-index: 1
  padding-block: clamp(3rem, 10vh, 6rem)

.notfound__code
  margin: 0
  font-family: var(--font-display)
  font-size: clamp(6rem, 22vw, 14rem)
  font-weight: 700
  line-height: 0.9
  letter-spacing: -0.05em

.notfound__actions
  margin-top: 2rem
</style>
