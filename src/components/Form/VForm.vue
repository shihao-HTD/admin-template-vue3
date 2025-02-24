<template>
  <el-form v-bind="props">
    <slot name="default">
      <template>

      </template>
    </slot>
  </el-form>
</template>

<script lang="ts" setup>
import type { FormItemProps, FormMetaProps, FormProps } from 'element-plus'

type NewFormProps = FormProps & FormMetaProps

interface FormItemProp extends FormItemProps {}

type FormSchema = FormItemProp[]

interface VFormProps extends Partial<NewFormProps> {
  schema?: FormSchema
}

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

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped></style>
