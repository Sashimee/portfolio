<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="side = !side"
          class="lt-lg"
          v-if="leftMode == true"
        />
        <q-toolbar-title>
          <span class="name">Alex Baskewitsch</span><span class="dot">;</span>
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="side = !side"
          class="lt-md"
          v-if="leftMode == false"
        />
        <q-toggle
          class="gt-sm"
          v-model="darkMode"
          icon="far fa-moon"
          color="accent"
          @input="toggleDarkMode()"
        ></q-toggle>
      </q-toolbar>

      <q-tabs align="center" class="gt-sm">
        <q-route-tab to="/" label="About me" />
        <q-route-tab to="/projects" label="Projects" />
        <q-route-tab to="/contact" label="Contact" />
      </q-tabs>
      <div class="lower_header"></div>
    </q-header>
    <q-drawer
      v-model="side"
      :side="side_choice"
      overlay
      bordered
      content-class="column"
    >
      <!-- drawer content -->
      <div class="column justify_custom">
        <q-list bordered>
          <!-- These q-items contain a click function because the dark mode is buggy with the to prop -->
          <q-item clickable v-ripple @click="link('/')">
            <q-item-section avatar>
              <q-icon name="far fa-user"></q-icon>
            </q-item-section>
            <q-item-section>About me</q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="link('/projects')">
            <q-item-section avatar>
              <q-icon name="far fa-thumbs-up"></q-icon>
            </q-item-section>
            <q-item-section>Projects</q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="link('/contact')">
            <q-item-section avatar>
              <q-icon name="far fa-paper-plane"></q-icon>
            </q-item-section>
            <q-item-section>Contact</q-item-section>
          </q-item>
        </q-list>
        <q-list bordered>
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Dark Mode</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle
                color="accent"
                v-model="darkMode"
                val="mode"
                @input="toggleDarkMode()"
              ></q-toggle>
            </q-item-section>
          </q-item>
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Left Hand Mode</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle
                color="accent"
                v-model="leftMode"
                val="mode"
                @input="toggleLeftMode()"
              ></q-toggle>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <div class="upper_footer"></div>
      <q-toolbar>
        <q-toolbar-title> </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="fab fa-linkedin-in"
          type="a"
          href="https://www.linkedin.com/in/abask/"
          target="_blank"
        ></q-btn>
        <q-btn
          flat
          round
          dense
          icon="fab fa-github"
          type="a"
          href="https://github.com/Sashimee"
          target="_blank"
        ></q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      side: false,
      leftMode: false,
      darkMode: false,
      side_choice: "right"
    };
  },
  methods: {
    link(target) {
      this.$router.push(target);
    },
    toggleLeftMode() {
      // If it was enabled change the prop value
      if (this.leftMode == true) {
        this.side_choice = "left";
        return;
      }
      // else just set it as it was
      this.side_choice = "right";
    },
    toggleDarkMode() {
      this.$q.dark.toggle();
    }
  }
};
</script>

<style lang="sass">
.name
  font-family: 'lexend'
  text-transform: uppercase
.dot
  color: $accent

//Styling divs

.lower_header
  position: absolute
  width: 0
  height: 0
  border-top: 24px solid $primary
  border-right: 100vw solid transparent

.upper_footer
  position: absolute
  top: -24px
  width: 0
  height: 0
  border-bottom: 24px solid $primary
  border-left: 100vw solid transparent

// Custom class because justify-between does just not work
.justify_custom
  justify-content: space-between
  height: 100%
  margin: 2rem 1rem
  padding: 1rem
  border: 1px solid $primary
</style>
