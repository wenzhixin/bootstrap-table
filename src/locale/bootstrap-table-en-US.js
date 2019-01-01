/**
 * Bootstrap Table English translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['en-US'] = {
    formatLoadingMessage () {
      return 'Loading, please wait...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rows per page`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Showing ${pageFrom} to ${pageTo} of ${totalRows} rows`
    },
    formatSearch () {
      return 'Search'
    },
    formatNoMatches () {
      return 'No matching records found'
    },
    formatPaginationSwitch () {
      return 'Hide/Show pagination'
    },
    formatRefresh () {
      return 'Refresh'
    },
    formatToggle () {
      return 'Toggle'
    },
    formatColumns () {
      return 'Columns'
    },
    formatAllRows () {
      return 'All'
    },
    formatExport () {
      return 'Export data'
    },
    formatClearFilters () {
      return 'Clear filters'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en-US'])
})(jQuery)
