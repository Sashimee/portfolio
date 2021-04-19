<template>
  <q-page class="flex flex-center">
    Test
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit id,
      ipsa eum ea mollitia, voluptatum possimus eligendi expedita dignissimos
      nemo rem dolorem temporibus, in aliquid facilis modi tempora officiis
      debitis!
    </p>
    <p>
      Animi possimus atque nemo, illo, distinctio accusantium sed commodi
      explicabo nulla inventore deserunt, perferendis porro cupiditate ipsa quam
      tenetur? Nulla, distinctio. Nulla nam veniam incidunt nostrum totam optio
      voluptatibus blanditiis!
    </p>
    <p>
      Perferendis doloremque quisquam et repellat odit obcaecati, nulla sunt
      fuga corporis illum nam veritatis aut autem! Quibusdam eveniet neque
      veniam accusamus animi. Nobis adipisci quis reprehenderit dolorum,
      explicabo officiis porro.
    </p>
  </q-page>
</template>

<script>
import { bootstrap } from "vue-gtag";
export default {
  name: "PageAbout",
  mounted() {
    if (this.$q.cookies.get("accepted_tracking_cookies") === true) {
      bootstrap().then(gtag => {
        this.$gtag.pageview({
          page_path: "/about"
        });
      });
    }
  }
};
</script>
