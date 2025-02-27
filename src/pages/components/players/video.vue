<template>
  <div>
    <AudioPlayer :options="options"></AudioPlayer>
    <el-button @click="handleClick">Click</el-button>
  </div>
</template>

<script setup lang="ts">
import type { AudioPlayerOptions } from '@/components/Player/types'
import { Howler } from 'howler'

definePage({
  meta: {
    title: 'components.audio-player',
    icon: 'ant-design:audio-outlined'
  }
})

const options = ref({
  src: 'https://toimc-online.static.toimc.com/vue-toimc-admin/music/%E5%85%89%E8%BE%89%E5%B2%81%E6%9C%88.mp3'
} as AudioPlayerOptions)

const handleClick = () => {
  Howler.unload()
}
</script>

<style scoped></style>
