<script setup>
import { reactive } from "vue"
import sidebarTitle from "../components/sidebarTitle.vue"
import sidebarTab from "../components/sidebarTab.vue"

const tabs = reactive([
  { icon: "", label: "Dashboard" },
  { icon: "", label: "Leaderboard" },
  { icon: "", label: "Order" },
  { icon: "", label: "Products" },
  { icon: "", label: "Sales Report" },
  { icon: "", label: "Messages" },
  { icon: "", label: "Settings" },
  { icon: "", label: "Sign Out" },
])
</script>

<template>
  <sidebarTitle />

  <sidebarTab v-for="item in tabs" :key="item.label" :icon="item.icon" :label="item.label" />

</template>

<style lang="css"></style>
