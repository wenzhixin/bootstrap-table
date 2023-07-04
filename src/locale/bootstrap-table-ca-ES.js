/**
 * Bootstrap Table Catalan translation
 * Authors: Marc Pina<iwalkalone69@gmail.com>
 *          Claudi Martinez<claudix.kernel@gmail.com>
 *          Joan Puigcerver<joapuiib@gmail.com>
 */

$.fn.bootstrapTable.locales['ca-ES'] = $.fn.bootstrapTable.locales['ca'] = {
  formatCopyRows () {
    return 'Copia resultats'
  },
  formatPrint () {
    return 'Imprimeix'
  },
  formatLoadingMessage () {
    return 'Espereu, si us plau'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} resultats per pàgina`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrant resultats ${pageFrom} fins ${pageTo} - ${totalRows} resultats (filtrats d'un total de ${totalNotFiltered} resultats)`
    }

    return `Mostrant resultats ${pageFrom} fins ${pageTo} - ${totalRows} resultats en total`
  },
  formatSRPaginationPreText () {
    return 'Pàgina anterior'
  },
  formatSRPaginationPageText (page) {
    return `A la pàgina ${page}`
  },
  formatSRPaginationNextText () {
    return 'Pàgina següent'
  },
  formatDetailPagination (totalRows) {
    return `Mostrant ${totalRows} resultats`
  },
  formatClearSearch () {
    return 'Neteja cerca'
  },
  formatSearch () {
    return 'Cerca'
  },
  formatNoMatches () {
    return 'No s\'han trobat resultats'
  },
  formatPaginationSwitch () {
    return 'Amaga/Mostra paginació'
  },
  formatPaginationSwitchDown () {
    return 'Mostra paginació'
  },
  formatPaginationSwitchUp () {
    return 'Amaga paginació'
  },
  formatRefresh () {
    return 'Refresca'
  },
  formatToggleOn () {
    return 'Mostra vista de tarjeta'
  },
  formatToggleOff () {
    return 'Amaga vista de tarjeta'
  },
  formatColumns () {
    return 'Columnes'
  },
  formatColumnsToggleAll () {
    return 'Alterna totes'
  },
  formatFullscreen () {
    return 'Pantalla completa'
  },
  formatAllRows () {
    return 'Tots'
  },
  formatAutoRefresh () {
    return 'Auto Refresca'
  },
  formatExport () {
    return 'Exporta dades'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Cerca avançada'
  },
  formatAdvancedCloseButton () {
    return 'Tanca'
  },
  formatFilterControlSwitch () {
    return 'Mostra/Amaga controls'
  },
  formatFilterControlSwitchHide () {
    return 'Mostra controls'
  },
  formatFilterControlSwitchShow () {
    return 'Amaga controls'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES'])
