<template>
  <el-form-item ref="formItemRef" v-bind="props">
    <template #default v-if="props?.defaultSlot">
      <component :is="props?.defaultSlot" v-bind="props"></component>
    </template>

    <template #default v-else>
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
    </template>

    <template #label="scope" v-if="props?.labelSlot">
      <component :is="props?.labelSlot" v-bind="scope"></component>
    </template>
    <template #error="scope" v-if="props?.errorSlot">
      <component :is="props?.errorSlot" v-bind="scope"></component>
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
import type { FormItemProp } from './type'
import type { FormItemInstance } from 'element-plus'
import { exposeEventsUtils } from '@/utils/format'

const props = withDefaults(defineProps<FormItemProp>(), {
  showMessage: true,
  labelWidth: '',
  inlineMessage: '',
  required: undefined
})

const modelValue = defineModel('modelValue')
const formItemRef = ref<FormItemInstance>()

const exposeEvents = [
  'size',
  'validateMessage',
  'validateStatus',
  'validate',
  'clearValidate',
  'resetFields'
]

const exposes = exposeEventsUtils(formItemRef, exposeEvents)

defineExpose({
  ...exposes
})

onBeforeMount(() => {
  if (props.type === 'select' && props.value === '') {
    modelValue.value = undefined
  } else {
    modelValue.value = props.value
  }
})
onMounted(() => {})

watch(formItemRef, () => {
  if (formItemRef.value && props.itemRef) {
    props.itemRef(formItemRef.value)
  }
})
</script>

<style scoped></style>
