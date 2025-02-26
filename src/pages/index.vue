<template>
  <div>
    <el-button type="primary">Click</el-button>
    <el-button type="primary">Click1</el-button>
    <el-button type="primary">Click2</el-button>
    <el-button type="primary">Click3</el-button>
    <div v-flash>这是一段文字</div>

    <ul v-flash>
      <li>这是一段文字!</li>
      <li>这是一段文字1!</li>
      <li>这是一段文字2!</li>
      <li>这是一段文字3!</li>
    </ul>

    <el-button type="primary" v-has.roles="['admin']">BTN</el-button>
    <el-button type="primary" @click="handleClick">add Role</el-button>
    <el-button type="primary" @click="() => toggle()">toggle</el-button>

    <CollapseTransition>
      <div class="w-20 border border-color-red pt-10 pb-10" v-show="show">
        <div class="h-[150px] overflow-y-auto">
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
          <p>这是一个元素</p>
        </div>
      </div>
    </CollapseTransition>
    <VueEcharts autoresize :option="option" :height="600"></VueEcharts>
  </div>
</template>

<script setup lang="ts">
// import { loadLocaleMessages } from '@/modules/i18n'
import useUserStore from '../store/user'

const store = useUserStore()

const [show, toggle] = useToggle(true)

const handleClick = () => {
  store.roles = ['user', 'admin']
}

// const option = ref({
//   title: {
//     text: 'Traffic Sources',
//     left: 'center'
//   }
// } as EChartsOption)

const option = ref({
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 20,
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      type: 'scatter'
    }
  ]
})

// store -> permission
// permission -> include admin Role
// flag = true

definePage({
  meta: {
    title: 'pages.home',
    icon: 'mdi:home'
  }
})

// const locale = ref('zh-CN')

// watch(locale, () => {
//   loadLocaleMessages(locale.value)
// })

// onBeforeMount(async () => {
//   await loadIcons(arr.map((o) => json.prefix + ':' + o))
// })
</script>

<style scoped></style>

<route lang="yaml">
meta:
layout: default
</route>
