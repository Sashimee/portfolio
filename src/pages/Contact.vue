<template>
  <q-page class="flex flex-center">
    <div v-if="loading">
      <q-spinner-pie color="primary" size="2em" />
      <q-tooltip :offset="[0, 8]">QSpinnerPie</q-tooltip>
    </div>
    <q-form v-else @submit="onSubmit" @reset="onReset" class="form_design">
      <q-input
        standout
        v-model="name"
        label="Your name *"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Please type something',
          val => val.length < 1024 || 'Name too long'
        ]"
      ></q-input>

      <q-input
        class="q-mt-sm"
        v-model="email"
        label="Your email *"
        standout
        type="email"
        lazy-rules
        :rules="[val => !!val || 'Email is missing', isValidEmail]"
      />

      <q-input
        class="q-mt-sm"
        v-model="message"
        label="Your message *"
        standout
        type="textarea"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Please type something',
          val => val.length < 5120 || val.length + '/5120'
        ]"
      />

      <div class="row justify-around q-mt-md">
        <q-btn label="Submit" type="submit" color="primary"></q-btn>
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        ></q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { api } from "boot/axios";

export default {
  name: "PageIndex",
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
      // https://forum.quasar-framework.org/topic/5062/email-validation-using-quasar-itself/3
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(this.email) || "Invalid email";
    },
    onSubmit() {
      this.loading = true;
      api
        .post("/mail", {
          name: this.name,
          message: this.message,
          email: this.email
        })
        .then(response => {
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
          this.loading = false;
          this.$q.notify({
            color: "red-4",
            textColor: "black",
            icon: "cloud_done",
            message: "Error while submitting : " + error
          });
        });
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
</style>
