<script setup>
import titleComponent from "../components/titleComponent.vue"
</script>

<template>
  <div class="dashboard-container">
    <div class="sales-summary">
      <div class="sales-summary-heading">
       <titleComponent :title="`today's sales`" :subtitle="`sales summary`"/>
        <!-- <buttonComponent :value="export" :icon="exportIcon" /> -->
      </div>
      <div class="sales-summary-body">
        
      </div>
    </div>
  </div>
<!--   titleComponent
  subTitleComponent
  buttonComponent -->
  
  <!-- v-for summaryCard
      accepts a icon
      a value
      a title
      changetext
   -->
  <!-- charts -->
</template>

<style lang="css">
  .dashboard-container{
    display: flex;
    flex-wrap: wrap;
    gap: 21px;
    padding: 48px 0 0 16px;
    text-transform: capitalize;
  }
  .sales-summary{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .sales-summary-heading{
    display: flex;
    justify-content: space-between;
  }

</style>
