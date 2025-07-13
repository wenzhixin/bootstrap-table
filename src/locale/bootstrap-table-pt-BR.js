/**
 * Bootstrap Table Brazilian Portuguese Translation
 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
 * Update: João Mello<jmello@hotmail.com.br>
 * Update: Leandro Felizari<lfelizari@gmail.com>
 * Update: Fernando Marcos Souza Silva<fernandomarcosss@gmail.com>
 * Update: @misteregis <misteregis@gmail.com>
 */

$.fn.bootstrapTable.locales['pt-BR'] = $.fn.bootstrapTable.locales['br'] = {
  formatAddLevel () {
    return 'Adicionar nível'
  },

  formatAdvancedCloseButton () {
    return 'Fechar'
  },

  formatAdvancedSearch () {
    return 'Pesquisa Avançada'
  },

  formatAllRows () {
    return 'Tudo'
  },

  formatAutoRefresh () {
    return 'Atualização Automática'
  },

  formatCancel () {
    return 'Cancelar'
  },

  formatClearSearch () {
    return 'Limpar Pesquisa'
  },

  formatColumn () {
    return 'Coluna'
  },

  formatColumns () {
    return 'Colunas'
  },

  formatColumnsToggleAll () {
    return 'Alternar tudo'
  },

  formatCopyRows () {
    return 'Copiar linhas'
  },

  formatDeleteLevel () {
    return 'Remover nível'
  },

  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} linha${totalRows > 1 ? 's' : ''}`
  },

  formatDuplicateAlertDescription () {
    return 'Por favor, remova ou altere as colunas duplicadas'
  },

  formatDuplicateAlertTitle () {
    return 'Encontradas entradas duplicadas!'
  },

  formatExport () {
    return 'Exportar dados'
  },

  formatFilterControlSwitch () {
    return 'Ocultar/Exibir controles'
  },

  formatFilterControlSwitchHide () {
    return 'Ocultar controles'
  },

  formatFilterControlSwitchShow () {
    return 'Exibir controles'
  },

  formatFullscreen () {
    return 'Tela cheia'
  },

  formatJumpTo () {
    return 'Ir'
  },

  formatLoadingMessage () {
    return 'Carregando, aguarde'
  },

  formatMultipleSort () {
    return 'Ordenação múltipla'
  },

  formatNoMatches () {
    return 'Nenhum registro encontrado'
  },

  formatOrder () {
    return 'Ordem'
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

  formatPrint () {
    return 'Imprimir'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} registros por página`
  },

  formatRefresh () {
    return 'Recarregar'
  },

  formatSRPaginationNextText () {
    return 'próxima página'
  },

  formatSRPaginationPageText (page) {
    return `ir para a página ${page}`
  },

  formatSRPaginationPreText () {
    return 'página anterior'
  },

  formatSearch () {
    return 'Pesquisar'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    const plural = totalRows > 1 ? 's' : ''

    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Exibindo ${pageFrom} até ${pageTo} de ${totalRows} linha${plural} (filtrado de um total de ${totalNotFiltered} linha${plural})`
    }

    return `Exibindo ${pageFrom} até ${pageTo} de ${totalRows} linha${plural}`
  },

  formatSort () {
    return 'Ordenar'
  },

  formatSortBy () {
    return 'Ordenar por'
  },

  formatSortOrders () {
    return {
      asc: 'Crescente',
      desc: 'Decrescente'
    }
  },

  formatThenBy () {
    return 'em seguida'
  },

  formatToggleCustomViewOff () {
    return 'Hide custom view'
  },

  formatToggleCustomViewOn () {
    return 'Show custom view'
  },

  formatToggleOff () {
    return 'Hide card view'
  },

  formatToggleOn () {
    return 'Mostrar visualização de cartão'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR'])
