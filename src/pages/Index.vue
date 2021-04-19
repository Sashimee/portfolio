<template>
  <q-page class="flex items-center justify-center column">
    <div>
      <h3>Hi, I'm <span>Alex</span>,</h3>
      <h5>a Full Stack Web <strong>Developer</strong>.</h5>
      <p>
        IT is my <strong>passion</strong>. Most of my work is
        <strong>self-hosted</strong>.
      </p>
      <p>My goal is to progress in a <strong>DevOps</strong> mindset.</p>
    </div>
    <div class="row">
      <q-btn push class="action_button" label="My projects" to="/projects" />
      <q-btn push class="action_button" label="Contact me" to="/contact" />
    </div>
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
  name: "PageIndex",
  mounted() {
    if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
      bootstrap().then(gtag => {
        this.$gtag.pageview({
          page_path: "/"
        });
      });
    }
  },
};
</script>

<style lang="sass">
.action_button
  margin: 1rem
  background: lighten($accent, 10)
  color: black
.chips_list
  max-width: 600px

.q-chip--dark
  color: black

.body--dark
  background-color: $dark

h6
  margin: 1.5rem
</style>
