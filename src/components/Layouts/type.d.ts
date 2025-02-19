import type { AvatarMenuProps, LocaleItem, ThemeSettingsProps } from '@/components/Themes/type'


export interface HeaderProps extends Partial<AvatarMenuProps> {
  collapse: boolean
  locales: LocaleItem[],
  settings?:ThemeSettingsProps
}
