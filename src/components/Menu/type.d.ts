import type { IconifyIcon } from '@iconify/vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<T>)
  | (() => Promise<typeof import('*.vue')>)

export interface RouteMeta {
  layout?: string
  title?: string
  order?: number
  icon: string | IconifyIcon
  hideMenu?: boolean
}

export interface AppRouterMenuItem {
  path: string
  name: string
  alias?: string
  component: Component
  meta?: RouteMeta
  children?: AppRouterMenuItem[]
}
