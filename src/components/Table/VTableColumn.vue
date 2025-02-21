<template>
  <el-table-column v-bind="props">
    <template v-if="headerSlot" #header="scope">
      <component v-bind="scope" :is="headerSlot"></component>
    </template>
    <template v-if="defaultSlot" #default="scope">
      <component v-bind="scope" :is="defaultSlot"></component>
    </template>
    <template v-if="children && children.length > 0">
      <VTableColumn v-for="(child, index) in children" :key="index" v-bind="child"> </VTableColumn>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
import type { TableColumnType } from '@/components/Table/type'

const props = defineProps<TableColumnType>()
</script>

<style scoped></style>
