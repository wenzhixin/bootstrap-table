/**
 * Bootstrap Table Italian translation
 * Author: Davide Renzi<davide.renzi@gmail.com>
 * Author: Davide Borsatto <davide.borsatto@gmail.com>
 * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
 */

$.fn.bootstrapTable.locales['it-IT'] = $.fn.bootstrapTable.locales['it'] = {
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

  formatClearSearch () {
    return 'Pulisci filtri'
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

  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} elementi`
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

  formatNoMatches () {
    return 'Nessun elemento trovato'
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

  formatSearch () {
    return 'Cerca'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Visualizzazione da ${pageFrom} a ${pageTo} di ${totalRows} elementi (filtrati da ${totalNotFiltered} elementi totali)`
    }

    return `Visualizzazione da ${pageFrom} a ${pageTo} di ${totalRows} elementi`
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

  formatToggleOff () {
    return 'Nascondi visuale a scheda'
  },

  formatToggleOn () {
    return 'Mostra visuale a scheda'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT'])
