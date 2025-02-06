<template>
  <i :class="className"></i>
</template>

<script setup lang="ts">
import type { NetIconProps } from '@/components/Icon/type'

const props = withDefaults(defineProps<NetIconProps>(), {
  url: '',
  prefix: 'iconfont-',
  type: '',
  fontFamily: 'iconfont'
})

onBeforeMount(() => {
  const isExit = document.querySelector(`link[href="${props.url}"]`)
  if (isExit) return
  if (props.url) {
    const linkElement = document.createElement('link')
    linkElement.href = props.url
    linkElement.rel = 'stylesheet'
    document.head.appendChild(linkElement)
  }
})
const className = computed(() => `${props.fontFamily} ${props.prefix}${props.type}`)
</script>

<style scoped></style>
