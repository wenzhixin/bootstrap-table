/**
 * Bootstrap Table Swedish translation
 * Author: C Bratt <bratt@inix.se>
 */
($ => {
  $.fn.bootstrapTable.locales['sv-SE'] = {
    formatLoadingMessage () {
      return 'Laddar, vänligen vänta'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rader per sida`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Visa ${pageFrom} till ${pageTo} av ${totalRows} rader`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'Sök'
    },
    formatNoMatches () {
      return 'Inga matchande resultat funna.'
    },
    formatPaginationSwitch () {
      return 'Hide/Show pagination'
    },
    formatRefresh () {
      return 'Uppdatera'
    },
    formatToggle () {
      return 'Skifta'
    },
    formatColumns () {
      return 'kolumn'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sv-SE'])
})(jQuery)
