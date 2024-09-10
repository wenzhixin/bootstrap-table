/**
 * Bootstrap Table Greek translation
 * Author: giannisdallas
 */

$.fn.bootstrapTable.locales['el-GR'] = $.fn.bootstrapTable.locales['el'] = {
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

  formatClearSearch () {
    return 'Clear Search'
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

  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
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

  formatNoMatches () {
    return 'Δεν βρέθηκαν αποτελέσματα'
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

  formatSearch () {
    return 'Αναζητήστε'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Εμφανίζονται από την ${pageFrom} ως την ${pageTo} από σύνολο ${totalRows} σειρών (filtered from ${totalNotFiltered} total rows)`
    }

    return `Εμφανίζονται από την ${pageFrom} ως την ${pageTo} από σύνολο ${totalRows} σειρών`
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR'])
