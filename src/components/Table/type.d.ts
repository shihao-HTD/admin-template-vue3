import type { PaginationProps, TableColumnCtx, TableProps } from 'element-plus'
import type { Component } from 'vue'

export interface PaginationType extends Partial<PaginationProps> {
  align?: 'center' | 'left' | 'right'
  total: number
  defaultSlot?: typeof Component
}
export interface TableColumnType extends Partial<TableColumnCtx<any>> {
  id?: number | string
  defaultSlot?: typeof Component
  headerSlot?: typeof Component
  children?: TableColumnType[]
}

export interface VTableProps extends TableProps<any> {
  pagination?: PaginationType
  columns: TableColumnType[]
  adaptive?: boolean | number // offset
  loading?: boolean
  elementLoadingText?: string
  elementLoadingSpinner?: string
  elementLoadingSvgViewBox?: string
  elementLoadingBackground?: string
  elementLoadingSvg?: string
  // drag
  draggableCol?: boolean
  draggableRow?: boolean
}

export type TableEventsType = {
  select: [selection: any, row: any]
  'select-all': [selection: any]
  'selection-change': [selection: any]
  'cell-mouse-enter': [row: any, column: any, cell: any, event: Event]
  'cell-mouse-leave': [row: any, column: any, cell: any, event: Event]
  'cell-click': [row: any, column: any, cell: any, event: Event]
  'cell-dblclick': [row: any, column: any, cell: any, event: Event]
  'cell-contextmenu': [row: any, column: any, cell: any, event: Event]
  'row-click': [row: any, column: any, event: Event]
  'row-contextmenu': [row: any, column: any, event: Event]
  'row-dblclick': [row: any, column: any, event: Event]
  'header-click': [column: any, event: Event]
  'header-contextmenu': [column: any, event: Event]
  'sort-change': [{ column: any; prop: string; order: string }]
  'filter-change': [filters: any]
  'current-change': [currentRow: any, oldCurrentRow: any]
  'header-dragend': [newWidth: number, oldWidth: number, column: any, event: Event]
  'expand-change': [row: any, expandedRows: any]
}

type PaginationCallFunc = (value: number) => void

export type PaginationEventsType = {
  'page-size-change': [PaginationCallFunc]
  'page-current-change': [PaginationCallFunc]
  'page-prev-click': [PaginationCallFunc]
  'page-next-click': [PaginationCallFunc]
}

type TableExtendEvents = {
  'drag-row-change': [row: any]
  'drag-col-change': [cols: any]
}

export type VTableEmitsType = TableEventsType & PaginationEventsType & TableExtendEvents
