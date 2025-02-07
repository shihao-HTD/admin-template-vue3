import type { AvatarProps, BadgeProps, TagProps } from 'element-plus'
import type { IconifyIcon, IconProps } from '@iconify/vue'
import type { CSSProperties } from 'vue'

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
  tagProps?: Partial<TagProps>
  tag?: string
  content?: string
  time?: string
}

export interface NoticeMessageListOptions {
  title: string
  contents?: MessageListItem[]
}
export interface NoticeActionItem extends IconProps{
  title: string
  callback: () => void
}

export interface NoticeMessageListProps {
  list: NoticeMessageListOptions[]
  actions: NoticeActionItem[],
  wrapClass?:string
  wrapStyle?:CSSProperties
}

export interface NoticeProps extends Partial<NotificationProps>, NoticeMessageListProps {}
