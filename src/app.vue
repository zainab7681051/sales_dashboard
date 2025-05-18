<script setup>
import dashboardView from "./views/dashboardView.vue"
import sidebarView from "./views/sidebarView.vue"
import mainTopbar from "./components/mainTopbar.vue"

</script>

<template>
  <div class="layout poppins-regular">
    <aside>
      <sidebarView/>
    </aside>
    <main>
      <header>
        <mainTopbar/>
      </header>
      <router-view/>
    </main>
  </div>
</template>

<style lang="css">
.layout {
  display: grid;
  grid-template-columns: 25% 1fr;
  height: 100vh;  
}
main {
  display: flex;
  flex-direction: column;
}
aside {
    display: flex;
    flex-direction: column;
    padding: 20px 25px;
}
header{
  padding: 12px 5px;
}
</style>
