/**
 * Bootstrap Table Hebrew translation
 * Author: legshooter
 */
($ => {
  $.fn.bootstrapTable.locales['he-IL'] = {
    formatLoadingMessage () {
      return 'טוען, נא להמתין'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} שורות בעמוד`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `מציג ${pageFrom} עד ${pageTo} מ-${totalRows} שורות`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'חיפוש'
    },
    formatNoMatches () {
      return 'לא נמצאו רשומות תואמות'
    },
    formatPaginationSwitch () {
      return 'הסתר/הצג מספור דפים'
    },
    formatRefresh () {
      return 'רענן'
    },
    formatToggle () {
      return 'החלף תצוגה'
    },
    formatColumns () {
      return 'עמודות'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'הכל'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['he-IL'])
})(jQuery)
