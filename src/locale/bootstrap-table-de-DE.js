/**
* Bootstrap Table German translation
* Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
*/

$.fn.bootstrapTable.locales['de-DE'] = $.fn.bootstrapTable.locales['de'] = {
  formatCopyRows () {
    return 'Zeilen kopieren'
  },
  formatPrint () {
    return 'Drucken'
  },
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
    return 'Springen'
  },
  formatAdvancedSearch () {
    return 'Erweiterte Suche'
  },
  formatAdvancedCloseButton () {
    return 'Schließen'
  },
  formatFilterControlSwitch () {
    return 'Verstecke/Zeige Filter'
  },
  formatFilterControlSwitchHide () {
    return 'Verstecke Filter'
  },
  formatFilterControlSwitchShow () {
    return 'Zeige Filter'
  },
  formatAddLevel () {
    return 'Ebene hinzufügen'
  },
  formatCancel () {
    return 'Abbrechen'
  },
  formatColumn () {
    return 'Spalte'
  },
  formatDeleteLevel () {
    return 'Ebene entfernen'
  },
  formatDuplicateAlertTitle () {
    return 'Doppelte Einträge gefunden!'
  },
  formatDuplicateAlertDescription () {
    return 'Bitte doppelte Spalten entfenen oder ändern'
  },
  formatMultipleSort () {
    return 'Mehrfachsortierung'
  },
  formatOrder () {
    return 'Reihenfolge'
  },
  formatSort () {
    return 'Sortieren'
  },
  formatSortBy () {
    return 'Sortieren nach'
  },
  formatThenBy () {
    return 'anschließend'
  },
  formatSortOrders () {
    return {
      asc: 'Aufsteigend',
      desc: 'Absteigend'
    }
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE'])
