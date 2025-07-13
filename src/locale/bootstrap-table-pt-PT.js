/**
 * Bootstrap Table Portuguese Portugal Translation
 * Author: Burnspirit<burnspirit@gmail.com>
 * Update: @misteregis <misteregis@gmail.com>
 */

$.fn.bootstrapTable.locales['pt-PT'] = $.fn.bootstrapTable.locales['pt'] = {
  formatAddLevel () {
    return 'Adicionar nível'
  },

  formatAdvancedCloseButton () {
    return 'Fechar'
  },

  formatAdvancedSearch () {
    return 'Pesquisa avançada'
  },

  formatAllRows () {
    return 'Tudo'
  },

  formatAutoRefresh () {
    return 'Actualização autmática'
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
    return 'Activar tudo'
  },

  formatCopyRows () {
    return 'Copiar Linhas'
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
    return 'Foram encontradas entradas duplicadas!'
  },

  formatExport () {
    return 'Exportar dados'
  },

  formatFilterControlSwitch () {
    return 'Ocultar/Exibir controles'
  },

  formatFilterControlSwitchHide () {
    return 'Esconder controlos'
  },

  formatFilterControlSwitchShow () {
    return 'Exibir controlos'
  },

  formatFullscreen () {
    return 'Ecrã completo'
  },

  formatJumpTo () {
    return 'Avançar'
  },

  formatLoadingMessage () {
    return 'A carregar, por favor aguarde'
  },

  formatMultipleSort () {
    return 'Ordenação múltipla'
  },

  formatNoMatches () {
    return 'Nenhum registo encontrado'
  },

  formatOrder () {
    return 'Ordem'
  },

  formatPaginationSwitch () {
    return 'Esconder/Mostrar paginação'
  },

  formatPaginationSwitchDown () {
    return 'Mostrar página'
  },

  formatPaginationSwitchUp () {
    return 'Esconder página'
  },

  formatPrint () {
    return 'Imprimir'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} registos por página`
  },

  formatRefresh () {
    return 'Actualizar'
  },

  formatSRPaginationNextText () {
    return 'próxima página'
  },

  formatSRPaginationPageText (page) {
    return `ir para página ${page}`
  },

  formatSRPaginationPreText () {
    return 'página anterior'
  },

  formatSearch () {
    return 'Pesquisa'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    const plural = totalRows > 1 ? 's' : ''

    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `A mostrar ${pageFrom} at&eacute; ${pageTo} de ${totalRows} linha${plural} (filtrado de um total de ${totalNotFiltered} linha${plural})`
    }

    return `A mostrar ${pageFrom} até ${pageTo} de ${totalRows} linha${plural}`
  },

  formatSort () {
    return 'Ordenar'
  },

  formatSortBy () {
    return 'Ordenar por'
  },

  formatSortOrders () {
    return {
      asc: 'Ascendente',
      desc: 'Descendente'
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
    return 'Esconder vista em forma de cartão'
  },

  formatToggleOn () {
    return 'Mostrar vista em forma de cartão'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT'])
