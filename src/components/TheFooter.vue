<template>
  <footer class="site-footer">
    <div class="container site-footer__grid">
      <div class="site-footer__brand">
        <span class="brand__mark" aria-hidden="true">AB</span>
        <p class="site-footer__tagline">{{ $t('footer.tagline') }}</p>
        <div class="cluster">
          <a
            v-for="link in socialLinks"
            :key="link.id"
            class="icon-link"
            :href="link.url"
            target="_blank"
            rel="noopener"
            :aria-label="link.label"
          >
            <q-icon :name="link.icon" size="18px" />
          </a>
        </div>
      </div>

      <nav class="site-footer__col" :aria-label="$t('footer.navigate')">
        <h2 class="overline">{{ $t('footer.navigate') }}</h2>
        <router-link to="/">{{ $t('layout.home') }}</router-link>
        <router-link to="/about">{{ $t('layout.about') }}</router-link>
        <router-link to="/projects">{{ $t('layout.projects') }}</router-link>
        <router-link to="/blog">{{ $t('layout.blog') }}</router-link>
        <router-link to="/contact">{{ $t('layout.contact') }}</router-link>
      </nav>

      <div class="site-footer__col">
        <h2 class="overline">{{ $t('footer.elsewhere') }}</h2>
        <a v-for="link in socialLinks" :key="link.id" :href="link.url" target="_blank" rel="noopener">
          {{ link.label }} <span class="muted">{{ link.handle }}</span>
        </a>
        <button type="button" class="link-button" @click="$emit('open-legal')">
          {{ $t('footer.legal') }}
        </button>
      </div>
    </div>

    <div class="container site-footer__bottom">
      <p>© 2021-{{ currentYear }} — Alex Baskewitsch</p>
      <p class="muted">{{ $t('footer.built') }}</p>
    </div>
  </footer>
</template>

<script>
import socialLinks from '@/data/links'

export default {
  name: 'TheFooter',
  emits: ['open-legal'],
  data() {
    return { socialLinks }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="sass">
.site-footer
  margin-top: clamp(3rem, 8vw, 7rem)
  padding-top: clamp(2.5rem, 5vw, 4rem)
  border-top: 1px solid var(--border)
  background: var(--bg-tint)
  color: var(--ink-2)
  font-size: 0.92rem

.site-footer__grid
  display: grid
  gap: 2.5rem
  grid-template-columns: minmax(0, 1.6fr) repeat(2, minmax(0, 1fr))
  padding-bottom: 2.5rem

  @media (max-width: 720px)
    grid-template-columns: 1fr

.site-footer__brand
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 1rem

.site-footer__tagline
  max-width: 34ch
  margin: 0

.site-footer__col
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 0.55rem

  a
    color: var(--ink-2)
    text-decoration: none
    transition: color 0.2s

    &:hover
      color: var(--brand)

.site-footer__bottom
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  gap: 0.5rem
  padding-block: 1.25rem
  border-top: 1px solid var(--border)
  font-size: 0.82rem

  p
    margin: 0
</style>
