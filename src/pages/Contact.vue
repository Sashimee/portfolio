<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      ></q-input>

      <q-input
        v-model="email"
        label="Your email *"
        filled
        type="email"
        hint="Email"
        lazy-rules
        :rules="[val => !!val || 'Email is missing', isValidEmail]"
      />

      <q-input
        v-model="text"
        filled
        type="textarea"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />

      <div>
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
export default {
  name: "PageIndex",
  data() {
    return {
      name: null,
      text: null,
      email: null
    };
  },
  methods: {
    isValidEmail() {
      // https://forum.quasar-framework.org/topic/5062/email-validation-using-quasar-itself/3
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(this.email) || "Invalid email";
    },
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted"
      });
    },

    onReset() {
      this.name = null;
      this.text = null;
      this.email = null;
    }
  }
};
</script>
