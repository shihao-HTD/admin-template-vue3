<template>
  <el-dropdown v-bind="props" @command="handleCommand">
    <div class="flex items-center">
      <el-avatar
        :icon="icon"
        :size="avatarSize"
        :src="src"
        :alt="alt"
        :fit="fit"
        :src-set="srcSet"
        :shape="shape"
      >
      </el-avatar>

      <span class="ml-2"> {{ username }} </span>
    </div>
    <template #dropdown>
      <el-dropdown-item
        v-for="(menu, index) in data"
        :key="index"
        :command="typeof menu === 'object' && menu.key ? menu.key : menu"
      >
        {{ typeof menu === 'object' && menu.value ? menu.value : menu }}
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
/* 不推荐
type DropdownProps = ExtractPropTypes<typeof dropdownProps>
interface AvatarMenuProps extends /!* @vue-ignore *!/ Partial<DropdownProps> {}
*/
import type { AvatarMenuProps } from '@/components/Themes/type'

const props = withDefaults(defineProps<Partial<AvatarMenuProps>>(), {
  trigger: 'click'
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
