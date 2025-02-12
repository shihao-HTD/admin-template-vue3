<template>
  <el-dropdown v-bind="props" @command="handleCommand">
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

    <span> 用户名称 </span>
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
import type { ButtonProps, ButtonType, PartialOptions, Placement, AvatarProps } from 'element-plus'

/* 不推荐
type DropdownProps = ExtractPropTypes<typeof dropdownProps>
interface AvatarMenuProps extends /!* @vue-ignore *!/ Partial<DropdownProps> {}
*/
interface DropMenuProps {
  trigger?: 'click' | 'hover' | 'contextmenu'
  effect?: string
  type?: ButtonType
  placement?: Placement
  popperOptions?: Partial<PartialOptions>
  id?: string
  size?: string
  splitButton?: boolean
  hideOnClick?: boolean
  loop?: boolean
  showTimeout?: number
  hideTimeout?: number
  tabindex?: number | string
  maxHeight?: number | string
  popperClass?: string
  disabled?: boolean
  role?: string
  buttonProps?: ButtonProps
  teleported?: boolean
}

export type DropDownMenuItem = string | number | { key: string | number | object; value: string }

interface AvatarMenuProps extends AvatarProps, Omit<DropMenuProps, 'size'> {
  data: DropDownMenuItem[]
  avatarSize: number | 'larger' | 'default' | 'small'
}

const props = withDefaults(defineProps<Partial<AvatarMenuProps>>(), {
  trigger: 'click'
})
const handleCommand = (command: string | number | object) => {
  console.log("=>(AvatarMenu.vue:67) command", command);
}
</script>

<style scoped></style>
