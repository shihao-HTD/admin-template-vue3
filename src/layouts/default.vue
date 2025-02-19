<template>
  <div class="w-full h-screen overflow-hidden flex">
    <!--    sidebar-->
    <div
      :style="{
        width: menuWidth + 'px',
        backgroundColor: settings.settings?.backgroundColor
      }"
      class="h-full bg-sky"
    >
      <el-scrollbar>
        <Menu :data="menus"> </Menu>
      </el-scrollbar>
    </div>

    <!--    content-->
    <div class="flex-1 h-full">
      <Header
        :data="settings.avatarMenu"
        :username="settings.username"
        :collapse="settings.collapse"
        :locales="settings.locales"
        :src="settings.avatar"
        @settingsChange="handleSettingsChange"
        :settings="settings.settings"
      ></Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from 'vue-router/auto/routes'
import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteMenuItem } from '@/components/Menu/type'
import Header from '@/components/Layouts/Header.vue'
import type { DropDownMenuItem, ThemeSettingsProps } from '@/components/Themes/type'
import type { HeaderProps } from '@/components/Layouts/type'

interface ThemeSettingsOption extends HeaderProps {
  menuWidth?: number | string
  username: string
  avatar: string
  avatarMenu: DropDownMenuItem[]
}

const settings = reactive<ThemeSettingsOption>({
  locales: [
    {
      text: 'English',
      name: 'en',
      icon: 'ri:english-input'
    },
    {
      text: '中文',
      name: 'zh-CN',
      icon: 'uil:letter-chinese-a'
    }
  ],
  username: 'tom',
  collapse: false,
  avatarMenu: [],
  avatar: '',
  settings: {
    menuWidth: 280
  } as ThemeSettingsProps
})

function generateMenuData(routes: RouteRecordRaw[]): AppRouteMenuItem[] {
  const menus: AppRouteMenuItem[] = []

  routes.forEach((route) => {
    const data: AppRouteMenuItem = {
      name: route.name,
      path: route.path,
      alias: typeof route.redirect === 'string' ? route.redirect : undefined,
      component: route.component,
      meta: route.meta
    }
    if (route.children && Array.isArray(route.children)) {
      data.children = generateMenuData(route.children)
    }
    menus.push(data)
  })

  return menus
}
const menuWidth = computed(() => {
  return settings.settings ? settings.settings.menuWidth : 240
})

function handleSettingsChange(themeSettings: ThemeSettingsProps) {
  settings.settings = themeSettings
}
const menus = computed(() => generateMenuData(routes))
</script>

<style scoped></style>
