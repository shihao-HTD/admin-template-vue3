<template>
  <div ref="chartRef"></div>
</template>

<script setup lang="ts">
import type { EChartsOption, ECharts } from 'echarts'
import * as echarts from 'echarts'

interface ChartsProps {
  options: EChartsOption
  width?: number | string
  height?: number | string
  autoresize?: boolean
}
const props = defineProps<ChartsProps>()

const chartRef = ref()
const chartInstance = ref<ECharts>()

function initChart() {
  if (chartRef.value) {
    chartInstance.value = echarts.init(chartRef.value)
    chartInstance.value.setOption(props.options)
  }
}
</script>

<style scoped></style>
