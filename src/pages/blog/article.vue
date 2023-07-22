<template>
  <q-page class="flex flex-center column q-mt-xs q-mb-md q-pa-sm">
    <div class="column justify-start article-width q-ml-sm q-mr-sm">
      <div class="paragraphs" v-html="$t('blogPost.title')"></div>
      <div class="row flex justify-center">
        <q-img src="~assets/gc_info_fr.png" loading="lazy" spinner-color="white" style="max-width: 300px; max-height: 300px;"
          @click="imageDialog = true"></q-img><q-dialog v-model="imageDialog">
          <q-card><img src="~assets/gc_info_fr.png" loading="lazy" spinner-color="white"></q-card>

        </q-dialog>
        
        
        <div class="paragraphs" v-html="$t('blogPost.paragraph1')"></div>
      </div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph2')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph3')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph4')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph5')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph6')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph7')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph8')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph9')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph10')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph11')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph12')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph13')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph14')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph15')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph16')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph17')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph18')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph19')"></div>
      <div class="paragraphs" v-html="$t('blogPost.paragraph20')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source1')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source2')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source3')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source4')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source5')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source6')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source7')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source8')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source9')"></div>
      <div class="paragraphs" v-html="$t('blogPost.source10')"></div>
    </div>
    <div class="row justify-center chips_list">
      <q-chip v-for="source in sources_list" v-bind:key="source.label" clickable size="12px" color="accent"
        class="text-black" :icon="source.icon" @click.prevent="goto(source.link)">
        {{ source.label }}
        <q-tooltip content-class="bg-accent text-black" :offset="[10, 10]" :delay="1000" transition-show="flip-right"
          transition-hide="flip-right">
          Know more about {{ source.label }}
        </q-tooltip>
      </q-chip>
    </div>
  </q-page>
</template>
  
<script>
export default {
  name: "article",
  data() {
    return {
      imageDialog: false,
      sources_list: [
        {
          label: "Source 1",
          icon: "fas fa-external-link-alt",
          link: "https://www.example.com/source1"
        },
        {
          label: "Source 2",
          icon: "fas fa-external-link-alt",
          link: "https://www.example.com/source2"
        },
        // ... add more sources as needed
      ]
    };
  },
  methods: {
    goto(link) {
      window.open(link);
    }
  }
};
</script>
  
<style lang="sass">
  .article-width
    max-width: 900px
  
  .paragraphs
    padding-bottom: 1rem
  </style>
  