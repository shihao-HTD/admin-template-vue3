<template>
  <el-form ref="tableFormRef" v-bind="props" :rules="rules" :model="model">
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

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import VFormLayout from './VFormLayout.vue'

import type { VFormProps } from '@/components/Form/type'
import { useForm } from '@/components/Form/useForm'
import type { FormInstance } from 'element-plus'

const props = withDefaults(defineProps<VFormProps>(), {
  inline: false,
  labelPosition: 'right',
  hideRequiredAsterisk: false,
  requireAsteriskPosition: 'left',
  showMessage: true,
  inlineMessage: false,
  statusIcon: false,
  validateOnRuleChange: true,
  scrollToError: false,
  disabled: false
})
const emits = defineEmits(['update:modelValue'])

const { model, rules } = useForm(props.schema || [])
const tableFormRef = ref<FormInstance>()

watch(
  model,
  () => {
    emits('update:modelValue', model.value)
  },
  {
    deep: true
  }
)

async function onSubmit() {
  console.log('submit')
  tableFormRef.value?.validate()
}
</script>

<style scoped></style>
