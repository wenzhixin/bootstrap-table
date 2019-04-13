/**
 * Bootstrap Table Spanish (Nicaragua) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 */
($ => {
  $.fn.bootstrapTable.locales['es-NI'] = {
    formatLoadingMessage () {
      return 'Cargando, por favor espere'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} registros por página`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Mostrando de ${pageFrom} a ${pageTo} registros de ${totalRows} registros en total`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'Buscar'
    },
    formatNoMatches () {
      return 'No se encontraron registros'
    },
    formatPaginationSwitch () {
      return 'Hide/Show pagination'
    },
    formatRefresh () {
      return 'Refrescar'
    },
    formatToggle () {
      return 'Alternar'
    },
    formatColumns () {
      return 'Columnas'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Todo'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-NI'])
})(jQuery)
