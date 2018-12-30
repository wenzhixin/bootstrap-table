/**
 * Bootstrap Table Spanish Spain translation
 * Author: Marc Pina<iwalkalone69@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['es-ES'] = {
    formatLoadingMessage () {
      return 'Por favor espere...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} resultados por página`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Mostrando desde ${pageFrom} hasta ${pageTo} - En total ${totalRows} resultados`
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
    formatAllRows () {
      return 'Todos'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES'])
})(jQuery)
