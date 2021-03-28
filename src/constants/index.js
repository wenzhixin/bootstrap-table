/* eslint-disable no-unused-vars */
const VERSION = '1.18.3'

let bootstrapVersion = 4

try {
  const rawVersion = $.fn.dropdown.Constructor.VERSION

  // Only try to parse VERSION if it is defined.
  // It is undefined in older versions of Bootstrap (tested with 3.1.1).
  if (rawVersion !== undefined) {
    bootstrapVersion = parseInt(rawVersion, 10)
  }
} catch (e) {
  // ignore
}

try {
  // eslint-disable-next-line no-undef
  const rawVersion = bootstrap.Tooltip.VERSION

  if (rawVersion !== undefined) {
    bootstrapVersion = parseInt(rawVersion, 10)
  }
} catch (e) {
  // ignore
}

const CONSTANTS = {
  3: {
    iconsPrefix: 'glyphicon',
    icons: {
      paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
      paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
      refresh: 'glyphicon-refresh icon-refresh',
      toggleOff: 'glyphicon-list-alt icon-list-alt',
      toggleOn: 'glyphicon-list-alt icon-list-alt',
      columns: 'glyphicon-th icon-th',
      detailOpen: 'glyphicon-plus icon-plus',
      detailClose: 'glyphicon-minus icon-minus',
      fullscreen: 'glyphicon-fullscreen',
      search: 'glyphicon-search',
      clearSearch: 'glyphicon-trash'
    },
    classes: {
      buttonsPrefix: 'btn',
      buttons: 'default',
      buttonsGroup: 'btn-group',
      buttonsDropdown: 'btn-group',
      pull: 'pull',
      inputGroup: 'input-group',
      inputPrefix: 'input-',
      input: 'form-control',
      paginationDropdown: 'btn-group dropdown',
      dropup: 'dropup',
      dropdownActive: 'active',
      paginationActive: 'active',
      buttonActive: 'active'
    },
    html: {
      toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
      toolbarDropdownItem: '<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',
      toolbarDropdownSeparator: '<li class="divider"></li>',
      pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
      pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
      dropdownCaret: '<span class="caret"></span>',
      pagination: ['<ul class="pagination%s">', '</ul>'],
      paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
      icon: '<i class="%s %s"></i>',
      inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
      searchInput: '<input class="%s%s" type="text" placeholder="%s">',
      searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
      searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
    }
  },
  4: {
    iconsPrefix: 'fa',
    icons: {
      paginationSwitchDown: 'fa-caret-square-down',
      paginationSwitchUp: 'fa-caret-square-up',
      refresh: 'fa-sync',
      toggleOff: 'fa-toggle-off',
      toggleOn: 'fa-toggle-on',
      columns: 'fa-th-list',
      detailOpen: 'fa-plus',
      detailClose: 'fa-minus',
      fullscreen: 'fa-arrows-alt',
      search: 'fa-search',
      clearSearch: 'fa-trash'
    },
    classes: {
      buttonsPrefix: 'btn',
      buttons: 'secondary',
      buttonsGroup: 'btn-group',
      buttonsDropdown: 'btn-group',
      pull: 'float',
      inputGroup: 'btn-group',
      inputPrefix: 'form-control-',
      input: 'form-control',
      paginationDropdown: 'btn-group dropdown',
      dropup: 'dropup',
      dropdownActive: 'active',
      paginationActive: 'active',
      buttonActive: 'active'
    },
    html: {
      toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
      toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
      pageDropdown: ['<div class="dropdown-menu">', '</div>'],
      pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
      toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
      dropdownCaret: '<span class="caret"></span>',
      pagination: ['<ul class="pagination%s">', '</ul>'],
      paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
      icon: '<i class="%s %s"></i>',
      inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
      searchInput: '<input class="%s%s" type="text" placeholder="%s">',
      searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
      searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
    }
  },
  5: {
    iconsPrefix: 'fa',
    icons: {
      paginationSwitchDown: 'fa-caret-square-down',
      paginationSwitchUp: 'fa-caret-square-up',
      refresh: 'fa-sync',
      toggleOff: 'fa-toggle-off',
      toggleOn: 'fa-toggle-on',
      columns: 'fa-th-list',
      detailOpen: 'fa-plus',
      detailClose: 'fa-minus',
      fullscreen: 'fa-arrows-alt',
      search: 'fa-search',
      clearSearch: 'fa-trash'
    },
    classes: {
      buttonsPrefix: 'btn',
      buttons: 'secondary',
      buttonsGroup: 'btn-group',
      buttonsDropdown: 'btn-group',
      pull: 'float',
      inputGroup: 'btn-group',
      inputPrefix: 'form-control-',
      input: 'form-control',
      paginationDropdown: 'btn-group dropdown',
      dropup: 'dropup',
      dropdownActive: 'active',
      paginationActive: 'active',
      buttonActive: 'active'
    },
    html: {
      dataToggle: 'data-bs-toggle',
      toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
      toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
      pageDropdown: ['<div class="dropdown-menu">', '</div>'],
      pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
      toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
      dropdownCaret: '<span class="caret"></span>',
      pagination: ['<ul class="pagination%s">', '</ul>'],
      paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
      icon: '<i class="%s %s"></i>',
      inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
      searchInput: '<input class="%s%s" type="text" placeholder="%s">',
      searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
      searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
    }
  }
}[bootstrapVersion]

