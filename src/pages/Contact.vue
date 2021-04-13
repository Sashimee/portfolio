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
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => (val !== null && val !== '') || 'Please type your age',
          val => (val > 0 && val < 100) || 'Please type a real age'
        ]"
      ></q-input>

      <q-toggle
        v-model="accept"
        label="I accept the license and terms"
      ></q-toggle>

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
      age: null,

      accept: false
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  },
};
</script>