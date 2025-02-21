<template>
  <v-table :columns="columns" :data="tableData">
    <el-table-column label="操作">
      <template #default="{ row }">
        <el-button @click="handleClick(row)">Edit</el-button>
      </template>
    </el-table-column>
  </v-table>
</template>

<script setup lang="ts">
import VTable from '@/components/Table/VTable.vue'
import type { TableColumnType } from '@/components/Table/type'
definePage({
  meta: {
    title: 'pages.table-basic',
    icon: 'mdi:message'
  }
})
const columns = [
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
] as TableColumnType[]

const tableData = [
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

function handleClick(row: any) {
  console.log('=>(index.vue:59) row', row)
}
</script>

<style scoped></style>
