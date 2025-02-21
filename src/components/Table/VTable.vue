<template>
  <el-table v-bind="props" style="width: 100%">
    <el-table-column v-for="(column, index) in columns" :key="index" v-bind="column">
      <template v-if="column.headerSlot" #header="scope">
        <component v-bind="scope" :is="column.headerSlot"></component>
      </template>
      <template v-if="column.defaultSlot" #default="scope">
        <component v-bind="scope" :is="column.defaultSlot"></component>
      </template>
    </el-table-column>

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
import type { VTableProps } from '@/components/Table/type'
import { isDefined } from '@vueuse/core'

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
