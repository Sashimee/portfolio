<template>
  <q-page class="flex flex-center">
    <h6>I like to use:</h6>
    <div class="row justify-center chips_list">
      <q-chip size="12px" color="accent" icon="fab fa-laravel">
        Laravel
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-vuejs">
        VueJs
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-sass">
        Sass
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-html5">
        HTML
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-css3">
        CSS
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-js">
        Javascript
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-php">
        PHP
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-angular">
        Angular
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-microsoft">
        VSCode
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-github">
        GitHub
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-wordpress">
        Wordpress
      </q-chip>
      <q-chip size="12px" color="accent" icon="fas fa-server">
        VMware
      </q-chip>
      <q-chip size="12px" color="accent" icon="fab fa-linux">
        Linux
      </q-chip>
      <q-chip size="12px" color="accent" icon="fas fa-network-wired">
        Mikrotik
      </q-chip>
    </div>
  </q-page>
</template>

<script>
import { bootstrap } from "vue-gtag";
export default {
  name: "PageAbout",
  mounted() {
    if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
      bootstrap().then(gtag => {
        this.$gtag.pageview({
          page_path: "/about"
        });
      });
    }
  }
};
</script>
