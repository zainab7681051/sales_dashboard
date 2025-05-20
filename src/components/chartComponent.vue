<script setup>
import titleComponent from "./titleComponent.vue"
import worldmap from "./worldmap.vue"

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
      <worldmap v-if="type==='map'"
      :series="series" :options="options"
      />
      <apexchart v-else
        :type="type"
        :options="options"
        :series="series"
        :height="height"
        :width="width"
      />
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
    height: 100%;
    width: 100%;
  }
</style>