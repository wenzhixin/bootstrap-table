/**
 * Bootstrap Table Spanish (Argentina) translation
 * Author: Felix Vera (felix.vera@gmail.com)
 */
($ => {
  $.fn.bootstrapTable.locales['es-AR'] = {
    formatLoadingMessage () {
      return 'Cargando, espere por favor'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} registros por página`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Mostrando ${pageFrom} a ${pageTo} de ${totalRows} filas`
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
      return 'Refresh'
    },
    formatToggle () {
      return 'Toggle'
    },
    formatColumns () {
      return 'Columns'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-AR'])
})(jQuery)