const DEFAULTS = {
  height: undefined,
  classes: 'table table-bordered table-hover',
  buttons: {},
  theadClasses: '',
  headerStyle (column) {
    return {}
  },
  rowStyle (row, index) {
    return {}
  },
  rowAttributes (row, index) {
    return {}
  },
  undefinedText: '-',
  locale: undefined,
  virtualScroll: false,
  virtualScrollItemHeight: undefined,
  sortable: true,
  sortClass: undefined,
  silentSort: true,
  sortName: undefined,
  sortOrder: undefined,
  sortReset: false,
  sortStable: false,
  rememberOrder: false,
  serverSort: true,
  customSort: undefined,
  columns: [
    []
  ],
  data: [],
  url: undefined,
  method: 'get',
  cache: true,
  contentType: 'application/json',
  dataType: 'json',
  ajax: undefined,
  ajaxOptions: {},
  queryParams (params) {
    return params
  },
  queryParamsType: 'limit', // 'limit', undefined
  responseHandler (res) {
    return res
  },
  totalField: 'total',
  totalNotFilteredField: 'totalNotFiltered',
  dataField: 'rows',
  footerField: 'footer',
  pagination: false,
  paginationParts: ['pageInfo', 'pageSize', 'pageList'],
  showExtendedPagination: false,
  paginationLoop: true,
  sidePagination: 'client', // client or server
  totalRows: 0,
  totalNotFiltered: 0,
  pageNumber: 1,
  pageSize: 10,
  pageList: [10, 25, 50, 100],
  paginationHAlign: 'right', // right, left
  paginationVAlign: 'bottom', // bottom, top, both
  paginationDetailHAlign: 'left', // right, left
  paginationPreText: '&lsaquo;',
  paginationNextText: '&rsaquo;',
  paginationSuccessivelySize: 5, // Maximum successively number of pages in a row
  paginationPagesBySide: 1, // Number of pages on each side (right, left) of the current page.
  paginationUseIntermediate: false, // Calculate intermediate pages for quick access
  search: false,
  searchHighlight: false,
  searchOnEnterKey: false,
  strictSearch: false,
  searchSelector: false,
  visibleSearch: false,
  showButtonIcons: true,
  showButtonText: false,
  showSearchButton: false,
  showSearchClearButton: false,
  trimOnSearch: true,
  searchAlign: 'right',
  searchTimeOut: 500,
  searchText: '',
  customSearch: undefined,
  showHeader: true,
  showFooter: false,
  footerStyle (column) {
    return {}
  },
  searchAccentNeutralise: false,
  showColumns: false,
  showColumnsToggleAll: false,
  showColumnsSearch: false,
  minimumCountColumns: 1,
  showPaginationSwitch: false,
  showRefresh: false,
  showToggle: false,
  showFullscreen: false,
  smartDisplay: true,
  escape: false,
  filterOptions: {
    filterAlgorithm: 'and'
  },
  idField: undefined,
  selectItemName: 'btSelectItem',
  clickToSelect: false,
  ignoreClickToSelectOn ({ tagName }) {
    return ['A', 'BUTTON'].includes(tagName)
  },
  singleSelect: false,
  checkboxHeader: true,
  maintainMetaData: false,
  multipleSelectRow: false,
  uniqueId: undefined,
  cardView: false,
  detailView: false,
  detailViewIcon: true,
  detailViewByClick: false,
  detailViewAlign: 'left',
  detailFormatter (index, row) {
    return ''
  },
  detailFilter (index, row) {
    return true
  },
  toolbar: undefined,
  toolbarAlign: 'left',
  buttonsToolbar: undefined,
  buttonsAlign: 'right',
  buttonsOrder: ['paginationSwitch', 'refresh', 'toggle', 'fullscreen', 'columns'],
  buttonsPrefix: CONSTANTS.classes.buttonsPrefix,
  buttonsClass: CONSTANTS.classes.buttons,
  icons: CONSTANTS.icons,
  iconSize: undefined,
  iconsPrefix: CONSTANTS.iconsPrefix, // glyphicon or fa(font-awesome)
  loadingFontSize: 'auto',
  loadingTemplate (loadingMessage) {
    return `<span class="loading-wrap">
      <span class="loading-text">${loadingMessage}</span>
      <span class="animation-wrap"><span class="animation-dot"></span></span>
      </span>
    `
  },
  onAll (name, args) {
    return false
  },
  onClickCell (field, value, row, $element) {
    return false
  },
  onDblClickCell (field, value, row, $element) {
    return false
  },
  onClickRow (item, $element) {
    return false
  },
  onDblClickRow (item, $element) {
    return false
  },
  onSort (name, order) {
    return false
  },
  onCheck (row) {
    return false
  },
  onUncheck (row) {
    return false
  },
  onCheckAll (rows) {
    return false
  },
  onUncheckAll (rows) {
    return false
  },
  onCheckSome (rows) {
    return false
  },
  onUncheckSome (rows) {
    return false
  },
  onLoadSuccess (data) {
    return false
  },
  onLoadError (status) {
    return false
  },
  onColumnSwitch (field, checked) {
    return false
  },
  onPageChange (number, size) {
    return false
  },
  onSearch (text) {
    return false
  },
  onToggle (cardView) {
    return false
  },
  onPreBody (data) {
    return false
  },
  onPostBody () {
    return false
  },
  onPostHeader () {
    return false
  },
  onPostFooter () {
    return false
  },
  onExpandRow (index, row, $detail) {
    return false
  },
  onCollapseRow (index, row) {
    return false
  },
  onRefreshOptions (options) {
    return false
  },
  onRefresh (params) {
    return false
  },
  onResetView () {
    return false
  },
  onScrollBody () {
    return false
  }
}

