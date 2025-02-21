<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="pos-fixed right-10 top-0">
      <el-row class="items-center">
        <DarkModeToggle class="mr-2"> </DarkModeToggle>
        <ChangeLocale @change="handleLocalesChange" class="mr-2" :locales="locales"></ChangeLocale>
      </el-row>
    </div>
    <div class="flex flex-col justify-center items-center h-full mx-60">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChangeLocale from '@/components/Themes/ChangeLocale.vue'
import DarkModeToggle from '@/components/Themes/DarkModeToggle.vue'
import { loadLocaleMessages } from '@/modules/i18n'

function handleLocalesChange(locale: string) {
  loadLocaleMessages(locale)
}
const locales = ref([
  {
    text: '中文',
    name: 'zh-CN',
    icon: 'uil:letter-chinese-a'
  },
  {
    text: 'English',
    name: 'en',
    icon: 'ri:english-input'
  }
])
</script>

<style scoped></style>
