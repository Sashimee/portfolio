<template>
  <q-page class="flex flex-center column q-mt-xs q-mb-md q-pa-sm">
    <q-btn to="/blog" flat rounded color="secondary" :label="$t('blogPost1.back')" icon="arrow_left" />
    <div class="column flex-center article-width q-ml-sm q-mr-sm">
      <div class="main_title" v-html="$t('blogPost1.title')"></div>
      <div class="undertitle" v-html="$t('blogPost1.title2')"></div>
    </div>
    <q-img class="image my-img" :src="cover" :alt="$t('blogPost1.title')" loading="lazy" spinner-color="white"
      style="max-width: 300px; max-height: 300px;" @click="imageDialog = true"><q-icon
        name="fas fa-expand" color="primary" class="my-text" size="50px"/></q-img>
    <q-dialog v-model="imageDialog">
      <q-card><img @click="imageDialog = !imageDialog" :src="cover" :alt="$t('blogPost1.title')" loading="lazy"></q-card>
    </q-dialog>
    <div class="column article-width q-ml-sm q-mr-sm">
      <div class="row items-center" v-for="(item, index) in $t('blogPost1.sections')" :key="index">
        <span v-html="item.title" class="title"></span>
        <div v-for="(section, s) in item.paragraphs" :key="s" class="paragraph justify-start">
          <div v-html="section"></div>
        </div>
        <q-img style="max-height: 140px; max-width: 100%; margin-top: 5rem; margin-bottom: 5rem" :src="'/screenshots/article_one/' + item.img + '.jpg'" loading="lazy" spinner-color="white"></q-img>
      </div>
    </div>
    <div v-if="loading">
      <q-spinner-pie color="primary" size="2em" />
      <q-tooltip class="bg-accent text-black" :offset="[0, 8]">QSpinnerPie</q-tooltip>
    </div>
    <q-form v-else @submit="onSubmit" @reset="onReset" class="form_design">
      <p class="q-pt-xl">{{$t('blogPost1.incentive')}}</p>
      <q-input class="q-mt-sm" v-model="email" :label="$t('contact.email')" standout type="email" lazy-rules
        :rules="[val => !!val || $t('contact.missing_email'), isValidEmail]" />

      <div class="row justify-around q-mt-md">
        <q-btn :label="$t('contact.submit')" type="submit" color="primary"><q-tooltip class="bg-accent text-black"
            :offset="[10, 10]" :delay="1000" transition-show="flip-right" transition-hide="flip-right">
            {{ $t('contact.submit_tooltip') }}
          </q-tooltip></q-btn>
        <q-btn :label="$t('contact.reset')" type="reset" color="primary" flat class="q-ml-sm"><q-tooltip
            class="bg-accent text-black" :offset="[10, 10]" :delay="1000" transition-show="flip-right"
            transition-hide="flip-right">
            {{ $t('contact.reset_tooltip') }}
          </q-tooltip></q-btn>
        <p class="q-mt-md">
          {{ $t('contact.disclaimer_start') }}
          <a :class="$q.dark.isActive ? 'g_link_white' : 'g_link_black'" href="https://policies.google.com/privacy">{{
            $t('contact.disclaimer_link_1') }}</a>
          {{ $t('contact.disclaimer_middle') }}
          <a :class="$q.dark.isActive ? 'g_link_white' : 'g_link_black'" href="https://policies.google.com/terms">{{
            $t('contact.disclaimer_link_2') }}</a>
          {{ $t('contact.disclaimer_end') }}
        </p>
      </div>
    </q-form>
  </q-page>
</template>
  
<script>
import { api } from "@/boot/axios";
import { usePageMeta } from "@/composables/use-page-meta";
import { trackEvent } from "@/utils/analytics";
import { isValidEmail } from "@/utils/validation";
import cover from "@/assets/gc_info_fr.png";

export default {
  name: "BlogArticle",
  setup() {
    usePageMeta({
      titleKey: "blogPost1.title",
      descriptionKey: "seo.blog.description",
      path: "/blog/article"
    });
  },
  data() {
    return {
      cover,
      imageDialog: false,
      email: null,
      loading: false
    };
  },
  methods: {
    isValidEmail() {
      return isValidEmail(this.email) || this.$t("contact.invalid_email");
    },
    async onSubmit() {
      this.loading = true;

      try {
        await this.$recaptchaLoaded();
        const token = await this.$recaptcha("submit");

        await api.post("/mail", {
          name: "Une personne souhaite s'inscrire à la newsletter",
          message:
            "Elle est d'accord pour que tu conserves les données jusqu'à demande contraire",
          email: this.email,
          token
        });

        trackEvent("newsletter_signup");
        this.onReset();
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: this.$t("contact.sent")
        });
      } catch (error) {
        trackEvent("newsletter_signup_failed");
        this.$q.notify({
          color: "red-4",
          textColor: "black",
          icon: "cloud_off",
          message: this.$t("contact.not_sent")
        });
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    onReset() {
      this.email = null;
    }
  }
};
</script>
  
<style lang="sass">
.form_design
  width: 85%
  max-width: 400px
  min-width: 300px
.g_link_white
  color: white
.g_link_black
  color: black
.article-width
  max-width: 900px
.paragraph
  margin-bottom: 1rem
  text-align: justify
.title
  font-size: 2rem
  padding-bottom: 2rem
  padding-top: 1rem
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
.my-img .my-text 
  opacity: 0
  transition: .3s
  position: absolute
  top: 125px
  left: 125px
    
.my-img:hover .my-text 
  visibility: visible
  opacity: 1

strong
  color: green  
</style>
  