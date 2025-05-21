<script setup>
import searchbar from "./searchbar.vue"
import languages from "./languages.vue"
import userMenu from "./userMenu.vue"

</script>

<template>
  <div class="topbar-container">
    <!-- maintitle -->
    <div class="main-title poppins-semibold">{{ $route.name }}</div>
    <!-- search bar -->
    <div class="searchbar-container">
      <searchbar />
    </div>
    <!-- languages -->
    <div class="languages-container">
      <languages />
    </div>
    <!-- bell+userMenu -->
    <div class="userMenu-container">
      <userMenu />
    </div>
  </div>
</template>

<style lang="css" scoped>
.topbar-container {
  display: flex;
  justify-content: space-around;
}

.main-title {
  text-transform: capitalize;
  font-size: 26px;
  margin-right: 5px;
}
</style>
