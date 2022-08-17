// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import posthog from "./plugins/posthog";
import posthogPlugin from "./plugins/posthog";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(posthogPlugin);
Object.defineProperty(Vue.prototype, "$posthogg", { value: posthog });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
