/**
 * Bootstrap Table Portuguese Portugal Translation
 * Author: Burnspirit<burnspirit@gmail.com>
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
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `A mostrar ${pageFrom} at&eacute; ${pageTo} de ${totalRows} linhas (filtered from ${totalNotFiltered} total rows)`
    }

    return `A mostrar ${pageFrom} até ${pageTo} de ${totalRows} linhas`
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
    return `Mostrando ${totalRows} linhas`
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
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
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
    return 'Esconder/Exibir controlos'
  },
  formatFilterControlSwitchHide () {
    return 'Esconder controlos'
  },
  formatFilterControlSwitchShow () {
    return 'Exibir controlos'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-PT'])
