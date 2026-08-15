<template>
  <div class="idx-wrap" @pointerleave="active = null">
    <ol class="idx">
      <li
        v-for="(project, position) in projects"
        :key="project.name"
        class="idx__row"
        @pointerenter="onEnter(position, $event)"
      >
        <component
          :is="isInternal(project) ? 'router-link' : 'a'"
          class="idx__link"
          v-bind="linkAttrs(project)"
          @focus="active = position"
        >
          <span class="idx__num">{{ String(position + 1).padStart(2, '0') }}</span>

          <span class="idx__name">
            {{ project.name }}
            <q-icon v-if="!isInternal(project)" name="north_east" size="0.5em" />
          </span>

          <span class="idx__meta">
            <span v-for="tag in project.tags.slice(0, 2)" :key="tag">{{ tag }}</span>
            <span class="idx__type">{{ project.type }}</span>
          </span>
        </component>

        <!-- Au tactile et sur petit écran, l'aperçu flottant n'a pas de
             déclencheur : la vignette revient dans la ligne. -->
        <div class="idx__thumb">
          <img :src="shot(project)" :alt="project.name" loading="lazy" decoding="async" />
        </div>
      </li>
    </ol>

    <!-- Un seul aperçu, déplacé au curseur : dix images superposées coûteraient
         dix compositions pour une seule visible à la fois. -->
    <div ref="preview" class="idx__preview" :class="{ 'is-visible': active !== null }" aria-hidden="true">
      <div class="idx__preview-inner">
        <img v-if="current" :src="shot(current)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectIndex',
  props: {
    /** Projets issus de src/data/projects.js, enrichis de `type` et `info`. */
    projects: { type: Array, required: true }
  },
  data() {
    return {
      active: null,
      // Position visée par l'aperçu, puis position réellement rendue : l'écart
      // entre les deux donne le retard élastique du suivi.
      target: { x: 0, y: 0 },
      rendered: { x: 0, y: 0 },
      frame: null,
      coarse: false
    }
  },
  computed: {
    current() {
      return this.active === null ? null : this.projects[this.active]
    }
  },
  methods: {
    isInternal(project) {
      return project.target === 'internal'
    },
    linkAttrs(project) {
      return this.isInternal(project)
        ? { to: `/projects/${project.link}` }
        : { href: project.link, target: '_blank', rel: 'noopener' }
    },
    shot(project) {
      return `/screenshots/${project.img}.webp`
    },
    onEnter(position, event) {
      this.active = position
      this.target = { x: event.clientX, y: event.clientY }

      // Premier survol : on place l'aperçu sans transition, sinon il traverse
      // l'écran depuis son coin d'origine.
      if (this.rendered.x === 0 && this.rendered.y === 0) {
        this.rendered = { ...this.target }
        this.paint()
      }
    },
    onPointerMove(event) {
      this.target = { x: event.clientX, y: event.clientY }
    },
    /**
     * Au défilement, le curseur ne bouge pas mais la liste, si : sans cela
     * l'aperçu resterait affiché en travers du pied de page. Le survol de la
     * ligne passée sous le curseur le rallume au premier mouvement.
     */
    onScroll() {
      this.active = null
    },
    paint() {
      const el = this.$refs.preview
      if (el) el.style.transform = `translate3d(${this.rendered.x}px, ${this.rendered.y}px, 0)`
    },
    /** Interpolation vers la position du curseur, une image sur deux suffit. */
    tick() {
      this.rendered.x += (this.target.x - this.rendered.x) * 0.16
      this.rendered.y += (this.target.y - this.rendered.y) * 0.16
      this.paint()
      this.frame = window.requestAnimationFrame(this.tick)
    }
  },
  mounted() {
    // L'aperçu est masqué en CSS au pointeur grossier : inutile d'y consacrer
    // une boucle d'animation et un écouteur de mouvement.
    this.coarse = window.matchMedia?.('(pointer: coarse), (max-width: 900px)').matches === true
    if (this.coarse || typeof window.requestAnimationFrame !== 'function') return

    window.addEventListener('pointermove', this.onPointerMove, { passive: true })
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.frame = window.requestAnimationFrame(this.tick)
  },
  beforeUnmount() {
    window.removeEventListener('pointermove', this.onPointerMove)
    window.removeEventListener('scroll', this.onScroll)
    if (this.frame) window.cancelAnimationFrame(this.frame)
  }
}
</script>

<style lang="sass">
.idx-wrap
  position: relative

.idx__type
  padding: 0.15rem 0.55rem
  border: var(--hairline) solid currentColor
  border-radius: var(--radius-pill)
  opacity: 0.75

.idx__name .q-icon
  margin-left: 0.35em
  vertical-align: 0.35em
  opacity: 0.5
</style>
