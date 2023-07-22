<template>
  <q-page class="flex flex-start column">
    <div class="row justify-center q-mt-xl">
      <q-select class="my-card q-mt-xl" outlined v-model="categorySelect" :options="categories" dense :label="$t('projects.categories.label')">
      </q-select>
    </div>
    <div class="q-pa-md row items-start justify-center">
      <transition-group class="row items-start justify-center space-between" appear enter-active-class="animated pulse">
        <q-card class="my-card" v-for="(project, p) in projectsList" :key="project.name">
          <q-card-section class="info_chip">
            <q-chip dense color="accent" icon="far fa-dot-circle">
              <div class="text">{{ project.type }}</div>
            </q-chip>
          </q-card-section>
          <!-- Image for external links -->
          <q-img v-if="project.target == 'external'" :src="'/screenshots/' + project.img + '.png'"
            @click="gotoProject(project)"><q-tooltip content-class="bg-accent text-black" :offset="[10, 10]" :delay="1000"
              transition-show="flip-right" transition-hide="flip-right">
              Visit the project {{ project.name }}
            </q-tooltip>
            <div class="absolute-bottom">
              <div class="text-h6">{{ project.name }}</div>
            </div>

          </q-img>
          <!-- Image for internal links -->
          <q-img v-else :src="'/screenshots/' + project.link + '.png'" @click="gotoProject(project)"><q-tooltip
              content-class="bg-accent text-black" :offset="[10, 10]" :delay="1000" transition-show="flip-right"
              transition-hide="flip-right">
              Visit the project {{ project.name }}
            </q-tooltip>
            <div class="absolute-bottom">
              <div class="text-h6">{{ project.name }}</div>
            </div>

          </q-img>

          <q-card-actions>
            <!-- Tags -->
            <div class="ellipsis tags_list">
              <span v-for="(tag, i) in project.tags" :key="i"><q-badge color="primary" class="q-mr-sm">
                  {{ tag }}
                </q-badge></span>
            </div>
            <!--<q-btn label="Carousel" color="primary" @click="openDialog(p)" />-->
            <q-space />
            <q-btn class="detail_button" color="accent" round flat dense @click="expand(p)"
              :icon="expanded[p] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" transition-show="rotate"
              style="max-width: 40px; max-height: 40px;"></q-btn>
          </q-card-actions>
          <!-- expandable part with info about project -->
          <q-slide-transition>
            <div v-show="expanded[p]">
              <q-separator />
              <q-card-section class="text-subitle2">
                {{ project.info }}
              </q-card-section>
            </div>
          </q-slide-transition>
          <!-- Details dialog -->
          <q-dialog v-model="details_dialog[p]" class="flex-center" full-height full-width>
            <div class="details_dialog">{{ project.info }}</div>
          </q-dialog>
        </q-card>
      </transition-group>
    </div>
  </q-page>
</template>

<script>
import { bootstrap } from "vue-gtag";

