<script setup>
import mainView from "./views/mainView.vue"
import sidebarView from "./views/sidebarView.vue"
</script>

<template>
  <div class="layout">
    <aside>
      <sidebarView></sidebarView>
    </aside>
    <main>
      <mainView> </mainView>
    </main>
  </div>
</template>

<style lang="css">
.layout {
  display: grid;
  grid-template-columns: 25% 1fr;
  height: 100vh;
}
</style>
