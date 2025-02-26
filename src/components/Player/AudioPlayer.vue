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
          <i class="i-iconoir:play mx-2 lt-sm:(text-5xl mx-9)" @click="playAudio"></i>
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
          <ProgressBar v-model="progress"></ProgressBar>

          <!-- 播放总体时间 -->
          <span class="text-sm lt-sm:(hidden)">04:00</span>
        </div>
        <i class="i-iconoir:forward-15-seconds lt-sm:(text-2xl)"></i>
      </div>
      <div class="flex items-center mx-2 lt-sm:(w-full mx-0 my-2 justify-between) lt-sm:(hidden)">
        <i class="flex items-center group">
          <!-- 静音&音量调节按钮 -->
          <ProgressBar
            v-model="progress"
            class="transition-width invisible w-0 mx-0! group-hover:(visible w-[80px] mx-2!)"
          ></ProgressBar>
          <i class="i-clarity:volume-mute-line mr-3" v-if="isMute" @click="toggleVolume"></i>
          <i class="i-clarity:volume-up-line mr-3" v-else @click="toggleVolume"></i>
        </i>
        <!-- 速率控制按钮 -->
        <span class="mr-3 cursor-pointer min-w-8 text-center select-none" @click="handleRateChange"
          >{{ rateList[rateCurrent] }}x</span
        >
        <!-- 循环控制按钮 -->
        <span @click="handleLoopChange" class="flex items-center">
          <i class="i-bi:sort-down-alt" v-if="loop === 0"></i>
          <i class="i-cil:loop" v-else-if="loop === 1"></i>
          <i class="i-cil:loop-1" v-else-if="loop === 2"></i>
          <i class="i-ps:random" v-else></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AudioPlayerProps, HowlerGlobalOptionsKeys } from './types'
import { Howl, Howler } from 'howler'

console.log('🚀 ~ file: audio.vue:7 ~ Howler:', Howler)
console.log('🚀 ~ file: audio.vue:7 ~ Howl:', Howl)

const keys: HowlerGlobalOptionsKeys[] = [
  'usingWebAudio',
  'noAudio',
  'autoUnlock',
  'html5PoolSize',
  'autoSuspend',
  'ctx',
  'masterGain'
]

const props = defineProps<AudioPlayerProps>()

const progress = ref(0)
const rateList = ref([0.5, 1, 1.5, 2])
const rateCurrent = ref(1)

const loop = ref(0)

const [isMute, toggle] = useToggle(false)

const audioInstance = ref()

onBeforeMount(() => {
  init()
})

onBeforeUnmount(() => {
  Howler.unload()
})

function init() {
  const options = props.options
  if (options) {
    keys.forEach((key) => {
      if (key in options) {
        Howler[key] = options[key]
      }
    })
  }
  audioInstance.value = new Howl({
    src: ''
  })

  console.log('=>(AudioPlayer.vue:105) audioInstance.value', audioInstance.value)
}

function playAudio() {
  if (audioInstance.value) {
    audioInstance.value.play()
  }
}

const toggleVolume = () => {
  toggle()
}

const handleRateChange = () => {
  rateCurrent.value++
  if (rateCurrent.value >= rateList.value.length) {
    rateCurrent.value = 0
  }
}
const handleLoopChange = () => {
  loop.value++
  if (loop.value >= 4) {
    loop.value = 0
  }
}
</script>

<style scoped lang="scss">
i {
  @apply cursor-pointer;
}

:deep(.el-dropdown-menu__item) {
  &.active {
    color: var(--el-dropdown-menuItem-hover-color);
    background-color: var(--el-dropdown-menuItem-hover-fill);
  }
}
</style>
