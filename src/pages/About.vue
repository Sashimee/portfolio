<template>
  <q-page class="about">
    <section class="section container">
      <header class="about__head">
        <p class="eyebrow">{{ $t('about.eyebrow') }}</p>
        <h1 class="title-xl about__title">
          <span class="reveal-line"><span>{{ $t('about.title') }}</span></span>
        </h1>
      </header>

      <div class="about__grid">
        <div class="prose about__prose" data-reveal>
          <p v-html="$t('about.paragraph_1')"></p>
          <p v-html="$t('about.paragraph_2')"></p>
        </div>

        <aside class="about__aside" data-reveal style="--d: 0.12s">
          <h2 class="overline">{{ $t('about.elsewhere') }}</h2>
          <a
            v-for="link in socialLinks"
            :key="link.id"
            class="about__link"
            :href="link.url"
            target="_blank"
            rel="noopener"
          >
            <q-icon :name="link.icon" size="16px" />
            <span>
              <strong>{{ link.label }}</strong>
              <span class="muted">{{ link.handle }}</span>
            </span>
            <q-icon class="about__link-arrow" name="north_east" size="14px" />
          </a>

          <q-btn
            class="app-btn app-btn--primary full-width q-mt-lg"
            no-caps
            unelevated
            to="/contact"
            icon-right="arrow_forward"
            :label="$t('buttons.contact')"
          />
        </aside>
      </div>
    </section>

    <!-- La stack en table réglée : un groupe par ligne, les technologies
         alignées en face. Plus dense et plus lisible qu'une grille de cartes. -->
    <section class="section--tight container">
      <header class="section-head">
        <div>
          <p class="eyebrow">{{ $t('about.stack_eyebrow') }}</p>
          <h2 class="title-lg">{{ $t('about.list_label') }}</h2>
        </div>
      </header>

      <dl class="stack">
        <div
          v-for="(group, position) in groups"
          :key="group.id"
          class="stack__row"
          data-reveal
          :style="`--d: ${position * 0.06}s`"
        >
          <dt class="stack__group">
            <span class="mono muted">{{ String(position + 1).padStart(2, '0') }}</span>
            {{ $t('about.groups.' + group.id) }}
          </dt>
          <dd class="stack__items">
            <a
              v-for="item in group.items"
              :key="item.label"
              class="chip-link"
              :href="item.link"
              target="_blank"
              rel="noopener"
            >
              <q-icon :name="item.icon" size="14px" />
              {{ item.label }}
            </a>
          </dd>
        </div>
      </dl>
    </section>

    <section class="section--tight container">
      <div class="about__cta" data-reveal>
        <div>
          <h2 class="title-lg">{{ $t('about.cta_title') }}</h2>
          <p class="lead">{{ $t('about.incentive') }}</p>
        </div>
        <div class="cluster">
          <q-btn
            class="app-btn app-btn--ghost"
            no-caps
            unelevated
            to="/projects"
            icon-right="arrow_forward"
            :label="$t('buttons.projects')"
          />
          <q-btn class="app-btn app-btn--quiet" no-caps flat to="/blog" :label="$t('buttons.blog')" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { usePageMeta } from '@/composables/use-page-meta'
import { useReveal } from '@/composables/use-reveal'
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
    useReveal()
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
.about__head
  padding-bottom: clamp(2rem, 5vw, 3.5rem)
  border-bottom: var(--hairline) solid var(--border-strong)

.about__title
  max-width: 20ch

.about__grid
  display: grid
  gap: clamp(2rem, 5vw, 4.5rem)
  grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr)
  align-items: start
  padding-top: clamp(2rem, 4vw, 3.5rem)

  @media (max-width: 900px)
    grid-template-columns: 1fr

.about__prose
  font-size: var(--step-1)

  // Le premier paragraphe sert de chapô : plus grand, en encre pleine.
  p:first-child
    font-size: var(--step-2)
    line-height: 1.4
    letter-spacing: -0.015em
    color: var(--ink)
    margin-bottom: 1.75rem

.about__aside
  position: sticky
  top: calc(var(--header-height) + 1.5rem)

  @media (max-width: 900px)
    position: static

.about__link
  display: flex
  align-items: center
  gap: 0.75rem
  padding: 0.85rem 0
  color: var(--ink)
  text-decoration: none
  border-bottom: var(--hairline) solid var(--border)

  &:first-of-type
    border-top: var(--hairline) solid var(--border)

  span
    display: flex
    flex-direction: column
    line-height: 1.3
    font-size: 0.9rem

  strong
    font-weight: 600

  .muted
    font-family: var(--font-mono)
    font-size: 0.72rem

  .about__link-arrow
    margin-left: auto
    color: var(--ink-3)
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)

  &:hover .about__link-arrow
    transform: translate(3px, -3px)

.stack
  margin: 0
  border-top: var(--hairline) solid var(--border)

.stack__row
  display: grid
  grid-template-columns: minmax(0, 14rem) minmax(0, 1fr)
  gap: 1rem 2rem
  align-items: baseline
  padding-block: clamp(1.1rem, 2.2vw, 1.6rem)
  border-bottom: var(--hairline) solid var(--border)

  @media (max-width: 720px)
    grid-template-columns: 1fr
    gap: 0.9rem

.stack__group
  display: flex
  align-items: baseline
  gap: 0.9rem
  font-family: var(--font-display)
  font-size: var(--step-1)
  font-weight: 500
  letter-spacing: -0.02em

.stack__items
  display: flex
  flex-wrap: wrap
  gap: 0.45rem
  margin: 0

.about__cta
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  gap: 1.5rem
  padding-top: clamp(1.5rem, 3vw, 2.25rem)
  border-top: var(--hairline) solid var(--border-strong)

  .lead
    margin: 0.75rem 0 0
</style>
