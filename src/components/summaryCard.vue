<script setup>
  import titleComponent from "./titleComponent.vue"
  
  defineProps({
  icon: String,
  value: String,
  title: String,
  subtitle: String,
  bgColor: String
});
</script>

<template>
  <div class="summary-card-container" :style="`background-color:${bgColor}`">
    <div class="card-icon"><img :src="icon"></div>
    <div class="card-value poppins-semibold">{{value}}</div>
    <titleComponent :title=title :titleFontSize="16" :subtitle=subtitle :subtitleFontSize="12" />
  </div>
</template>
<style>
  .summary-card-container{
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 15px 20px;
    border-radius: 16px;
  }
  .card-value{
    font-size: 24px;
  }
</style>