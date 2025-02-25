<template>
  <el-form v-bind="props">
    <slot name="default">
      <template v-if="schema && schema.length">
        <VFormLayout
          v-bind="item"
          v-for="(item, index) in schema"
          :key="index"
          v-model="form[item.prop as string]"
        >
          {{ item }}
        </VFormLayout>
      </template>
    </slot>
  </el-form>
</template>

<script lang="ts" setup>
import VFormLayout from './VFormLayout.vue'

import type { VFormProps } from '@/components/Form/type'

const props = withDefaults(defineProps<VFormProps>(), {
  inline: false,
  'label-position': 'right',
  'hide-required-asterisk': false,
  'require-asterisk-position': 'left',
  'show-message': true,
  'inline-message': false,
  'status-icon': false,
  'validate-on-rule-change': true,
  disabled: false,
  'scroll-to-error': false
})
const emits = defineEmits(['update:modelValue'])

const form = ref<any>()

function setForm(arr: any[], level = 0) {
  const obj = {}
  let i = 0
  arr.forEach((item) => {
    if (!item.prop) {
      item.prop = `form${level}-${i}`
    }
    if (item.value) {
      obj[item.prop] = item.value
    } else if (item.schema && item.schema.length) {
      obj[item.prop] = setForm(item.schema, level + 1)
      i++
    } else {
      obj[item.prop] = undefined
    }
  })
  return obj
}

onBeforeMount(() => {
  form.value = setForm(props?.schema || [])
})

watch(
  form,
  () => {
    emits('update:modelValue', form.value)
  },
  {
    deep: true
  }
)
</script>

<style scoped></style>
