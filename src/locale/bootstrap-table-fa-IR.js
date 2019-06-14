/**
 * Bootstrap Table Persian translation
 * Author: MJ Vakili <mjv.1989@Gmail.com>
 */

$.fn.bootstrapTable.locales['fa-IR'] = {
  formatLoadingMessage () {
    return 'در حال بارگذاری, لطفا صبر کنید'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} رکورد در صفحه`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `نمایش ${pageFrom} تا ${pageTo} از ${totalRows} ردیف (filtered from ${totalNotFiltered} total rows)`
    }

    return `نمایش ${pageFrom} تا ${pageTo} از ${totalRows} ردیف`
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
    return 'جستجو'
  },
  formatNoMatches () {
    return 'رکوردی یافت نشد.'
  },
  formatPaginationSwitch () {
    return 'نمایش/مخفی صفحه بندی'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'به روز رسانی'
  },
  formatToggle () {
    return 'تغییر نمایش'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'سطر ها'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'همه'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR'])
