<template>
  <q-page class="flex flex-center">
    <q-page-sticky position="top-right" :offset="[20, 20]">
      <q-btn
        icon="fas fa-undo"
        color="accent"
        label="Back"
        label-position="right"
        to="/projects"
      ></q-btn>
    </q-page-sticky>
    <iframe
      ref="iframeRef"
      :src="'/projects_folder/' + link + '/index.html'"
      class="iframe"
    ></iframe>
  </q-page>
</template>

<script>
import { bootstrap } from "vue-gtag";

export default {
  name: "PageShowProject",
  data() {
    return {
      link: ""
    };
  },
  mounted() {
    this.link = this.$route.params.shortcode;
    this.$refs.iframeRef.addEventListener("load", this.iframeLoad);
    if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
      bootstrap().then(gtag => {
        this.$gtag.pageview({
          page_path: "/projects/" + this.link
        });
      });
    }
  },
  methods: {
    iframeLoad() {
      if (this.$refs.iframeRef.contentDocument.title == "Error") {
        this.$router.push("/404");
      }
    }
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
