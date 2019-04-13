/**
 * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
 * Author: Felix Vera (felix.vera@gmail.com)
 * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
 * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
 */
($ => {
  $.fn.bootstrapTable.locales['es-MX'] = {
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
      return `Mostrando ${totalRows} filas`
    },
    formatSearch () {
      return 'Buscar'
    },
    formatNoMatches () {
      return 'No se encontraron registros que coincidan'
    },
    formatPaginationSwitch () {
      return 'Mostrar/ocultar paginación'
    },
    formatRefresh () {
      return 'Actualizar'
    },
    formatToggle () {
      return 'Cambiar vista'
    },
    formatColumns () {
      return 'Columnas'
    },
    formatFullscreen () {
      return 'Pantalla completa'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX'])
})(jQuery)