const EN = {
  formatLoadingMessage () {
    return 'Loading, please wait'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rows per page`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Showing ${pageFrom} to ${pageTo} of ${totalRows} rows (filtered from ${totalNotFiltered} total rows)`
    }

    return `Showing ${pageFrom} to ${pageTo} of ${totalRows} rows`
  },
  formatSRPaginationPreText () {
    return 'previous page'
  },
  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },
  formatSRPaginationNextText () {
    return 'next page'
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Search'
  },
  formatClearSearch () {
    return 'Clear Search'
  },
  formatNoMatches () {
    return 'No matching records found'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Refresh'
  },
  formatToggle () {
    return 'Toggle'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Columns'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'All'
  }
}

const COLUMN_DEFAULTS = {
  field: undefined,
  title: undefined,
  titleTooltip: undefined,
  class: undefined,
  width: undefined,
  widthUnit: 'px',
  rowspan: undefined,
  colspan: undefined,
  align: undefined, // left, right, center
  halign: undefined, // left, right, center
  falign: undefined, // left, right, center
  valign: undefined, // top, middle, bottom
  cellStyle: undefined,
  radio: false,
  checkbox: false,
  checkboxEnabled: true,
  clickToSelect: true,
  showSelectTitle: false,
  sortable: false,
  sortName: undefined,
  order: 'asc', // asc, desc
  sorter: undefined,
  visible: true,
  switchable: true,
  cardVisible: true,
  searchable: true,
  formatter: undefined,
  footerFormatter: undefined,
  detailFormatter: undefined,
  searchFormatter: true,
  searchHighlightFormatter: false,
  escape: false,
  events: undefined
}

