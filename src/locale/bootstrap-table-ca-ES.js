/**
 * Bootstrap Table Catalan translation
 * Authors: Marc Pina<iwalkalone69@gmail.com>
 *          Claudi Martinez<claudix.kernel@gmail.com>
 *          Joan Puigcerver<joapuiib@gmail.com>
 */

$.fn.bootstrapTable.locales['ca-ES'] = $.fn.bootstrapTable.locales['ca'] = {
  formatAdvancedCloseButton () {
    return 'Tanca'
  },

  formatAdvancedSearch () {
    return 'Cerca avançada'
  },

  formatAllRows () {
    return 'Tots'
  },

  formatAutoRefresh () {
    return 'Auto Refresca'
  },

  formatClearSearch () {
    return 'Neteja cerca'
  },

  formatColumns () {
    return 'Columnes'
  },

  formatColumnsToggleAll () {
    return 'Alterna totes'
  },

  formatCopyRows () {
    return 'Copia resultats'
  },

  formatDetailPagination (totalRows) {
    return `Mostrant ${totalRows} resultats`
  },

  formatExport () {
    return 'Exporta dades'
  },

  formatFilterControlSwitch () {
    return 'Mostra/Amaga controls'
  },

  formatFilterControlSwitchHide () {
    return 'Mostra controls'
  },

  formatFilterControlSwitchShow () {
    return 'Amaga controls'
  },

  formatFullscreen () {
    return 'Pantalla completa'
  },

  formatJumpTo () {
    return 'GO'
  },

  formatLoadingMessage () {
    return 'Espereu, si us plau'
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

  formatPrint () {
    return 'Imprimeix'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} resultats per pàgina`
  },

  formatRefresh () {
    return 'Refresca'
  },

  formatSearch () {
    return 'Cerca'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Mostrant resultats ${pageFrom} fins ${pageTo} - ${totalRows} resultats (filtrats d'un total de ${totalNotFiltered} resultats)`
    }

    return `Mostrant resultats ${pageFrom} fins ${pageTo} - ${totalRows} resultats en total`
  },

  formatSRPaginationNextText () {
    return 'Pàgina següent'
  },

  formatSRPaginationPageText (page) {
    return `A la pàgina ${page}`
  },

  formatSRPaginationPreText () {
    return 'Pàgina anterior'
  },

  formatToggleOff () {
    return 'Amaga vista de tarjeta'
  },

  formatToggleOn () {
    return 'Mostra vista de tarjeta'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES'])
