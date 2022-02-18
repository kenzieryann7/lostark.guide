import { createApp } from 'vue'
import App from './App.vue';
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";

import "@/css/style.css";

const app = createApp(App).use(router);

app.mount("#app");
