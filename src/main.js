import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// css files
import "./assets/main.css";

// sweet alert
import VueSweetalert2 from "vue-sweetalert2";
import "@sweetalert2/theme-material-ui/material-ui.css";

const swalOptions = {
  confirmButtonColor: "#2495fe;",
  cancelButtonColor: "#c86d6e",
};

// auth
import { projectAuth } from "./firebase/config";
let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(VueSweetalert2, swalOptions)
      .mount("#app");
  }
});
