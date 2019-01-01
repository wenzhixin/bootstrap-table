/**
 * Bootstrap Table Spanish (Costa Rica) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 */
($ => {
  $.fn.bootstrapTable.locales['es-CR'] = {
    formatLoadingMessage () {
      return 'Cargando, por favor espere...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} registros por página`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Mostrando de ${pageFrom} a ${pageTo} registros de ${totalRows} registros en total`
    },
    formatSearch () {
      return 'Buscar'
    },
    formatNoMatches () {
      return 'No se encontraron registros'
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
    formatAllRows () {
      return 'Todo'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-CR'])
})(jQuery)
