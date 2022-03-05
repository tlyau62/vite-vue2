import App from "./App.vue";
import Vue from "vue";
import "./style.css";

new Vue({
  render(h) {
    return h(App);
  },
}).$mount("#app");
