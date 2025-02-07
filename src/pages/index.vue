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
    <option value="zh-CN">中文</option>
    <option value="en">en</option>
  </select>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import { loadLocaleMessages } from '@/modules/i18n'
import { useI18n } from 'vue-i18n'
const {t} = useI18n()

const locale = ref('zh-CN')

watch(locale, () => {
  loadLocaleMessages(locale.value)
})

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
