/**
* Bootstrap Table German translation
* Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
*/

$.fn.bootstrapTable.locales['de-DE'] = {
  formatLoadingMessage () {
    return 'Lade, bitte warten'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} Zeilen pro Seite.`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Zeige Zeile ${pageFrom} bis ${pageTo} von ${totalRows} Zeile${(totalRows > 1) ? 'n' : ''} (Gefiltert von ${totalNotFiltered} Zeile${(totalNotFiltered > 1) ? 'n' : ''})`
    }

    return `Zeige Zeile ${pageFrom} bis ${pageTo} von ${totalRows} Zeile${(totalRows > 1) ? 'n' : ''}.`
  },
  formatSRPaginationPreText () {
    return 'Vorherige Seite'
  },
  formatSRPaginationPageText (page) {
    return `Zu Seite ${page}`
  },
  formatSRPaginationNextText () {
    return 'Nächste Seite'
  },
  formatDetailPagination (totalRows) {
    return `Zeige ${totalRows} Zeile${(totalRows > 1) ? 'n' : ''}.`
  },
  formatClearSearch () {
    return 'Lösche Filter'
  },
  formatSearch () {
    return 'Suchen'
  },
  formatNoMatches () {
    return 'Keine passenden Ergebnisse gefunden'
  },
  formatPaginationSwitch () {
    return 'Verstecke/Zeige Nummerierung'
  },
  formatPaginationSwitchDown () {
    return 'Zeige Nummerierung'
  },
  formatPaginationSwitchUp () {
    return 'Verstecke Nummerierung'
  },
  formatRefresh () {
    return 'Neu laden'
  },
  formatToggle () {
    return 'Umschalten'
  },
  formatToggleOn () {
    return 'Normale Ansicht'
  },
  formatToggleOff () {
    return 'Kartenansicht'
  },
  formatColumns () {
    return 'Spalten'
  },
  formatColumnsToggleAll () {
    return 'Alle umschalten'
  },
  formatFullscreen () {
    return 'Vollbild'
  },
  formatAllRows () {
    return 'Alle'
  },
  formatAutoRefresh () {
    return 'Automatisches Neuladen'
  },
  formatExport () {
    return 'Datenexport'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Erweiterte Suche'
  },
  formatAdvancedCloseButton () {
    return 'Schließen'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE'])
