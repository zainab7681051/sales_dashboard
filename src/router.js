import { createRouter, createWebHashHistory } from 'vue-router';
import home from './views/dashboardView.vue';

const routes = [
  { path: '/', name: 'dashboard', component: home },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: () => import('./views/leaderboardView.vue'),
  },
  { path: '/order', name: 'order', component: () => import('./views/orderView.vue') },
  { path: '/product', name: 'products', component: () => import('./views/productView.vue') },
  { path: '/sales', name: 'sales report', component: () => import('./views/salesView.vue') },
  { path: '/messages', name: 'messages', component: () => import('./views/messagesView.vue') },
  { path: '/settings', name: 'settings', component: () => import('./views/settingsView.vue') },
  { path: '/signout', name: 'sign out', component: () => import('./views/signoutView.vue') },
  // catch-all fallback route
  {
    path: '/:pathMatch(.*)*',
    component: home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
