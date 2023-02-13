import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ru from "@/language/ru";

import "bootstrap/dist/css/bootstrap-reboot.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "./assets/main.css";
import "./assets/icomoon/style.css";

const pinia = createPinia();
const i18n = createI18n({
  legacy: false,
  locale: "ru",
  globalInjection: true,
  numberFormats: {
    ru: {
      currency: {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
    },
  },
  messages: {
    ru: ru,
  },
});
const app = createApp(App);

app.use(router);

app.use(pinia);
app.use(i18n);
app.mount("#app");
