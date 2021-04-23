<template>
  <q-page class="flex items-center justify-center column">
    <div>
      <h3>{{ $t("home.hi") }}</h3>
      <h5>{{ $t("home.designation") }}</h5>
      <p>
        {{ $t("home.detail_1") }}
      </p>
      <p>{{ $t("home.detail_2") }}</p>
      <div class="row justify-end more_button">
        <q-btn flat color="dark" padding="xs" :label="$t('home.more')" to="/about"
          ><q-tooltip
            content-class="bg-accent text-black"
            :offset="[10, 10]"
            :delay="1000"
            transition-show="flip-right"
            transition-hide="flip-right"
            anchor="center left"
            self="center right"
          >
            {{ $t("home.more_tooltip") }}
          </q-tooltip></q-btn
        >
      </div>
    </div>
    <div class="row">
      <q-btn
        push
        class="action_button"
        :label="$t('buttons.projects')"
        to="/projects"
        ><q-tooltip
          content-class="bg-accent text-black"
          :offset="[10, 10]"
          :delay="1000"
          transition-show="flip-right"
          transition-hide="flip-right"
        >
          {{ $t("buttons.projects_tooltip") }}
        </q-tooltip></q-btn
      >
      <q-btn push class="action_button" :label="$t('buttons.contact')" to="/contact"
        ><q-tooltip
          content-class="bg-accent text-black"
          :offset="[10, 10]"
          :delay="1000"
          transition-show="flip-right"
          transition-hide="flip-right"
        >
          {{ $t("buttons.contact_tooltip") }}
        </q-tooltip></q-btn
      >
    </div>
  </q-page>
</template>

<script>
import { bootstrap } from "vue-gtag";
import { i18n } from "src/boot/i18n";

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
