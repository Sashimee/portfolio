import Vue from "vue";
import VueGtag from "vue-gtag";

Vue.use(VueGtag);

Vue.prototype.$gtag = new VueGtag({
  config: { id: "UA-159981361-1" },
  bootstrap: false
});
export default ({ app, router, store, Vue }) => {
};
