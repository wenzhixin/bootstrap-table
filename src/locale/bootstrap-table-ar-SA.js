/**
 * Bootstrap Table Arabic translation
 * Author: Othman Ali Modaes<othman2004_ye@yahoo.com>
 */

$.fn.bootstrapTable.locales['ar-SA'] = $.fn.bootstrapTable.locales['ar'] = {
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

  formatClearSearch () {
    return 'مسح مربع البحث'
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

  formatDetailPagination (totalRows) {
    return `عرض ${totalRows} أعمدة`
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

  formatNoMatches () {
    return 'لا توجد نتائج مطابقة للبحث'
  },

  formatPaginationSwitch () {
    /* eslint-disable no-useless-escape */
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

  formatSearch () {
    return 'بحث'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `الظاهر ${pageFrom} إلى ${pageTo} من ${totalRows} سجل ${totalNotFiltered} إجمالي الصفوف)`
    }

    return `الظاهر ${pageFrom} إلى ${pageTo} من ${totalRows} سجل`
  },

  formatSRPaginationNextText () {
    return 'الصفحة التالية'
  },

  formatSRPaginationPageText (page) {
    return `إلى الصفحة ${page}`
  },

  formatSRPaginationPreText () {
    return 'الصفحة السابقة'
  },

  formatToggleOff () {
    return 'إلغاء البطاقات'
  },

  formatToggleOn () {
    return 'إظهار كبطاقات'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA'])
