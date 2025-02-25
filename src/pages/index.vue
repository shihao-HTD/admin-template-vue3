<template>
  <div>
    <el-button v-debounce="test">test</el-button>
    <el-button v-throttle="test">test2</el-button>

    <el-button type="primary" v-has="['admin']">BTN</el-button>
    <el-button type="primary" @click="handleClick">add roles</el-button>
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import useUserStore from '@/store/user'

definePage({
  meta: {
    title: '首页',
    icon: 'mdi:home'
  }
})
const store = useUserStore()

function handleClick() {
  store.roles = ['user', 'admin']
}

function test() {
  console.log('xxxxxxxxxxx')
}

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
