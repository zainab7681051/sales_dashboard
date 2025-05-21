<script setup>
import { reactive, ref, onMounted, onBeforeUnmount  } from "vue"
let loading = ref(true)

onMounted(() => {
  document.addEventListener("visibilitychange", handleVisibilityChange)
})

onBeforeUnmount(() => {
  document.removeEventListener("visibilitychange", handleVisibilityChange)
})
const handleVisibilityChange = () => {
  if (document.visibilityState === "visible") {
    loading.value = true

    setTimeout(() => {
      loading.value = false
    }, 500) 
  }
}
loading.value = true
setTimeout(() => {
  loading.value = false
}, 500)

import titleComponent from "../components/titleComponent.vue"
import exportIcon from "../assets/Export Icon.svg"
import buttonComponent from "../components/buttonComponent.vue"
import summaryCard from "../components/summaryCard.vue"
import salesIcon from "../assets/sales_icon.png"
import orderIcon from "../assets/order_icon.png"
import productsIcon from "../assets/products_icon.png"
import customerIcon from "../assets/customer_icon.png"
import chartCompononent from "../components/chartComponent.vue"
import {chartsData} from "../data/chartsData.js"

const salesSummary=reactive([
  {icon:salesIcon, value: "$1K", title:"total sales", subtitle:"+8% from yesterday", bgColor:"#FFE2E5"},
  {icon:orderIcon, value: "300", title:"total order", subtitle:"+5% from yesterday", bgColor:"#FFF4DE"},
  {icon:productsIcon, value: "5", title:"products sold", subtitle:"+1,2% from yesterday", bgColor:"#DCFCE7"},
  {icon:customerIcon, value: "8", title:"new customers", subtitle:"0,5% from yesterday", bgColor:"#F3E8FF"},
])

const handleExport = () => {
  return null
}

const Data = reactive(chartsData)
</script>

<template>
  <div v-if="loading" class="loader" style="margin: auto auto;"></div>

  <div v-else class="dashboard-container">
    <div class="sales-summary">
      <div class="sales-summary-heading">
       <titleComponent :title="`today's sales`" :subtitle="`sales summary`"/>
        <buttonComponent :value="'export'" :icon="exportIcon" @click="handleExport()"/>
      </div>
      <div class="sales-summary-body">
        <summaryCard 
        v-for="card in salesSummary" 
        :icon="card.icon" 
        :value="card.value" 
        :title="card.title" 
        :subtitle="card.subtitle"
        :bgColor="card.bgColor"/>
      </div>
    </div>
    <!-- charts -->
      <chartCompononent
      v-for="chart in Data"
      :key="chart.id"
      :id="chart.id"
      :title="chart.title"
      :type="chart.type"
      :series="chart.series"
      :options="chart.options"
      :height="chart.height"
      :width="chart.width"/>
  </div>
</template>

<style lang="css">
  .dashboard-container{
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    padding: 18px 0 0 0;
    text-transform: capitalize;
    align-items: baseline;
  }
  .sales-summary{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
     box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
     padding: 32px;
     border-radius: 16px;
  }
  .sales-summary-heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }
  .sales-summary-body{
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 10px;
  }

</style>
