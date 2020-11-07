import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import fonts from "./font-data.js";

Vue.config.productionTip = false;

let data = {
  fontArray: fonts,
  myQuotes: [],
  isEmpty: true,
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
