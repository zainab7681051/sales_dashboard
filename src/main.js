import { createApp } from "vue";
import "./style.css"
import App from "./app.vue"
import router from './router.js'

createApp(App).use(router).mount('#app')