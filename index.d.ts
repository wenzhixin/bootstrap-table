/// <reference types="jquery" />

export interface BootstrapTableIcons {
  toggleOff?: string;
  clearSearch?: string;
  detailOpen?: string;
  search?: string;
  fullscreen?: string;
  columns?: string;
  detailClose?: string;
  refresh?: string;
  paginationSwitchDown?: string;
  paginationSwitchUp?: string;
  toggleOn?: string;
  autoRefresh?: string;
}

export interface BootstrapTableEvents {
  'refresh.bs.table': string;
  'load-error.bs.table': string;
  'click-row.bs.table': string;
  'dbl-click-row.bs.table': string;
  'post-body.bs.table': string;
  'collapse-row.bs.table': string;
  'reset-view.bs.table': string;
  'click-cell.bs.table': string;
  'check-all.bs.table': string;
  'post-footer.bs.table': string;
  'uncheck.bs.table': string;
  'check-some.bs.table': string;
  'refresh-options.bs.table': string;
  'pre-body.bs.table': string;
  'uncheck-some.bs.table': string;
  'expand-row.bs.table': string;
  'all.bs.table': string;
  'uncheck-all.bs.table': string;
  'column-switch.bs.table': string;
  'column-switch-all.bs.table': string;
  'check.bs.table': string;
  'search.bs.table': string;
  'load-success.bs.table': string;
  'dbl-click-cell.bs.table': string;
  'page-change.bs.table': string;
  'post-header.bs.table': string;
  'toggle.bs.table': string;
  'sort.bs.table': string;
  'scroll-body.bs.table': string;
}

export interface BootstrapTableColumn {
  sortName?: any;
  widthUnit?: string;
  sorter?: any;
  searchFormatter?: boolean;
  titleTooltip?: any;
  falign?: any;
  title?: any;
  align?: any;
  radio?: boolean;
  colspan?: any;
  showSelectTitle?: boolean;
  rowspan?: any;
  checkbox?: boolean;
  halign?: any;
  switchable?: boolean;
  switchableLabel?: string;
  class?: any;
  escape?: boolean;
  events?: BootstrapTableEvents;
  order?: string;
  visible?: boolean;
  detailFormatter?: any;
  valign?: any;
  sortable?: boolean;
  cellStyle?: any;
  searchable?: boolean;
  footerFormatter?: any;
  footerStyle?: any;
  formatter?: any;
  checkboxEnabled?: boolean;
  field?: any;
  width?: any;
  clickToSelect?: boolean;
  searchHighlightFormatter?: boolean;
  cardVisible?: boolean;
}

export interface BootstrapTableLocale {
  formatPaginationSwitchDown?: () => string;

  formatColumns?: () => string;

  formatAllRows?: () => string;

  formatLoadingMessage?: () => string;

  formatSRPaginationPreText?: () => string;

  formatPaginationSwitch?: () => string;

  formatDetailPagination?: (totalRows: number) => string;

  formatNoMatches?: () => string;

  formatSRPaginationNextText?: () => string;

  formatSearch?: () => string;

  formatFullscreen?: () => string;

  formatShowingRows?: (
    pageFrom: number,
    pageTo: number,
    totalRows: number,
    totalNotFiltered: number
  ) => string;

  formatSRPaginationPageText?: (page: number) => string;

  formatClearSearch?: () => string;

  formatPaginationSwitchUp?: () => string;

  formatToggleOff?: () => string;

  formatColumnsToggleAll?: () => string;

  formatRefresh?: () => string;

  formatToggleOn?: () => string;

  formatRecordsPerPage(pageNumber: number): string;
}

export interface BootstrapAjaxParams {
  cache: boolean;
  data: {
    search: string;
    offset: number;
    limit: number;
    sort?: any;
    order?: any;
  };
  dataType: string;
  type: string;
  contentType: string;
  error: (jqXHR: JQueryXHR) => any;
  success: (results: any, textStatus?: string, jqXHR?: JQueryXHR) => any;
}

