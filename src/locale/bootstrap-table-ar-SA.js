/**
 * Bootstrap Table Arabic translation
 * Author: Othman Ali Modaes<othman2004_ye@yahoo.com>
 */

$.fn.bootstrapTable.locales['ar-SA'] = $.fn.bootstrapTable.locales['ar'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'إغلاق'
  },

  formatAdvancedSearch () {
    return 'بحث متقدم'
  },

  formatAllRows () {
    return 'الكل'
  },

  formatAutoRefresh () {
    return 'تحديث تلقائي'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'مسح مربع البحث'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'أعمدة'
  },

  formatColumnsToggleAll () {
    return 'تبديل الكل'
  },

  formatCopyRows () {
    return 'نسخ الصفوف'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `عرض ${totalRows} أعمدة`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'تصدير البيانات'
  },

  formatFilterControlSwitch () {
    return 'عرض/إخفاء عناصر التصفية'
  },

  formatFilterControlSwitchHide () {
    return 'إخفاء عناصر التصفية'
  },

  formatFilterControlSwitchShow () {
    return 'عرض عناصر التصفية'
  },

  formatFullscreen () {
    return 'الشاشة كاملة'
  },

  formatJumpTo () {
    return 'قفز'
  },

  formatLoadingMessage () {
    return 'جارٍ التحميل، يرجى الانتظار...'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'لا توجد نتائج مطابقة للبحث'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'إخفاء/إظهار ترقيم الصفحات'
  },

  formatPaginationSwitchDown () {
    return 'إظهار ترقيم الصفحات'
  },

  formatPaginationSwitchUp () {
    return 'إخفاء ترقيم الصفحات'
  },

  formatPrint () {
    return 'طباعة'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} صف لكل صفحة`
  },

  formatRefresh () {
    return 'تحديث'
  },

  formatSRPaginationNextText () {
    return 'الصفحة التالية'
  },

  formatSRPaginationPageText (page) {
    return `إلى الصفحة ${page}`
  },

  formatSRPaginationPreText () {
    return 'previous page'
  },

  formatSearch () {
    return 'بحث'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `الظاهر ${pageFrom} إلى ${pageTo} من ${totalRows} سجل ${totalNotFiltered} إجمالي الصفوف)`
    }

    return `الظاهر ${pageFrom} إلى ${pageTo} من ${totalRows} سجل`
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
    return 'إلغاء البطاقات'
  },

  formatToggleOn () {
    return 'إظهار كبطاقات'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA'])
