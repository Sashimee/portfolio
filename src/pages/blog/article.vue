<template>
  <q-page class="article">
    <div class="article__progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true"></div>

    <section class="section container container--narrow">
      <q-btn
        class="app-btn app-btn--quiet article__back"
        no-caps
        flat
        icon="arrow_back"
        to="/blog"
        :label="$t('blogPost1.back')"
      />

      <p class="overline">{{ $t('blog.reading_time', { minutes }) }}</p>
      <h1 class="title-xl reveal" v-html="$t('blogPost1.title')"></h1>
      <p class="lead reveal" style="--d: 0.06s" v-html="$t('blogPost1.title2')"></p>

      <figure class="article__cover reveal" style="--d: 0.1s">
        <button type="button" class="article__zoom" :aria-label="$t('blog.zoom')" @click="imageDialog = true">
          <img :src="cover" :alt="$t('blogPost1.title')" loading="lazy" decoding="async" />
          <q-icon name="fullscreen" size="24px" />
        </button>
      </figure>

      <div class="prose article__prose">
        <section v-for="(item, index) in sections" :key="index" class="article__section">
          <h2 v-html="item.title"></h2>
          <p v-for="(paragraph, p) in item.paragraphs" :key="p" v-html="paragraph"></p>
          <img
            v-if="item.img"
            class="article__illustration"
            :src="`/screenshots/article_one/${item.img}.webp`"
            :alt="stripTags(item.title)"
            loading="lazy"
            decoding="async"
          />
        </section>
      </div>

      <aside class="card card--pad article__newsletter">
        <h2 class="title-md">{{ $t('blogPost1.incentive') }}</h2>

        <div v-if="loading" class="article__loading">
          <q-spinner-pie color="primary" size="2em" />
        </div>

        <q-form v-else class="article__form" @submit="onSubmit" @reset="onReset">
          <q-input
            v-model="email"
            outlined
            type="email"
            lazy-rules
            :label="$t('contact.email')"
            :rules="[val => !!val || $t('contact.missing_email'), isValidEmail]"
          />
          <div class="cluster">
            <q-btn class="app-btn app-btn--primary" no-caps unelevated type="submit" :label="$t('contact.submit')" />
            <q-btn class="app-btn app-btn--quiet" no-caps flat type="reset" :label="$t('contact.reset')" />
          </div>
        </q-form>

        <p class="muted article__disclaimer">
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
      </aside>
    </section>

    <q-dialog v-model="imageDialog">
      <img class="article__lightbox" :src="cover" :alt="$t('blogPost1.title')" @click="imageDialog = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { api } from '@/boot/axios'
import { usePageMeta } from '@/composables/use-page-meta'
import { trackEvent } from '@/utils/analytics'
import { isValidEmail } from '@/utils/validation'
import cover from '@/assets/gc_info_fr.webp'

const WORDS_PER_MINUTE = 200

export default {
  name: 'BlogArticle',
  setup() {
    usePageMeta({
      titleKey: 'blogPost1.title',
      descriptionKey: 'seo.blog.description',
      path: '/blog/article'
    })
  },
  data() {
    return {
      cover,
      imageDialog: false,
      email: null,
      loading: false,
      progress: 0
    }
  },
  computed: {
    /**
     * $t() renvoie une chaîne : sur un message tableau il ne rendait rien.
     * $tm() est l'API prévue pour les messages structurés.
     */
    sections() {
      const sections = this.$tm('blogPost1.sections')
      return Array.isArray(sections) ? sections : []
    },
    minutes() {
      const words = this.sections
        .flatMap(section => section.paragraphs || [])
        .join(' ')
        .split(/\s+/)
        .filter(Boolean).length

      return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
    }
  },
  methods: {
    stripTags(value) {
      return String(value).replace(/<[^>]*>/g, '')
    },
    isValidEmail() {
      return isValidEmail(this.email) || this.$t('contact.invalid_email')
    },
    onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      this.progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0
    },
    async onSubmit() {
      this.loading = true

      try {
        await this.$recaptchaLoaded()
        const token = await this.$recaptcha('submit')

        await api.post('/mail', {
          name: "Une personne souhaite s'inscrire à la newsletter",
          message: "Elle est d'accord pour que tu conserves les données jusqu'à demande contraire",
          email: this.email,
          token
        })

        trackEvent('newsletter_signup')
        this.onReset()
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: this.$t('contact.sent')
        })
      } catch (error) {
        trackEvent('newsletter_signup_failed')
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
      this.email = null
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
// Barre de progression de lecture, collée sous l'en-tête
.article__progress
  position: fixed
  top: var(--header-height)
  left: 0
  right: 0
  z-index: 2000
  height: 2px
  background: var(--gradient)
  transform-origin: 0 50%
  will-change: transform

.article__back
  margin-bottom: 1.5rem
  margin-left: -0.75rem

.article .title-xl
  margin-bottom: 1rem

.article__cover
  margin: 2.5rem 0 0

.article__zoom
  position: relative
  display: block
  width: 100%
  padding: 0
  border: 1px solid var(--border)
  border-radius: var(--radius)
  background: var(--surface-2)
  overflow: hidden
  cursor: zoom-in

  // L'infographie est très haute : on la recadre et le zoom donne le reste.
  img
    display: block
    width: 100%
    max-height: 420px
    object-fit: cover
    object-position: top center
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)

  .q-icon
    position: absolute
    right: 0.75rem
    bottom: 0.75rem
    padding: 0.35rem
    border-radius: 50%
    color: var(--ink)
    background: var(--surface)
    opacity: 0
    transition: opacity 0.25s

  &:hover
    img
      transform: scale(1.02)

    .q-icon
      opacity: 1

.article__prose
  margin-top: 3rem

  h2
    margin: 3rem 0 1rem
    font-size: var(--step-3)

  p
    margin-bottom: 1.25rem

  // « Green Coding » est le fil rouge de l'article : on le marque à la couleur
  // de marque plutôt qu'au gras seul.
  strong
    color: var(--brand)

.article__section:first-child h2
  margin-top: 0

.article__illustration
  display: block
  width: 100%
  max-height: 180px
  object-fit: contain
  margin: 2.5rem 0
  opacity: 0.9

.article__newsletter
  margin-top: 4rem

  h2
    margin: 0 0 1.25rem

.article__form
  display: flex
  flex-direction: column
  gap: 0.5rem
  max-width: 26rem

.article__loading
  padding: 1.5rem 0

.article__disclaimer
  margin: 1.25rem 0 0
  font-size: 0.8rem

.article__lightbox
  max-width: 92vw
  max-height: 92vh
  border-radius: var(--radius)
  cursor: zoom-out
</style>
