<template>
  <div class="flex justify-between items-center px-2">
    <el-tabs
      class="myTabs overflow-hidden flex-1"
      v-model="modelValue"
      type="card"
      closable
      v-on="forwardEvents"
    >
      <el-tab-pane
        v-for="item in data"
        :label="$t(item.meta?.title)"
        :name="item.name as string"
        :key="item.name"
      ></el-tab-pane>
    </el-tabs>

    <DropDown class="w-6" :items="items" @change="handleTabClick">
      <template #header>
        <Iconify icon="mdi:view-grid" size="18px" />
      </template>
      <template #item="{ item }">
        {{ item.text }}
      </template>
    </DropDown>
  </div>
</template>

<script setup lang="ts">
import type { TabPaneName, TabsPaneContext, TabsProps } from 'element-plus'
import type { AppRouteMenuItem } from '@/components/Menu/type'
import { forwardEventsUtils } from '@/utils/format'
import { TabActions } from '@/components/Layouts/const'

interface HeaderTabsProps extends Partial<TabsProps> {
  data: AppRouteMenuItem[]
}
withDefaults(defineProps<HeaderTabsProps>(), {
  stretch: false,
  closable: false,
  addable: false,
  editable: false,
  tabPosition: 'top'
})

type HeaderTabsEvents = {
  tabClick: [pane: TabsPaneContext, ev: Event]
  tabChange: [name: TabPaneName]
  edit: [paneName: TabPaneName | undefined, action: 'remove' | 'add']
  tabRemove: [name: TabPaneName]
  tabAdd: []
  tabMenuClick: [action: TabActions]
}
const emits = defineEmits<HeaderTabsEvents>()
const eventNames = ['tabClick', 'tabChange', 'edit', 'tabRemove', 'tabAdd']

const forwardEvents = forwardEventsUtils(emits, eventNames)

const modelValue = defineModel<string>()

const items = ref([
  {
    action: TabActions.closeOthers,
    icon: 'ep:close',
    text: '关闭其他'
  },
  {
    action: TabActions.closeLeft,
    icon: 'line-md:arrow-close-left',
    text: '关闭左侧'
  },
  {
    action: TabActions.closeRight,
    icon: 'line-md:arrow-close-right',
    text: '关闭右侧'
  },
  {
    action: TabActions.closeAll,
    icon: 'codicon:close-all',
    text: '关闭全部'
  }
])

function handleTabClick(tab) {
  emits('tabMenuClick', tab.action)
}
</script>

<style scoped lang="scss">
.myTabs {
  :deep(.el-tabs__header) {
    @apply p-0 m-0 border-b-none flex items-center;
    .el-tabs__nav {
      @apply border-none;
    }
    .el-tabs__nav-prev,
    .el-tabs__nav-next {
      line-height: 40px;
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
