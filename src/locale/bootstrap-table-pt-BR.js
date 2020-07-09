/**
 * Bootstrap Table Brazilian Portuguese Translation
 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
 * Update: João Mello<jmello@hotmail.com.br>
 * Update: Leandro Felizari<lfelizari@gmail.com>
 * Update: Fernando Marcos Souza Silva<fernandomarcosss@gmail.com>
 */

$.fn.bootstrapTable.locales['pt-BR'] = {
  formatLoadingMessage () {
    return 'Carregando, aguarde'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} registros por página`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Exibindo ${pageFrom} até ${pageTo} de ${totalRows} linhas (filtradas de um total de ${totalNotFiltered} linhas)`
    }

    return `Exibindo ${pageFrom} até ${pageTo} de ${totalRows} linhas`
  },
  formatSRPaginationPreText () {
    return 'página anterior'
  },
  formatSRPaginationPageText (page) {
    return `Para a página ${page}`
  },
  formatSRPaginationNextText () {
    return 'próxima página'
  },
  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} linhas`
  },
  formatClearSearch () {
    return 'Limpar Pesquisa'
  },
  formatSearch () {
    return 'Pesquisar'
  },
  formatNoMatches () {
    return 'Nenhum registro encontrado'
  },
  formatPaginationSwitch () {
    return 'Ocultar/Exibir paginação'
  },
  formatPaginationSwitchDown () {
    return 'Mostrar Paginação'
  },
  formatPaginationSwitchUp () {
    return 'Esconder Paginação'
  },
  formatRefresh () {
    return 'Recarregar'
  },
  formatToggle () {
    return 'Alternar'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Colunas'
  },
  formatColumnsToggleAll () {
    return 'Alternar tudo'
  },
  formatFullscreen () {
    return 'Tela cheia'
  },
  formatAllRows () {
    return 'Tudo'
  },
  formatAutoRefresh () {
    return 'Atualização Automática'
  },
  formatExport () {
    return 'Exportar dados'
  },
  formatJumpTo () {
    return 'IR'
  },
  formatAdvancedSearch () {
    return 'Pesquisa Avançada'
  },
  formatAdvancedCloseButton () {
    return 'Fechar'
  },
  formatFilterControlSwitch () {
    return 'Ocultar/Exibir controles'
  },
  formatFilterControlSwitchHide () {
    return 'Ocultar controles'
  },
  formatFilterControlSwitchShow () {
    return 'Exibir controles'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR'])
