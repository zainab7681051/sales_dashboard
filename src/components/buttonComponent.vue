<script setup>
  defineProps({
    value: String,
    icon: String,
  });
</script>

<template>
  <div class="button-component-container poppins-semibold">
    <img :src="icon" class="" />
    <span>{{ value }}</span>
  </div>
</template>

<style lang="css">
  .button-component-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-style: solid;
    border-width: 0.5px;
    border-color: var(--light-blue);
    border-radius: 5px;
    font-size: 14px;
    height: 32px;
    width: 88px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .button-component-container:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>
