<template>
  <article class="project">
    <div class="project__media">
      <img
        :src="`/screenshots/${project.img}.webp`"
        :alt="project.name"
        loading="lazy"
        decoding="async"
      />
      <span class="project__type mono">{{ project.type }}</span>
    </div>

    <div class="project__body">
      <h3 class="project__title">
        <router-link v-if="isInternal" class="stretched-link" :to="`/projects/${project.link}`">
          {{ project.name }}
        </router-link>
        <a v-else class="stretched-link" :href="project.link" target="_blank" rel="noopener">
          {{ project.name }}
        </a>
        <q-icon :name="isInternal ? 'arrow_forward' : 'north_east'" size="16px" />
      </h3>

      <p v-if="project.info" class="project__info">{{ project.info }}</p>

      <ul class="cluster project__tags">
        <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    /** Projet issu de src/data/projects.js, déjà enrichi de `type` et `info`. */
    project: { type: Object, required: true }
  },
  computed: {
    isInternal() {
      return this.project.target === 'internal'
    }
  }
}
</script>

<style lang="sass">
// Affiche plutôt que carte : l'image porte, le texte se pose dessous sur un
// filet. Pas de fond, pas d'ombre — c'est le survol qui matérialise le bloc.
.project
  position: relative
  display: flex
  flex-direction: column

.project__media
  position: relative
  aspect-ratio: 4 / 3
  overflow: hidden
  border: var(--hairline) solid var(--border)
  border-radius: var(--radius)
  background: var(--surface-2)

  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: top center
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)

  // Voile qui se lève au survol : l'image gagne en présence sans changer de
  // taille de mise en page.
  &::after
    content: ''
    position: absolute
    inset: 0
    background: var(--acc)
    mix-blend-mode: multiply
    opacity: 0
    transition: opacity 0.45s

.project:hover .project__media img,
.project:focus-within .project__media img
  transform: scale(1.04)

.project:hover .project__media::after,
.project:focus-within .project__media::after
  opacity: 0.14

.project__type
  position: absolute
  left: 0.7rem
  bottom: 0.7rem
  padding: 0.25rem 0.6rem
  border-radius: var(--radius-pill)
  color: var(--acc-ink)
  background: var(--acc)
  font-size: 0.65rem
  letter-spacing: 0.08em

.project__body
  display: flex
  flex-direction: column
  gap: 0.65rem
  padding-top: 1rem

.project__title
  display: flex
  align-items: baseline
  justify-content: space-between
  gap: 0.75rem
  margin: 0
  font-size: var(--step-2)
  font-weight: 500
  letter-spacing: -0.03em

  a
    color: var(--ink)
    text-decoration: none

  .q-icon
    flex-shrink: 0
    color: var(--ink-3)
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s

.project:hover .project__title .q-icon
  color: var(--ink)
  transform: translate(3px, -3px)

.project__info
  margin: 0
  font-size: 0.92rem
  line-height: 1.55
  color: var(--ink-3)
  display: -webkit-box
  -webkit-line-clamp: 3
  -webkit-box-orient: vertical
  overflow: hidden

.project__tags
  margin: 0.2rem 0 0
  padding: 0
  list-style: none
  gap: 0.4rem
</style>
