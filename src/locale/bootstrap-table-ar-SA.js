/**
 * Bootstrap Table Arabic translation
 * Author: Othman Ali Modaes<othman2004_ye@yahoo.com>
 */

$.fn.bootstrapTable.locales['ar-SA'] = $.fn.bootstrapTable.locales['ar'] = {

  formatCopyRows () {
    return 'نسخ الصفوف'
  },
  formatPrint () {
    return 'طباعة'
  },
  formatLoadingMessage () {
    return 'جارٍ التحميل، يرجى الانتظار...'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} صف لكل صفحة`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `الظاهر ${pageFrom} إلى ${pageTo} من ${totalRows} سجل ${totalNotFiltered} إجمالي الصفوف)`
    }

    return `الظاهر ${pageFrom} إلى ${pageTo} من ${totalRows} سجل`
  },
  formatSRPaginationPreText () {
    return 'الصفحة السابقة'
  },
  formatSRPaginationPageText (page) {
    return `إلى الصفحة ${page}`
  },
  formatSRPaginationNextText () {
    return 'الصفحة التالية'
  },
  formatDetailPagination (totalRows) {
    return `عرض ${totalRows} أعمدة`
  },
  formatClearSearch () {
    return 'مسح مربع البحث'
  },
  formatSearch () {
    return 'بحث'
  },
  formatNoMatches () {
    return 'لا توجد نتائج مطابقة للبحث'
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
  formatRefresh () {
    return 'تحديث'
  },
  formatToggleOn () {
    return 'إظهار كبطاقات'
  },
  formatToggleOff () {
    return 'إلغاء البطاقات'
  },
  formatColumns () {
    return 'أعمدة'
  },
  formatColumnsToggleAll () {
    return 'تبديل الكل'
  },
  formatFullscreen () {
    return 'الشاشة كاملة'
  },
  formatAllRows () {
    return 'الكل'
  },
  formatAutoRefresh () {
    return 'تحديث تلقائي'
  },
  formatExport () {
    return 'تصدير البيانات'
  },
  formatJumpTo () {
    return 'قفز'
  },
  formatAdvancedSearch () {
    return 'بحث متقدم'
  },
  formatAdvancedCloseButton () {
    return 'إغلاق'
  },
  formatFilterControlSwitch () {
    return 'عرض/إخفاء عناصر التصفية'
  },
  formatFilterControlSwitchHide () {
    return 'إخفاء عناصر التصفية'
  },
  formatFilterControlSwitchShow () {
    return 'عرض عناصر التصفية'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA'])
