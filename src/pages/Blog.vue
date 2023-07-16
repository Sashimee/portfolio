<template>
  <q-page class="flex flex-center">
    Test
    
  </q-page>
</template>

<script>
import { bootstrap } from "vue-gtag";
export default {
  name: "PageBlog", // Change name
  mounted() {
    if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
      bootstrap().then(gtag => {
        this.$gtag.pageview({
          page_path: "/blog" // Change path
        });
      });
    }
  }
};
</script>
