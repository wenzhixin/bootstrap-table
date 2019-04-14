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
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
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
  formatRefresh () {
    return 'به روز رسانی'
  },
  formatToggle () {
    return 'تغییر نمایش'
  },
  formatColumns () {
    return 'سطر ها'
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
  formatClearFilters () {
    return 'Clear filters'
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
