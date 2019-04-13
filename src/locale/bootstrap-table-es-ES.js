/**
 * Bootstrap Table Spanish Spain translation
 * Author: Marc Pina<iwalkalone69@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['es-ES'] = {
    formatLoadingMessage () {
      return 'Por favor espere'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} resultados por página`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultados`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'Buscar'
    },
    formatNoMatches () {
      return 'No se encontraron resultados'
    },
    formatPaginationSwitch () {
      return 'Ocultar/Mostrar paginación'
    },
    formatRefresh () {
      return 'Refrescar'
    },
    formatToggle () {
      return 'Ocultar/Mostrar'
    },
    formatColumns () {
      return 'Columnas'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Todos'
    },
    formatAutoRefresh () {
      return 'Auto Refresh'
    },
    formatExport: function () {
      return 'Exportar los datos'
    },
    formatClearFilters: function () {
      return 'Borrar los filtros'
    },
    formatJumpto () {
      return 'GO'
    },
    formatAdvancedSearch: function () {
      return 'Búsqueda avanzada'
    },
    formatAdvancedCloseButton: function () {
      return 'Cerrar'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES'])
})(jQuery)
