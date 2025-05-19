import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: "/", name: "dashboard", component: () => import("./views/dashboardView.vue") },
  { path: "/leaderboard", name: "leaderboard", component: () => import("./views/leaderboardView.vue") },
  { path: "/order", name: "order", component: () => import("./views/orderView.vue") },
  { path: "/product", name: "products", component: () => import("./views/productView.vue") },
  { path: "/sales", name: "sales report", component: () => import("./views/salesView.vue") },
  { path: "/messages", name: "messages", component: () => import("./views/messagesView.vue") },
  { path: "/settings", name: "settings", component: () => import("./views/settingsView.vue") },
  { path: "/signout", name: "sign out", component: () => import("./views/signoutView.vue") },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
