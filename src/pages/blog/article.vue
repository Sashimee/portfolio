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
        :label="$t('blog.back')"
      />

      <p class="overline">{{ $t('blog.reading_time', { minutes }) }}</p>
      <h1 class="title-xl article__title" v-html="$t(`${post.key}.title`)"></h1>
      <p class="lead" data-reveal style="--d: 0.06s" v-html="$t(`${post.key}.title2`)"></p>

      <figure class="article__cover" data-reveal style="--d: 0.1s">
        <button type="button" class="article__zoom" :aria-label="$t('blog.zoom')" @click="imageDialog = true">
          <img :src="post.cover" :alt="$t(`${post.key}.title`)" loading="lazy" decoding="async" />
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
            :class="{ 'article__illustration--portrait': post.portrait }"
            :src="`/screenshots/${post.illustrations}/${item.img}.webp`"
            :alt="stripTags(item.title)"
            loading="lazy"
            decoding="async"
          />
        </section>
      </div>

      <aside class="article__newsletter">
        <h2 class="title-md">{{ $t('blog.incentive') }}</h2>

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
      <img class="article__lightbox" :src="post.cover" :alt="$t(`${post.key}.title`)" @click="imageDialog = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { api } from '@/boot/axios'
import { usePageMeta } from '@/composables/use-page-meta'
import { useReveal } from '@/composables/use-reveal'
import { trackEvent } from '@/utils/analytics'
import { isValidEmail } from '@/utils/validation'
import { readingTime } from '@/utils/reading-time'
import posts from '@/data/posts'

const stripTags = value => String(value).replace(/<[^>]*>/g, '')

export default {
  name: 'BlogArticle',
  setup() {
    const route = useRoute()
    const { t } = useI18n()

    // Le garde `beforeEnter` de la route a déjà refusé un slug inconnu : ici,
    // l'article existe forcément.
    const post = posts.find(entry => entry.slug === route.params.slug)

    usePageMeta({
      titleKey: `${post.key}.title`,
      // Le sous-titre porte du balisage (`<strong>`), que la page affiche mais
      // qu'une méta-description ne doit pas recopier telle quelle.
      description: () => stripTags(t(`${post.key}.title2`)),
      path: `/blog/${post.slug}`,
      image: post.cover
    })
    useReveal()

    return { post }
  },
  data() {
    return {
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
      const sections = this.$tm(`${this.post.key}.sections`)
      return Array.isArray(sections) ? sections : []
    },
    minutes() {
      return readingTime(this.sections)
    }
  },
  methods: {
    stripTags,
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
  /**
   * `beforeEnter` ne rejoue pas quand seul le paramètre change : d'un article
   * vers un slug inconnu, la route est la même et le garde ne voit rien. La
   * page se remonte bien (`:key="route.path"` dans MainLayout), mais sur un
   * article qui n'existe pas — d'où ce second garde, au niveau du composant.
   */
  beforeRouteUpdate(to) {
    return posts.some(post => post.slug === to.params.slug) ? true : '/404'
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
  background: var(--acc)
  transform-origin: 0 50%
  will-change: transform

.article__back
  margin-bottom: 2rem
  margin-left: -0.5rem

.article__title
  margin-bottom: 1.25rem

.article__cover
  margin: 2.5rem 0 0

.article__zoom
  position: relative
  display: block
  width: 100%
  padding: 0
  border: var(--hairline) solid var(--border)
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
  margin-top: 3.5rem

  h2
    margin: 3.5rem 0 1.25rem
    font-size: var(--step-2)
    letter-spacing: -0.025em

  p
    margin-bottom: 1.35rem

  // « Green Coding » est le fil rouge de l'article : on le surligne plutôt que
  // de le mettre en couleur, qui plafonnerait le contraste.
  strong
    color: var(--ink)
    background: linear-gradient(transparent 66%, var(--acc-soft) 66%)

// Chaque section est introduite par un filet : le texte long reste rythmé.
.article__section
  padding-top: 0.5rem
  border-top: var(--hairline) solid var(--border)

  &:first-child
    padding-top: 0
    border-top: 0

    h2
      margin-top: 0

.article__illustration
  display: block
  width: 100%
  max-height: 180px
  object-fit: contain
  margin: 2.5rem 0
  opacity: 0.9

// Les captures d'application sont verticales (740 × 1648) : au plafond commun,
// elles tiendraient sur un timbre. On les laisse monter, sans dépasser la
// hauteur d'un écran de portable tenu à côté du texte.
.article__illustration--portrait
  max-height: 30rem
  width: auto
  margin-inline: auto

.article__newsletter
  margin-top: 4.5rem
  padding-top: clamp(1.5rem, 3vw, 2.25rem)
  border-top: var(--hairline) solid var(--border-strong)

  h2
    margin: 0 0 1.5rem
    max-width: 34ch

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
