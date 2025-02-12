<template>
  <el-dropdown @command="handleCommand">
    <slot name="header">
      <span class="el-dropdown-link">
        <Iconify :class="iconClass" v-bind="iconPropsComputed" icon="ion:language"></Iconify>
      </span>
    </slot>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(item, index) in locales" :key="index" :command="item.name">
          <div class="flex items-center">
            <Iconify
              :class="iconClass"
              v-bind="iconPropsComputed"
              class="mr-2"
              v-if="item.icon"
              :icon="item.icon"
            ></Iconify>
            {{ item.text }}
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import Iconify from '@/components/Icon/Iconify.vue'
import type { LocaleItem } from '@/components/Themes/type'
import type { IconProps } from '@iconify/vue'

interface ChangeLocaleProps extends Partial<IconProps> {
  locales: LocaleItem[]
  iconClass?: string
}

const props = withDefaults(defineProps<ChangeLocaleProps>(), {
  iconClass: 'text-xl'
})
const iconPropsComputed = computed(() => {
  const { locales, ...restProps } = props
  return restProps
})
function handleCommand(command: string) {}
</script>

<style scoped></style>
