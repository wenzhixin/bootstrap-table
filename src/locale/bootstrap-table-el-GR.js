/**
 * Bootstrap Table Greek translation
 * Author: giannisdallas
 */

$.fn.bootstrapTable.locales['el-GR'] = $.fn.bootstrapTable.locales['el'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Close'
  },

  formatAdvancedSearch () {
    return 'Advanced search'
  },

  formatAllRows () {
    return 'All'
  },

  formatAutoRefresh () {
    return 'Auto Refresh'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Clear Search'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Columns'
  },

  formatColumnsToggleAll () {
    return 'Toggle all'
  },

  formatCopyRows () {
    return 'Copy Rows'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Export data'
  },

  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },

  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },

  formatFilterControlSwitchShow () {
    return 'Show controls'
  },

  formatFullscreen () {
    return 'Fullscreen'
  },

  formatJumpTo () {
    return 'GO'
  },

  formatLoadingMessage () {
    return 'Φορτώνει, παρακαλώ περιμένετε'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Δεν βρέθηκαν αποτελέσματα'
  },

  formatOrder () {
    return 'Order'
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

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} αποτελέσματα ανά σελίδα`
  },

  formatRefresh () {
    return 'Refresh'
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

  formatSearch () {
    return 'Αναζητήστε'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Εμφανίζονται από την ${pageFrom} ως την ${pageTo} από σύνολο ${totalRows} σειρών (filtered from ${totalNotFiltered} total rows)`
    }

    return `Εμφανίζονται από την ${pageFrom} ως την ${pageTo} από σύνολο ${totalRows} σειρών`
  },

  formatSort () {
    return 'Sort'
  },

  formatSortBy () {
    return 'Sort by'
  },

  formatSortOrders () {
    return {
      asc: 'Ascending',
      desc: 'Descending'
    }
  },

  formatThenBy () {
    return 'Then by'
  },

  formatToggleCustomViewOff () {
    return 'Hide custom view'
  },

  formatToggleCustomViewOn () {
    return 'Show custom view'
  },

  formatToggleOff () {
    return 'Hide card view'
  },

  formatToggleOn () {
    return 'Show card view'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR'])
