/**
 * Bootstrap Table English translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

$.fn.bootstrapTable.locales['ar-SA'] = {
  formatLoadingMessage () {
    return 'جاري التحميل, يرجى الإنتظار'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} سجل لكل صفحة`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `الظاهر ${pageFrom} إلى ${pageTo} من ${totalRows} سجل ${totalNotFiltered} total rows)`
    }

    return `الظاهر ${pageFrom} إلى ${pageTo} من ${totalRows} سجل`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'بحث'
  },
  formatNoMatches () {
    return 'لا توجد نتائج مطابقة للبحث'
  },
  formatPaginationSwitch () { /* eslint-disable no-useless-escape */
    return 'إخفاء\إظهار ترقيم الصفحات'
  },
  formatRefresh () {
    return 'تحديث'
  },
  formatToggle () {
    return 'تغيير'
  },
  formatColumns () {
    return 'أعمدة'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA'])
