<template>
  <el-row class="mb-4">
    <DarkModeToggle :dark="true" > </DarkModeToggle>
    <FullScreen></FullScreen>
  </el-row>

  <div class="w-25 h-25 bg-red dark:bg-sky">块元素</div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import FullScreen from '@/components/Themes/FullScreen.vue'

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
