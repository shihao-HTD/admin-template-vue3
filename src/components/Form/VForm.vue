<template>
  <el-form v-bind="props">
    <slot name="default">
      <template v-if="schema && schema.length">
        <VFormLayout
          v-bind="item"
          v-for="(item, index) in schema"
          :key="index"
          v-model="model[item.prop as string]"
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
import { useForm } from '@/components/Form/useForm'

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

const { model } = useForm(props.schema || [])

watch(
  model,
  () => {
    emits('update:modelValue', model.value)
  },
  {
    deep: true
  }
)
</script>

<style scoped></style>
