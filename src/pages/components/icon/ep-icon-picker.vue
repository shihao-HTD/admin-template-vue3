<template>
  <div>
    <icon-picker @submit="handleSubmit"> </icon-picker>
  </div>
</template>

<script setup lang="ts">
import type { IconPickerSubmitDataType } from '@/components/Icon/type'

definePage({
  meta: {
    title: '图标选择器',
    // icon: 'mdi:user'
  }
})

function handleSubmit(data: IconPickerSubmitDataType) {
  console.log('=>(ep-icon-picker.vue:11) data', data)
}
</script>

<style scoped></style>
