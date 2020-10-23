/**
 * Bootstrap Table Italian translation
 * Author: Davide Renzi<davide.renzi@gmail.com>
 * Author: Davide Borsatto <davide.borsatto@gmail.com>
 * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
 */

$.fn.bootstrapTable.locales['it-IT'] = $.fn.bootstrapTable.locales['it'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
  formatLoadingMessage () {
    return 'Caricamento in corso'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} elementi per pagina`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Visualizzazione da ${pageFrom} a ${pageTo} di ${totalRows} elementi (filtrati da ${totalNotFiltered} elementi totali)`
    }

    return `Visualizzazione da ${pageFrom} a ${pageTo} di ${totalRows} elementi`
  },
  formatSRPaginationPreText () {
    return 'pagina precedente'
  },
  formatSRPaginationPageText (page) {
    return `alla pagina ${page}`
  },
  formatSRPaginationNextText () {
    return 'pagina successiva'
  },
  formatDetailPagination (totalRows) {
    return `Mostrando ${totalRows} elementi`
  },
  formatClearSearch () {
    return 'Pulisci filtri'
  },
  formatSearch () {
    return 'Cerca'
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
  formatRefresh () {
    return 'Aggiorna'
  },
  formatToggle () {
    return 'Attiva/Disattiva'
  },
  formatToggleOn () {
    return 'Mostra visuale a scheda'
  },
  formatToggleOff () {
    return 'Nascondi visuale a scheda'
  },
  formatColumns () {
    return 'Colonne'
  },
  formatColumnsToggleAll () {
    return 'Mostra tutte'
  },
  formatFullscreen () {
    return 'Schermo intero'
  },
  formatAllRows () {
    return 'Tutto'
  },
  formatAutoRefresh () {
    return 'Auto Aggiornamento'
  },
  formatExport () {
    return 'Esporta dati'
  },
  formatJumpTo () {
    return 'VAI'
  },
  formatAdvancedSearch () {
    return 'Filtri avanzati'
  },
  formatAdvancedCloseButton () {
    return 'Chiudi'
  },
  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT'])
