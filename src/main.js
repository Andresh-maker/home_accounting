import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "./config.json";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

firebase.initializeApp(config.info);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
