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
        ref="multipleTableRef"
        :data="tableData"
        :columns="selectColumns"
        highlight-current-row
        @selection-change="handleSelectionChange"
      >
      </VTable>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
          >Toggle selection status of second and third rows</el-button
        >
        <el-button @click="toggleSelection()">Clear selection</el-button>
      </div>
    </el-tab-pane>

    <el-tab-pane label="排序" name="3">
      <VTable
        :data="tableData"
        :columns="orderColumns"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
      </VTable>
    </el-tab-pane>

    <el-tab-pane
      row-key="date"
      :default-sort="{ prop: 'date', order: 'descending' }"
      label="过滤"
      name="4"
    >
      <VTable ref="filterTableRef" :data="filterTableData" :columns="filterColumns"> </VTable>

      <div>
        <el-button @click="resetDateFilter">reset date filter</el-button>
        <el-button @click="clearFilter">reset all filters</el-button>
      </div>
    </el-tab-pane>

    <el-tab-pane
      row-key="date"
      :default-sort="{ prop: 'date', order: 'descending' }"
      label="自定义模版"
      name="5"
    >
      <VTable :data="customTableData" :columns="customColumns">
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> Edit </el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
              Delete
            </el-button>
          </template>
        </el-table-column>
      </VTable>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="tsx">
import type { TableColumnType } from '@/components/Table/type'
import { ElTable } from 'element-plus'
import Popover from './Popover.vue'

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
  tag?: string
}

const activeName = ref('1')
const argsRef = ref()
const menuClickRef = ref()

const filterColumns = ref([
  {
    prop: 'date',
    label: 'Date',
    filters: [
      { text: '2016-05-01', value: '2016-05-01' },
      { text: '2016-05-02', value: '2016-05-02' },
      { text: '2016-05-03', value: '2016-05-03' },
      { text: '2016-05-04', value: '2016-05-04' }
    ],
    columnKey: 'date',
    sortable: true,
    filterMethod: (value: string, row: User, column: TableColumnType) => {
      const property = column['property']
      return row[property as string] === value
    }
  },
  {
    prop: 'name',
    label: 'Name'
  },
  {
    prop: 'address',
    label: 'Address'
  },
  {
    prop: 'tag',
    label: 'Tag',
    filters: [
      { text: 'Home', value: 'Home' },
      { text: 'Office', value: 'Office' }
    ],
    filterMethod: (value: string, row: User) => {
      return row.tag === value
    }
  }
] as TableColumnType[])

const filterTableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office'
  }
]

const orderColumns = ref([
  {
    prop: 'date',
    label: 'Date',
    sortable: true
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

const selectColumns = ref([
  {
    type: 'selection',
    width: 55
  },
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

// 多选表格
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

// 过滤表格
const filterTableRef = ref()
const resetDateFilter = () => {
  filterTableRef.value!.clearFilter(['date'])
}
// TODO: improvement typing when refactor table
const clearFilter = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  filterTableRef.value!.clearFilter()
}

const customColumns = ref([
  {
    prop: 'date',
    defaultSlot: (scope: any) => (
      <div style="display: flex; align-items: center">
        <el-icon>
          <timer />
        </el-icon>
        <span style="margin-left: 10px">{scope.row.date}</span>
      </div>
    )
  },
  {
    prop: 'name',
    label: 'Name',
    defaultSlot: (scope: any) => {
      const { row } = scope
      return h(Popover, {
        row
      })
    }
  }
] as TableColumnType[])

const customTableData: User[] = [
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
  }
]

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
</script>

<style scoped></style>
