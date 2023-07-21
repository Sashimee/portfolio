<template>
  <q-page class="flex flex-center column q-mt-xs q-mb-md q-pa-sm">
    <div class="column justify-start chips_list q-ml-sm q-mr-sm">
      <div class="paragraphs" v-html="$t('about.paragraph_1')"></div>
      <div class="paragraphs" v-html="$t('about.paragraph_2')"></div>
      <div class="paragraphs" v-html="$t('about.list_label')"></div>
    </div>
    <div class="row justify-center chips_list">
      <q-chip
        v-for="tool in tools_list"
        v-bind:key="tool.label"
        clickable
        size="12px"
        color="accent"
        class="text-black"
        :icon="tool.icon"
        @click.prevent="goto(tool.link)"
      >
        {{ tool.label
        }}<q-tooltip
          content-class="bg-accent text-black"
          :offset="[10, 10]"
          :delay="1000"
          transition-show="flip-right"
          transition-hide="flip-right"
        >
          Know more about {{ tool.label }}
        </q-tooltip>
      </q-chip>
    </div>
    <div
      class="column justify-start chips_list q-ml-sm q-mr-sm q-mt-md q-mb-md"
    >
    <div class="paragraphs" v-html="$t('about.incentive')"></div>
      <div class="row flex-center">
        <q-btn push class="action_button" :label="$t('buttons.projects')" to="/projects"
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
        <q-btn push class="action_button" :label="$t('buttons.blog')" to="/blog"
        ><q-tooltip
          content-class="bg-accent text-black"
          :offset="[10, 10]"
          :delay="1000"
          transition-show="flip-right"
          transition-hide="flip-right"
        >
          {{ $t("buttons.blog_tooltip") }}
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
    </div>
  </q-page>
</template>

<script>
import { bootstrap } from "vue-gtag";
export default {
  name: "PageAbout",
  data() {
    return {
      tools_list: [
        {
          label: "Laravel",
          icon: "fab fa-laravel",
          link: "https://laravel.com/"
        },
        {
          label: "VueJs",
          icon: "fab fa-vuejs",
          link: "https://vuejs.org/"
        },
        {
          label: "Sass",
          icon: "fab fa-sass",
          link: "https://sass-lang.com/"
        },
        {
          label: "HTML",
          icon: "fab fa-html5",
          link: "https://developer.mozilla.org/fr/docs/Web/Guide/HTML/HTML5"
        },
        {
          label: "CSS",
          icon: "fab fa-css3",
          link: "https://developer.mozilla.org/fr/docs/Web/CSS"
        },
        {
          label: "Javascript",
          icon: "fab fa-js",
          link: "https://developer.mozilla.org/fr/docs/Web/JavaScript"
        },
        {
          label: "PHP",
          icon: "fab fa-php",
          link: "https://www.php.net/"
        },
        {
          label: "Angular",
          icon: "fab fa-angular",
          link: "https://angular.io/"
        },
        {
          label: "VSCode",
          icon: "fab fa-microsoft",
          link: "https://code.visualstudio.com/"
        },
        {
          label: "GitHub",
          icon: "fab fa-github",
          link: "https://github.com/Sashimee"
        },
        {
          label: "Wordpress",
          icon: "fab fa-wordpress",
          link: "https://wordpress.com/fr/"
        },
        {
          label: "VMware",
          icon: "fas fa-server",
          link: "https://www.vmware.com/"
        },
        {
          label: "Linux",
          icon: "fab fa-linux",
          link: "https://www.linux.org/"
        },
        {
          label: "Mikrotik",
          icon: "fas fa-network-wired",
          link: "https://mikrotik.com/"
        }
      ]
    };
  },
  mounted() {
    if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
      bootstrap().then(gtag => {
        this.$gtag.pageview({
          page_path: "/about"
        });
      });
    }
  },
  methods: {
    goto(link) {
      window.open(link);
    }
  }
};
</script>

<style lang="sass">
.chips_list
  max-width: 600px

.action_button
  margin: 1rem
  background: lighten($accent, 10)
  color: black

.paragraphs
  padding-bottom: 1rem
</style>
