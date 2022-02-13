import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "open-props/style";
import "open-props/normalize";
import "@/assets/reset.css";
import "@/assets/base.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
