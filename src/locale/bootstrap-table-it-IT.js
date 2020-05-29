/**
 * Bootstrap Table Italian translation
 * Author: Davide Renzi<davide.renzi@gmail.com>
 * Author: Davide Borsatto <davide.borsatto@gmail.com>
 * Author: Alessio Felicioni <alessio.felicioni@gmail.com>
 */

$.fn.bootstrapTable.locales['it-IT'] = {
  formatLoadingMessage () {
    return 'Caricamento in corso'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} elementi per pagina`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Visualizzazione da ${pageFrom} a ${pageTo} di ${totalRows} elementi (filtered from ${totalNotFiltered} total rows)`
    }

    return `Visualizzazione da ${pageFrom} a ${pageTo} di ${totalRows} elementi`
  },
  formatSRPaginationPreText () {
    return 'previous page'
  },
  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },
  formatSRPaginationNextText () {
    return 'next page'
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
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
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Aggiorna'
  },
  formatToggle () {
    return 'Attiva/Disattiva'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Colonne'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Tutto'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Esporta dati'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  }

}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['it-IT'])
