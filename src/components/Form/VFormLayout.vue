<template>
  <template v-if="schema && schema.length">
    <el-form-item v-bind="props">
      <el-col v-bind="item.colProps" :span="item.span" v-for="(item, index) in schema" :key="index">
        <VFormItem v-bind="item"></VFormItem>
      </el-col>
    </el-form-item>
  </template>

  <template v-else-if="colProps || span">
    <el-col :span="colProps?.span || span" v-bind="colProps">
      <VFormItem v-bind="props"></VFormItem>
    </el-col>
  </template>

  <template v-else>
    <VFormItem v-bind="props"></VFormItem>
  </template>
</template>

<script setup lang="ts">
import type { FormItemProp } from '@/components/Form/type'

const props = defineProps<FormItemProp>()
</script>

<style scoped></style>
