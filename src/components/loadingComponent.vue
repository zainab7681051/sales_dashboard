<script setup>
  import { reactive, ref, onMounted, onBeforeUnmount } from 'vue';
  let loading = ref(true);

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  });
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;
      }, 500);
    }
  };
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 500);
</script>

<template>
  <div v-if="loading" class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style lang="css" scoped>
  .loader-container {
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    z-index: 8;
  }
</style>
