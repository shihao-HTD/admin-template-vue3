import type { PaginationProps, TableColumnCtx, TableProps } from 'element-plus'
import type { Component } from 'vue'

export interface PaginationType extends Partial<PaginationProps> {
  align?: 'center' | 'left' | 'right'
  total: number
}
export type TableColumnType = TableColumnCtx<any> & {
  defaultSlot?: Component
  headerSlot?: Component
}

export interface VTableProps extends TableProps<any> {
  pagination?: PaginationType
  columns: TableColumnType[]
}
