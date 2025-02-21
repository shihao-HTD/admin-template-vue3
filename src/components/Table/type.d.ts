import type { PaginationProps, TableColumnCtx, TableProps } from 'element-plus'
import type { Component } from 'vue'

export interface PaginationType extends Partial<PaginationProps> {
  align?: 'center' | 'left' | 'right'
  total: number
}
export interface TableColumnType extends TableColumnCtx<any> {
  defaultSlot?: typeof Component
  headerSlot?: typeof Component
  children?: TableColumnType[]
}

export interface VTableProps extends TableProps<any> {
  pagination?: PaginationType
  columns: TableColumnType[]
}
