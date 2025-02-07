import type { AvatarProps, BadgeProps, TagProps } from 'element-plus'
import type { IconifyIcon, IconProps } from '@iconify/vue'

export interface NotificationProps extends Partial<BadgeProps> {
  icon: string | IconifyIcon
  iconSize?: number
  iconColor?: string
  size: number
  scale: number
  color: string
}

export interface MessageListItem {
  avatar?: AvatarProps
  title: string
  tagProps?: TagProps
  tag?: string
  content?: string
  time?: string
}

export interface NoticeMessageListOptions {
  title: string
  contents?: MessageListItem[]
}
export interface NoticeActionItem {
  title: string
  callback: () => void
  icon?: IconProps
}

export interface NoticeMessageListProps {
  list: NoticeMessageListOptions[]
  actions: NoticeActionItem[]
}

export interface NoticeProps extends NotificationProps, NoticeMessageListProps {}
