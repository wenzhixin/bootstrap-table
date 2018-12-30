/**
 * Bootstrap Table Portuguese Portugal Translation
 * Author: Burnspirit<burnspirit@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['pt-PT'] = {
    formatLoadingMessage () {
      return 'A carregar, por favor aguarde...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} registos por p&aacute;gina`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `A mostrar ${pageFrom} at&eacute; ${pageTo} de ${totalRows} linhas`
    },
    formatSearch () {
      return 'Pesquisa'
    },
    formatNoMatches () {
      return 'Nenhum registo encontrado'
    },
    formatPaginationSwitch () {
      return 'Esconder/Mostrar pagina&ccedil&atilde;o'
    },
    formatRefresh () {
      return 'Atualizar'
    },
    formatToggle () {
      return 'Alternar'
    },
    formatColumns () {
      return 'Colunas'
    },
    formatAllRows () {
      return 'Tudo'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT'])
})(jQuery)