export default {
  // meta: {
  //   // sets document title
  //   title: 'Index Page',
  //   // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  //   titleTemplate: title => `${title} - My Website`,

  //   // meta tags
  //   meta: {
  //     description: { name: 'description', content: 'Page 1' },
  //     keywords: { name: 'keywords', content: 'Quasar website' },
  //     equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  //     // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
  //     ogTitle:  {
  //       name: 'og:title',
  //       // optional; similar to titleTemplate, but allows templating with other meta properties
  //       template (ogTitle) {
  //         return `${ogTitle} - My Website`
  //       }
  //     }
  //   },

  //   // CSS tags
  //   link: {
  //     material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  //   },

  //   // JS tags
  //   script: {
  //     ldJson: {
  //       type: 'application/ld+json',
  //       innerHTML: `{ "@context": "http://schema.org" }`
  //     }
  //   },

  //   // <html> attributes
  //   htmlAttr: {
  //     'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
  //     empty: undefined // generates <html empty>
  //   },

  //   // <body> attributes
  //   bodyAttr: {
  //     'action-scope': 'xyz', // generates <body action-scope="xyz">
  //     empty: undefined // generates <body empty>
  //   },

  //   // <noscript> tags
  //   noscript: {
  //     default: 'This is content for browsers with no JS (or disabled JS)'
  //   }
  // },
  name: "PageProjects",
  data() {
    return {
      details_dialog: [],
      projects: [],
      categorySelect: "",
      expanded: [],
      lang: this.$i18n.locale,
      projectsData: [
        // {
        //   name: "Rack",
        //   type: "hardware",
        //   link: "/projects/rack",
        //   target: "external"
        // },
        // {
        //   name: "Mikrotik Networking",
        //   type: "networking",
        //   link: "/projects/networking",
        //   target: "external"
        // },
        {
          name: "Baskewitsch.lu",
          type: "Live Site",
          link: "https://github.com/Sashimee/portfolio",
          img: "baskewitsch.lu",
          tags: ["Vue.js", "RGPD", "laravel"],
          target: "external",
          info: this.$t('projects.texts.baskewitsch')
        },
        {
          name: "Dawa",
          type: "Live Site",
          link: "http://www.dawa.lu",
          img: "dawa",
          tags: ["laravel", "responsive", "secure"],
          target: "external",
          info: this.$t('projects.texts.dawa')
        },
        {
          name: "About Blank Generator",
          type: "Live Site",
          link: "http://aboutblankgenerator.com",
          img: "blank",
          target: "external",
          tags: ["css", "responsive"],
          info:
            'After some research I found out the "about blank" research query was made all around the world. (https://trends.google.fr/trends/explore?q=about%20blank) This led me to create this site to see if I could be on top of the search rankings with SEO.'
        },
        {
          name: "Bootstrap Site",
          type: "Template",
          link: "x1",
          tags: ["css", "bootstrap", "responsive"],
          target: "internal",
          info: "Example of a full bootstrap site."
        },
        {
          name: "Pet4U",
          type: "Template",
          link: "pet4u",
          target: "internal",
          tags: ["js", "css"],
          info:
            "Simple contact page layout. HTML structure respecting best practices. Contact form and Google Maps integration."
        },
        {
          name: "News Site",
          type: "Template",
          link: "news",
          tags: ["css"],
          target: "internal",
          info: "Tiny example of a news site."
        },
        {
          name: "Responsive Cupcake",
          type: "Template",
          link: "cupcake",
          tags: ["css", "responsive"],
          target: "internal",
          info: "Tiny responsive cupcake site."
        },
        {
          name: "Liberty",
          type: "Template",
          link: "liberty",
          tags: ["css"],
          target: "internal",
          info: "Nice presentation Template."
        },
        {
          name: "Peinture.lu",
          type: "Live Site",
          link: "http://www.peinture.lu",
          img: "peinture",
          tags: ["wordpress", "css", "responsive"],
          target: "external",
          info:
            "I migrated this Wordpress site to another hosting provider (OVH) and had only acces to a raw export of the site + database. I also added a picture gallery and did some bugfixing. Original site was made by Dotcom."
        },
        {
          name: "Old Portfolio",
          type: "Archive",
          link: "https://github.com/Sashimee/ProPort",
          img: "old_portfolio",
          tags: ["responsive", "php"],
          target: "external",
          info:
            "My Old Portfolio. I created my own CSS framework and added different sub-projects. Included are API calls, a Todo list and a contact form."
        }
      ]
    };
  },
  methods: {
    gotoProject(project) {
      switch (project.target) {
        case "internal":
          this.$router.push("/projects/" + project.link);
          break;
        case "external":
          window.open(project.link);
          break;

        default:
          break;
      }
    },
    expand(p) {
      this.$set(this.expanded, p, !this.expanded[p]);
    },
    openDialog(p) {
      this.$set(this.details_dialog, p, !this.details_dialog[p]);
    },
    sync() {
      this.projects = this.projectsData;
    }
  },
  mounted() {
    if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
      bootstrap().then(gtag => {
        this.$gtag.pageview({
          page_path: "/projects"
        });
      });
    }
  },
  computed: {
    categories() {
      var output = [this.$t('projects.categories.all')]; // Add All in front of the computed so we have this choice
      // output.push(this.$t('projects.categories.all'));
      var keys = [];
      let projects = [
        {
          name: "Baskewitsch.lu",
          type: this.$t('projects.categories.live'),
          link: "https://github.com/Sashimee/portfolio",
          img: "baskewitsch.lu",
          tags: ["Vue.js", "RGPD", "laravel"],
          target: "external",
          info: this.$t('projects.texts.baskewitsch')
        },
        {
          name: "Dawa",
          type: this.$t('projects.categories.live'),
          link: "http://www.dawa.lu",
          img: "dawa",
          tags: ["laravel", "responsive", "secure"],
          target: "external",
          info: this.$t('projects.texts.dawa')
        },
        {
          name: "About Blank Generator",
          type: this.$t('projects.categories.live'),
          link: "http://aboutblankgenerator.com",
          img: "blank",
          target: "external",
          tags: ["css", "responsive"],
          info: this.$t('projects.texts.abg')
        },
        {
          name: "Bootstrap Site",
          type: this.$t('projects.categories.template'),
          link: "x1",
          tags: ["css", "bootstrap", "responsive"],
          target: "internal",
          info: this.$t('projects.texts.boot')
        },
        {
          name: "Pet4U",
          type: this.$t('projects.categories.template'),
          link: "pet4u",
          target: "internal",
          tags: ["js", "css"],
          info: this.$t('projects.texts.pet')
        },
        {
          name: "News Site",
          type: this.$t('projects.categories.template'),
          link: "news",
          tags: ["css"],
          target: "internal",
          info: this.$t('projects.texts.news')
        },
        {
          name: "Responsive Cupcake",
          type: this.$t('projects.categories.template'),
          link: "cupcake",
          tags: ["css", "responsive"],
          target: "internal",
          info: this.$t('projects.texts.cupcake')

        },
        {
          name: "Liberty",
          type: this.$t('projects.categories.template'),
          link: "liberty",
          tags: ["css"],
          target: "internal",
          info: this.$t('projects.texts.liberty')
        },
        {
          name: "Peinture.lu",
          type: this.$t('projects.categories.live'),
          link: "http://www.peinture.lu",
          img: "peinture",
          tags: ["wordpress", "css", "responsive"],
          target: "external",
          info: this.$t('projects.texts.peinture')
        },
        {
          name: "Old Portfolio",
          type: this.$t('projects.categories.archive'),
          link: "https://github.com/Sashimee/ProPort",
          img: "old_portfolio",
          tags: ["responsive", "php"],
          target: "external",
          info: this.$t('projects.texts.old')
        }
      ];
      projects.forEach(function (project) {
        var key = project.type;
        if (keys.indexOf(key) === -1) {
          keys.push(key);
          output.push(project.type);
        }
      });
      return output;
    },
    projectsList() {
      let projects = [
        {
          name: "Baskewitsch.lu",
          type: this.$t('projects.categories.live'),
          link: "https://github.com/Sashimee/portfolio",
          img: "baskewitsch.lu",
          tags: ["Vue.js", "RGPD", "laravel"],
          target: "external",
          info: this.$t('projects.texts.baskewitsch')
        },
        {
          name: "Dawa",
          type: this.$t('projects.categories.live'),
          link: "http://www.dawa.lu",
          img: "dawa",
          tags: ["laravel", "responsive", "secure"],
          target: "external",
          info: this.$t('projects.texts.dawa')
        },
        {
          name: "About Blank Generator",
          type: this.$t('projects.categories.live'),
          link: "http://aboutblankgenerator.com",
          img: "blank",
          target: "external",
          tags: ["css", "responsive"],
          info: this.$t('projects.texts.abg')
        },
        {
          name: "Bootstrap Site",
          type: this.$t('projects.categories.template'),
          link: "x1",
          tags: ["css", "bootstrap", "responsive"],
          target: "internal",
          info: this.$t('projects.texts.boot')
        },
        {
          name: "Pet4U",
          type: this.$t('projects.categories.template'),
          link: "pet4u",
          target: "internal",
          tags: ["js", "css"],
          info: this.$t('projects.texts.pet')
        },
        {
          name: "News Site",
          type: this.$t('projects.categories.template'),
          link: "news",
          tags: ["css"],
          target: "internal",
          info: this.$t('projects.texts.news')
        },
        {
          name: "Responsive Cupcake",
          type: this.$t('projects.categories.template'),
          link: "cupcake",
          tags: ["css", "responsive"],
          target: "internal",
          info: this.$t('projects.texts.cupcake')

        },
        {
          name: "Liberty",
          type: this.$t('projects.categories.template'),
          link: "liberty",
          tags: ["css"],
          target: "internal",
          info: this.$t('projects.texts.liberty')
        },
        {
          name: "Peinture.lu",
          type: this.$t('projects.categories.live'),
          link: "http://www.peinture.lu",
          img: "peinture",
          tags: ["wordpress", "css", "responsive"],
          target: "external",
          info: this.$t('projects.texts.peinture')
        },
        {
          name: "Old Portfolio",
          type: this.$t('projects.categories.archive'),
          link: "https://github.com/Sashimee/ProPort",
          img: "old_portfolio",
          tags: ["responsive", "php"],
          target: "external",
          info: this.$t('projects.texts.old')
        }
      ];
      if (this.categorySelect == "All") {
        return projects;
      } else {
        return projects.filter(project => {
          return project.type.match(this.categorySelect);
        });
      }
    }
  }
};
</script>

<style lang="sass">
.colored_visit
  display: none

.my-card
  width: 250px
  margin: 1rem
  overflow: hidden
  .q-img
    height: 200px
    &:hover
      cursor: pointer
      transform: scale(1.05,1.05)
      transition-duration: 0.5s
      .colored_visit
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        background-color: $primary
        opacity: 0.6

.info_chip
  position: absolute
  top: -0.5rem
  right: -0.5rem
  z-index: 1999
  pointer-events: none

.q-chip--dense .q-chip__icon
  font-size: 0.75rem

.tags_list
  width: 85%
.detail_button
  //width: 37px
  //height: 37px
.detail_button:hover

.details_dialog
  background-color: $dark
  margin: auto
</style>
