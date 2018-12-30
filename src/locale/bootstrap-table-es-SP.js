/**
 * Bootstrap Table Spanish (España) translation
 * Author: Antonio Pérez <anpegar@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['es-SP'] = {
    formatLoadingMessage () {
      return 'Cargando, por favor espera...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} registros por p&#225;gina.`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `${pageFrom} - ${pageTo} de ${totalRows} registros.`
    },
    formatSearch () {
      return 'Buscar'
    },
    formatNoMatches () {
      return 'No se han encontrado registros.'
    },
    formatRefresh () {
      return 'Actualizar'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-SP'])
})(jQuery)