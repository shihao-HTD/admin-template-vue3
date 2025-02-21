import type { PaginationProps, TableColumnCtx, TableProps } from 'element-plus'

export interface PaginationType extends Partial<PaginationProps> {
  align: 'center' | 'left' | 'right'
  total: number
}
export type TableColumnType = TableColumnCtx<any>

export interface VTableProps extends TableProps<any> {
  pagination: PaginationType
  columns: TableColumnType[]
}
