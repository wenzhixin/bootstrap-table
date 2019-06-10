/**
 * Bootstrap Table Urdu translation
 * Author: Malik <me@malikrizwan.com>
 */

$.fn.bootstrapTable.locales['ur-PK'] = {
  formatLoadingMessage () {
    return 'براۓ مہربانی انتظار کیجئے'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} ریکارڈز فی صفہ `
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `دیکھیں ${pageFrom} سے ${pageTo} کے ${totalRows}ریکارڈز (filtered from ${totalNotFiltered} total rows)`
    }

    return `دیکھیں ${pageFrom} سے ${pageTo} کے ${totalRows}ریکارڈز`
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
  formatClearSearch () {
    return 'Clear Search'
  },
  formatSearch () {
    return 'تلاش'
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
  formatRefresh () {
    return 'تازہ کریں'
  },
  formatToggle () {
    return 'تبدیل کریں'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'کالم'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'All'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Export data'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK'])
