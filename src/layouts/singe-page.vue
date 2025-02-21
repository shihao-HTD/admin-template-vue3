<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="pos-fixed right-10 top-0">
      <el-row class="items-center">
        <DarkModeToggle class="mr-2"> </DarkModeToggle>
        <ChangeLocale @change="handleLocalesChange" class="mr-2" :locales="locales"></ChangeLocale>
      </el-row>
    </div>

    <div
      v-if="bg"
      class="bg-center bg-cover w-full lg:w-1/3 xl:w-1/2 h-screen position-absolute left-0 top-0 z--1"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>
    <div class="flex flex-col justify-center items-center h-full mx-60">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChangeLocale from '@/components/Themes/ChangeLocale.vue'
import DarkModeToggle from '@/components/Themes/DarkModeToggle.vue'
import { loadLocaleMessages } from '@/modules/i18n'

const route = useRoute()
const bg = ref('')
onBeforeMount(() => {
  if (route && route.meta && route.meta.backgroundImage) {
    bg.value = route.meta.backgroundImage as string
  }
})

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
