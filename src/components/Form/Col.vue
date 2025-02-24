<template>
  <template v-if="span">
    <el-col v-bind="props">
      <slot></slot>
    </el-col>
  </template>

  <template v-else>
    <slot></slot>
  </template>
</template>

<script setup lang="ts">
import type { ColProps } from 'element-plus'

interface FormItemColProps extends Partial<ColProps> {}

const props = defineProps<FormItemColProps>()
</script>

<style scoped></style>
