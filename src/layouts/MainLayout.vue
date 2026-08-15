<template>
  <q-layout view="hHh lpR fff">
    <a class="skip-link" href="#main">{{ $t('layout.skip') }}</a>

    <the-header />

    <q-page-container id="main">
      <!-- vue-router 5 requires the slot form: <router-view> can no longer sit
           inside <transition> directly. -->
      <router-view v-slot="{ Component, route }">
        <transition enter-active-class="page-fade-enter-active" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>

      <the-footer @open-legal="legalDialog = true" />
    </q-page-container>

    <cookie-banner
      :model-value="bannerVisible"
      @accept-all="acceptAll"
      @accept-essential="acceptFunctional"
      @open-legal="legalDialog = true"
    />

    <legal-dialog
      v-model="legalDialog"
      :functional="functionalCookies"
      :tracking="trackingCookies"
      @update:tracking="setTracking"
      @revoke="revokeConsent"
    />
  </q-layout>
</template>

<script>
import CookieBanner from '@/components/CookieBanner.vue'
import LegalDialog from '@/components/LegalDialog.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
import { clearAnalytics, hasTrackingConsent, loadAnalytics, trackPageview } from '@/utils/analytics'

const CONSENT_COOKIE = 'accepted_tracking_cookies'
const COOKIE_OPTIONS = { expires: 365, sameSite: 'Strict', path: '/' }

export default {
  name: 'MainLayout',
  components: { CookieBanner, LegalDialog, TheFooter, TheHeader },
  data() {
    return {
      bannerVisible: false,
      legalDialog: false,
      trackingCookies: false,
      functionalCookies: false
    }
  },
  methods: {
    setConsent(accepted) {
      this.$q.cookies.set(CONSENT_COOKIE, accepted, COOKIE_OPTIONS)
    },
    setTracking(enabled) {
      this.trackingCookies = enabled
      this.setConsent(enabled)

      if (enabled) {
        loadAnalytics()
        trackPageview(this.$route.fullPath)
      } else {
        clearAnalytics()
      }
    },
    /** Revoking everything drops the cookie and brings the banner back. */
    revokeConsent() {
      this.$q.cookies.remove(CONSENT_COOKIE, { path: '/' })
      this.functionalCookies = false
      this.trackingCookies = false
      clearAnalytics()
      this.legalDialog = false
      this.bannerVisible = true
    },
    acceptAll() {
      this.functionalCookies = true
      this.bannerVisible = false
      this.setTracking(true)
    },
    acceptFunctional() {
      this.functionalCookies = true
      this.trackingCookies = false
      this.bannerVisible = false
      this.setConsent(false)
    }
  },
  mounted() {
    if (this.$q.cookies.has(CONSENT_COOKIE)) {
      this.functionalCookies = true
      this.trackingCookies = hasTrackingConsent()
    } else {
      this.bannerVisible = true
    }
  }
}
</script>
