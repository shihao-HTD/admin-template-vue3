<template>
  <component
    @click="handleClick"
    :is="tag"
    :class="[isFullscreen ? 'i-ep:full-screen' : 'i-ri:fullscreen-exit-fill', 'cursor-pointer']"
  ></component>
</template>

<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen()

defineProps({
  tag: {
    type: String,
    default: 'i'
  }
})

function handleClick() {
  toggle()
}
</script>

<style scoped></style>
