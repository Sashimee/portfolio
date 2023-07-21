<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start justify-center">
      <q-card class="my-card" v-for="(post) in postsCards" :key="post.Title">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" @click="goto(post.link)">
        <div class="absolute-bottom text-h6">
          {{post.Title}}
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
import { bootstrap } from "vue-gtag";
export default {
  name: "PageBlog",
  data() {
    return {
      postsList: [],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      blogData: [
        {
          Title: "Hi",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        },
        {
          Title: "Hi2",
          Short: "YO",
          link: "/blog/article"
        }
      ]
    }
  },
  methods: {
    sync() {
      this.postsList = this.blogData
    },
    goto(link) {
      this.$router.push(link);
      }
  },
  computed: {
    postsCards(){
      return this.postsList
    }
  },
    mounted() {
    this.sync();
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

</style>