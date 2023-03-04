/**
 * Bootstrap Table Persian translation
 * Author: MJ Vakili <mjv.1989@Gmail.com>
 */

$.fn.bootstrapTable.locales['fa-IR'] = $.fn.bootstrapTable.locales['fa'] = {
  formatCopyRows () {
    return 'کپی ردیف ها'
  },
  formatPrint () {
    return 'پرینت'
  },
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
    return 'صفحه قبلی'
  },
  formatSRPaginationPageText (page) {
    return `به صفحه ${page}`
  },
  formatSRPaginationNextText () {
    return 'صفحه بعدی'
  },
  formatDetailPagination (totalRows) {
    return `نمایش ${totalRows} سطرها`
  },
  formatClearSearch () {
    return 'پاک کردن جستجو'
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
    return 'نمایش صفحه بندی'
  },
  formatPaginationSwitchUp () {
    return 'پنهان کردن صفحه بندی'
  },
  formatRefresh () {
    return 'به روز رسانی'
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
    return 'تغییر وضعیت همه'
  },
  formatFullscreen () {
    return 'تمام صفحه'
  },
  formatAllRows () {
    return 'همه'
  },
  formatAutoRefresh () {
    return 'رفرش اتوماتیک'
  },
  formatExport () {
    return 'خروجی دیتا'
  },
  formatJumpTo () {
    return 'برو'
  },
  formatAdvancedSearch () {
    return 'جستجوی پیشرفته'
  },
  formatAdvancedCloseButton () {
    return 'بستن'
  },
  formatFilterControlSwitch () {
    return 'پنهان/نمایش دادن کنترل ها'
  },
  formatFilterControlSwitchHide () {
    return 'پنهان کردن کنترل ها'
  },
  formatFilterControlSwitchShow () {
    return 'نمایش کنترل ها'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR'])
