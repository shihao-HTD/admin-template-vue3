<template>
  <div
    class="position-absolute left-0 top-0 w-full h-full overflow-hidden flex m-safe"
    :style="{ '--el-color-primary': settings?.theme }"
  >
    <!--    sidebar-->
    <div
      :style="{
        width: mixMenuWidth,
        backgroundColor: settings?.backgroundColor
      }"
      class="h-full bg-sky transition-width shrink-0"
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
            @select="handleSelect"
            :active-text-color="settings.theme"
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
            @select="handleSelect"
            :active-text-color="settings.theme"
          >
          </Menu>
        </el-scrollbar>
      </el-row>
    </div>

    <!--    content-->
    <div class="w-full h-full flex-1 overflow-hidden">
      <Header
        v-model:collapse="localeSettings.collapse"
        :data="localeSettings.avatarMenu"
        :username="localeSettings.username"
        :locales="localeSettings.locales"
        :src="localeSettings.avatar"
        @settingsChange="handleSettingsChange"
        :settings="settings"
        @select="handleSelect"
      >
        <!--   顶部菜单 顶部左侧菜单混合     -->
        <Menu
          v-if="settings?.mode === 'top' || settings?.mode === 'mix'"
          :collapse="false"
          mode="horizontal"
          :data="settings?.mode === 'mix' ? getTopMenus(menus) : menus"
          @select="handleSelect"
          :active-text-color="settings.theme"
        ></Menu>
      </Header>
      <HeaderTabs
        v-model="tabsStore.current"
        @tabClick="handleTabClick"
        @tabRemove="handleTabRemove"
        @tabMenuClick="handleTabMenuClick"
        :data="tabsStore.tabs"
      ></HeaderTabs>

      <div class="overflow-y-auto h-full">
        <router-view #="{ Component }">
          <Transition
            :name="camelToHyphen(settings?.transition || 'fade') + '-transition'"
            mode="out-in"
          >
            <router-view v-slot="{ Component }" v-if="$route.meta.keepAlive">
              <keep-alive :key="settings?.transition">
                <component :is="Component"></component>
              </keep-alive>
            </router-view>
            <router-view v-slot="{ Component }" v-else>
              <component :is="Component"></component>
            </router-view>
          </Transition>
        </router-view>
      </div>
    </div>

    <el-drawer
      :style="{
        backgroundColor: settings?.backgroundColor
      }"
      v-if="isMobile"
      :model-value="!localeSettings.collapse"
      @close="localeSettings.collapse = true"
      class="w-full!"
      direction="ltr"
    >
      <Menu
        :background-color="settings?.backgroundColor"
        text-color="#b8b8b8"
        :data="menus"
        @select="handleSelect"
        :active-text-color="settings?.theme"
      >
      </Menu>
    </el-drawer>
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
import { useTabsStore } from '@/store/tabs'
import { darken } from '@/utils'
import { TabActions } from '@/components/Layouts/const'
import { camelToHyphen } from '@/utils/format'

interface ThemeSettingsOption extends HeaderProps {
  menuWidth?: number | string
  username: string
  avatar: string
  avatarMenu: DropDownMenuItem[]
}
const route = useRoute()
const tabsStore = useTabsStore()

const localeSettings = reactive<ThemeSettingsOption>({
  locales: [
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
  ],
  username: 'tom',
  collapse: false,
  avatarMenu: [],
  avatar: '',
  settings: {
    menuWidth: 280
  } as ThemeSettingsProps
})
const tmpWidth = ref(0)
const changeWithFlag = ref(false)
const isMobile = ref(false)
useResizeObserver(document.body, (entries) => {
  const entry = entries[0]
  const { width } = entry.contentRect
  if (tmpWidth.value === 0) {
    tmpWidth.value = width
  }
  if (width > tmpWidth.value) {
    //   扩大屏幕
    changeWithFlag.value = width < 640
  } else {
    //   缩小屏幕
    changeWithFlag.value = width > 1200
  }

  if (width < 640 && !changeWithFlag.value) {
    localeSettings.collapse = true
  }
  if (width > 1200 && !changeWithFlag.value) {
    localeSettings.collapse = false
  }
  isMobile.value = width < 440
  tmpWidth.value = width
})

onBeforeMount(() => {
  // user-agent是否是移动端
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    isMobile.value = true
    localeSettings.collapse = true
  }
})

const router = useRouter()
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

watch(
  route,
  () => {
    tabsStore.addRoute(route)
    tabsStore.current = route.name
  },
  {
    immediate: true
  }
)

const isFullIcons = computed(() => {
  return getSubMenus(menus.value).every(
    (item) => typeof item.meta?.icon !== 'undefined' && item.meta.icon
  )
})

const menuWidth = computed(() => {
  return settings.value ? settings.value.menuWidth : 240
})
const mixMenuWidth = computed(() => {
  if (isMobile.value) {
    return 0
  }
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
}
const menus = computed(() => generateMenuData(routes))

function handleSelect(item: AppRouteMenuItem) {
  if (item && item.name) {
    router.push(item.name as string)
    if (isMobile.value) {
      localeSettings.collapse = true
    }
  }
}

function handleTabClick(tab) {
  const { index } = tab
  const route = tabsStore.tabs[index] as AppRouteMenuItem
  router.push(route.name as string)
}

function handleTabRemove(tab) {
  tabsStore.removeRoute(tab)
  if (tabsStore.current === tab) {
    if (tabsStore.tabs.length !== 0) {
      tabsStore.current = tabsStore.tabs[0].name as string
    } else {
      // 用户删除了最后一个tab
      const tmpRoute = menus.value.filter((item) => item.path === '/')[0]
      tabsStore.addRoute(tmpRoute)
      tabsStore.current = tmpRoute.name as string
    }
    router.push(tabsStore.current)
  }
}

function handleTabMenuClick(action: TabActions) {
  const index = tabsStore.tabs.findIndex((item) => item.name === tabsStore.current)
  if (action === TabActions.closeAll) {
    tabsStore.tabs = []
    const tmpRoute = menus.value.filter((item) => item.path === '/')[0]
    tabsStore.addRoute(tmpRoute)
    tabsStore.current = tmpRoute.name as string
  } else if (action === TabActions.closeLeft) {
    tabsStore.tabs = tabsStore.tabs.splice(index, tabsStore.tabs.length - 1)
  } else if (action === TabActions.closeRight) {
    tabsStore.tabs = tabsStore.tabs.splice(0, index + 1)
  } else if (action === TabActions.closeOthers) {
    tabsStore.tabs = tabsStore.tabs.splice(index, 1)
  }
  router.push(tabsStore.current)
}
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
