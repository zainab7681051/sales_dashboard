<script setup>
  import titleComponent from "./titleComponent.vue"

const props = defineProps({
  title:String,
  type: String,
  series: Array, 
  options: Object,
  height: [String, Number]
});
</script>

<template>
  <div class="chart-container">
    <titleComponent :title="title"/>
    <div class="chart">
      <apexchart
        :type="type"
        :options="options"
        :series="series"
        :height="height"
      ></apexchart>
    </div>
  </div>
</template>
<style>
  .chart-container{
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 32px;
    height: 310px;
    width: 420px;
  }
  .chart{
    min-height: 100%;
    min-width: 100%;
  }
</style>