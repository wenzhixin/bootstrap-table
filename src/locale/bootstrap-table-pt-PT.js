/**
 * Bootstrap Table Portuguese Portugal Translation
 * Author: Burnspirit<burnspirit@gmail.com>
 */

$.fn.bootstrapTable.locales['pt-PT'] = $.fn.bootstrapTable.locales['pt'] = {
  formatCopyRows () {
    return 'Copiar Linhas'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'A carregar, por favor aguarde'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} registos por p&aacute;gina`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `A mostrar ${pageFrom} at&eacute; ${pageTo} de ${totalRows} linhas (filtered from ${totalNotFiltered} total rows)`
    }

    return `A mostrar ${pageFrom} at&eacute; ${pageTo} de ${totalRows} linhas`
  },
  formatSRPaginationPreText () {
    return 'p&aacute;gina anterior'
  },
  formatSRPaginationPageText (page) {
    return `ir para agina&ccedil&atilde;o ${page}`
  },
  formatSRPaginationNextText () {
    return 'pr&oacute;xima p&aacute;gina'
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
    return 'Esconder/Mostrar pagina&ccedil&atilde;o'
  },
  formatPaginationSwitchDown () {
    return 'Mostra pagina&ccedil&atilde;o'
  },
  formatPaginationSwitchUp () {
    return 'Esconder pagina&ccedil&atilde;o'
  },
  formatRefresh () {
    return 'Actualizar'
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
    return 'Activar tudo'
  },
  formatFullscreen () {
    return 'Ecr&atilde; completo'
  },
  formatAllRows () {
    return 'Tudo'
  },
  formatAutoRefresh () {
    return 'Actualiza&ccedil;&atilde;o autm&aacute;tica'
  },
  formatExport () {
    return 'Exportar dados'
  },
  formatJumpTo () {
    return 'Avan&ccedil;ar'
  },
  formatAdvancedSearch () {
    return 'Pesquisa avan&ccedil;ada'
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
