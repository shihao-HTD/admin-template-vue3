<template>
  <el-row class="mb-4">
    <DarkModeToggle :dark="true"> </DarkModeToggle>
    <FullScreen></FullScreen>
  </el-row>

  <div class="w-25 h-25 bg-red dark:bg-sky">块元素</div>

  <div>
    {{ t('hello') }}
  </div>

  <select v-model="locale">
    <option value="zh">中文</option>
    <option value="en">en</option>
  </select>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

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
