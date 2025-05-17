<script setup>
  import searchbar from "./searchbar.vue"
  import locale from "./locale.vue"
  import userInfo from "./userInfo.vue"

</script>

<template>
  <div class="topbar-container">
    <!-- maintitle -->
    <div class="main-title">{{$route.name}}</div>
    <!-- search bar -->
    <div class="searchbar-container">
      <searchbar/>
    </div>
    <!-- locale -->
    <div class="locale-container">
      <locale/>
    </div>
    <!-- bell+userInfo -->
    <div class="userInfo-container">
      <userInfo/>
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
