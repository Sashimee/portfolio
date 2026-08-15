<template>
  <q-page class="contact">
    <section class="section container">
      <div class="aurora" aria-hidden="true"></div>

      <div class="contact__grid">
        <div class="contact__intro reveal">
          <p class="eyebrow">{{ $t('contact.eyebrow') }}</p>
          <h1 class="title-xl">{{ $t('contact.title') }}</h1>
          <p class="lead">{{ $t('contact.lead') }}</p>

          <ul class="contact__links">
            <li v-for="link in socialLinks" :key="link.id">
              <a class="chip-link" :href="link.url" target="_blank" rel="noopener">
                <q-icon :name="link.icon" size="15px" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="card card--pad contact__card reveal" style="--d: 0.08s">
          <div v-if="loading" class="contact__loading">
            <q-spinner-pie color="primary" size="2.5em" />
            <p class="muted">{{ $t('contact.sending') }}</p>
          </div>

          <q-form v-else class="contact__form" @submit="onSubmit" @reset="onReset">
            <q-input
              v-model="name"
              outlined
              autofocus
              lazy-rules
              :label="$t('contact.name')"
              :rules="[
                val => (val && val.length > 0) || $t('contact.please_type'),
                val => val.length < 1024 || $t('contact.name_long')
              ]"
            />

            <q-input
              v-model="email"
              outlined
              type="email"
              lazy-rules
              :label="$t('contact.email')"
              :rules="[val => !!val || $t('contact.missing_email'), isValidEmail]"
            />

            <q-input
              v-model="message"
              outlined
              type="textarea"
              lazy-rules
              autogrow
              :label="$t('contact.message')"
              :input-style="{ minHeight: '110px' }"
              :rules="[
                val => (val && val.length > 0) || $t('contact.please_type'),
                val => val.length < 5120 || val.length + '/5120'
              ]"
            />

            <div class="cluster contact__actions">
              <q-btn
                class="app-btn app-btn--primary"
                no-caps
                unelevated
                type="submit"
                icon-right="send"
                :label="$t('contact.submit')"
              />
              <q-btn class="app-btn app-btn--quiet" no-caps flat type="reset" :label="$t('contact.reset')" />
            </div>

            <p class="muted contact__disclaimer">
              {{ $t('contact.disclaimer_start') }}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                {{ $t('contact.disclaimer_link_1') }}
              </a>
              {{ $t('contact.disclaimer_middle') }}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener">
                {{ $t('contact.disclaimer_link_2') }}
              </a>
              {{ $t('contact.disclaimer_end') }}
            </p>
          </q-form>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { api } from '@/boot/axios'
import { usePageMeta } from '@/composables/use-page-meta'
import socialLinks from '@/data/links'
import { trackEvent } from '@/utils/analytics'
import { isValidEmail } from '@/utils/validation'

export default {
  name: 'PageContact',
  setup() {
    usePageMeta({
      titleKey: 'seo.contact.title',
      descriptionKey: 'seo.contact.description',
      path: '/contact'
    })
  },
  data() {
    return {
      name: null,
      message: null,
      email: null,
      loading: false,
      socialLinks
    }
  },
  methods: {
    isValidEmail() {
      return isValidEmail(this.email) || this.$t('contact.invalid_email')
    },
    async onSubmit() {
      this.loading = true

      try {
        await this.$recaptchaLoaded()
        const token = await this.$recaptcha('submit')

        await api.post('/mail', {
          name: this.name,
          message: this.message,
          email: this.email,
          token
        })

        trackEvent('contact_message_sent')
        this.onReset()
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: this.$t('contact.sent')
        })
      } catch (error) {
        trackEvent('contact_message_failed')
        this.$q.notify({
          color: 'red-4',
          textColor: 'black',
          icon: 'cloud_off',
          message: this.$t('contact.not_sent')
        })
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    onReset() {
      this.name = null
      this.message = null
      this.email = null
    }
  }
}
</script>

<style lang="sass">
.contact .section
  position: relative
  display: flex
  align-items: center
  min-height: calc(100vh - var(--header-height) - 6rem)
  overflow: hidden

.contact__grid
  width: 100%
  position: relative
  z-index: 1
  display: grid
  gap: clamp(1.5rem, 4vw, 3.5rem)
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr)
  align-items: start

  @media (max-width: 900px)
    grid-template-columns: 1fr

.contact__intro
  .lead
    margin-bottom: 2rem

.contact__links
  display: flex
  flex-wrap: wrap
  gap: 0.6rem
  margin: 0
  padding: 0
  list-style: none

.contact__form
  display: flex
  flex-direction: column
  gap: 0.35rem

.contact__actions
  margin-top: 0.75rem

.contact__loading
  display: flex
  flex-direction: column
  align-items: center
  gap: 1rem
  padding: 3rem 0

.contact__disclaimer
  margin: 1.5rem 0 0
  font-size: 0.8rem
</style>
