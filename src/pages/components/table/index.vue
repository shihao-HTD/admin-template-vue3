<template>
  <div class="basic-table">
    <p>基础示例</p>
    <VTable :columns="columns" :data="tableData"></VTable>
    <p>带斑马纹表格</p>
    <VTable :columns="columns" :data="tableData" stripe></VTable>
    <p>带边框表格</p>
    <VTable :columns="columns" :data="tableData" border></VTable>
    <p>带状态表格</p>
    <VTable :columns="columns" :data="tableData" :row-class-name="tableRowClassName"></VTable>
    <p>固定表头</p>
    <VTable :columns="columns" :data="tableData" :height="250"></VTable>
    <p>固定列</p>
    <VTable :columns="fixedTableColumns" :data="fixedTableData">
      <!-- <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="() => handleClick(scope)"
            >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
        <template #append>123</template> -->
    </VTable>
    <p>固定列和表头</p>
    <VTable :columns="fixedTableColumns" :height="250" :data="fixedTableData"> </VTable>
    <p>流体高度</p>
    <VTable :columns="fixedTableColumns1" :max-height="300" :data="fixedTableData">
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
            Remove
          </el-button>
        </template>
      </el-table-column>
    </VTable>
    <el-button class="mt-4" style="width: 100%" @click="onAddItem">Add Item</el-button>
    <p>多级表头</p>
    <VTable :data="fixedTableData" style="width: 100%" :columns="[]">
      <el-table-column prop="date" label="Date" width="150" />
      <el-table-column label="Delivery Info">
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column label="Address Info">
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="120" />
          <el-table-column prop="address" label="Address" />
          <el-table-column prop="zip" label="Zip" width="120" />
        </el-table-column>
      </el-table-column>
    </VTable>
    <p>多级表头，json结构进行渲染</p>
    <VTable :data="fixedTableData" style="width: 100%" :columns="nestedTableColumns"> </VTable>

    <p>单选</p>
    <VTable
      :data="fixedTableData"
      :columns="fixedTableColumns"
      highlight-current-row
    >
    </VTable>
  </div>
</template>

<script setup lang="tsx">
import dayjs from 'dayjs'
import type { TableColumnType } from '@/components/Table/type'
definePage({
  meta: {
    title: 'pages.table-basic',
    icon: 'mdi:message'
  }
})

const handleClick = (scope: any) => {
  console.log('🚀 ~ file: index.vue:37 ~ handleClick ~ scope:', scope)
}

const columns = ref([
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

const tableData = ref([
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
])

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
    defaultSlot: (_props: any) => (
      <>
        <el-button link type="primary" size="small" onClick={() => handleClick(_props)}>
          Detail
        </el-button>
        <el-button link type="primary" size="small">
          Edit
        </el-button>
      </>
    )
  }
] as TableColumnType[])
const fixedTableColumns1 = computed(() => {
  const arr = [
    ...fixedTableColumns.value
  ]
  return arr.splice(0, fixedTableColumns.value.length - 1)
})

const nestedTableColumns = [
  {
    prop: 'date',
    label: 'Date-Nested'
  },
  {
    label: 'Delivery Info',
    children: [
      {
        prop: 'name',
        label: 'Name-Nested'
      },
      {
        label: 'Address Info-Nested',
        children: [
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
          }
        ]
      }
    ]
  }
] as TableColumnType[]

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

const tableRowClassName = ({ row, rowIndex }: { row: any; rowIndex: number }) => {
  if (rowIndex % 2 === 0) {
    return 'warning-row'
  } else if (rowIndex % 2 !== 0) {
    return 'success-row'
  }
  return ''
}

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const now = new Date()
const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  fixedTableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  })
}
</script>

<style scoped lang="scss">
.basic-table {
  :deep(.warning-row) {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
  }

  :deep(.success-row) {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
  }
}
</style>
