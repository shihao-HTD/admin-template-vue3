/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/components': RouteRecordInfo<'/components', '/components', Record<never, never>, Record<never, never>>,
    '/components/editors': RouteRecordInfo<'/components/editors', '/components/editors', Record<never, never>, Record<never, never>>,
    '/components/form': RouteRecordInfo<'/components/form', '/components/form', Record<never, never>, Record<never, never>>,
    '/components/form/': RouteRecordInfo<'/components/form/', '/components/form', Record<never, never>, Record<never, never>>,
    '/components/icon': RouteRecordInfo<'/components/icon', '/components/icon', Record<never, never>, Record<never, never>>,
    '/components/icon/ep-icon-list': RouteRecordInfo<'/components/icon/ep-icon-list', '/components/icon/ep-icon-list', Record<never, never>, Record<never, never>>,
    '/components/icon/ep-icon-picker': RouteRecordInfo<'/components/icon/ep-icon-picker', '/components/icon/ep-icon-picker', Record<never, never>, Record<never, never>>,
    '/components/notice': RouteRecordInfo<'/components/notice', '/components/notice', Record<never, never>, Record<never, never>>,
    '/components/notice/notice-message': RouteRecordInfo<'/components/notice/notice-message', '/components/notice/notice-message', Record<never, never>, Record<never, never>>,
    '/components/players': RouteRecordInfo<'/components/players', '/components/players', Record<never, never>, Record<never, never>>,
    '/components/players/audio': RouteRecordInfo<'/components/players/audio', '/components/players/audio', Record<never, never>, Record<never, never>>,
    '/components/players/video': RouteRecordInfo<'/components/players/video', '/components/players/video', Record<never, never>, Record<never, never>>,
    '/components/table': RouteRecordInfo<'/components/table', '/components/table', Record<never, never>, Record<never, never>>,
    '/components/table/': RouteRecordInfo<'/components/table/', '/components/table', Record<never, never>, Record<never, never>>,
    '/components/table/high': RouteRecordInfo<'/components/table/high', '/components/table/high', Record<never, never>, Record<never, never>>,
    '/components/table/Popover': RouteRecordInfo<'/components/table/Popover', '/components/table/Popover', Record<never, never>, Record<never, never>>,
    '/components/table/select': RouteRecordInfo<'/components/table/select', '/components/table/select', Record<never, never>, Record<never, never>>,
    '/directives': RouteRecordInfo<'/directives', '/directives', Record<never, never>, Record<never, never>>,
    '/directives/copy': RouteRecordInfo<'/directives/copy', '/directives/copy', Record<never, never>, Record<never, never>>,
    '/directives/debounce&throttle': RouteRecordInfo<'/directives/debounce&throttle', '/directives/debounce&throttle', Record<never, never>, Record<never, never>>,
    '/directives/draggable': RouteRecordInfo<'/directives/draggable', '/directives/draggable', Record<never, never>, Record<never, never>>,
    '/directives/flash': RouteRecordInfo<'/directives/flash', '/directives/flash', Record<never, never>, Record<never, never>>,
    '/directives/long-press': RouteRecordInfo<'/directives/long-press', '/directives/long-press', Record<never, never>, Record<never, never>>,
    '/directives/scrollText': RouteRecordInfo<'/directives/scrollText', '/directives/scrollText', Record<never, never>, Record<never, never>>,
    '/directives/watermark': RouteRecordInfo<'/directives/watermark', '/directives/watermark', Record<never, never>, Record<never, never>>,
    '/login': RouteRecordInfo<'/login', '/login', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
