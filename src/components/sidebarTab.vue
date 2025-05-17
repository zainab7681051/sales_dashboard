<script setup>
defineProps({
  icon: String,
  label: String,
  path: String
});
</script>
<template>
  <div class="tab">
    <router-link :to="path">
      <img :src="icon" alt="" class="tab-icon" />
      <p class="tab-label">{{ label }}</p>
    </router-link>
  </div>
</template>
<style lang="css" scoped>
.tab {}

.tab-icon {}

.tab-label {}
</style>
