<script setup>
  import titleComponent from "./titleComponent.vue"

const props = defineProps({
  id: Number,
  title:String,
  type: String,
  series: Array, 
  options: Object,
  height: [String, Number],
  width: [String, Number]
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
        :width="width"
      ></apexchart>
    </div>
  </div>
</template>
<style>
  .chart-container{
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 32px;
    height: 310px;
  }
  .chart{
    min-height: 100%;
    min-width: 100%;
  }
</style>