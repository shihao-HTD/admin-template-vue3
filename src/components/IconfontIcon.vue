<template>
  <NetIcon v-bind="props"></NetIcon>
</template>

<script setup lang="ts">
import type { NetIconProps } from '@/components/type'
const props = withDefaults(defineProps<NetIconProps>(), {
  url: '/font_4821237_or03y9sxpf.css',
  prefix: 'iconfont-',
  type: '',
  fontFamily: 'iconfont'
})
</script>

<style scoped></style>
