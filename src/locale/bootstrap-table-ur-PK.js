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
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'تلاش'
    },
    formatNoMatches () {
      return 'کوئی ریکارڈ نہیں ملا'
    },
    formatPaginationSwitch () {
      return 'Hide/Show pagination'
    },
    formatRefresh () {
      return 'تازہ کریں'
    },
    formatToggle () {
      return 'تبدیل کریں'
    },
    formatColumns () {
      return 'کالم'
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
    formatJumpto () {
      return 'GO'
    },
    formatAdvancedSearch () {
      return 'Advanced search'
    },
    formatAdvancedCloseButton () {
      return 'Close'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ur-PK'])
})(jQuery)
