<script setup>
  defineProps({
    icon: String,
    label: String,
    path: String,
  });
</script>
<template>
  <router-link :to="path" class="tab">
    <img :src="icon" alt="" class="tab-icon" />
    <p class="tab-label">{{ label }}</p>
  </router-link>
</template>
<style lang="css" scoped>
  .tab {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    text-decoration: none;
    color: var(--secondary);
    border-radius: 16px;
    transition: all 0.15s ease;
  }

  .tab:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .tab-icon {
    margin-right: 24px;
  }

  .tab-label {
    font-size: 12px;
  }

  .router-link-active.router-link-exact-active.tab {
    background-color: var(--primary);
    color: white;
  }

  .router-link-active.router-link-exact-active.tab .tab-icon {
    filter: grayscale(100%) brightness(0) invert(1);
  }
</style>
