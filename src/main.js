import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
axios.defaults.baseURL = "http://devapi.finansiada.com:8084";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
