import type { BadgeProps } from 'element-plus'
import type { IconifyIcon } from '@iconify/vue'

export interface NotificationProps extends Partial<BadgeProps> {
  icon: string | IconifyIcon
  iconSize?: number
  iconColor?: string
  size: number
  scale: number
  color: string
}
