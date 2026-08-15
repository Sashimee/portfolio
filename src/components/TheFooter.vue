<template>
  <footer class="site-footer">
    <!-- Appel à l'action commun à toutes les pages : le pied de page est le
         seul endroit où il n'a jamais besoin d'être répété dans le contenu. -->
    <section class="container site-footer__cta">
      <p class="eyebrow">{{ $t('footer.cta_eyebrow') }}</p>
      <!-- Le pied de page est toujours hors écran au chargement : l'entrée est
           déclenchée au scroll, pas au montage. -->
      <router-link to="/contact" class="site-footer__shout" data-reveal>
        <span>{{ $t('footer.cta') }}</span>
        <q-icon name="arrow_forward" />
      </router-link>
    </section>

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
            <q-icon :name="link.icon" size="16px" />
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
      <button type="button" class="link-button site-footer__top" @click="toTop">
        {{ $t('footer.top') }} ↑
      </button>
    </div>

    <!-- Signature : le nom en très grand, rogné par le bas de page. -->
    <p class="site-footer__wordmark" aria-hidden="true">Baskewitsch</p>
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
  },
  methods: {
    toTop() {
      const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    }
  }
}
</script>

<style lang="sass">
.site-footer
  position: relative
  overflow: hidden
  margin-top: clamp(4rem, 10vw, 9rem)
  border-top: var(--hairline) solid var(--border-strong)
  background: var(--bg-tint)
  color: var(--ink-2)
  font-size: 0.92rem

.site-footer__cta
  padding-block: clamp(3rem, 7vw, 6rem)

.site-footer__shout
  display: flex
  align-items: center
  gap: clamp(1rem, 3vw, 2.5rem)
  font-family: var(--font-display)
  font-size: var(--step-4)
  font-weight: 600
  letter-spacing: -0.045em
  line-height: 1
  color: var(--ink)
  text-decoration: none

  .q-icon
    flex-shrink: 0
    display: grid
    place-items: center
    width: clamp(2.75rem, 6vw, 4.5rem)
    height: clamp(2.75rem, 6vw, 4.5rem)
    font-size: clamp(1rem, 2vw, 1.5rem)
    border: var(--hairline) solid var(--border-strong)
    border-radius: 50%
    transition: color 0.4s, background 0.4s, border-color 0.4s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)

  &:hover .q-icon
    color: var(--acc-ink)
    background: var(--acc)
    border-color: transparent
    transform: translateX(0.5rem)

.site-footer__grid
  position: relative
  z-index: 1
  display: grid
  gap: 2.5rem
  grid-template-columns: minmax(0, 1.6fr) repeat(2, minmax(0, 1fr))
  padding-block: clamp(2rem, 4vw, 3rem)
  border-top: var(--hairline) solid var(--border)

  @media (max-width: 720px)
    grid-template-columns: 1fr

.site-footer__brand
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 1rem

.site-footer__tagline
  max-width: 32ch
  margin: 0

.site-footer__col
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 0.55rem

  a
    color: var(--ink-2)
    text-decoration: none
    transition: color 0.25s

    &:hover
      color: var(--ink)

.site-footer__bottom
  position: relative
  z-index: 1
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  gap: 0.75rem
  padding-block: 1.1rem
  border-top: var(--hairline) solid var(--border)
  font-family: var(--font-mono)
  font-size: 0.72rem
  letter-spacing: 0.06em

  p
    margin: 0

.site-footer__top
  font-family: inherit
  font-size: inherit
  letter-spacing: inherit
  text-decoration: none

// Rogné par le bas : seule la moitié haute des lettres reste visible.
.site-footer__wordmark
  position: relative
  z-index: 0
  margin: 0
  padding-inline: var(--gutter)
  font-family: var(--font-display)
  font-size: var(--step-6)
  font-weight: 700
  line-height: 0.72
  letter-spacing: -0.06em
  text-align: center
  white-space: nowrap
  color: transparent
  -webkit-text-stroke: 1px var(--border)
  user-select: none
</style>
