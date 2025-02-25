<template>
  <el-tabs v-model="modelValue" type="card" class="myTabs" closable v-on="forwardEvents">
    <el-tab-pane
      v-for="item in data"
      :label="$t(item.meta?.title)"
      :name="item.name as string"
      :key="item.name"
    ></el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type { TabPaneName, TabsPaneContext, TabsProps } from 'element-plus'
import type { AppRouteMenuItem } from '@/components/Menu/type'
import { forwardEventsUtils } from '@/utils/format'

interface HeaderTabsProps extends Partial<TabsProps> {
  data: AppRouteMenuItem[]
}
defineProps<HeaderTabsProps>()

type HeaderTabsEvents = {
  tabClick: [pane: TabsPaneContext, ev: Event]
  tabChange: [name: TabPaneName]
  edit: [paneName: TabPaneName | undefined, action: 'remove' | 'add']
  tabRemove: [name: TabPaneName]
  tabAdd: []
}
const emits = defineEmits<HeaderTabsEvents>()
const eventNames = ['tabClick', 'tabChange', 'edit', 'tabRemove', 'tabAdd']

const forwardEvents = forwardEventsUtils(emits, eventNames)

const modelValue = defineModel<string>()
</script>

<style scoped lang="scss">
.myTabs {
  :deep(.el-tabs__header) {
    @apply p-0 m-0 border-b-none;
    .el-tabs__nav {
      @apply border-none;
    }
  }
  :deep(.el-tabs__item) {
    @apply py-0 h-[34px] px-4;
    border-radius: 4px;
    border: 1px solid var(--el-border-color) !important;
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
    margin-right: 5px;
    &.is-active {
      color: var(--el-color-primary) !important;
      background: var(--el-color-primary-light-9) !important;
      border: 1px solid var(--el-color-primary) !important;
    }
  }
}
</style>
