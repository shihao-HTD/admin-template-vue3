import type { IconifyIcon } from '@iconify/vue'
import type { CSSProperties } from 'vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<T>)
  | (() => Promise<typeof import('*.vue')>)

export interface RouteMeta extends Record<string | number | symbol, unknown> {
  layout?: string
  title?: string
  order?: number
  icon?: string | IconifyIcon
  hideMenu?: boolean
  disabled?: boolean
}

export interface AppRouteMenuItem {
  path: string
  name?: string | symbol
  alias?: string
  component?: Component
  meta?: RouteMeta
  children?: AppRouteMenuItem[]
}

export interface IconOptions {
  style: CSSProperties
  class: string
}
