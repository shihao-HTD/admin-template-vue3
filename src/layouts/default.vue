<template>
  <div class="w-full h-screen overflow-hidden flex">
    <!--    sidebar-->
    <div
      :style="{
        width: localeSettings.collapse ? '64px' : menuWidth + 'px',
        backgroundColor: settings?.backgroundColor
      }"
      class="h-full bg-sky transition-width"
      v-if="settings?.mode !== 'top'"
    >
      <el-row class="flex-nowrap!">
        <!--      菜单:左侧 左侧菜单混合-->
        <el-scrollbar>
          <Menu
            v-if="settings?.mode === 'siderbar' || settings?.mode === 'mixbar'"
            :background-color="settings?.backgroundColor"
            text-color="#b8b8b8"
            :collapse="localeSettings.collapse"
            :data="menus"
          >
          </Menu>
        </el-scrollbar>

        <!--    二级菜单 顶部左侧菜单混合  左侧菜单混合-->
        <el-scrollbar v-if="settings?.mode === 'mixbar' || settings?.mode === 'mix'">
          <Menu
            :background-color="settings?.backgroundColor"
            text-color="#b8b8b8"
            :collapse="localeSettings.collapse"
            :data="menus"
          >
          </Menu>
        </el-scrollbar>
      </el-row>
    </div>

    <!--    content-->
    <div class="flex-1 h-full">
      <Header
        v-model:collapse="localeSettings.collapse"
        :data="localeSettings.avatarMenu"
        :username="localeSettings.username"
        :locales="localeSettings.locales"
        :src="localeSettings.avatar"
        @settingsChange="handleSettingsChange"
        :settings="settings"
      >
        <!--   顶部菜单 顶部左侧菜单混合     -->
        <Menu
          v-if="settings?.mode === 'top' || settings?.mode === 'mix'"
          :collapse="false"
          mode="horizontal"
          :data="menus"
        ></Menu>
      </Header>
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

const localeSettings = reactive<ThemeSettingsOption>({
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
  return settings.value ? settings.value.menuWidth : 240
})

const settings = computed(() => localeSettings.settings)

function handleSettingsChange(themeSettings: ThemeSettingsProps) {
  localeSettings.settings = themeSettings
  console.log('=>(default.vue:96) themeSettings', themeSettings)
}
const menus = computed(() => generateMenuData(routes))
</script>

<style scoped></style>
