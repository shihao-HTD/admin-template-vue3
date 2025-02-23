<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="单选" name="1">
      <VTable
        @row-click="handleRowClick"
        :data="fixedTableData"
        :columns="fixedTableColumns"
        highlight-current-row
      >
      </VTable>
      <p>行点击回调内容：</p>
      <p>{{ argsRef }}</p>
      <p>菜单击回调内容：</p>
      <p>{{ menuClickRef }}</p>
    </el-tab-pane>

    <el-tab-pane label="多选" name="2">
      <VTable
        @row-click="handleRowClick"
        :data="tableData"
        :columns="selectColumns"
        highlight-current-row
      >
      </VTable>
      <p>行点击回调内容：</p>
      <p>{{ argsRef }}</p>
      <p>菜单击回调内容：</p>
      <p>{{ menuClickRef }}</p>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="tsx">
import type { TableColumnType } from '@/components/Table/type'

definePage({
  meta: {
    title: 'pages.table-select',
    icon: 'fluent:select-all-on-24-regular'
  }
})
interface User {
  date: string
  name: string
  address: string
}

const activeName = ref('1')
const argsRef = ref()
const menuClickRef = ref()

const selectColumns = ref([
  /*  {
    type: 'selection',
    width: 55
  },*/
  {
    prop: 'date',
    label: 'Date'
  },
  {
    prop: 'name',
    label: 'Name'
  },
  {
    prop: 'address',
    label: 'Address'
  }
] as TableColumnType[])

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const fixedTableColumns = ref([
  {
    prop: 'date',
    label: 'Date'
  },
  {
    prop: 'name',
    label: 'Name'
  },
  {
    prop: 'state',
    label: 'State'
  },
  {
    prop: 'city',
    label: 'City'
  },
  {
    prop: 'address',
    label: 'Address'
  },
  {
    prop: 'zip',
    label: 'Zip'
  },
  {
    prop: 'tag',
    label: 'Tag'
  },
  {
    prop: '',
    label: 'Operations',
    width: 120,
    fixed: 'right',
    defaultSlot: (_props) => (
      <>
        <el-button
          link
          type="primary"
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            handleClick(_props, 'detail')
          }}
        >
          Detail
        </el-button>
        <el-button
          link
          type="primary"
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            handleClick(_props, 'edit')
          }}
        >
          Edit
        </el-button>
      </>
    )
  }
] as TableColumnType[])

const fixedTableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  }
])

const handleClick = (scope, event: string) => {
  const { $index, cellIndex, column, expanded, row } = scope
  menuClickRef.value = `Event ${event}: \n $index: ${$index}, \n cellIndex: ${cellIndex}, \n column: ${JSON.stringify(
    column
  )}, \n expanded: ${expanded}, \n row: ${JSON.stringify(row)}`
}

const handleRowClick = (...args) => {
  argsRef.value = args
}
</script>

<style scoped></style>
