<template>
  <q-page class="flex flex-start column">
    <div class="row justify-center q-mt-xl">
      <q-select class="my-card q-mt-xl" outlined v-model="categorySelect" :options="categories" dense emit-value
        map-options :label="$t('projects.categories.label')">
      </q-select>
    </div>
    <div class="q-pa-md row items-start justify-center">
      <transition-group class="row items-start justify-center space-between" appear enter-active-class="animated pulse">
        <q-card class="my-card" v-for="(project, p) in projectsList" :key="project.name">
          <q-card-section class="info_chip">
            <q-chip dense color="accent" icon="far fa-dot-circle">
              <div class="text">{{ project.type }}</div>
            </q-chip>
          </q-card-section>
          <q-img :src="'/screenshots/' + project.img + '.png'" :alt="project.name" @click="gotoProject(project)">
            <q-tooltip class="bg-accent text-black" :offset="[10, 10]" :delay="1000" transition-show="flip-right"
              transition-hide="flip-right">
              {{ $t('projects.visit', { name: project.name }) }}
            </q-tooltip>
            <div class="absolute-bottom">
              <div class="text-h6">{{ project.name }}</div>
            </div>
          </q-img>

          <q-card-actions>
            <!-- Tags -->
            <div class="ellipsis tags_list">
              <span v-for="(tag, i) in project.tags" :key="i"><q-badge color="primary" class="q-mr-sm">
                  {{ tag }}
                </q-badge></span>
            </div>
            <q-space />
            <q-btn class="detail_button" color="accent" round flat dense @click="expand(p)"
              :aria-label="$t('projects.details')" :icon="expanded[p] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              style="max-width: 40px; max-height: 40px;"></q-btn>
          </q-card-actions>
          <!-- expandable part with info about project -->
          <q-slide-transition>
            <div v-show="expanded[p]">
              <q-separator />
              <q-card-section class="text-subitle2">
                {{ project.info }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </transition-group>
    </div>
  </q-page>
</template>

<script>
import { usePageMeta } from "@/composables/use-page-meta";
import projectsData, { PROJECT_CATEGORIES } from "@/data/projects";

export default {
  name: "PageProjects",
  setup() {
    usePageMeta({
      titleKey: "seo.projects.title",
      descriptionKey: "seo.projects.description",
      path: "/projects"
    });
  },
  data() {
    return {
      categorySelect: "all",
      expanded: {}
    };
  },
  methods: {
    gotoProject(project) {
      if (project.target === "internal") {
        this.$router.push("/projects/" + project.link);
        return;
      }
      window.open(project.link, "_blank", "noopener");
    },
    expand(p) {
      this.expanded[p] = !this.expanded[p];
    }
  },
  computed: {
    categories() {
      // Values stay language-independent, only the labels are translated.
      return [
        { value: "all", label: this.$t("projects.categories.all") },
        ...PROJECT_CATEGORIES.map(category => ({
          value: category,
          label: this.$t("projects.categories." + category)
        }))
      ];
    },
    projectsList() {
      return projectsData
        .filter(project => this.categorySelect === "all" || project.category === this.categorySelect)
        .map(project => ({
          ...project,
          type: this.$t("projects.categories." + project.category),
          info: this.$t("projects.texts." + project.infoKey)
        }));
    }
  }
};
</script>

<style lang="sass">
.colored_visit
  display: none

.my-card
  width: 250px
  margin: 1rem
  overflow: hidden
  .q-img
    height: 200px
    &:hover
      cursor: pointer
      transform: scale(1.05,1.05)
      transition-duration: 0.5s
      .colored_visit
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        background-color: $primary
        opacity: 0.6

.info_chip
  position: absolute
  top: -0.5rem
  right: -0.5rem
  z-index: 1999
  pointer-events: none

.q-chip--dense .q-chip__icon
  font-size: 0.75rem

.tags_list
  width: 85%

.details_dialog
  background-color: $dark
  margin: auto
</style>
