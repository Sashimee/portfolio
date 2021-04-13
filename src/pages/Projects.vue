<template>
  <q-page class="flex flex-center">
    <q-select
      class="my-card q-mt-xl"
      outlined
      v-model="categorySelect"
      :options="categories"
      dense
      label="Category"
    >
    </q-select>
    <div
      class="q-pa-md row items-start justify-center q-gutter-md q-mb-xl"
    >
    <transition-group
  appear
  enter-active-class="animated pulse"

>
      <q-card class="my-card" v-for="project in projectsList" :key="project.name">
        <q-card-section class="info_chip">
          <q-chip outline dense color="primary" icon="fas fa-tint"
            ><div class="text">{{ project.type }}</div></q-chip
          >
        </q-card-section>
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
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
          <q-btn v-else :to="project.link" flat>Visit</q-btn>
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
        {
          name: "Dawa",
          type: "full stack",
          link: "http://www.dawa.lu",
          target: "external"
        },
        {
          name: "TooDooD",
          type: "php",
          link: "/projects/toodood",
          target: "internal"
        },
        {
          name: "PHP Input Validation",
          type: "php",
          link: "/projects/input",
          target: "internal"
        },
        {
          name: "Pokémon Ajax Call",
          type: "php",
          link: "/projects/ajax",
          target: "internal"
        },
        {
          name: "Sorting of an array",
          type: "php",
          link: "/projects/sorting",
          target: "internal"
        },
        {
          name: "Peinture.lu",
          type: "php",
          link: "http://www.peinture.lu",
          target: "external"
        },
        {
          name: "Rack",
          type: "hardware",
          link: "/projects/rack",
          target: "external"
        },
        {
          name: "Mikrotik Networking",
          type: "networking",
          link: "/projects/networking",
          target: "external"
        },
        {
          name: "About Blank Generator",
          type: "seo",
          link: "http://aboutblankgenerator.com",
          target: "external"
        },
        {
          name: "Test",
          type: "test",
          link: "/projects/test",
          target: "internal"
        }
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
    projectsList(){
      if (this.categorySelect == "All") {
        return this.projects;
      }
      return this.projects.filter((project) => {
        return project.type.match(this.categorySelect)
      })
    }
  }
};
</script>

<style lang="sass">
.my-card
  width: 250px
.info_chip
  // border-top-left-radius: unset
  // border-top-right-radius: unset
  // border-bottom-left-radius: unset
  // border-bottom-right-radius: unset
  position: absolute
  top: -0.5rem
  right: -0.5rem
  z-index: 2999
</style>
