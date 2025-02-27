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
          <i
            class="i-iconoir:play mx-2 lt-sm:(text-5xl mx-9)"
            @click="togglePlay"
            v-if="!state.isPlay"
          ></i>
          <i class="i-iconoir:pause mx-2 lt-sm:(text-5xl mx-9)" @click="togglePlay" v-else></i>
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
        <i
          class="i-iconoir:backward-15-seconds lt-sm:(text-2xl)"
          @click="seekPlayback(PlayAction.Rewind)"
        ></i>
        <!-- 进度条 -->
        <div class="flex-1 flex items-center mx-2 lt-sm:(my-2)">
          <!-- 播放时间 -->
          <span class="text-sm min-w-10 text-center lt-sm:(hidden)">{{
            formatTime(state.progress)
          }}</span>
          <ProgressBar v-model="progress"></ProgressBar>

          <!-- 播放总体时间 hh:mm:ss -->
          <span class="text-sm lt-sm:(hidden)">{{ formatTime(state.duration) }}</span>
        </div>
        <i
          class="i-iconoir:forward-15-seconds lt-sm:(text-2xl)"
          @click="seekPlayback(PlayAction.Forward)"
        ></i>
      </div>
      <div class="flex items-center mx-2 lt-sm:(w-full mx-0 my-2 justify-between) lt-sm:(hidden)">
        <i class="flex items-center group">
          <!-- 静音&音量调节按钮 -->
          <ProgressBar
            v-model="state.volume"
            class="transition-width invisible w-0 mx-0! group-hover:(visible w-[80px] ml-2! mr-4!)"
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
import type { AudioPlayerProps, HowlerGlobalOptionsKeys, AudioPlayerOptions } from './types'
import { Howl, Howler } from 'howler'
import { formatTime } from '@/utils'

const keys: HowlerGlobalOptionsKeys[] = [
  'usingWebAudio',
  'noAudio',
  'autoUnlock',
  'html5PoolSize',
  'autoSuspend',
  'ctx',
  'masterGain'
]

type Options = Partial<AudioPlayerOptions>

const defaultAudioOptions: Options = {
  volume: 1,
  loop: false,
  rate: 1,
  mute: false
}

const props = defineProps<AudioPlayerProps>()

const progress = ref(0)
const rateList = ref([0.5, 1, 1.5, 2])
const rateCurrent = ref(1)
const audioInstance = ref()

enum PlayAction {
  Forward,
  Rewind
}

const loop = ref(0)
const state = reactive({
  isPlay: false,
  duration: 0,
  progress: 0,
  volume: 1,
  oldVolume: 1
})

const [isMute, toggle] = useToggle(false)

watch(progress, (newVal) => {
  if (audioInstance.value && newVal) {
    audioInstance.value.seek(newVal * state.duration)
    state.progress = newVal * state.duration
  }
})
watch(
  () => state.volume,
  (newVal) => {
    if (audioInstance.value && !isNaN(newVal)) {
      audioInstance.value.volume(newVal)
      toggle(newVal <= 0)
    }
  },
  {
    deep: true
  }
)

onBeforeMount(() => {
  init()
})

onBeforeUnmount(() => {
  Howler.unload()
})

const step = () => {
  // 实例未创建
  if (!audioInstance.value) return
  state.isPlay = audioInstance.value.playing()
  // 音频未播放
  if (!state.isPlay) return
  state.progress = audioInstance.value.seek() || 0

  // 设置进度条的百分比
  progress.value = state.progress / state.duration

  requestAnimationFrame(step)
}

const togglePlay = () => {
  if (audioInstance.value) {
    state.isPlay ? audioInstance.value.pause() : audioInstance.value.play()
  }
}

const seekPlayback = (type) => {
  if (audioInstance.value) {
    if (type === PlayAction.Forward) {
      state.progress = state.progress + 15 > state.duration ? state.duration : state.progress + 15
    }
    if (type === PlayAction.Rewind) {
      state.progress = state.progress - 15 < 0 ? 0 : state.progress - 15
    }
    audioInstance.value.seek(state.progress)
  }
}

function init() {
  const options = props.options
  if (options) {
    keys.forEach((key) => {
      if (key in options) {
        Howler[key] = options[key]
      }
    })
    state.volume = options.volume || 1
  }

  audioInstance.value = new Howl(
    Object.assign(defaultAudioOptions, props.options, {
      onload: () => {
        state.duration = audioInstance.value.duration()
      },
      onplay: () => {
        step()
      }
    })
  )
}

const toggleVolume = () => {
  toggle()
  if (isMute.value) {
    state.oldVolume = state.volume
  }
  if (audioInstance.value) {
    audioInstance.value.mute(isMute)
    const oldVolume = state.oldVolume === 0 ? 1 : state.oldVolume
    state.volume = isMute.value ? 0 : oldVolume
  }
}

const handleRateChange = () => {
  rateCurrent.value++
  if (rateCurrent.value >= rateList.value.length) {
    rateCurrent.value = 0
  }
  if (audioInstance.value) {
    audioInstance.value.rate(rateList.value[rateCurrent.value])
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