const METHODS = [
  'getOptions',
  'refreshOptions',
  'getData',
  'getSelections',
  'load', 'append', 'prepend',
  'remove', 'removeAll',
  'insertRow', 'updateRow',
  'getRowByUniqueId', 'updateByUniqueId', 'removeByUniqueId',
  'updateCell', 'updateCellByUniqueId',
  'showRow', 'hideRow', 'getHiddenRows',
  'showColumn', 'hideColumn',
  'getVisibleColumns', 'getHiddenColumns',
  'showAllColumns', 'hideAllColumns',
  'mergeCells',
  'checkAll', 'uncheckAll', 'checkInvert',
  'check', 'uncheck',
  'checkBy', 'uncheckBy',
  'refresh',
  'destroy',
  'resetView',
  'showLoading', 'hideLoading',
  'togglePagination', 'toggleFullscreen', 'toggleView',
  'resetSearch',
  'filterBy',
  'scrollTo', 'getScrollPosition',
  'selectPage', 'prevPage', 'nextPage',
  'toggleDetailView',
  'expandRow', 'collapseRow', 'expandRowByUniqueId', 'collapseRowByUniqueId',
  'expandAllRows', 'collapseAllRows',
  'updateColumnTitle', 'updateFormatText'
]

const EVENTS = {
  'all.bs.table': 'onAll',
  'click-row.bs.table': 'onClickRow',
  'dbl-click-row.bs.table': 'onDblClickRow',
  'click-cell.bs.table': 'onClickCell',
  'dbl-click-cell.bs.table': 'onDblClickCell',
  'sort.bs.table': 'onSort',
  'check.bs.table': 'onCheck',
  'uncheck.bs.table': 'onUncheck',
  'check-all.bs.table': 'onCheckAll',
  'uncheck-all.bs.table': 'onUncheckAll',
  'check-some.bs.table': 'onCheckSome',
  'uncheck-some.bs.table': 'onUncheckSome',
  'load-success.bs.table': 'onLoadSuccess',
  'load-error.bs.table': 'onLoadError',
  'column-switch.bs.table': 'onColumnSwitch',
  'page-change.bs.table': 'onPageChange',
  'search.bs.table': 'onSearch',
  'toggle.bs.table': 'onToggle',
  'pre-body.bs.table': 'onPreBody',
  'post-body.bs.table': 'onPostBody',
  'post-header.bs.table': 'onPostHeader',
  'post-footer.bs.table': 'onPostFooter',
  'expand-row.bs.table': 'onExpandRow',
  'collapse-row.bs.table': 'onCollapseRow',
  'refresh-options.bs.table': 'onRefreshOptions',
  'reset-view.bs.table': 'onResetView',
  'refresh.bs.table': 'onRefresh',
  'scroll-body.bs.table': 'onScrollBody'
}

Object.assign(DEFAULTS, EN)

export default {
  VERSION,

  THEME: `bootstrap${bootstrapVersion}`,

  CONSTANTS,

  DEFAULTS,

  COLUMN_DEFAULTS,

  METHODS,

  EVENTS,

  LOCALES: {
    en: EN,
    'en-US': EN
  }
}
