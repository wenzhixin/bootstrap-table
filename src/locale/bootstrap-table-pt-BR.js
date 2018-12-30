/**
 * Bootstrap Table Brazilian Portuguese Translation
 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
 * Update: João Mello<jmello@hotmail.com.br>
 */
($ => {
  $.fn.bootstrapTable.locales['pt-BR'] = {
    formatLoadingMessage () {
      return 'Carregando, aguarde...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} registros por página`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Exibindo ${pageFrom} até ${pageTo} de ${totalRows} linhas`
    },
    formatSearch () {
      return 'Pesquisar'
    },
    formatRefresh () {
      return 'Recarregar'
    },
    formatToggle () {
      return 'Alternar'
    },
    formatColumns () {
      return 'Colunas'
    },
    formatPaginationSwitch () {
      return 'Ocultar/Exibir paginação'
    },
    formatNoMatches () {
      return 'Nenhum registro encontrado'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR'])
})(jQuery)
