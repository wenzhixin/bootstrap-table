/* eslint-disable no-unused-vars */
import Utils from '../utils/index.js'

const VERSION = '1.24.2'

const bootstrapVersion = Utils.getBootstrapVersion()

const CONSTANTS = {
  3: {
    classes: {
      buttonActive: 'active',
      buttons: 'default',
      buttonsDropdown: 'btn-group',
      buttonsGroup: 'btn-group',
      buttonsPrefix: 'btn',
      dropdownActive: 'active',
      dropup: 'dropup',
      input: 'form-control',
      inputGroup: 'input-group',
      inputPrefix: 'input-',
      paginationActive: 'active',
      paginationDropdown: 'btn-group dropdown',
      pull: 'pull',
      select: 'form-control'
    },
    html: {
      dropdownCaret: '<span class="caret"></span>',
      icon: '<i class="%s %s"></i>',
      inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
      pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
      pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
      pagination: ['<ul class="pagination%s">', '</ul>'],
      paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
      searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
      searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
      searchInput: '<input class="%s%s" type="text" placeholder="%s">',
      toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
      toolbarDropdownItem: '<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',
      toolbarDropdownSeparator: '<li class="divider"></li>'
    }
  },
  4: {
    classes: {
      buttonActive: 'active',
      buttons: 'secondary',
      buttonsDropdown: 'btn-group',
      buttonsGroup: 'btn-group',
      buttonsPrefix: 'btn',
      dropdownActive: 'active',
      dropup: 'dropup',
      input: 'form-control',
      inputGroup: 'btn-group',
      inputPrefix: 'form-control-',
      paginationActive: 'active',
      paginationDropdown: 'btn-group dropdown',
      pull: 'float',
      select: 'form-control'
    },
    html: {
      dropdownCaret: '<span class="caret"></span>',
      icon: '<i class="%s %s"></i>',
      inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
      pageDropdown: ['<div class="dropdown-menu">', '</div>'],
      pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
      pagination: ['<ul class="pagination%s">', '</ul>'],
      paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
      searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
      searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
      searchInput: '<input class="%s%s" type="text" placeholder="%s">',
      toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
      toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
      toolbarDropdownSeparator: '<div class="dropdown-divider"></div>'
    }
  },
  5: {
    classes: {
      buttonActive: 'active',
      buttons: 'secondary',
      buttonsDropdown: 'btn-group',
      buttonsGroup: 'btn-group',
      buttonsPrefix: 'btn',
      dropdownActive: 'active',
      dropup: 'dropup',
      input: 'form-control',
      inputGroup: 'btn-group',
      inputPrefix: 'form-control-',
      paginationActive: 'active',
      paginationDropdown: 'btn-group dropdown',
      pull: 'float',
      select: 'form-select'
    },
    html: {
      dataToggle: 'data-bs-toggle',
      dropdownCaret: '<span class="caret"></span>',
      icon: '<i class="%s %s"></i>',
      inputGroup: '<div class="input-group">%s%s</div>',
      pageDropdown: ['<div class="dropdown-menu">', '</div>'],
      pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
      pagination: ['<ul class="pagination%s">', '</ul>'],
      paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
      searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
      searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',
      searchInput: '<input class="%s%s" type="text" placeholder="%s">',
      toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-end">', '</div>'],
      toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
      toolbarDropdownSeparator: '<div class="dropdown-divider"></div>'
    }
  }
}[bootstrapVersion]

