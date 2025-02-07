export interface NetIconProps {
  url: string
  prefix: string
  fontFamily: string
  type: string
}
export interface IconPickerSubmitDataType {
  icon: string
  color: string
  fontSize: number
}

export interface IconListProps {
  iconData: string[]
  collection: string
  iconClass: string
  itemClass: string
  showText: boolean
  activeClass: string
}
