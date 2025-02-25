import { defineStore } from 'pinia'
import type { AppRouteMenuItem } from '@/components/Menu/type'

interface TabsStoreType {
  tabs: AppRouteMenuItem[]
  current: string
}

export const useTabsStore = defineStore('tabs', {
  state() {
    return {
      tabs: [],
      current: ''
    } as TabsStoreType
  },
  actions: {
    addRoute(route: AppRouteMenuItem) {
      if (this.tabs.some((tab) => tab.name === route.name)) {
        return
      }
      this.tabs.push({
        ...route
      })
    }
  }
})
