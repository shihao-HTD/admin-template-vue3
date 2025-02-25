import { defineStore } from 'pinia'
import type { AppRouteMenuItem } from '@/components/Menu/type'

interface TabsStoreType {
  tabs: AppRouteMenuItem[]
  current: string
}

export const useTabsStore = defineStore('tabs', {
  state(): TabsStoreType {
    return {
      tabs: [],
      current: ''
    }
  },
  actions: {
    addRoute(route: AppRouteMenuItem) {
      if (this.tabs.some((tab) => tab.name === route.name)) {
        return
      }
      this.tabs.push({
        ...route
      })
    },
    removeRoute(path: string) {
      this.tabs = this.tabs.filter((item) => item.name !== path)
    }
  },
  persist: true
})
