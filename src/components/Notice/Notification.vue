<template>
  <el-badge
    :value="value"
    :style="{
      '--tomic-notice-bg-color': color || 'var(--el-color-danger)',
      '--tomic-notice-font-size': size ? size + 'px' : 'var(--el-badge-size)'
    }"
  >
    <slot>
      <Iconify
        icon="ep:bell"
        :style="{
          color: iconColor ?? '#333',
          fontSize: iconSize ? `${iconSize}px` : '18px'
        }"
      ></Iconify>
    </slot>
  </el-badge>
</template>

<script setup lang="ts">
import type { BadgeProps } from 'element-plus'
import Iconify from '@/components/Icon/Iconify.vue'
import type { IconifyIcon } from '@iconify/vue'

interface NotificationProps extends Partial<BadgeProps> {
  icon: string | IconifyIcon
  iconSize?: number
  iconColor?: string
  size: number
  color: string
}

withDefaults(defineProps<NotificationProps>(), {
  icon: 'ep:bell',
  size: 12,
  color: ''
})
</script>

<style lang="scss" scoped>
$color: var(--tomic-notice-bg-color);
$size: var(--tomic-notice-font-size);

:deep(.el-badge__content) {
  background-color: $color;
  font-size: $size;
}
</style>
