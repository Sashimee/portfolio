<template>
  <q-page class="flex flex-start column">
    <div class="row justify-center q-mt-xl">
      <q-select
        class="my-card q-mt-xl"
        outlined
        v-model="categorySelect"
        :options="categories"
        dense
        label="Category"
      >
      </q-select>
    </div>
    <div class="q-pa-md row items-start justify-center">
      <transition-group
        class="row items-start justify-center space-between"
        appear
        enter-active-class="animated pulse"
      >
        <q-card
          class="my-card"
          v-for="project in projectsList"
          :key="project.name"
        >
          <q-card-section class="info_chip">
            <q-chip dense color="accent" icon="fas fa-tint"
              ><div class="text">{{ project.type }}</div></q-chip
            >
          </q-card-section>
          <!-- Image for external links -->
          <q-img
            v-if="project.target == 'external'"
            :src="'/screenshots/' + project.img + '.png'"
          >
            <div class="absolute-bottom">
              <div class="text-h6">{{ project.name }}</div>
            </div>
          </q-img>
          <!-- Image for internal links -->
          <q-img v-else :src="'/screenshots/' + project.link + '.png'">
            <div class="absolute-bottom">
              <div class="text-h6">{{ project.name }}</div>
            </div>
          </q-img>

          <q-card-actions>
            <q-btn
              v-if="project.target == 'external'"
              flat
              type="a"
              :href="project.link"
              target="_blank"
              >Visit</q-btn
            >
            <q-btn
              v-else
              :to="{
                path: '/projects/' + project.link
              }"
              flat
              >Visit</q-btn
            >
          </q-card-actions>
        </q-card>
      </transition-group>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      projects: [],
      categorySelect: "",
      projectsData: [
        // {
        //   name: "TooDooD",
        //   type: "php",
        //   link: "/projects/toodood",
        //   target: "internal"
        // },
        // {
        //   name: "PHP Input Validation",
        //   type: "php",
        //   link: "/projects/input",
        //   target: "internal"
        // },
        // {
        //   name: "Pokémon Ajax Call",
        //   type: "php",
        //   link: "/projects/ajax",
        //   target: "internal"
        // },
        // {
        //   name: "Sorting of an array",
        //   type: "php",
        //   link: "/projects/sorting",
        //   target: "internal"
        // },
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
          name: "Pet4U",
          type: "Templates",
          link: "pet4u",
          target: "internal",
          tags: ["js", "css", "html", "non-responsive", "self-hosted"],
          info:
            "Simple contact page layout. HTML structure respecting best practices. Contact form and Google Maps integration."
        },
        {
          name: "About Blank Generator",
          type: "Live Site",
          link: "http://aboutblankgenerator.com",
          img: "blank",
          target: "external",
          tags: ["css", "html", "responsive", "self-hosted"],
          info:
            'After some research I found out the "about blank" research query was made all around the world. (https://trends.google.fr/trends/explore?q=about%20blank) This led me to realize this site to see if I could be on top of the search rankings with SEO.'
        },
        {
          name: "Peinture.lu",
          type: "Live Site",
          link: "http://www.peinture.lu",
          img: "peinture",
          tags: ["wordpress", "migration", "css", "html", "responsive"],
          target: "external",
          info:
            "I migrated this Wordpress site to another hosting provider (OVH) and had only acces to a raw export of the site + database. I also added a picture gallery and did some bugfixing. Original site was made by Dotcom."
        },
        {
          name: "Dawa",
          type: "Live Site",
          link: "http://www.dawa.lu",
          img: "dawa",
          tags: [
            "laravel",
            "sql",
            "game",
            "responsive",
            "secure login",
            "ssl",
            "self-hosted"
          ],
          target: "external",
          info:
            "Massive Thanks to Laurent Bourgeois, Aurélien Pal and Ilyes Satouri for this awesome collaboration. This is the project that validated my Full Stack Developer skills with Numericall."
        },
        {
          name: "News Site",
          type: "Templates",
          link: "news",
          tags: [
            "html",
            "css",
            "non-responsive",
            "self-hosted"
          ],
          target: "internal",
          info:
            "Tiny example of a news site."
        },
        {
          name: "Bootstrap Site",
          type: "Templates",
          link: "x1",
          tags: [
            "html",
            "css",
            "bootstrap",
            "responsive",
            "self-hosted"
          ],
          target: "internal",
          info:
            "Example of a full bootstrap site."
        },
        {
          name: "Responsive Cupcake",
          type: "Templates",
          link: "cupcake",
          tags: [
            "html",
            "css",
            "responsive",
            "self-hosted"
          ],
          target: "internal",
          info:
            "Tiny responsive cupcake site."
        },
      ]
    };
  },
  methods: {
    goto(project) {
      console.log(project);
    },
    sync() {
      this.projects = this.projectsData;
    }
  },
  mounted() {
    this.sync();
  },
  computed: {
    categories() {
      var output = ["All"]; // Add All in front of the computed so we have this choice
      var keys = [];
      this.projects.forEach(function(project) {
        var key = project.type;
        if (keys.indexOf(key) === -1) {
          keys.push(key);
          output.push(project.type);
        }
      });
      return output;
    },
    projectsList() {
      if (this.categorySelect == "All") {
        return this.projects;
      }
      return this.projects.filter(project => {
        return project.type.match(this.categorySelect);
      });
    }
  }
};
</script>

<style lang="sass">
.my-card
  width: 250px
  margin: 1rem
  overflow: hidden
  .q-img
    height: 200px
    &:hover
      transform: scale(1.05,1.05)
      transition-duration: 0.5s
.info_chip
  position: absolute
  top: -0.5rem
  right: -0.5rem
  z-index: 1999
.q-chip--dense .q-chip__icon
  font-size: 0.75rem
</style>
