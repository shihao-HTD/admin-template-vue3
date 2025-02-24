<template>
  <el-table
    v-loading="loading"
    ref="tableRef"
    v-on="forwardEvents"
    v-bind="props"
    style="width: 100%"
  >
    <VTableColumn
      v-for="(column, index) in columns"
      :key="column.id || index"
      v-bind="setColumnDefaults(column)"
    >
    </VTableColumn>

    <slot></slot>
    <template #append>
      <slot name="append"></slot>
    </template>

    <template #empty>
      <slot name="empty"></slot>
    </template>
  </el-table>

  <slot name="footer">
    <div v-if="isDefined(pagination)" :class="['p-2 flex', paginationClass]">
      <el-pagination v-on="pageEvents" v-bind="pagination">
        <template #default="scope" v-if="pagination.defaultSlot">
          <component v-bind="scope" :is="pagination.defaultSlot"></component>
        </template>
      </el-pagination>
    </div>
  </slot>
</template>

<script lang="ts" setup>
import type { TableColumnType, VTableEmitsType, VTableProps } from '@/components/Table/type'
import { isDefined } from '@vueuse/core'
import { exposeEventsUtils, forwardEventsUtils } from '@/utils/format'
import Sortable from 'sortablejs'

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
  scrollbarAlwaysOn: false,
  adaptive: false,
  loading: false,
  draggableCol: false,
  draggableRow: false
})

const columnDefaults = {
  sortable: false,
  'sort-orders': ['ascending', 'descending', null],
  resizable: true,
  align: 'left',
  'reserve-selection': false,
  'filter-multiple': true
}

function setColumnDefaults(column: object) {
  return { ...columnDefaults, ...column }
}

const emits = defineEmits<VTableEmitsType>()

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
const pageEventsName = ['size-change', 'current-change', 'prev-click', 'next-click']

const forwardEvents = forwardEventsUtils(emits, eventsName)
const pageEvents = forwardEventsUtils(emits, pageEventsName, 'page-')

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

const localCols = ref(props.columns as TableColumnType[])

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

async function setAdaptive() {
  await nextTick()
  if (props.adaptive) {
    let offset = 50
    if (typeof props.adaptive === 'number') {
      offset = props.adaptive
    }
    const height = window.innerHeight - tableRef.value.$el.getBoundingClientRect().top - offset
    tableRef.value.style.height = height + 'px'
  }
}

const fn = useDebounceFn(setAdaptive, 200)
useResizeObserver(tableRef, fn)

onBeforeMount(() => {
  addId(props.draggableCol, localCols.value)
})

onMounted(() => {
  if (props.adaptive) {
    setAdaptive()
  }
  if (props.draggableCol) {
    columnDrop()
  }
})

function columnDrop() {
  nextTick(() => {
    const el = tableRef.value.$el.querySelector('.el-table__header-wrapper tr')
    Sortable.create(el, {
      delay: 0,
      animation: 300,
      onEnd: ({ newIndex, oldIndex }) => {
        const draggedItem = localCols.value.splice(oldIndex as number, 1)[0]
        localCols.value.splice(newIndex as number, 0, draggedItem)
        emits('drag-col-change', localCols.value)
      }
    })
  })
}

function addId(flag: boolean, arr: any[]) {
  if (flag && arr.length && !arr[0].id) {
    arr.forEach((item, index) => {
      item.id = index
    })
  }
  return arr
}
</script>
<style scoped></style>
