import { createApp } from "vue";
import "./style.css"
import App from "./app.vue"
import router from './router.js'
import vueApexCharts from "vue3-apexcharts";

createApp(App)
.use(router)
.use(vueApexCharts)
.mount('#app')
