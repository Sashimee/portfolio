import Vue from "vue";
import VueI18n from "vue-i18n";
import { Quasar } from 'quasar';
import messages from "src/i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: Quasar.lang.getLocale() || 'en',
  fallbackLocale: "en",
  messages
});

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n;
};

// if you need to import it from
// other files, then:
export { i18n };
