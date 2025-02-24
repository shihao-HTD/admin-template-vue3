import type { IconifyIcon } from '@iconify/vue'
import type { ColProps, FormItemProps, FormMetaProps, FormProps } from 'element-plus'

export interface LoginItems {
  url: string
  icon: string | IconifyIcon
}

export interface LoginFormProps {
  position?: 'left' | 'right' | 'center'
  title?: string
  loginItems: LoginItems[]
}

export type NewFormProps = FormProps & FormMetaProps

export interface FormItemProp extends FormItemProps {
  prop?: string
  type: string
  // 事件
  events?: any
  // 扩展
  attrs: any
  colProps?: ColProps
  value?: string
  children?: any[]
}

export type FormSchema = FormItemProp[]

export interface VFormProps extends Partial<NewFormProps> {
  schema?: FormSchema
}
