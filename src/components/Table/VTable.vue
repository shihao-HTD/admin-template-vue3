<template>
  <el-table ref="tableRef" v-on="forwardEvents" v-bind="props" style="width: 100%">
    <VTableColumn v-for="(column, index) in columns" :key="index" v-bind="column"> </VTableColumn>

    <slot></slot>
    <template #append>
      <slot name="append"></slot>
    </template>

    <template #empty>
      <slot name="empty"></slot>
    </template>
  </el-table>

  <div v-if="isDefined(pagination)" :class="['p-2 flex', paginationClass]">
    <el-pagination v-bind="pagination"></el-pagination>
  </div>
</template>

<script lang="ts" setup>
import type { TableEventsType, VTableProps } from '@/components/Table/type'
import { isDefined } from '@vueuse/core'
import { exposeEventsUtils, forwardEventsUtils } from '@/utils/format'

const props = withDefaults(defineProps<VTableProps>(), {
  pagination() {
    return {
      align: 'right',
      small: false,
      background: false,
      layout: 'total, sizes, prev, pager, next, jumper',
      pagerCount: 7,
      pageSizes: [10, 20, 30, 40, 50, 100],
      total: 0
    }
  },
  stripe: false,
  border: false,
  fit: true,
  showHeader: true,
  highlightCurrentRow: false,
  emptyText: 'No Data',
  defaultExpandAll: false,
  tooltipEffect: 'dark',
  showSummary: false,
  flexible: false,
  selectOnIndeterminate: true,
  indent: 16,
  tableLayout: 'fixed',
  scrollbarAlwaysOn: false
})

const emits = defineEmits<TableEventsType>()

const eventsName = [
  'select',
  'select-all',
  'selection-change',
  'cell-mouse-enter',
  'cell-mouse-leave',
  'cell-contextmenu',
  'cell-click',
  'cell-dblclick',
  'row-click',
  'row-contextmenu',
  'row-dblclick',
  'header-click',
  'header-contextmenu',
  'sort-change',
  'filter-change',
  'current-change',
  'header-dragend',
  'expand-change'
]

const forwardEvents = forwardEventsUtils(emits, eventsName)

const tableRef = ref()
const exposeEvents = [
  'clearSelection',
  'getSelectionRows',
  'toggleRowSelection',
  'toggleAllSelection',
  'toggleRowExpansion',
  'setCurrentRow',
  'clearSort',
  'clearFilter',
  'doLayout',
  'sort',
  'scrollTo',
  'setScrollTop',
  'setScrollLeft'
]
// ref, exposeEvents
const exposes = exposeEventsUtils(tableRef, exposeEvents)

defineExpose({
  ...exposes
})

const paginationClass = computed(() => {
  let defaultClass = 'justify-center'
  if (props.pagination && props.pagination.align) {
    if (props.pagination.align === 'left') {
      defaultClass = 'justify-start'
    }
    if (props.pagination.align === 'right') {
      defaultClass = 'justify-end'
    }
  }
  return defaultClass
})
</script>
<style scoped></style>
