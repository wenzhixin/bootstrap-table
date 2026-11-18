/**
 * Bootstrap Table Persian translation
 * Author: MJ Vakili <mjv.1989@Gmail.com>
 */

$.fn.bootstrapTable.locales['fa-IR'] = $.fn.bootstrapTable.locales['fa'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'بستن'
  },

  formatAdvancedSearch () {
    return 'جستجوی پیشرفته'
  },

  formatAllRows () {
    return 'همه'
  },

  formatAutoRefresh () {
    return 'رفرش اتوماتیک'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'پاک کردن جستجو'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'سطر ها'
  },

  formatColumnsToggleAll () {
    return 'تغییر وضعیت همه'
  },

  formatCopyRows () {
    return 'کپی ردیف ها'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `نمایش ${totalRows} سطرها`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'خروجی دیتا'
  },

  formatFilterControlSwitch () {
    return 'پنهان/نمایش دادن کنترل ها'
  },

  formatFilterControlSwitchHide () {
    return 'پنهان کردن کنترل ها'
  },

  formatFilterControlSwitchShow () {
    return 'نمایش کنترل ها'
  },

  formatFullscreen () {
    return 'تمام صفحه'
  },

  formatJumpTo () {
    return 'برو'
  },

  formatLoadingMessage () {
    return 'در حال بارگذاری, لطفا صبر کنید'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'رکوردی یافت نشد.'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'نمایش/مخفی صفحه بندی'
  },

  formatPaginationSwitchDown () {
    return 'نمایش صفحه بندی'
  },

  formatPaginationSwitchUp () {
    return 'پنهان کردن صفحه بندی'
  },

  formatPrint () {
    return 'پرینت'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} رکورد در صفحه`
  },

  formatRefresh () {
    return 'به روز رسانی'
  },

  formatSRPaginationNextText () {
    return 'صفحه بعدی'
  },

  formatSRPaginationPageText (page) {
    return `به صفحه ${page}`
  },

  formatSRPaginationPreText () {
    return 'صفحه قبلی'
  },

  formatSearch () {
    return 'جستجو'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `نمایش ${pageFrom} تا ${pageTo} از ${totalRows} ردیف (filtered from ${totalNotFiltered} total rows)`
    }

    return `نمایش ${pageFrom} تا ${pageTo} از ${totalRows} ردیف`
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR'])
