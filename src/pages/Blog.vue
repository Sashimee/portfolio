<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start justify-center">
      <q-card class="my-card" v-for="(post) in postsCards" :key="post.Title">
      <q-img :src="cover" :alt="post.Title" @click="goto(post.link)">
        <div class="absolute-bottom text-h6">
          {{post.Title}}
        </div>
      </q-img>

      <q-card-section>
        <div v-html="post.Title2"></div>
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
import { usePageMeta } from "@/composables/use-page-meta";
import cover from "@/assets/gc_info_fr.png";

export default {
  name: "PageBlog",
  setup() {
    usePageMeta({
      titleKey: "seo.blog.title",
      descriptionKey: "seo.blog.description",
      path: "/blog"
    });
  },
  data() {
    return {
      cover
    };
  },
  methods: {
    goto(link) {
      this.$router.push(link);
    }
  },
  computed: {
    postsCards() {
      return [
        {
          Title: this.$t("blogPost1.title"),
          Title2: this.$t("blogPost1.title2"),
          link: this.$t("blogPost1.link")
        }
      ];
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 350px
  margin: 1rem
  overflow: hidden
  .q-img
    height: 350px
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

</style>