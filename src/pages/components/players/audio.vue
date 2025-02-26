<template>
  <div>
    <AudioPlayer></AudioPlayer>
  </div>
</template>

<script setup lang="ts">
import { Howl, Howler } from 'howler'

console.log('🚀 ~ file: audio.vue:7 ~ Howler:', Howler)
console.log('🚀 ~ file: audio.vue:7 ~ Howl:', Howl)

definePage({
  meta: {
    title: 'components.audio-player',
    icon: 'ant-design:audio-outlined'
  }
})
</script>

<style scoped></style>
