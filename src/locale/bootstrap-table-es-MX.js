/**
 * Bootstrap Table Spanish (México) translation (Obtenido de traducción de Argentina)
 * Author: Felix Vera (felix.vera@gmail.com)
 * Copiado: Mauricio Vera (mauricioa.vera@gmail.com)
 * Revisión: J Manuel Corona (jmcg92@gmail.com) (13/Feb/2018).
 */
($ => {
  $.fn.bootstrapTable.locales['es-MX'] = {
    formatLoadingMessage () {
      return 'Cargando, espere por favor...'
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
    formatFullscreen () {
      return 'Pantalla completa'
    },
    formatColumns () {
      return 'Columnas'
    },
    formatAllRows () {
      return 'Todo'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX'])
})(jQuery)
