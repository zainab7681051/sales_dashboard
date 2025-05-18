<script setup>
  import searchbar from "./searchbar.vue"
  import languages from "./languages.vue"
  import menu from "./menu.vue"

</script>

<template>
  <div class="topbar-container">
    <!-- maintitle -->
    <div class="main-title">{{$route.name}}</div>
    <!-- search bar -->
    <div class="searchbar-container">
      <searchbar/>
    </div>
    <!-- languages -->
    <div class="languages-container">
      <languages/>
    </div>
    <!-- bell+menu -->
    <div class="menu-container">
      <menu/>
    </div>
  </div>
</template>

<style lang="css" scoped>
.topbar-container{
  display: flex;
  justify-content: space-between;
}
.main-title{
  text-transform: capitalize;
}
</style>
