import type { IconifyIcon } from '@iconify/vue'
import type { CSSProperties } from 'vue'
import type { MenuItemClicked } from 'element-plus'
import type { NavigationFailure } from 'vue-router'

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
  redirect?: string
}

export interface IconOptions {
  style: CSSProperties
  class: string
}

export type EmitSelectType = [
  index: string,
  indexPath: string[],
  item: MenuItemClicked,
  routerResult?: Promise<void | NavigationFailure>
]
export type OpenCloseType = [index: string, indexPath: string[]]
