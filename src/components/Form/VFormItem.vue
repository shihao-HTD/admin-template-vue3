<template>
  <el-form-item v-bind="props" label="Activity name">
    <Col v-bind="colProps">
      <el-input v-if="type === 'input'" v-model="modelValue" v-bind="attrs" />
      <el-select v-else-if="type === 'select'" v-model="modelValue" v-bind="attrs">
        <el-option
          :label="item.label"
          :value="item.value"
          v-bind="item"
          v-for="(item, index) in children"
          :key="index"
        />
      </el-select>

      <el-date-picker
        v-else-if="type === 'date-picker'"
        v-model="modelValue"
        type="date"
        v-bind="attrs"
      />

      <el-time-picker v-else-if="type === 'time-picker'" v-model="modelValue" v-bind="attrs" />

      <el-switch v-else-if="type === 'switch'" v-model="modelValue" />
      <el-checkbox-group v-else-if="type === 'checkbox'" v-model="modelValue" v-bind="attrs">
        <el-checkbox
          :label="item.label"
          :value="item.value"
          v-bind="item"
          v-for="(item, index) in children"
          :key="index"
        />
      </el-checkbox-group>
      <el-radio-group v-else-if="type === 'radio'" v-model="modelValue" v-bind="attrs">
        <el-radio
          :value="item.value"
          v-bind="item"
          v-for="(item, index) in children"
          :key="index"
          >{{ item.label }}</el-radio
        >
      </el-radio-group>

      <span v-else v-bind="attrs">{{ value }}</span>
    </Col>
  </el-form-item>
</template>

<script setup lang="ts">
import type { FormItemProp } from './type'
import Col from './Col.vue'

const props = defineProps<FormItemProp>()

const modelValue = defineModel('modelValue')
</script>

<style scoped></style>
