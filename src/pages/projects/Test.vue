<template>
  <q-page class="flex flex-center">
    <iframe src="/projects/test/index.html" class="iframe"></iframe>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>

<style lang="sass">
.iframe
  height: 80vh
  width: 100%
  margin: 1rem
  border: 3px solid black
</style>
