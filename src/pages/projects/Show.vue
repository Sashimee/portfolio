<template>
  <q-page class="flex flex-center">
    <q-page-sticky position="top-right" :offset="[20, 20]">
      <q-btn
        icon="fas fa-undo"
        color="accent"
        :label="$t('projects.back')"
        label-position="right"
        to="/projects"
      ></q-btn>
    </q-page-sticky>
    <iframe
      v-if="project"
      :src="'/projects_folder/' + project.link + '/index.html'"
      :title="project.name"
      class="iframe"
    ></iframe>
  </q-page>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { usePageMeta } from "@/composables/use-page-meta";
import projectsData from "@/data/projects";

export default {
  name: "PageShowProject",
  setup() {
    const route = useRoute();
    // The route guard in src/router/routes.js already rejected unknown
    // shortcodes, so there is always a match here.
    const project = computed(() =>
      projectsData.find(p => p.target === "internal" && p.link === route.params.shortcode)
    );

    usePageMeta({
      title: () => project.value.name,
      descriptionKey: "seo.project.description",
      path: () => route.path,
      image: () => "/screenshots/" + project.value.img + ".png"
    });

    return { project };
  }
};
</script>

<style lang="sass">
.iframe
  height: 80vh
  width: 100%
  margin: 1rem
  border: 3px solid black
</style>
