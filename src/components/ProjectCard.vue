<template>
  <article class="project card card--interactive">
    <div class="project__media">
      <img
        :src="`/screenshots/${project.img}.webp`"
        :alt="project.name"
        loading="lazy"
        decoding="async"
      />
      <span class="tag tag--brand project__type">{{ project.type }}</span>
    </div>

    <div class="project__body">
      <h3 class="project__title">
        <router-link v-if="isInternal" class="stretched-link" :to="`/projects/${project.link}`">
          {{ project.name }}
        </router-link>
        <a v-else class="stretched-link" :href="project.link" target="_blank" rel="noopener">
          {{ project.name }}
          <q-icon name="north_east" size="15px" />
        </a>
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
.project
  display: flex
  flex-direction: column
  overflow: hidden

.project__media
  position: relative
  aspect-ratio: 16 / 10
  overflow: hidden
  background: var(--surface-2)

  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: top center
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)

.project:hover .project__media img
  transform: scale(1.05)

.project__type
  position: absolute
  top: 0.75rem
  left: 0.75rem
  background: var(--surface)
  backdrop-filter: blur(6px)

.project__body
  display: flex
  flex-direction: column
  gap: 0.6rem
  padding: 1.15rem 1.25rem 1.35rem

.project__title
  margin: 0
  font-size: 1.1rem

  a
    display: inline-flex
    align-items: center
    gap: 0.35rem
    color: var(--ink)
    text-decoration: none

    &:hover
      color: var(--brand)

.project__info
  margin: 0
  font-size: 0.9rem
  line-height: 1.55
  color: var(--ink-3)
  display: -webkit-box
  -webkit-line-clamp: 3
  -webkit-box-orient: vertical
  overflow: hidden

.project__tags
  margin: 0.25rem 0 0
  padding: 0
  list-style: none
  gap: 0.4rem
</style>
