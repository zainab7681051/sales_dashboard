<script setup>
defineProps({
  icon: String,
  label: String,
  path: String
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
    padding: 12px 20px;
    text-decoration: none;
    color: var(--secondary);
    border-radius: 16px;
    transition: all .3s ease;
}
.tab-icon {
  margin-right: 32px;
}
.tab-label {
    font-size: 18px;
}

.router-link-active.router-link-exact-active.tab{
  background-color: var(--primary);
  color: white;
}
.router-link-active.router-link-exact-active.tab .tab-icon{
  filter: grayscale(100%) brightness(0) invert(1);
}
</style>
