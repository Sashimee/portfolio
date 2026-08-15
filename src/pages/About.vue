<template>
  <q-page class="about">
    <section class="section container about__intro">
      <div class="aurora" aria-hidden="true"></div>

      <div class="about__grid">
        <div>
          <p class="eyebrow reveal">{{ $t('about.eyebrow') }}</p>
          <h1 class="title-xl reveal" style="--d: 0.05s">{{ $t('about.title') }}</h1>
          <div class="prose about__prose reveal" style="--d: 0.1s">
            <p v-html="$t('about.paragraph_1')"></p>
            <p v-html="$t('about.paragraph_2')"></p>
          </div>
        </div>

        <aside class="card card--pad about__aside reveal" style="--d: 0.16s">
          <h2 class="overline">{{ $t('about.elsewhere') }}</h2>
          <a
            v-for="link in socialLinks"
            :key="link.id"
            class="about__link"
            :href="link.url"
            target="_blank"
            rel="noopener"
          >
            <q-icon :name="link.icon" size="18px" />
            <span>
              <strong>{{ link.label }}</strong>
              <span class="muted">{{ link.handle }}</span>
            </span>
            <q-icon class="about__link-arrow" name="north_east" size="16px" />
          </a>

          <q-btn
            class="app-btn app-btn--primary full-width q-mt-md"
            no-caps
            unelevated
            to="/contact"
            :label="$t('buttons.contact')"
          />
        </aside>
      </div>
    </section>

    <section class="section--tight container">
      <header class="section-head">
        <div>
          <p class="eyebrow">{{ $t('about.stack_eyebrow') }}</p>
          <h2 class="title-lg">{{ $t('about.list_label') }}</h2>
        </div>
      </header>

      <div class="grid grid--cards">
        <div v-for="group in groups" :key="group.id" class="card card--pad">
          <h3 class="overline">{{ $t('about.groups.' + group.id) }}</h3>
          <ul class="cluster about__chips">
            <li v-for="item in group.items" :key="item.label">
              <a class="chip-link" :href="item.link" target="_blank" rel="noopener">
                <q-icon :name="item.icon" size="15px" />
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="card card--pad about__cta">
        <div>
          <h2 class="title-lg">{{ $t('about.cta_title') }}</h2>
          <p class="lead">{{ $t('about.incentive') }}</p>
        </div>
        <div class="cluster">
          <q-btn
            class="app-btn app-btn--primary"
            no-caps
            unelevated
            to="/projects"
            icon-right="arrow_forward"
            :label="$t('buttons.projects')"
          />
          <q-btn class="app-btn app-btn--ghost" no-caps unelevated to="/blog" :label="$t('buttons.blog')" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { usePageMeta } from '@/composables/use-page-meta'
import socialLinks from '@/data/links'
import stack, { STACK_GROUPS } from '@/data/stack'

export default {
  name: 'PageAbout',
  setup() {
    usePageMeta({
      titleKey: 'seo.about.title',
      descriptionKey: 'seo.about.description',
      path: '/about'
    })
  },
  data() {
    return { socialLinks }
  },
  computed: {
    groups() {
      return STACK_GROUPS.map(id => ({
        id,
        items: stack.filter(item => item.group === id)
      }))
    }
  }
}
</script>

<style lang="sass">
.about__intro
  position: relative
  overflow: hidden

.about__grid
  position: relative
  z-index: 1
  display: grid
  gap: clamp(1.5rem, 4vw, 3rem)
  grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr)
  align-items: start

  @media (max-width: 900px)
    grid-template-columns: 1fr

.about__prose
  margin-top: 1.5rem

.about__aside
  position: sticky
  top: calc(var(--header-height) + 1.5rem)

  @media (max-width: 900px)
    position: static

.about__link
  display: flex
  align-items: center
  gap: 0.75rem
  padding: 0.75rem 0
  color: var(--ink)
  text-decoration: none
  border-bottom: 1px solid var(--border)

  span
    display: flex
    flex-direction: column
    line-height: 1.3
    font-size: 0.9rem

  strong
    font-weight: 600

  .about__link-arrow
    margin-left: auto
    color: var(--ink-3)

  &:hover
    color: var(--brand)

    .about__link-arrow
      color: var(--brand)

.about__chips
  margin: 0
  padding: 0
  list-style: none

.about__cta
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  gap: 1.5rem

  .lead
    margin: 0.75rem 0 0
</style>
