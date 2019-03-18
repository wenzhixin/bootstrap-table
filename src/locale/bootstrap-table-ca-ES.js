/**
 * Bootstrap Table Catalan translation
 * Authors: Marc Pina<iwalkalone69@gmail.com>
 *          Claudi Martinez<claudix.kernel@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['ca-ES'] = {
    formatLoadingMessage () {
      return 'Espereu, si us plau'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} resultats per pàgina`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Mostrant de ${pageFrom} fins ${pageTo} - total ${totalRows} resultats`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'Cerca'
    },
    formatNoMatches () {
      return 'No s\'han trobat resultats'
    },
    formatPaginationSwitch () {
      return 'Amaga/Mostra paginació'
    },
    formatRefresh () {
      return 'Refresca'
    },
    formatToggle () {
      return 'Alterna formatació'
    },
    formatColumns () {
      return 'Columnes'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Tots'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES'])
})(jQuery)
