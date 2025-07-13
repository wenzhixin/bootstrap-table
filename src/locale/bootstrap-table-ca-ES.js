/**
 * Bootstrap Table Catalan translation
 * Authors: Marc Pina<iwalkalone69@gmail.com>
 *          Claudi Martinez<claudix.kernel@gmail.com>
 *          Joan Puigcerver<joapuiib@gmail.com>
 */

$.fn.bootstrapTable.locales['ca-ES'] = $.fn.bootstrapTable.locales['ca'] = {
  formatAddLevel () {
    return 'Add Level'
  },

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

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Neteja cerca'
  },

  formatColumn () {
    return 'Column'
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

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Mostrant ${totalRows} resultats`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
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

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'No s\'han trobat resultats'
  },

  formatOrder () {
    return 'Order'
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

  formatSRPaginationNextText () {
    return 'Pàgina següent'
  },

  formatSRPaginationPageText (page) {
    return `A la pàgina ${page}`
  },

  formatSRPaginationPreText () {
    return 'Pàgina anterior'
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

  formatSort () {
    return 'Sort'
  },

  formatSortBy () {
    return 'Sort by'
  },

  formatSortOrders () {
    return {
      asc: 'Ascending',
      desc: 'Descending'
    }
  },

  formatThenBy () {
    return 'Then by'
  },

  formatToggleCustomViewOff () {
    return 'Hide custom view'
  },

  formatToggleCustomViewOn () {
    return 'Show custom view'
  },

  formatToggleOff () {
    return 'Amaga vista de tarjeta'
  },

  formatToggleOn () {
    return 'Mostra vista de tarjeta'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ca-ES'])
