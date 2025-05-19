<script setup>
import logo from "../assets/dummy logo.png"
</script>
<template>
  <div class="side-title-container poppins-semibold">
    <img :src="logo">
    <p>Dabang</p>
  </div>
</template>
<style lang="css" scoped>
.side-title-container {
  display: flex;
  justify-content: center;
  margin-bottom: 62px;
}

.side-title-container img {
  margin-right: 21px;
}

.side-title-container p {
  font-size: 30px;
}
</style>
