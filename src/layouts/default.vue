<template>
  <div class="w-full h-screen overflow-hidden flex">
    <!--    sidebar-->
    <div
      :style="{ width: typeof menuWidth === 'string' ? menuWidth : menuWidth + 'px' }"
      class="h-full bg-sky"
    >
      <el-scrollbar>
        <Menu :data="menus"> </Menu>
      </el-scrollbar>
    </div>

    <!--    content-->
    <div class="flex-1 h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from 'vue-router/auto/routes'
import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteMenuItem } from '@/components/Menu/type'

interface ThemeSettings {
  menuWidth: number | string
}

const props = withDefaults(defineProps<ThemeSettings>(), {
  menuWidth: 240
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

const menus = computed(() => generateMenuData(routes))
</script>

<style scoped></style>
