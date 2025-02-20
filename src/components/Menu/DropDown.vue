<template>
  <el-dropdown @command="handleCommand">
    <slot name="header">
    </slot>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :class="{ active: currentIndex === index }"
          v-for="(item, index) in items"
          :key="index"
          :command="{ item, index }"
        >
          <div class="flex items-center">
            <Iconify
              :class="iconClass"
              v-bind="iconProps"
              class="mr-2"
              v-if="item.icon"
              :icon="item.icon"
            ></Iconify>
            <slot name="item" :item="item"> </slot>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" generic="T extends { icon?: string | IconifyIcon }">
import type { IconifyIcon, IconProps } from '@iconify/vue'
import Iconify from '@/components/Icon/Iconify.vue'
interface DropDownProps {
  items: T[]
  iconProps?: Partial<IconProps>
  iconClass?: string
  // current?: number
}
const props = defineProps<DropDownProps>()

const currentIndex = defineModel('modelValue', {
  default: 0
})

const emits = defineEmits<{
  (e: 'change', item: T, index: number): void
}>()

/*watch(
  () => props.current,
  () => {
    if (props.current) {
      currentIndex.value = props.current
    }
  }
)*/

// const currentIndex = ref(props.current || 0)

function handleCommand(command: { item: T; index: number }) {
  currentIndex.value = command.index
  emits('change', command.item, command.index)
}
</script>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item) {
  &.active {
    color: var(--el-dropdown-menuItem-hover-color);
    background-color: var(--el-dropdown-menuItem-hover-fill);
  }
}
</style>