const ICONS = {
  glyphicon: {
    clearSearch: 'glyphicon-trash',
    columns: 'glyphicon-th icon-th',
    detailClose: 'glyphicon-minus icon-minus',
    detailOpen: 'glyphicon-plus icon-plus',
    fullscreen: 'glyphicon-fullscreen',
    paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
    paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
    refresh: 'glyphicon-refresh icon-refresh',
    search: 'glyphicon-search',
    toggleOff: 'glyphicon-list-alt icon-list-alt',
    toggleOn: 'glyphicon-list-alt icon-list-alt'
  },
  fa: {
    clearSearch: 'fa-trash',
    columns: 'fa-th-list',
    detailClose: 'fa-minus',
    detailOpen: 'fa-plus',
    fullscreen: 'fa-arrows-alt',
    paginationSwitchDown: 'fa-caret-square-down',
    paginationSwitchUp: 'fa-caret-square-up',
    refresh: 'fa-sync',
    search: 'fa-search',
    toggleOff: 'fa-toggle-off',
    toggleOn: 'fa-toggle-on'
  },
  bi: {
    clearSearch: 'bi-trash',
    columns: 'bi-list-ul',
    detailClose: 'bi-dash',
    detailOpen: 'bi-plus',
    fullscreen: 'bi-arrows-move',
    paginationSwitchDown: 'bi-caret-down-square',
    paginationSwitchUp: 'bi-caret-up-square',
    refresh: 'bi-arrow-clockwise',
    search: 'bi-search',
    toggleOff: 'bi-toggle-off',
    toggleOn: 'bi-toggle-on'
  },
  icon: {
    clearSearch: 'icon-trash-2',
    columns: 'icon-list',
    detailClose: 'icon-minus',
    detailOpen: 'icon-plus',
    fullscreen: 'icon-maximize',
    paginationSwitchDown: 'icon-arrow-up-circle',
    paginationSwitchUp: 'icon-arrow-down-circle',
    refresh: 'icon-refresh-cw',
    search: 'icon-search',
    toggleOff: 'icon-toggle-right',
    toggleOn: 'icon-toggle-right'
  },
  'material-icons': {
    clearSearch: 'delete',
    columns: 'view_list',
    detailClose: 'remove',
    detailOpen: 'add',
    fullscreen: 'fullscreen',
    paginationSwitchDown: 'grid_on',
    paginationSwitchUp: 'grid_off',
    refresh: 'refresh',
    search: 'search',
    sort: 'sort',
    toggleOff: 'tablet',
    toggleOn: 'tablet_android'
  }
}

