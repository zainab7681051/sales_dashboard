<script setup>
import { reactive } from "vue"
import sidebarTitle from "../components/sidebarTitle.vue"
import sidebarTab from "../components/sidebarTab.vue"
import dashboardIcon from "../assets/dashboard.png"
import leaderboardIcon from "../assets/lead.png"
import orderIcon from "../assets/order.png"
import productIcon from "../assets/product.png"
import salesIcon from "../assets/sales report.png"
import msgIcon from "../assets/msg.png"
import settingsIcon from "../assets/settings.png"
import signOutIcon from "../assets/sign out.png"

const tabs = reactive([
  { icon: dashboardIcon, label: "Dashboard", path:'/' },
  { icon: leaderboardIcon, label: "Leaderboard", path:'/leaderboard'},
  { icon: orderIcon, label: "Order", path: '/order' },
  { icon: productIcon, label: "Products", path: '/product' },
  { icon: salesIcon, label: "Sales Report", path:'/sales' },
  { icon: msgIcon, label: "Messages", path: "/messages" },
  { icon: settingsIcon, label: "Settings", path: '/settings' },
  { icon: signOutIcon, label: "Sign Out", path: '/signout' },
])
</script>

<template>
  <sidebarTitle />
  <div class="sidebar-tabs-container">
    <sidebarTab v-for="item in tabs" :key="item.label" :icon="item.icon" :label="item.label" :path="item.path"/>
  </div>
</template>
    
<style lang="css">
.sidebar-tabs-container{
    display: flex;
    flex-direction: column;
    padding: 0px 8% 0 15%;
    gap:15px;
}
</style>
