<template>
  <q-header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="container site-header__bar">
      <router-link to="/" class="brand" :aria-label="$t('layout.home')">
        <span class="brand__mark" aria-hidden="true">AB</span>
        <span class="brand__name">Alex Baskewitsch</span>
      </router-link>

      <nav class="nav gt-sm" :aria-label="$t('layout.menu')">
        <router-link
          v-for="(item, position) in navigation"
          :key="item.to"
          :to="item.to"
          class="nav__link"
          :class="{ 'is-active': isActive(item) }"
        >
          <span class="nav__num">{{ String(position + 1).padStart(2, '0') }}</span>
          {{ $t(item.labelKey) }}
        </router-link>
      </nav>

      <div class="site-header__actions">
        <!-- Deux langues seulement : un sélecteur segmenté est plus direct
             qu'un menu déroulant, et se lit d'un coup d'œil. -->
        <div class="segmented gt-sm" role="group" :aria-label="$t('layout.language')">
          <button
            v-for="option in localeOptions"
            :key="option.value"
            type="button"
            class="segmented__item"
            :class="{ 'is-active': option.value === locale }"
            :aria-pressed="option.value === locale"
            :title="option.label"
            @click="pickLocale(option.value)"
          >
            {{ option.value.toUpperCase() }}
          </button>
        </div>

        <button
          type="button"
          class="theme-toggle"
          :aria-label="$t('layout.theme')"
          :aria-pressed="darkMode"
          @click="toggleDark"
        >
          <q-icon :name="darkMode ? 'light_mode' : 'dark_mode'" size="16px" />
        </button>

        <button type="button" class="menu-toggle lt-md" :aria-expanded="menu" @click="menu = true">
          {{ $t('layout.menu') }}
          <span class="menu-toggle__bars" aria-hidden="true"><i></i><i></i></span>
        </button>
      </div>
    </div>
  </q-header>

  <!-- Le panneau est un frère de l'en-tête : imbriqué dedans, le
       backdrop-filter du header créerait un bloc conteneur et casserait son
       position: fixed. -->
  <transition name="overlay">
    <div
      v-if="menu"
      class="menu-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="$t('layout.menu')"
    >
      <div class="container menu-overlay__top">
        <span class="mono muted">{{ $t('layout.menu') }}</span>
        <button type="button" class="menu-toggle" :aria-label="$t('layout.close')" @click="menu = false">
          {{ $t('layout.close') }}
          <span class="menu-toggle__bars is-close" aria-hidden="true"><i></i><i></i></span>
        </button>
      </div>

      <nav class="container menu-overlay__nav" :aria-label="$t('layout.menu')">
        <router-link
          v-for="(item, position) in navigation"
          :key="item.to"
          :to="item.to"
          class="menu-overlay__link"
          :class="{ 'is-active': isActive(item) }"
          :style="`--d: ${0.05 + position * 0.05}s`"
          @click="menu = false"
        >
          <span class="menu-overlay__num">{{ String(position + 1).padStart(2, '0') }}</span>
          {{ $t(item.labelKey) }}
        </router-link>
      </nav>

      <div class="container menu-overlay__foot">
        <div class="segmented" role="group" :aria-label="$t('layout.language')">
          <button
            v-for="option in localeOptions"
            :key="option.value"
            type="button"
            class="segmented__item"
            :class="{ 'is-active': option.value === locale }"
            :aria-pressed="option.value === locale"
            @click="pickLocale(option.value)"
          >
            {{ option.value.toUpperCase() }}
          </button>
        </div>

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
    </div>
  </transition>
</template>

<script>
import { Dark } from 'quasar'
import { syncAddressbarColor } from '@/boot/addressbar-color'
import { currentLocale, setLocale } from '@/boot/i18n'
import { AVAILABLE_LOCALES, setStoredDark } from '@/utils/preferences'
import socialLinks from '@/data/links'

const LOCALE_LABELS = { en: 'English', fr: 'Français' }