const DEFAULTS = {
  ajax: undefined,
  ajaxOptions: {},
  buttons: {},
  buttonsAlign: 'right',
  buttonsAttributeTitle: 'title',
  buttonsClass: CONSTANTS.classes.buttons,
  buttonsOrder: ['paginationSwitch', 'refresh', 'toggle', 'fullscreen', 'columns'],
  buttonsPrefix: CONSTANTS.classes.buttonsPrefix,
  buttonsToolbar: undefined,
  cache: true,
  cardView: false,
  checkboxHeader: true,
  classes: 'table table-bordered table-hover',
  clickToSelect: false,
  columns: [[]],
  contentType: 'application/json',
  customSearch: undefined,
  customSort: undefined,
  data: [],
  dataField: 'rows',
  dataType: 'json',
  detailFilter: (index, row) => true,
  detailFormatter: (index, row) => '',
  detailView: false,
  detailViewAlign: 'left',
  detailViewByClick: false,
  detailViewIcon: true,
  escape: false,
  escapeTitle: true,
  filterOptions: { filterAlgorithm: 'and' },
  fixedScroll: false,
  footerField: 'footer',
  footerStyle: column => ({}),
  headerStyle: column => ({}),
  height: undefined,
  icons: {}, // init in initConstants
  iconSize: undefined,
  iconsPrefix: undefined, // init in initConstants
  idField: undefined,
  ignoreClickToSelectOn: ({ tagName }) => ['A', 'BUTTON'].includes(tagName),
  loadingFontSize: 'auto',
  loadingTemplate: loadingMessage => `<span class="loading-wrap">
    <span class="loading-text">${loadingMessage}</span>
    <span class="animation-wrap"><span class="animation-dot"></span></span>
    </span>
  `,
  locale: undefined,
  maintainMetaData: false,
  method: 'get',
  minimumCountColumns: 1,
  multipleSelectRow: false,
  pageList: [10, 25, 50, 100],
  pageNumber: 1,
  pageSize: 10,
  pagination: false,
  paginationDetailHAlign: 'left', // right, left
  paginationHAlign: 'right', // right, left
  paginationLoadMore: false,
  paginationLoop: true,
  paginationNextText: '&rsaquo;',
  paginationPagesBySide: 1, // Number of pages on each side (right, left) of the current page.
  paginationParts: ['pageInfo', 'pageSize', 'pageList'],
  paginationPreText: '&lsaquo;',
  paginationSuccessivelySize: 5, // Maximum successively number of pages in a row
  paginationUseIntermediate: false, // Calculate intermediate pages for quick access
  paginationVAlign: 'bottom', // bottom, top, both
  queryParams: params => params,
  queryParamsType: 'limit', // 'limit', undefined
  regexSearch: false,
  rememberOrder: false,
  responseHandler: res => res,
  rowAttributes: (row, index) => ({}),
  rowStyle: (row, index) => ({}),
  search: false,
  searchable: false,
  searchAccentNeutralise: false,
  searchAlign: 'right',
  searchHighlight: false,
  searchOnEnterKey: false,
  searchSelector: false,
  searchText: '',
  searchTimeOut: 500,
  selectItemName: 'btSelectItem',
  serverSort: true,
  showButtonIcons: true,
  showButtonText: false,
  showColumns: false,
  showColumnsSearch: false,
  showColumnsToggleAll: false,
  showExtendedPagination: false,
  showFooter: false,
  showFullscreen: false,
  showHeader: true,
  showPaginationSwitch: false,
  showRefresh: false,
  showSearchButton: false,
  showSearchClearButton: false,
  showToggle: false,
  sidePagination: 'client', // client or server
  silentSort: true,
  singleSelect: false,
  smartDisplay: true,
  sortable: true,
  sortClass: undefined,
  sortEmptyLast: false,
  sortName: undefined,
  sortOrder: undefined,
  sortReset: false,
  sortResetPage: false,
  sortStable: false,
  strictSearch: false,
  theadClasses: '',
  toolbar: undefined,
  toolbarAlign: 'left',
  totalField: 'total',
  totalNotFiltered: 0,
  totalNotFilteredField: 'totalNotFiltered',
  totalRows: 0,
  trimOnSearch: true,
  undefinedText: '-',
  uniqueId: undefined,
  url: undefined,
  virtualScroll: false,
  virtualScrollItemHeight: undefined,
  visibleSearch: false,

  onAll: (name, args) => false,
  onCheck: row => false,
  onCheckAll: rows => false,
  onCheckSome: rows => false,
  onClickCell: (field, value, row, $element) => false,
  onClickRow: (item, $element) => false,
  onCollapseRow: (index, row) => false,
  onColumnSwitch: (field, checked) => false,
  onColumnSwitchAll: checked => false,
  onDblClickCell: (field, value, row, $element) => false,
  onDblClickRow: (item, $element) => false,
  onExpandRow: (index, row, $detail) => false,
  onLoadError: status => false,
  onLoadSuccess: data => false,
  onPageChange: (number, size) => false,
  onPostBody: () => false,
  onPostFooter: () => false,
  onPostHeader: () => false,
  onPreBody: data => false,
  onRefresh: params => false,
  onRefreshOptions: options => false,
  onResetView: () => false,
  onScrollBody: () => false,
  onSearch: text => false,
  onSort: (name, order) => false,
  onToggle: cardView => false,
  onTogglePagination: newState => false,
  onUncheck: row => false,
  onUncheckAll: rows => false,
  onUncheckSome: rows => false,
  onVirtualScroll: (startIndex, endIndex) => false
}

const EN = {
  formatAllRows () {
    return 'All'
  },
  formatClearSearch () {
    return 'Clear Search'
  },
  formatColumns () {
    return 'Columns'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatLoadingMessage () {
    return 'Loading, please wait'
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
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rows per page`
  },
  formatRefresh () {
    return 'Refresh'
  },
  formatSearch () {
    return 'Search'
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Showing ${pageFrom} to ${pageTo} of ${totalRows} rows (filtered from ${totalNotFiltered} total rows)`
    }

    return `Showing ${pageFrom} to ${pageTo} of ${totalRows} rows`
  },
  formatSRPaginationNextText () {
    return 'next page'
  },
  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },
  formatSRPaginationPreText () {
    return 'previous page'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatToggleOn () {
    return 'Show card view'
  }
}

