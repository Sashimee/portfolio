<template>
  <q-header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="container site-header__bar">
      <router-link to="/" class="brand" :aria-label="$t('layout.home')">
        <span class="brand__mark" aria-hidden="true">AB</span>
        <span class="brand__name">Alex Baskewitsch<span class="brand__dot">.</span></span>
      </router-link>

      <nav class="nav gt-sm" :aria-label="$t('layout.menu')">
        <router-link
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="nav__link"
          :class="{ 'is-active': isActive(item) }"
        >
          {{ $t(item.labelKey) }}
        </router-link>
      </nav>

      <div class="site-header__actions">
        <q-btn
          class="icon-btn"
          flat
          round
          dense
          :icon="darkMode ? 'light_mode' : 'dark_mode'"
          :aria-label="$t('layout.theme')"
          @click="toggleDark"
        />

        <q-btn-dropdown
          class="lang-btn gt-sm"
          flat
          dense
          no-caps
          unelevated
          :label="locale.toUpperCase()"
          :aria-label="$t('layout.language')"
          dropdown-icon="expand_more"
        >
          <q-list dense>
            <q-item
              v-for="option in localeOptions"
              :key="option.value"
              v-close-popup
              clickable
              :active="option.value === locale"
              active-class="lang-btn__active"
              @click="pickLocale(option.value)"
            >
              <q-item-section>{{ option.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn
          class="icon-btn lt-md"
          flat
          round
          dense
          icon="menu"
          :aria-label="$t('layout.menu')"
          @click="drawer = true"
        />
      </div>
    </div>
  </q-header>

  <!-- Le tiroir est un frère de l'en-tête : imbriqué dedans, le backdrop-filter
       du header créerait un bloc conteneur et casserait son position: fixed. -->
  <q-drawer v-model="drawer" side="right" overlay behavior="mobile" :width="320" class="site-drawer">
    <div class="site-drawer__inner">
      <div class="site-drawer__top">
        <span class="eyebrow">{{ $t('layout.menu') }}</span>
        <q-btn flat round dense icon="close" :aria-label="$t('layout.close')" @click="drawer = false" />
      </div>

      <nav class="site-drawer__nav" :aria-label="$t('layout.menu')">
        <router-link
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="site-drawer__link"
          :class="{ 'is-active': isActive(item) }"
          @click="drawer = false"
        >
          <q-icon :name="item.icon" size="18px" />
          {{ $t(item.labelKey) }}
        </router-link>
      </nav>

      <div class="site-drawer__foot">
        <div class="segmented" role="group" :aria-label="$t('layout.language')">
          <button
            v-for="option in localeOptions"
            :key="option.value"
            type="button"
            class="segmented__item"
            :class="{ 'is-active': option.value === locale }"
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
            <q-icon :name="link.icon" size="18px" />
          </a>
        </div>
      </div>
    </div>
  </q-drawer>
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
      drawer: false,
      scrolled: false,
      darkMode: Dark.isActive,
      locale: currentLocale(),
      socialLinks,
      navigation: [
        { to: '/', labelKey: 'layout.home', icon: 'fas fa-house', exact: true },
        { to: '/about', labelKey: 'layout.about', icon: 'fas fa-user' },
        { to: '/projects', labelKey: 'layout.projects', icon: 'fas fa-layer-group' },
        { to: '/blog', labelKey: 'layout.blog', icon: 'fas fa-book-open' },
        { to: '/contact', labelKey: 'layout.contact', icon: 'fas fa-paper-plane' }
      ],
      localeOptions: AVAILABLE_LOCALES.map(value => ({ value, label: LOCALE_LABELS[value] || value }))
    }
  },
  methods: {
    isActive(item) {
      const path = this.$route.path
      return item.exact ? path === item.to : path.startsWith(item.to)
    },
    pickLocale(value) {
      this.locale = setLocale(value)
      this.drawer = false
    },
    toggleDark() {
      this.darkMode = !this.darkMode
      this.$q.dark.set(this.darkMode)
      setStoredDark(this.darkMode)
      syncAddressbarColor()
    },
    onScroll() {
      this.scrolled = window.scrollY > 8
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.onScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="sass">
.site-header
  background: var(--header-bg)
  color: var(--ink)
  backdrop-filter: saturate(180%) blur(14px)
  -webkit-backdrop-filter: saturate(180%) blur(14px)
  border-bottom: 1px solid transparent
  transition: border-color 0.3s, box-shadow 0.3s

  &.is-scrolled
    border-bottom-color: var(--border)
    box-shadow: var(--shadow-sm)

.site-header__bar
  display: flex
  align-items: center
  gap: 1rem
  min-height: var(--header-height)

.site-header__actions
  display: flex
  align-items: center
  gap: 0.35rem
  margin-left: auto

.brand
  display: inline-flex
  align-items: center
  gap: 0.6rem
  color: var(--ink)
  text-decoration: none
  font-family: var(--font-display)
  font-weight: 600
  letter-spacing: -0.01em

.brand__name
  font-size: 0.98rem

  @media (max-width: 420px)
    display: none

.brand__dot
  color: var(--brand-vivid)

.nav
  display: flex
  align-items: center
  gap: 0.15rem
  margin-inline: auto
  padding: 0.25rem
  border: 1px solid var(--border)
  border-radius: var(--radius-pill)
  background: var(--surface)
  box-shadow: var(--shadow-sm)

.nav__link
  position: relative
  padding: 0.45rem 0.95rem
  border-radius: var(--radius-pill)
  font-size: 0.9rem
  font-weight: 500
  color: var(--ink-2)
  text-decoration: none
  transition: color 0.25s, background 0.25s

  &:hover
    color: var(--ink)
    background: var(--surface-2)

  &.is-active
    color: var(--brand-on)
    background: var(--brand)

.icon-btn.q-btn
  color: var(--ink-2)

  &:hover
    color: var(--brand)

.lang-btn.q-btn
  font-weight: 600
  font-size: 0.8rem
  letter-spacing: 0.04em
  color: var(--ink-2)
  border: 1px solid var(--border)
  border-radius: var(--radius-pill)
  padding: 0.15rem 0.3rem 0.15rem 0.7rem

.lang-btn__active
  color: var(--brand)
  font-weight: 600

.site-drawer
  background: var(--bg)
  border-left: 1px solid var(--border)

.site-drawer__inner
  display: flex
  flex-direction: column
  gap: 2rem
  height: 100%
  padding: 1.25rem
  background: var(--bg)
  color: var(--ink)

.site-drawer__top
  display: flex
  align-items: center
  justify-content: space-between

  .eyebrow
    margin: 0

.site-drawer__nav
  display: flex
  flex-direction: column
  gap: 0.25rem

.site-drawer__link
  display: flex
  align-items: center
  gap: 0.75rem
  padding: 0.8rem 0.9rem
  border-radius: var(--radius-sm)
  font-family: var(--font-display)
  font-size: 1.15rem
  font-weight: 500
  color: var(--ink)
  text-decoration: none

  .q-icon
    color: var(--ink-3)

  &.is-active
    background: var(--brand-soft)
    color: var(--brand)

    .q-icon
      color: var(--brand)

.site-drawer__foot
  display: flex
  align-items: center
  justify-content: space-between
  gap: 1rem
  margin-top: auto

.segmented
  display: inline-flex
  padding: 3px
  border: 1px solid var(--border)
  border-radius: var(--radius-pill)
  background: var(--surface)

.segmented__item
  padding: 0.35rem 0.9rem
  border: 0
  border-radius: var(--radius-pill)
  background: transparent
  color: var(--ink-2)
  font: inherit
  font-size: 0.8rem
  font-weight: 600
  cursor: pointer

  &.is-active
    color: var(--brand-on)
    background: var(--brand)

</style>
