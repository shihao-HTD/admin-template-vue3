<template>
  <el-form ref="formRef" v-bind="props" :rules="rules" :model="model">
    <slot name="default">
      <el-row :class="rowClass" :style="rowStyle">
        <template v-if="schema && schema.length">
          <VFormLayout
            v-for="(item, index) in schema"
            :key="index"
            v-bind="item"
            v-model="model[item.prop as string]"
          >
          </VFormLayout>
        </template>
      </el-row>
    </slot>

    <slot name="actions"></slot>
  </el-form>
</template>

<script lang="ts" setup>
import VFormLayout from './VFormLayout.vue'

import type { VFormProps } from '@/components/Form/type'
import { useForm } from '@/components/Form/useForm'
import type { FormInstance, FormItemProp } from 'element-plus'
import { exposeEventsUtils } from '@/utils/format'

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
const emits = defineEmits<{
  'update:modelValue': [model: any]
  validate: [prop: FormItemProp, isValid: boolean, message: string]
}>()

const exposeEvents = ['validate', 'validateField', 'resetFields', 'clearValidate', 'scrollToField']

const { model, rules } = useForm(props.schema || [])
const formRef = ref<FormInstance>()

const exposes = exposeEventsUtils(formRef, exposeEvents)

defineExpose({ ...exposes })

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
