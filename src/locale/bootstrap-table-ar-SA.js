/**
 * Bootstrap Table English translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['ar-SA'] = {
    formatLoadingMessage () {
      return 'جاري التحميل, يرجى الإنتظار...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} سجل لكل صفحة`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `الظاهر ${pageFrom} إلى ${pageTo} من ${totalRows} سجل`
    },
    formatSearch () {
      return 'بحث'
    },
    formatNoMatches () {
      return 'لا توجد نتائج مطابقة للبحث'
    },
    formatPaginationSwitch () {
      /* eslint-disable no-useless-escape */
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
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ar-SA'])
})(jQuery)
