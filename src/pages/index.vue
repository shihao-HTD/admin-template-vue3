<template>
  <div>
    <div v-copy.mute="msg1">copy directive1</div>
    <el-input v-model="msg1"></el-input>
    <p>----------</p>
    <div v-copy="msg2">copy directive2</div>
    <el-input v-model="msg2"></el-input>
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'

definePage({
  meta: {
    title: '首页',
    icon: 'mdi:home'
  }
})
const msg1 = ref('copy msg111')
const msg2 = ref('copy msg222')

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
