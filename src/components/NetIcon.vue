<template>
  <i :class="className"></i>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  prefix: {
    type: String,
    default: 'iconfont-'
  },
  type: {
    type: String,
    default: ''
  },
  fontFamily: {
    type: String,
    default: 'iconfont'
  }
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
