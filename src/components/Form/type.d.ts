import type { IconifyIcon } from '@iconify/vue'

export interface LoginItems {
  url: string
  icon: string | IconifyIcon
}

export interface LoginFormProps {
  position?: 'left' | 'right' | 'center'
  title?: string
  loginItems: LoginItems[]
}