export default {
  name: 'TheHeader',
  data() {
    return {
      menu: false,
      scrolled: false,
      darkMode: Dark.isActive,
      locale: currentLocale(),
      socialLinks,
      navigation: [
        { to: '/', labelKey: 'layout.home', exact: true },
        { to: '/about', labelKey: 'layout.about' },
        { to: '/projects', labelKey: 'layout.projects' },
        { to: '/blog', labelKey: 'layout.blog' },
        { to: '/contact', labelKey: 'layout.contact' }
      ],
      localeOptions: AVAILABLE_LOCALES.map(value => ({ value, label: LOCALE_LABELS[value] || value }))
    }
  },
  watch: {
    // Le panneau couvre l'écran : la page ne doit pas défiler derrière lui.
    menu(open) {
      document.body.classList.toggle('is-locked', open)
    }
  },
  methods: {
    isActive(item) {
      const path = this.$route.path
      return item.exact ? path === item.to : path.startsWith(item.to)
    },
    pickLocale(value) {
      this.locale = setLocale(value)
      this.menu = false
    },
    toggleDark() {
      this.darkMode = !this.darkMode
      this.$q.dark.set(this.darkMode)
      setStoredDark(this.darkMode)
      syncAddressbarColor()
    },
    onScroll() {
      this.scrolled = window.scrollY > 8
    },
    onKeydown(event) {
      if (event.key === 'Escape') this.menu = false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    window.addEventListener('keydown', this.onKeydown)
    this.onScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('keydown', this.onKeydown)
    document.body.classList.remove('is-locked')
  }
}
</script>

<style lang="sass">
body.is-locked
  overflow: hidden

.site-header
  background: var(--header-bg)
  color: var(--ink)
  backdrop-filter: saturate(160%) blur(12px)
  -webkit-backdrop-filter: saturate(160%) blur(12px)
  border-bottom: var(--hairline) solid transparent
  transition: border-color 0.4s

  &.is-scrolled
    border-bottom-color: var(--border)

.site-header__bar
  display: flex
  align-items: center
  gap: 1rem
  min-height: var(--header-height)

.site-header__actions
  display: flex
  align-items: center
  gap: 0.6rem
  margin-left: auto

.brand
  display: inline-flex
  align-items: center
  gap: 0.65rem
  color: var(--ink)
  text-decoration: none
  font-family: var(--font-display)
  font-weight: 600
  letter-spacing: -0.025em

.brand__name
  font-size: 1rem

  @media (max-width: 420px)
    display: none

// Navigation : pas de pilule, des libellés en monospace numérotés, soulignés
// à l'accent quand ils sont actifs.
.nav
  display: flex
  align-items: center
  gap: 0.35rem
  margin-inline: auto

.nav__link
  position: relative
  display: inline-flex
  align-items: baseline
  gap: 0.45rem
  padding: 0.5rem 0.8rem
  font-family: var(--font-mono)
  font-size: 0.75rem
  font-weight: 500
  letter-spacing: 0.1em
  text-transform: uppercase
  color: var(--ink-2)
  text-decoration: none
  transition: color 0.3s

  &::after
    content: ''
    position: absolute
    left: 0.8rem
    right: 0.8rem
    bottom: 0.3rem
    height: 2px
    background: var(--acc)
    transform: scaleX(0)
    transform-origin: 0 50%
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)

  &:hover
    color: var(--ink)

  &:hover::after,
  &.is-active::after
    transform: scaleX(1)

  &.is-active
    color: var(--ink)

.nav__num
  font-size: 0.62rem
  color: var(--ink-3)

.theme-toggle
  display: grid
  place-items: center
  width: 34px
  height: 34px
  padding: 0
  border: var(--hairline) solid var(--border)
  border-radius: 50%
  background: transparent
  color: var(--ink-2)
  cursor: pointer
  transition: color 0.3s, background 0.3s, border-color 0.3s

  &:hover
    color: var(--acc-ink)
    background: var(--acc)
    border-color: transparent

.segmented
  display: inline-flex
  padding: 2px
  border: var(--hairline) solid var(--border)
  border-radius: var(--radius-pill)

.segmented__item
  padding: 0.3rem 0.7rem
  border: 0
  border-radius: var(--radius-pill)
  background: transparent
  color: var(--ink-3)
  font-family: var(--font-mono)
  font-size: 0.7rem
  font-weight: 500
  letter-spacing: 0.08em
  cursor: pointer
  transition: color 0.3s, background 0.3s

  &.is-active
    color: var(--acc-ink)
    background: var(--acc)

.menu-toggle
  display: inline-flex
  align-items: center
  gap: 0.6rem
  padding: 0.45rem 0.5rem 0.45rem 0.85rem
  border: 0
  background: transparent
  color: var(--ink)
  font-family: var(--font-mono)
  font-size: 0.72rem
  font-weight: 500
  letter-spacing: 0.12em
  text-transform: uppercase
  cursor: pointer

.menu-toggle__bars
  display: grid
  gap: 4px
  width: 20px

  i
    height: 1.5px
    background: currentColor
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)

  &.is-close i
    &:first-child
      transform: translateY(2.75px) rotate(45deg)

    &:last-child
      transform: translateY(-2.75px) rotate(-45deg)

.menu-toggle:hover .menu-toggle__bars:not(.is-close) i:last-child
  transform: translateX(4px)

// Panneau plein écran : la navigation devient l'écran, en très grand.
.menu-overlay
  position: fixed
  inset: 0
  z-index: 7000
  display: flex
  flex-direction: column
  padding-block: 1.1rem clamp(1.5rem, 5vh, 3rem)
  background: var(--bg)
  color: var(--ink)
  overflow-y: auto

.menu-overlay__top
  display: flex
  align-items: center
  justify-content: space-between
  padding-bottom: 1.1rem
  border-bottom: var(--hairline) solid var(--border)

.menu-overlay__nav
  display: flex
  flex-direction: column
  margin-top: auto
  margin-bottom: auto
  padding-block: 2rem

.menu-overlay__link
  display: flex
  align-items: baseline
  gap: 1rem
  padding-block: clamp(0.5rem, 1.6vh, 0.9rem)
  font-family: var(--font-display)
  font-size: clamp(2.25rem, 12vw, 4.5rem)
  font-weight: 500
  letter-spacing: -0.045em
  line-height: 1
  color: var(--ink)
  text-decoration: none
  animation: line-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both
  animation-delay: var(--d, 0s)

  &.is-active
    color: var(--ink-3)

  &:active
    color: var(--brand)

.menu-overlay__num
  font-family: var(--font-mono)
  font-size: 0.75rem
  letter-spacing: 0.1em
  color: var(--ink-3)

.menu-overlay__foot
  display: flex
  align-items: center
  justify-content: space-between
  gap: 1rem
  padding-top: 1.25rem
  border-top: var(--hairline) solid var(--border)

.overlay-enter-active,
.overlay-leave-active
  transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)

.overlay-enter-from,
.overlay-leave-to
  opacity: 0
  transform: translate3d(0, -1.5rem, 0)
</style>
