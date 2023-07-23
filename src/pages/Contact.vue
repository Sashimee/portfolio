<template>
  <q-page class="flex flex-center">
    <div v-if="loading">
      <q-spinner-pie color="primary" size="2em" />
      <q-tooltip content-class="bg-accent text-black" :offset="[0, 8]">QSpinnerPie</q-tooltip>
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
        <q-btn :label="$t('contact.submit')" type="submit" color="primary"><q-tooltip content-class="bg-accent text-black"
            :offset="[10, 10]" :delay="1000" transition-show="flip-right" transition-hide="flip-right">
            {{ $t('contact.submit_tooltip') }}
          </q-tooltip></q-btn>
        <q-btn :label="$t('contact.reset')" type="reset" color="primary" outline class="q-ml-sm"><q-tooltip
            content-class="bg-accent text-black" :offset="[10, 10]" :delay="1000" transition-show="flip-right"
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
import { api } from "boot/axios";
import { bootstrap } from "vue-gtag";

export default {
  name: "PageContact",
  data() {
    return {
      name: null,
      message: null,
      email: null,
      loading: false
    };
  },
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("submit");

      // Do stuff with the received token.
      return token;
    },
    isValidEmail() {
      // https://forum.quasar-framework.org/topic/5062/email-validation-using-quasar-itself/3
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(this.email) || "Invalid email";
    },
    async onSubmit() {
      this.loading = true;
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const tokenz = await this.$recaptcha("submit");
      api
        .post("/mail", {
          name: this.name,
          message: this.message,
          email: this.email,
          token: tokenz
        })
        .then(response => {
          if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
            this.$gtag.query("event", "sent", {
              event_category: "message",
              event_label: "Message Sent",
              value: 1
            });
          }
          this.loading = false;
          this.onReset();
          this.$q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted"
          });
        })
        .catch(error => {
          if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
            this.$gtag.query("event", "not_sent", {
              event_category: "message",
              event_label: "Message Not Sent",
              value: 1
            });
          }
          this.loading = false;
          this.$q.notify({
            color: "red-4",
            textColor: "black",
            icon: "cloud_done",
            message: "" + error
          });
        });
    },

    onReset() {
      this.name = null;
      this.message = null;
      this.email = null;
    }
  },
  mounted() {
    if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
      bootstrap().then(gtag => {
        this.$gtag.pageview({
          page_path: "/contact"
        });
      });
    }
  }
  //watch: {
  // name: function (e) {
  //  console.log(this.name)
  // },

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
