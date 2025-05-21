<script setup>
  import dashboardView from './views/dashboardView.vue';
  import sidebarView from './views/sidebarView.vue';
  import mainTopbar from './components/mainTopbar.vue';
</script>

<template>
  <div class="layout poppins-regular">
    <aside>
      <sidebarView />
    </aside>
    <main>
      <header>
        <mainTopbar />
      </header>
      <router-view />
    </main>
  </div>
</template>

<style lang="css">
  .layout {
    display: grid;
    grid-template-columns: 14% 1fr;
    height: 100vh;
  }

  main {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
  }

  header {
    padding: 12px 5px;
    position: relative;
    z-index: 9;
  }
</style>
