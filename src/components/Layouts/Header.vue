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
      <el-divider direction="vertical"></el-divider>
      <!-- 用户下拉菜单-->
      <AvatarMenu
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        avatar-size="small"
        :data="[
          { key: 1, value: 'haha1' },
          { key: 2, value: 'haha2' }
        ]"
        trigger="click"
        class="mr-2"
        username="tom"
      ></AvatarMenu>
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
