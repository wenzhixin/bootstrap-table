/**
 * Bootstrap Table Italian translation
 * Author: Davide Renzi<davide.renzi@gmail.com>
 * Author: Davide Borsatto <davide.borsatto@gmail.com>
 * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
 */

$.fn.bootstrapTable.locales['it-IT'] = $.fn.bootstrapTable.locales['it'] = {
  formatAddLevel () {
    return 'Add Level'
  },

  formatAdvancedCloseButton () {
    return 'Chiudi'
  },

  formatAdvancedSearch () {
    return 'Filtri avanzati'
  },

  formatAllRows () {
    return 'Tutto'
  },

  formatAutoRefresh () {
    return 'Auto Aggiornamento'
  },

  formatCancel () {
    return 'Cancel'
  },

  formatClearSearch () {
    return 'Pulisci filtri'
  },

  formatColumn () {
    return 'Column'
  },

  formatColumns () {
    return 'Colonne'
  },

  formatColumnsToggleAll () {
    return 'Mostra tutte'
  },

  formatCopyRows () {
    return 'Copy Rows'
  },

  formatDeleteLevel () {
    return 'Delete Level'
  },

  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} elementi`
  },

  formatDuplicateAlertDescription () {
    return 'Please remove or change any duplicate column.'
  },

  formatDuplicateAlertTitle () {
    return 'Duplicate(s) detected!'
  },

  formatExport () {
    return 'Esporta dati'
  },

  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },

  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },

  formatFilterControlSwitchShow () {
    return 'Show controls'
  },

  formatFullscreen () {
    return 'Schermo intero'
  },

  formatJumpTo () {
    return 'VAI'
  },

  formatLoadingMessage () {
    return 'Caricamento in corso'
  },

  formatMultipleSort () {
    return 'Multiple Sort'
  },

  formatNoMatches () {
    return 'Nessun elemento trovato'
  },

  formatOrder () {
    return 'Order'
  },

  formatPaginationSwitch () {
    return 'Nascondi/Mostra paginazione'
  },

  formatPaginationSwitchDown () {
    return 'Mostra paginazione'
  },

  formatPaginationSwitchUp () {
    return 'Nascondi paginazione'
  },

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} elementi per pagina`
  },

  formatRefresh () {
    return 'Aggiorna'
  },

  formatSRPaginationNextText () {
    return 'pagina successiva'
  },

  formatSRPaginationPageText (page) {
    return `alla pagina ${page}`
  },

  formatSRPaginationPreText () {
    return 'pagina precedente'
  },

  formatSearch () {
    return 'Cerca'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Visualizzazione da ${pageFrom} a ${pageTo} di ${totalRows} elementi (filtrati da ${totalNotFiltered} elementi totali)`
    }

    return `Visualizzazione da ${pageFrom} a ${pageTo} di ${totalRows} elementi`
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
    return 'Nascondi visuale a scheda'
  },

  formatToggleOn () {
    return 'Mostra visuale a scheda'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT'])
