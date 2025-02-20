<template>
  <div class="w-full h-screen overflow-hidden flex">
    <!--    sidebar-->
    <div
      :style="{
        width: mixMenuWidth,
        backgroundColor: settings?.backgroundColor
      }"
      class="h-full bg-sky transition-width"
      v-if="settings?.mode !== 'top'"
    >
      <el-row class="flex-nowrap! h-full">
        <!--      菜单:左侧 左侧菜单混合-->
        <el-scrollbar
          v-if="settings?.mode !== 'mix'"
          :class="settings?.mode !== 'mixbar' ? 'flex-1' : 'w-[64px] py-4'"
          :style="{
            backgroundColor:
              settings?.mode !== 'mixbar' ? 'auto' : darken(settings.backgroundColor, 0.1)
          }"
        >
          <Menu
            :class="[
              {
                mixbar: settings?.mode === 'mixbar'
              }
            ]"
            v-if="settings?.mode === 'siderbar' || settings?.mode === 'mixbar'"
            :background-color="
              settings.mode !== 'mixbar' ? settings?.backgroundColor : 'transparent'
            "
            text-color="#b8b8b8"
            :collapse="settings.mode !== 'mixbar' && localeSettings.collapse"
            :data="mixMenus"
          >
          </Menu>
        </el-scrollbar>

        <!--    二级菜单 顶部左侧菜单混合  左侧菜单混合-->
        <el-scrollbar class="flex-1" v-if="settings?.mode === 'mixbar' || settings?.mode === 'mix'">
          <Menu
            :background-color="settings?.backgroundColor"
            text-color="#b8b8b8"
            :collapse="localeSettings.collapse"
            :data="getSubMenus(menus)"
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
          :data="settings?.mode === 'mix' ? getTopMenus(menus) : menus"
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
import { useMenu } from '@/components/Menu/useMenu'
import { darken } from '@/utils'

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

const { getTopMenus, getSubMenus } = useMenu()

onMounted(() => {})

const isFullIcons = computed(() => {
  return getSubMenus(menus.value).every(
    (item) => typeof item.meta?.icon !== 'undefined' && item.meta.icon
  )
})

const menuWidth = computed(() => {
  return settings.value ? settings.value.menuWidth : 240
})
const mixMenuWidth = computed(() => {
  // localeSettings.collapse ? '64px' : menuWidth + 'px'
  if (settings.value?.mode === 'mixbar' && isFullIcons.value) {
    return localeSettings.collapse ? 'auto' : menuWidth.value + 'px'
  } else {
    return localeSettings.collapse ? '64px' : menuWidth.value + 'px'
  }
})

const settings = computed(() => localeSettings.settings)

const mixMenus = computed(() => {
  return settings.value?.mode === 'mixbar' ? getTopMenus(menus.value) : menus.value
})

function handleSettingsChange(themeSettings: ThemeSettingsProps) {
  localeSettings.settings = themeSettings
  console.log('=>(default.vue:96) themeSettings', themeSettings)
}
const menus = computed(() => generateMenuData(routes))
</script>

<style lang="scss" scoped>
.mixbar {
  :deep(.el-menu-item) {
    height: auto;
    line-height: unset !important;
    flex-direction: column;
    margin-bottom: 15px;
    padding: 4px 0 !important;

    svg {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
}
</style>
