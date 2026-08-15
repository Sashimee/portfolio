<template>
  <q-page class="text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        {{ $t("notFound.message") }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="primary"
        text-color="white"
        unelevated
        to="/"
        :label="$t('notFound.home')"
        no-caps
      />
    </div>
  </q-page>
</template>

<script>
import { useRoute } from "vue-router";
import { usePageMeta } from "@/composables/use-page-meta";

export default {
  name: "ErrorNotFound",
  setup() {
    const route = useRoute();
    usePageMeta({
      titleKey: "seo.notFound.title",
      descriptionKey: "seo.notFound.description",
      path: () => route.path,
      noindex: true
    });
  }
};
</script>
