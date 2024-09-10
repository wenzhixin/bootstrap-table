/**
 * Bootstrap Table Urdu translation
 * Author: Malik <me@malikrizwan.com>
 */

$.fn.bootstrapTable.locales['ur-PK'] = $.fn.bootstrapTable.locales['ur'] = {
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
    return 'کالم'
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
    return 'براۓ مہربانی انتظار کیجئے'
  },

  formatNoMatches () {
    return 'کوئی ریکارڈ نہیں ملا'
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
    return `${pageNumber} ریکارڈز فی صفہ `
  },

  formatRefresh () {
    return 'تازہ کریں'
  },

  formatSearch () {
    return 'تلاش'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `دیکھیں ${pageFrom} سے ${pageTo} کے ${totalRows}ریکارڈز (filtered from ${totalNotFiltered} total rows)`
    }

    return `دیکھیں ${pageFrom} سے ${pageTo} کے ${totalRows}ریکارڈز`
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK'])
