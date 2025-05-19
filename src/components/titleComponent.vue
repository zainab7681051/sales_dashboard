<script setup>
  defineProps({
  title: String,
  subtitle: String,
  titleFontSize: 0,
  subtitleFontSize: 0
});
</script>

<template>
  <div class="title-component-container">
    <h1 class="poppins-bold" :style="titleFontSize>0 ? `font-size:${titleFontSize}px`:''">{{title}}</h1>
    <h2 class="poppins-light" :style="subtitleFontSize>0 ? `font-size:${subtitleFontSize}px`:''">{{subtitle}}</h2>
   </div>
</template>

<style lang="css">
  .title-component-container{
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .title-component-container h1{
    font-size: 18px;
    color: var(--dark-blue);
  }

  .title-component-container h2{
    font-size: 14px;
    color: var(--secondary);
  }

</style>
