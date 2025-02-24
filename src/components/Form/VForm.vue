<template>
  <el-form v-bind="props">
    <slot name="default">
      <template v-if="schema && schema.length">
        <VFormLayout v-bind="item" v-for="(item, index) in schema" :key="index">
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

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped></style>
