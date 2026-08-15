<template>
  <q-page class="contact">
    <div class="grid-guides" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
    </div>

    <section class="section container contact__section">
      <div class="contact__grid">
        <div class="contact__intro">
          <p class="eyebrow">{{ $t('contact.eyebrow') }}</p>
          <h1 class="display contact__title">
            <span class="reveal-line"><span>{{ $t('contact.title') }}</span></span>
          </h1>
          <p class="lead" data-reveal style="--d: 0.15s">{{ $t('contact.lead') }}</p>

          <ul class="contact__links" data-reveal style="--d: 0.25s">
            <li v-for="link in socialLinks" :key="link.id">
              <a class="chip-link" :href="link.url" target="_blank" rel="noopener">
                <q-icon :name="link.icon" size="14px" />
                {{ link.label }}
                <span class="muted">{{ link.handle }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="contact__card" data-reveal style="--d: 0.1s">
          <div v-if="loading" class="contact__loading">
            <q-spinner-pie color="primary" size="2em" />
            <p class="mono muted">{{ $t('contact.sending') }}</p>
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
              :input-style="{ minHeight: '120px' }"
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
                icon-right="arrow_forward"
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
import { useReveal } from '@/composables/use-reveal'
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
    useReveal()
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
          color: 'positive',
          textColor: 'white',
          icon: 'cloud_done',
          message: this.$t('contact.sent')
        })
      } catch (error) {
        trackEvent('contact_message_failed')
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
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
.contact
  position: relative
  overflow: hidden

.contact__section
  position: relative
  z-index: 1

.contact__grid
  display: grid
  gap: clamp(2rem, 5vw, 5rem)
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr)
  align-items: start

  @media (max-width: 960px)
    grid-template-columns: 1fr

.contact__title
  max-width: 12ch
  margin-bottom: 1.5rem

.contact__links
  display: flex
  flex-wrap: wrap
  gap: 0.5rem
  margin: 2.5rem 0 0
  padding: 0
  list-style: none

  .muted
    font-size: 0.7rem

// Le formulaire est posé sur un filet, pas dans une boîte : moins d'encre,
// et il se fond dans la colonne éditoriale.
.contact__card
  padding-top: 1.5rem
  border-top: var(--hairline) solid var(--border-strong)

.contact__form
  display: flex
  flex-direction: column
  gap: 0.25rem

.contact__actions
  margin-top: 1rem

.contact__loading
  display: flex
  flex-direction: column
  align-items: center
  gap: 1rem
  padding: 3rem 0

.contact__disclaimer
  margin: 1.5rem 0 0
  font-size: 0.78rem
  line-height: 1.5
</style>
