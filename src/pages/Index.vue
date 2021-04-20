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
      <div class="row justify-end more_button">
        <q-btn flat color="dark" padding="xs" label="More ..." to="/about"
          ><q-tooltip
            content-class="bg-accent text-black"
            :offset="[10, 10]"
            :delay="1000"
            transition-show="flip-right"
            transition-hide="flip-right"
            anchor="center left"
            self="center right"
          >
            Know more about me
          </q-tooltip></q-btn
        >
      </div>
    </div>
    <div class="row">
      <q-btn push class="action_button" label="My projects" to="/projects"
        ><q-tooltip
          content-class="bg-accent text-black"
          :offset="[10, 10]"
          :delay="1000"
          transition-show="flip-right"
          transition-hide="flip-right"
        >
          Explore my projects
        </q-tooltip></q-btn
      >
      <q-btn push class="action_button" label="Contact me" to="/contact"
        ><q-tooltip
          content-class="bg-accent text-black"
          :offset="[10, 10]"
          :delay="1000"
          transition-show="flip-right"
          transition-hide="flip-right"
        >
          Contact me
        </q-tooltip></q-btn
      >
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
  }
};
</script>

<style lang="sass">
.action_button
  margin: 1rem
  background: lighten($accent, 10)
  color: black


.q-chip--dark
  color: black

.body--dark
  background-color: $dark

h6
  margin: 1.5rem
.more_button
  max-width: 350px
  width: 100%
</style>
