/**
 * Bootstrap Table Portuguese Portugal Translation
 * Author: Burnspirit<burnspirit@gmail.com>
 * Update: @misteregis <misteregis@gmail.com>
 */

$.fn.bootstrapTable.locales['pt-PT'] = $.fn.bootstrapTable.locales['pt'] = {
  formatCopyRows () {
    return 'Copiar Linhas'
  },
  formatPrint () {
    return 'Imprimir'
  },
  formatLoadingMessage () {
    return 'A carregar, por favor aguarde'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} registos por página`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    const plural = totalRows > 1 ? 's' : ''

    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `A mostrar ${pageFrom} at&eacute; ${pageTo} de ${totalRows} linha${plural} (filtrado de um total de ${totalNotFiltered} linha${plural})`
    }

    return `A mostrar ${pageFrom} até ${pageTo} de ${totalRows} linha${plural}`
  },
  formatSRPaginationPreText () {
    return 'página anterior'
  },
  formatSRPaginationPageText (page) {
    return `ir para página ${page}`
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
    return 'Pesquisa'
  },
  formatNoMatches () {
    return 'Nenhum registo encontrado'
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
  formatRefresh () {
    return 'Actualizar'
  },
  formatToggleOn () {
    return 'Mostrar vista em forma de cartão'
  },
  formatToggleOff () {
    return 'Esconder vista em forma de cartão'
  },
  formatColumns () {
    return 'Colunas'
  },
  formatColumnsToggleAll () {
    return 'Activar tudo'
  },
  formatFullscreen () {
    return 'Ecrã completo'
  },
  formatAllRows () {
    return 'Tudo'
  },
  formatAutoRefresh () {
    return 'Actualização autmática'
  },
  formatExport () {
    return 'Exportar dados'
  },
  formatJumpTo () {
    return 'Avançar'
  },
  formatAdvancedSearch () {
    return 'Pesquisa avançada'
  },
  formatAdvancedCloseButton () {
    return 'Fechar'
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
    return 'Foram encontradas entradas duplicadas!'
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
      asc: 'Ascendente',
      desc: 'Descendente'
    }
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT'])
