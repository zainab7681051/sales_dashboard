<script setup>
defineProps({
  icon: String,
  label: String
});
</script>
<template>
  <div class="tab">
    <img :src="icon" alt="" class="tab-icon" />
    <p class="tab-label">{{ label }}</p>
  </div>
</template>
<style lang="css" scoped>
.tab {}

.tab-icon {}

.tab-label {}
</style>
