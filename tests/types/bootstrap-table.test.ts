/* eslint-disable no-unused-vars */
import 'bootstrap-table'
import type {
  BootstrapTableOptions,
  BootstrapTableColumn
} from 'bootstrap-table'

declare function $(selector: string): JQuery<HTMLElement>

// 1. #7483 main case: extension option must be accepted.
$('#table').bootstrapTable({ exportDataType: 'all' })

// 2. Export extension options.
$('#table').bootstrapTable({
  showExport: true,
  exportOptions: {},
  exportTypes: ['json', 'csv'],
  exportFooter: false
})

// 3. At least one option from each built-in extension.
$('#table').bootstrapTable({
  addrbar: true,
  autoRefresh: true,
  cookie: true,
  customView: true,
  deferUrl: '/api/data',
  filterControl: true,
  fixedColumns: true,
  groupBy: true,
  keyEvents: true,
  mobileResponsive: true,
  reorderableColumns: true,
  resizable: true,
  showAutoRefresh: true,
  showCopyRows: true,
  showCustomView: true,
  showJumpTo: true,
  showMultiSort: true,
  showPrint: true,
  stickyHeader: true,
  treeEnable: true,
  usePipeline: true
})

// 4. Column options added by extensions.
const column: BootstrapTableColumn = {
  forceExport: true,
  forceHide: false
}

// 5. Core options.
$('#table').bootstrapTable({
  url: '/api/data',
  columns: [column],
  pagination: true,
  data: []
})

// 6. Event callbacks keep their precise signatures.
$('#table').bootstrapTable({
  onClickRow: (row, $element, field) => {
    const r: any = row
    const el: JQuery<HTMLElement> = $element
    const f: string = field
    return true
  },
  onCheck: (row, $element) => {
    const r: any = row
    const el: JQuery<HTMLElement> = $element
    return false
  }
})

// 7. Override types for locale / icons / ajax.
const options: BootstrapTableOptions = {
  locale: { formatSearch: () => 'Search' },
  icons: { refresh: 'bi-arrow-clockwise' },
  ajax: params => ({ data: params.data })
}

// 8. Method overload is preserved.
$('#table').bootstrapTable('refreshOptions', { exportDataType: 'all' })

// 9. Named imports (see #5594) are used above in the type annotations.

// 10. Wrong types must still be rejected (no blanket index signature).
// @ts-expect-error pageSize must be a number
$('#table').bootstrapTable({ pageSize: 'x' })

// 11. Third-party extensions use declaration merging.
declare module 'bootstrap-table' {
  interface BootstrapTableOptions {
    myCustomOption?: number;
  }
}
$('#table').bootstrapTable({ myCustomOption: 42 })

// 12. generated-options.test.ts is checked by tsconfig.types.json as well.
export {}
