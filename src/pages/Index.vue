<template>
  <q-page class="flex items-center justify-center column">
    <div>
      <h3>Hi, I'm <span>Alex</span>,</h3>
      <h5>a Full Stack Web Developer.</h5>
      <h6>I like to use :</h6>
    </div>
    <div class="row justify-center chips_list">
      <q-chip size="18px" color="accent" icon="fab fa-laravel">
        Laravel
      </q-chip>
      <q-chip size="18px" color="accent" icon="fab fa-vuejs">
        VueJs
      </q-chip>
      <q-chip size="18px" color="accent" icon="fab fa-sass">
        Sass
      </q-chip>
      <q-chip size="15px" color="accent" icon="fab fa-html5">
        HTML
      </q-chip>
      <q-chip size="15px" color="accent" icon="fab fa-css3">
        CSS
      </q-chip>
      <q-chip size="15px" color="accent" icon="fab fa-js">
        Javascript
      </q-chip>
      <q-chip size="15px" color="accent" icon="fab fa-php">
        PHP
      </q-chip>
      <q-chip size="15px" color="accent" icon="fab fa-angular">
        Angular
      </q-chip>
      <q-chip size="15px" color="accent" icon="fab fa-microsoft">
        VSCode
      </q-chip>
      <q-chip size="13px" color="accent" icon="fab fa-github">
        GitHub
      </q-chip>
      <q-chip size="13px" color="accent" icon="fab fa-wordpress">
        Wordpress
      </q-chip>
    </div>
    <div class="row">
      <q-btn
        class="action_button"
        color="primary"
        label="See my projects"
        to="/projects"
      />
      <q-btn
        class="action_button"
        color="primary"
        label="Contact me"
        to="/contact"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>

<style lang="sass">
.action_button
  margin: 1rem
.chips_list
  max-width: 360px
</style>
