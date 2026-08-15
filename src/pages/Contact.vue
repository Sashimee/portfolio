<template>
  <q-page class="flex flex-center">
    <div v-if="loading">
      <q-spinner-pie color="primary" size="2em" />
      <q-tooltip class="bg-accent text-black" :offset="[0, 8]">QSpinnerPie</q-tooltip>
    </div>
    <q-form v-else @submit="onSubmit" @reset="onReset" class="form_design">
      <q-input autofocus standout v-model="name" :label="$t('contact.name')" lazy-rules :rules="[
        val => (val && val.length > 0) || $t('contact.please_type'),
        val => val.length < 1024 || $t('contact.name_long')
      ]"></q-input>

      <q-input class="q-mt-sm" v-model="email" :label="$t('contact.email')" standout type="email" lazy-rules
        :rules="[val => !!val || $t('contact.missing_email'), isValidEmail]" />
      <q-input class="q-mt-sm" v-model="message" :label="$t('contact.message')" standout type="textarea" lazy-rules
        :rules="[
          val => (val && val.length > 0) || $t('contact.please_type'),
          val => val.length < 5120 || val.length + '/5120'
        ]" />

      <div class="row justify-around q-mt-md">
        <q-btn :label="$t('contact.submit')" type="submit" color="primary"><q-tooltip class="bg-accent text-black"
            :offset="[10, 10]" :delay="1000" transition-show="flip-right" transition-hide="flip-right">
            {{ $t('contact.submit_tooltip') }}
          </q-tooltip></q-btn>
        <q-btn :label="$t('contact.reset')" type="reset" color="primary" outline class="q-ml-sm"><q-tooltip
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

export default {
  name: "PageContact",
  setup() {
    usePageMeta({
      titleKey: "seo.contact.title",
      descriptionKey: "seo.contact.description",
      path: "/contact"
    });
  },
  data() {
    return {
      name: null,
      message: null,
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
          name: this.name,
          message: this.message,
          email: this.email,
          token
        });

        trackEvent("contact_message_sent");
        this.onReset();
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: this.$t("contact.sent")
        });
      } catch (error) {
        trackEvent("contact_message_failed");
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
      this.name = null;
      this.message = null;
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
</style>
