<template>
  <el-row class="items-center">
    <!--    面包屑-->
    <Iconify class="text-2xl cursor-pointer" :icon="collapse ? 'ep:expand' : 'ep:fold'"></Iconify>
    <!--    右侧-->

    <div class="flex-grow"></div>
    <el-row class="items-center">
      <ThemeSettings></ThemeSettings>
      <DarkModeToggle class="mr-2"> </DarkModeToggle>
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
import type { AvatarMenuProps, LocaleItem } from '@/components/Themes/type'
import ThemeSettings from '@/components/Themes/ThemeSettings.vue'

interface HeaderProps extends Partial<AvatarMenuProps> {
  collapse: boolean
  locales: LocaleItem[]
}
const props = withDefaults(defineProps<HeaderProps>(),{
  collapse:false
})

const avatarProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { collapse, locales, ...restProps } = props
  return restProps
})

const emits = defineEmits<{
  (e: 'command', arg: string | number | object): void
}>()
const handleCommand = (command: string | number | object) => {
  console.log('=>(AvatarMenu.vue:67) command', command)
  emits('command', command)
}
</script>

<style scoped></style>
