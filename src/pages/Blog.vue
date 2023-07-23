<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start justify-center">
      <q-card class="my-card" v-for="(post) in postsCards" :key="post.Title">
      <q-img src="~assets/gc_info_fr.png" @click="goto(post.link)">
        <div class="absolute-bottom text-h6">
          {{post.Title}}
        </div>
      </q-img>

      <q-card-section v-html="post.Title2">
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
import i18n from 'src/boot/i18n';
import { bootstrap } from "vue-gtag";
import VueI18n from 'vue-i18n';
export default {
  name: "PageBlog",
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  },
  methods: {
    goto(link) {
      this.$router.push(link);
      }
  },
  computed: {
    postsCards(){
      let blogData = [
        {
          Title: this.$t('blogPost1.title'),
          Title2: this.$t('blogPost1.title2'),
          link: this.$t('blogPost1.link')
        }
      ]
      return blogData
    }
  },
    mounted() {
    if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
      bootstrap().then(gtag => {
        this.$gtag.pageview({
          page_path: "/blog"
        });
      });
    };
  },
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