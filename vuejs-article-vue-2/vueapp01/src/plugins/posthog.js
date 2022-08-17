import posthog from "posthog-js";

export default {
  install(Vue, options) {
    Vue.prototype.$posthog = posthog.init(
      "<POSTHOG PUBLIC API KEY>",
      {
        api_host: "<POSTHOG HOST URL>"
      }
    );
  }
};
