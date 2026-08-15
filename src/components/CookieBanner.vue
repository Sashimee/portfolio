<template>
  <transition name="banner">
    <aside v-if="modelValue" class="cookie-banner" role="dialog" aria-modal="false" :aria-label="$t('consent.title')">
      <div class="cookie-banner__card card">
        <div class="cookie-banner__text">
          <h2 class="title-md">{{ $t('consent.title') }}</h2>
          <p class="muted">{{ $t('consent.body') }}</p>
          <button type="button" class="link-button" @click="$emit('open-legal')">
            {{ $t('consent.more') }}
          </button>
        </div>

        <div class="cookie-banner__actions">
          <q-btn
            class="app-btn app-btn--ghost"
            no-caps
            unelevated
            :label="$t('consent.essential')"
            @click="$emit('accept-essential')"
          />
          <q-btn
            class="app-btn app-btn--primary"
            no-caps
            unelevated
            :label="$t('consent.accept')"
            @click="$emit('accept-all')"
          />
        </div>
      </div>
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'CookieBanner',
  props: {
    modelValue: { type: Boolean, default: false }
  },
  emits: ['accept-all', 'accept-essential', 'open-legal']
}
</script>

<style lang="sass">
// Bandeau discret ancré en bas plutôt qu'une modale plein écran bloquante :
// le visiteur peut lire la page avant de choisir.
.cookie-banner
  position: fixed
  left: 0
  right: 0
  bottom: 0
  z-index: 3000
  padding: clamp(0.75rem, 2vw, 1.25rem)
  pointer-events: none

.cookie-banner__card
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  gap: 1.25rem
  max-width: var(--container)
  margin-inline: auto
  padding: 1.15rem 1.35rem
  pointer-events: auto
  border-radius: var(--radius)
  box-shadow: var(--shadow-lg)
  backdrop-filter: blur(10px)

.cookie-banner__text
  flex: 1 1 22rem

  h2
    margin: 0 0 0.35rem
    font-size: 1.05rem

  p
    margin: 0 0 0.35rem
    font-size: 0.9rem

.cookie-banner__actions
  display: flex
  flex-wrap: wrap
  gap: 0.6rem

.banner-enter-active,
.banner-leave-active
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s

.banner-enter-from,
.banner-leave-to
  opacity: 0
  transform: translateY(120%)
</style>
