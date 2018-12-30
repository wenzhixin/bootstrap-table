/**
 * Bootstrap Table Urdu translation
 * Author: Malik <me@malikrizwan.com>
 */
($ => {
  $.fn.bootstrapTable.locales['ur-PK'] = {
    formatLoadingMessage () {
      return 'براۓ مہربانی انتظار کیجئے'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} ریکارڈز فی صفہ `
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `دیکھیں ${pageFrom} سے ${pageTo} کے ${totalRows}ریکارڈز`
    },
    formatSearch () {
      return 'تلاش'
    },
    formatNoMatches () {
      return 'کوئی ریکارڈ نہیں ملا'
    },
    formatRefresh () {
      return 'تازہ کریں'
    },
    formatToggle () {
      return 'تبدیل کریں'
    },
    formatColumns () {
      return 'کالم'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK'])
})(jQuery)
