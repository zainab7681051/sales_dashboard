import { createRouter, createWebHistory } from 'vue-router'
import home from "./views/dashboardView.vue"
import base from "../vite.config.js"

const routes = [
  { path: `${base}/`, name: "dashboard", component: home },
  { path: `${base}/leaderboard`, name: "leaderboard", component: () => import("./views/leaderboardView.vue") },
  { path: `${base}/order`, name: "order", component: () => import("./views/orderView.vue") },
  { path: `${base}/product`, name: "products", component: () => import("./views/productView.vue") },
  { path: `${base}/sales`, name: "sales report", component: () => import("./views/salesView.vue") },
  { path: `${base}/messages`, name: "messages", component: () => import("./views/messagesView.vue") },
  { path: `${base}/settings`, name: "settings", component: () => import("./views/settingsView.vue") },
  { path: `${base}/signout`, name: "sign out", component: () => import("./views/signoutView.vue") },
  // catch-all fallback route
  {
    path: `${base}/:pathMatch(.*)*`,
    component: home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
