import type { AvatarMenuProps, LocaleItem, ThemeSettingsProps } from '@/components/Themes/type'
import type { TabPaneName, TabsPaneContext, TabsProps } from 'element-plus'
import type { AppRouteMenuItem } from '@/components/Menu/type'
import { TabActions } from '@/components/Layouts/const'

export interface HeaderProps extends Partial<AvatarMenuProps> {
  collapse: boolean
  locales: LocaleItem[]
  settings?: ThemeSettingsProps
}

export interface HeaderTabsProps extends Partial<TabsProps> {
  data: AppRouteMenuItem[]
}
export type HeaderTabsEvents = {
  tabClick: [pane: TabsPaneContext, ev: Event]
  tabChange: [name: TabPaneName]
  edit: [paneName: TabPaneName | undefined, action: 'remove' | 'add']
  tabRemove: [name: TabPaneName]
  tabAdd: []
  tabMenuClick: [action: TabActions]
}
