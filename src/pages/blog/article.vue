<template>
  <q-page class="flex flex-center column q-mt-xs q-mb-md q-pa-sm">
    <div class="column flex-center article-width q-ml-sm q-mr-sm">
      <div class="main_title" v-html="$t('blogPost1.title')"></div>
      <div class="undertitle" v-html="$t('blogPost1.title2')"></div>
    </div>
    <q-img class="image" src="~assets/gc_info_fr.png" loading="lazy" spinner-color="white"
      style="max-width: 300px; max-height: 300px;" @click="imageDialog = true"></q-img>
    <q-dialog v-model="imageDialog">
      <q-card><img src="~assets/gc_info_fr.png" loading="lazy" spinner-color="white"></q-card>
    </q-dialog>
    <div class="column justify-start article-width q-ml-sm q-mr-sm">
      <div class="row" v-for="(item, index) in $t('blogPost1.sections')" :key="index">
        <span v-html="item.title" class="title"></span>
        <div v-for="(section, s) in item.paragraphs" :key="s" class="paragraph">
          <span v-html="section"></span>
        </div>
      </div>
    </div>
  </q-page>
</template>
  
<script>
export default {
  name: "article",
  data() {
    return {
      imageDialog: false,
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
.paragraph
  margin-bottom: 1rem
  text-align: justify
.title
  font-size: 2rem
  padding-bottom: 2rem
.main_title
  font-size: 3rem
.undertitle
  font-size: 2rem
  padding-bottom: 2rem
.image
  &:hover
    cursor: pointer
    transform: scale(1.05,1.05)
    transition-duration: 0.5s
</style>
  