/**
 * Bootstrap Table Brazilian Portuguese Translation
 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
 * Update: João Mello<jmello@hotmail.com.br>
 * Update: Leandro Felizari<lfelizari@gmail.com>
 * Update: Fernando Marcos Souza Silva<fernandomarcosss@gmail.com>
 * Update: @misteregis <misteregis@gmail.com>
 */

$.fn.bootstrapTable.locales['pt-BR'] = $.fn.bootstrapTable.locales['br'] = {
  formatCopyRows () {
    return 'Copiar linhas'
  },
  formatPrint () {
    return 'Imprimir'
  },
  formatLoadingMessage () {
    return 'Carregando, aguarde'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} registros por página`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    const plural = totalRows > 1 ? 's' : ''

    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Exibindo ${pageFrom} até ${pageTo} de ${totalRows} linha${plural} (filtrado de um total de ${totalNotFiltered} linha${plural})`
    }

    return `Exibindo ${pageFrom} até ${pageTo} de ${totalRows} linha${plural}`
  },
  formatSRPaginationPreText () {
    return 'página anterior'
  },
  formatSRPaginationPageText (page) {
    return `ir para a página ${page}`
  },
  formatSRPaginationNextText () {
    return 'próxima página'
  },
  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} linha${totalRows > 1 ? 's' : ''}`
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
  formatToggleOn () {
    return 'Mostrar visualização de cartão'
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
    return 'Ir'
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
  },
  formatAddLevel () {
    return 'Adicionar nível'
  },
  formatCancel () {
    return 'Cancelar'
  },
  formatColumn () {
    return 'Coluna'
  },
  formatDeleteLevel () {
    return 'Remover nível'
  },
  formatDuplicateAlertTitle () {
    return 'Encontradas entradas duplicadas!'
  },
  formatDuplicateAlertDescription () {
    return 'Por favor, remova ou altere as colunas duplicadas'
  },
  formatMultipleSort () {
    return 'Ordenação múltipla'
  },
  formatOrder () {
    return 'Ordem'
  },
  formatSort () {
    return 'Ordenar'
  },
  formatSortBy () {
    return 'Ordenar por'
  },
  formatThenBy () {
    return 'em seguida'
  },
  formatSortOrders () {
    return {
      asc: 'Crescente',
      desc: 'Decrescente'
    }
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR'])
