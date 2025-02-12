<template>
  <el-row class="items-center">
    <!--    面包屑-->
    <Iconify class="text-2xl cursor-pointer" :icon="collapse ? 'ep:expand' : 'ep:fold'"></Iconify>
    <!--    右侧-->

    <div class="flex-grow"></div>
    <el-row class="items-center">
      <DarkModeToggle class="mr-2"> </DarkModeToggle>
      <ChangeLocale class="mr-2" :locales="locales"></ChangeLocale>
      <FullScreen></FullScreen>
    </el-row>
  </el-row>
</template>

<script setup lang="ts">
import DarkModeToggle from '../Themes/DarkModeToggle.vue'
import FullScreen from '../Themes/FullScreen.vue'
import ChangeLocale from '../Themes/ChangeLocale.vue'
import type { LocaleItem } from '@/components/Themes/type'

interface HeaderProps {
  collapse: boolean
  locales: LocaleItem[]
}
defineProps<HeaderProps>()
</script>

<style scoped></style>
