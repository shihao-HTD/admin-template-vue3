<template>
  <el-dropdown v-bind="props" @command="handleCommand" :size="menuSize">
    <div class="flex items-center">
      <el-avatar
        :icon="icon"
        :size="size"
        :src="src"
        :alt="alt"
        :fit="fit"
        :src-set="srcSet"
        :shape="shape"
      >
        {{ username ? username[0].toUpperCase() : '' }}
      </el-avatar>

      <span class="ml-2"> {{ username }} </span>
    </div>
    <template #dropdown>
      <template v-for="(menu, index) in data" :key="index">
        <el-dropdown-item
          v-if="(typeof menu === 'object' && menu.value ? menu.value : menu) !== 'divider'"
          :command="typeof menu === 'object' && menu.key ? menu.key : menu"
        >
          {{ typeof menu === 'object' && menu.value ? menu.value : menu }}
        </el-dropdown-item>

        <el-divider class="my-0!" v-else></el-divider>
      </template>
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
  trigger: 'click',
  username: '',
  size: 'small'
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
