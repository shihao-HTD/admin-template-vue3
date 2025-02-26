<template>
  <div class="w-full">
    <!-- title -->
    <slot name="title" v-if="title">
      {{ title }}
    </slot>
    <!-- player -->
    <div class="flex items-center w-full flex-wrap">
      <!-- 播放控制 -->
      <div class="flex items-center lt-sm:(w-full justify-between py-3)">
        <!-- 循环控制按钮 -->
        <i class="i-bi:sort-down-alt hidden lt-sm:(block text-xl)"></i>
        <div class="flex items-center">
          <i class="i-iconoir:skip-prev lt-sm:(text-3xl)"></i>
          <i class="i-iconoir:play mx-2 lt-sm:(text-5xl mx-9)"></i>
          <i class="i-iconoir:skip-next lt-sm:(text-3xl)"></i>
        </div>
        <!-- 速率控制按钮 -->
        <span class="mr-3 cursor-pointer hidden lt-sm:(block text-xl)">1x</span>
      </div>
      <!-- 进度条部分 -->
      <div class="flex items-center flex-1 mx-4 flex-wrap lt-sm:mx-0">
        <div class="hidden lt-sm:(block flex justify-between py-2 w-full)">
          <span class="text-sm">00:00</span>
          <!-- 播放总体时间 -->
          <span class="text-sm">04:00</span>
        </div>
        <i class="i-iconoir:backward-15-seconds lt-sm:(text-2xl)"></i>
        <!-- 进度条 -->
        <div class="flex-1 flex items-center mx-2 lt-sm:(my-2)">
          <!-- 播放时间 -->
          <span class="text-sm lt-sm:(hidden)">00:00</span>
          <span class="flex-1 mx-4 relative">
            <span class="cursor-pointer z-50 absolute left-0 top-1/2">
              <i
                class="absolute left-0 top-1/2 translate-x--1/2 translate-y--1/2 block i-ic:outline-circle text-2xl color-[var(--el-color-primary)]"
              >
              </i>
              <i
                class="absolute left-0 top-1/2 translate-x--1/2 translate-y--1/2 block i-ic:round-circle text-xl color-[var(--el-bg-color)] z-20"
              >
              </i>
            </span>
            <div class="h-2 w-full bg-[var(--el-fill-color-darker)] rounded cursor-pointer">
              <div class="h-2 w-1/2 bg-[var(--el-color-primary)] rounded-l absolute z-10"></div>
            </div>
          </span>
          <!-- 播放总体时间 -->
          <span class="text-sm lt-sm:(hidden)">04:00</span>
        </div>
        <i class="i-iconoir:forward-15-seconds lt-sm:(text-2xl)"></i>
      </div>
      <div class="flex items-center mx-2 lt-sm:(w-full mx-0 my-2 justify-between) lt-sm:(hidden)">
        <!-- 静音&音量调节按钮 -->
        <i class="i-clarity:volume-mute-line mr-3"></i>
        <!-- 速率控制按钮 -->
        <span class="mr-3 cursor-pointer">1x</span>
        <!-- 循环控制按钮 -->
        <i class="i-bi:sort-down-alt"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AudioPlayerProps } from './types'

defineProps<AudioPlayerProps>()
</script>

<style scoped lang="scss">
i {
  @apply cursor-pointer;
}
</style>