const COLUMN_DEFAULTS = {
  align: undefined, // string: left, right, center
  cardVisible: true,
  cellStyle: undefined, // function
  checkbox: false,
  checkboxEnabled: true,
  class: undefined, // string
  clickToSelect: true,
  colspan: undefined, // number
  detailFormatter: undefined, // function
  escape: undefined, // boolean
  events: undefined,
  falign: undefined, // string: left, right, center
  field: undefined, // string
  footerFormatter: undefined, // function
  footerStyle: undefined, // function
  formatter: undefined, // function
  halign: undefined, // left, right, center
  order: 'asc', // asc, desc
  radio: false,
  rowspan: undefined, // number
  searchable: true,
  searchFormatter: true,
  searchHighlightFormatter: false,
  showSelectTitle: false,
  sortable: false,
  sorter: undefined, // function
  sortName: undefined, // string
  switchable: true,
  switchableLabel: undefined, // string
  title: undefined, // string
  titleTooltip: undefined, // string
  valign: undefined, // top, middle, bottom
  visible: true,
  width: undefined, // number
  widthUnit: 'px'
}

const METHODS = [
  'getOptions',
  'refreshOptions',
  'getData',
  'getFooterData',
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
  'sortBy', 'sortReset',
  'scrollTo', 'getScrollPosition',
  'selectPage', 'prevPage', 'nextPage',
  'toggleDetailView',
  'expandRow', 'collapseRow', 'expandRowByUniqueId', 'collapseRowByUniqueId',
  'expandAllRows', 'collapseAllRows',
  'updateColumnTitle', 'updateFormatText'
]

const EVENTS = {
  'all.bs.table': 'onAll',
  'check-all.bs.table': 'onCheckAll',
  'check-some.bs.table': 'onCheckSome',
  'check.bs.table': 'onCheck',
  'click-cell.bs.table': 'onClickCell',
  'click-row.bs.table': 'onClickRow',
  'collapse-row.bs.table': 'onCollapseRow',
  'column-switch-all.bs.table': 'onColumnSwitchAll',
  'column-switch.bs.table': 'onColumnSwitch',
  'dbl-click-cell.bs.table': 'onDblClickCell',
  'dbl-click-row.bs.table': 'onDblClickRow',
  'expand-row.bs.table': 'onExpandRow',
  'load-error.bs.table': 'onLoadError',
  'load-success.bs.table': 'onLoadSuccess',
  'page-change.bs.table': 'onPageChange',
  'post-body.bs.table': 'onPostBody',
  'post-footer.bs.table': 'onPostFooter',
  'post-header.bs.table': 'onPostHeader',
  'pre-body.bs.table': 'onPreBody',
  'refresh-options.bs.table': 'onRefreshOptions',
  'refresh.bs.table': 'onRefresh',
  'reset-view.bs.table': 'onResetView',
  'scroll-body.bs.table': 'onScrollBody',
  'search.bs.table': 'onSearch',
  'sort.bs.table': 'onSort',
  'toggle-pagination.bs.table': 'onTogglePagination',
  'toggle.bs.table': 'onToggle',
  'uncheck-all.bs.table': 'onUncheckAll',
  'uncheck-some.bs.table': 'onUncheckSome',
  'uncheck.bs.table': 'onUncheck',
  'virtual-scroll.bs.table': 'onVirtualScroll'
}

Object.assign(DEFAULTS, EN)

export default {
  COLUMN_DEFAULTS,
  CONSTANTS,
  DEFAULTS,
  EVENTS,
  ICONS,
  LOCALES: {
    en: EN,
    'en-US': EN
  },
  METHODS,
  THEME: `bootstrap${bootstrapVersion}`,
  VERSION
}
