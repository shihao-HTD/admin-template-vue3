<template>
  <el-row class="items-center">
    <!--    面包屑-->
    <Iconify
      @click="collapseModel = !collapseModel"
      class="text-2xl cursor-pointer"
      :icon="collapseModel ? 'ep:expand' : 'ep:fold'"
    ></Iconify>
    <!--    右侧-->

    <div class="flex-grow">
      <slot></slot>
    </div>
    <el-row class="items-center">
      <ThemeSettings v-bind="settings" @change="handleChange"></ThemeSettings>
      <DarkModeToggle :dark="settings?.darkMode" @change="handleDarkModeChange" class="mr-2">
      </DarkModeToggle>
      <ChangeLocale class="mr-2" :locales="locales"></ChangeLocale>
      <FullScreen></FullScreen>
      <el-divider direction="vertical"></el-divider>
      <!-- 用户下拉菜单-->
      <AvatarMenu
        @command="handleCommand"
        v-bind="avatarProps"
        v-if="username || src"
        class="mr-2"
      ></AvatarMenu>
    </el-row>
  </el-row>
</template>

<script setup lang="ts">
import DarkModeToggle from '../Themes/DarkModeToggle.vue'
import FullScreen from '../Themes/FullScreen.vue'
import ChangeLocale from '../Themes/ChangeLocale.vue'
import type { ThemeSettingsProps } from '@/components/Themes/type'
import ThemeSettings from '@/components/Themes/ThemeSettings.vue'
import type { HeaderProps } from '@/components/Layouts/type'

const props = withDefaults(defineProps<HeaderProps>(), {})

const collapseModel = defineModel('collapse', {
  default: false
})

const localeProps = reactive<HeaderProps>({
  ...props
})

const avatarProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { collapse, locales, ...restProps } = props
  return restProps
})

const emits = defineEmits<{
  (e: 'menuChange', arg: string | number | object): void
  (e: 'settingsChange', settings: ThemeSettingsProps): void
}>()
const handleCommand = (command: string | number | object) => {
  console.log('=>(AvatarMenu.vue:67) command', command)
  emits('menuChange', command)
}

watch(
  () => localeProps.settings,
  () => {
    emits('settingsChange', localeProps.settings!)
  },
  {
    deep: true
  }
)

function handleChange(settings: ThemeSettingsProps) {
  localeProps.settings = settings
}
function handleDarkModeChange(dark: boolean) {
  localeProps.settings!.darkMode = dark
}
</script>

<style scoped></style>
