<template>
  <el-switch
    style="--el-switch-on-color: #333"
    v-model="isDark"
    :active-action-icon="Moon"
    :inactive-action-icon="Sun"
  />
</template>

<script setup lang="tsx">
const props = defineProps({
  dark: {
    type: Boolean
  }
})

// const isDark = useDark()
// const isDark = ref(props.dark)
const isDark = useStorage('dark-mode-flag', props.dark)
const isPreferredDark = usePreferredDark()

onMounted(() => {
  if (typeof isDark.value === 'undefined' && !props.dark) {
    toggleMode(isPreferredDark.value)
    isDark.value = isPreferredDark.value
  }
})

const Moon = () => <i class="i-prime:moon"></i>
const Sun = () => <i class="i-octicon:sun-24"></i>

function toggleMode(flag: boolean) {
  if (flag) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

watch(
  isDark,
  () => {
    nextTick(() => {
      toggleMode(isDark.value)
    })
  },
  {
    immediate: true
  }
)

watch(isPreferredDark, () => {
  nextTick(() => {
    toggleMode(isPreferredDark.value)
    isDark.value = isPreferredDark.value
  })
})
</script>

<style scoped></style>
