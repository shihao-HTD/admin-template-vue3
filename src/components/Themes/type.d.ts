import type { IconifyIcon } from '@iconify/vue'
import type { AvatarProps, ButtonProps, ButtonType, PartialOptions, Placement } from 'element-plus'

export interface LocaleItem {
  name: string
  text?: string
  icon?: IconifyIcon | string
}

export interface DropMenuProps {
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

export interface AvatarMenuProps extends AvatarProps, Omit<DropMenuProps, 'size'> {
  data: DropDownMenuItem[]
  menuSize: 'larger' | 'default' | 'small' | string
  username: string
}

export interface ThemeSettingsProps {
  theme: string
  darkMode: boolean
  menuWidth?: number
  showLogo: boolean
  showTabs: boolean
  fixedHead: boolean
  showBreadCrumb?: boolean
  mode: 'siderbar' | 'mix' | 'top' | 'mixbar'
  backgroundColor: string
}