export interface BootstrapTableOptions {
  onCheck?: (row: any, $element: JQuery<HTMLElement>) => boolean | void;
  loadingFontSize?: string;
  onDblClickCell?: (
    field: string,
    value: any,
    row: any,
    $element: JQuery<HTMLElement>
  ) => boolean | void;
  rowStyle?: (row: any, index: number) => {};
  showColumnsToggleAll?: boolean;
  footerStyle?: (column: BootstrapTableColumn) => {};
  onUncheck?: (row: any, $element: JQuery<HTMLElement>) => boolean | void;
  pageSize?: number;
  footerField?: string;
  showFullscreen?: boolean;
  sortResetPage?: boolean;
  sortStable?: boolean;
  searchAlign?: string;
  ajax?: (params: BootstrapAjaxParams) => any;
  onAll?: (name: string, args: any) => boolean | void;
  onClickRow?: (
    row: any,
    $element: JQuery<HTMLElement>,
    field: string
  ) => boolean | void;
  ajaxOptions?: {};
  onCheckSome?: (rows: any[]) => boolean | void;
  customSort?: any;
  iconSize?: any;
  onCollapseRow?: (
    index: number,
    row: any,
    detailView: any
  ) => boolean | void;
  searchHighlight?: boolean;
  height?: any;
  onUncheckSome?: (rows: any[]) => boolean | void;
  onToggle?: (cardView: boolean) => boolean | void;
  ignoreClickToSelectOn?: ({ tagName }?: { tagName: any }) => any;
  cache?: boolean;
  method?: string;
  onColumnSwitch?: (field: string, checked: boolean) => boolean | void;
  searchSelector?: boolean | string;
  strictSearch?: boolean;
  multipleSelectRow?: boolean;
  onLoadError?: (status: string, jqXHR: JQuery.jqXHR) => boolean | void;
  buttonsToolbar?: any;
  paginationVAlign?: string;
  showColumnsSearch?: boolean;
  queryParamsType?: string;
  sortOrder?: any;
  paginationDetailHAlign?: string;
  customSearch?: any;
  visibleSearch?: boolean;
  showButtonText?: boolean;
  sortName?: any;
  columns?: BootstrapTableColumn[];
  onScrollBody?: () => boolean | void;
  iconsPrefix?: string;
  onPostBody?: () => boolean | void;
  search?: boolean;
  searchOnEnterKey?: boolean;
  searchText?: string;
  responseHandler?: (res: any) => any;
  toolbarAlign?: string;
  paginationParts?: string[];
  cardView?: boolean;
  showSearchButton?: boolean;
  escape?: boolean;
  searchTimeOut?: number;
  buttonsAlign?: string;
  buttonsOrder?: string[];
  detailFormatter?: (
    index: number,
    row: any,
    $element: JQuery<HTMLElement>
  ) => string;
  onDblClickRow?: (
    row: any,
    $element: JQuery<HTMLElement>,
    field: string
  ) => boolean | void;
  paginationNextText?: string;
  buttonsPrefix?: string;
  loadingTemplate?: (loadingMessage: string) => string;
  theadClasses?: string;
  onLoadSuccess?: (
    data: any,
    status: string,
    jqXHR: JQuery.jqXHR
  ) => boolean | void;
  url?: any;
  toolbar?: any;
  onPostHeader?: () => boolean | void;
  sidePagination?: string;
  clickToSelect?: boolean;
  virtualScrollItemHeight?: any;
  rowAttributes?: (row: any, index: number) => {};
  dataField?: string;
  idField?: string;
  onSort?: (name: string, order: number) => boolean | void;
  pageNumber?: number;
  data?: any[];
  totalNotFilteredField?: string;
  undefinedText?: string;
  onSearch?: (text: string) => boolean | void;
  onPageChange?: (number: number, size: number) => boolean | void;
  paginationUseIntermediate?: boolean;
  searchAccentNeutralise?: boolean;
  singleSelect?: boolean;
  showButtonIcons?: boolean;
  showPaginationSwitch?: boolean;
  onPreBody?: (data: any) => boolean | void;
  detailFilter?: (index: number, row: any) => boolean | void;
  detailViewByClick?: boolean;
  totalField?: string;
  contentType?: string;
  showColumns?: boolean;
  totalNotFiltered?: number;
  checkboxHeader?: boolean;
  onRefresh?: (params: any[]) => boolean | void;
  dataType?: string;
  paginationPreText?: string;
  showToggle?: boolean;
  detailView?: boolean;
  serverSort?: boolean;
  totalRows?: number;
  silentSort?: boolean;
  onPostFooter?: () => boolean | void;
  selectItemName?: string;
  detailViewIcon?: boolean;
  detailViewAlign?: string;
  minimumCountColumns?: number;
  uniqueId?: any;
  onResetView?: () => boolean | void;
  paginationHAlign?: string;
  sortClass?: any;
  pagination?: boolean;
  queryParams?: (params: any) => any;
  paginationSuccessivelySize?: number;
  classes?: string;
  rememberOrder?: boolean;
  paginationPagesBySide?: number;
  trimOnSearch?: boolean;
  showRefresh?: boolean;
  locale?: BootstrapTableLocale;
  onCheckAll?: (rowsAfter: any[], rowsBefore: any[]) => boolean | void;
  showFooter?: boolean;
  headerStyle?: (column: BootstrapTableColumn) => {};
  maintainMetaData?: boolean;
  onRefreshOptions?: (options: BootstrapTableOptions) => boolean | void;
  showExtendedPagination?: boolean;
  smartDisplay?: boolean;
  paginationLoop?: boolean;
  virtualScroll?: boolean;
  sortReset?: boolean;
  filterOptions?: { filterAlgorithm: string };
  onUncheckAll?: (rowsAfter: any[], rowsBefore: any[]) => boolean | void;
  showSearchClearButton?: boolean;
  buttons?: {};
  showHeader?: boolean;
  onClickCell?: (
    field: string,
    value: any,
    row: any,
    $element: JQuery<HTMLElement>
  ) => boolean | void;
  sortable?: boolean;
  icons?: BootstrapTableIcons;
  onExpandRow?: (
    index: number,
    row: any,
    $detail: JQuery<HTMLElement>
  ) => boolean | void;
  buttonsClass?: string;
  pageList?: number[];
  fixedScroll?: boolean;
}

declare global {
  interface JQuery {
    bootstrapTable(options: BootstrapTableOptions): JQuery;

    bootstrapTable(method: string, ...parameters: any[]): JQuery | any;
  }
}
