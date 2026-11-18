/**
* Bootstrap Table German translation
* Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
*/

$.fn.bootstrapTable.locales['de-DE'] = $.fn.bootstrapTable.locales['de'] = {
  formatAddLevel () {
    return 'Ebene hinzufügen'
  },

  formatAdvancedCloseButton () {
    return 'Schließen'
  },

  formatAdvancedSearch () {
    return 'Erweiterte Suche'
  },

  formatAllRows () {
    return 'Alle'
  },

  formatAutoRefresh () {
    return 'Automatisches Neuladen'
  },

  formatCancel () {
    return 'Abbrechen'
  },

  formatClearSearch () {
    return 'Lösche Filter'
  },

  formatColumn () {
    return 'Spalte'
  },

  formatColumns () {
    return 'Spalten'
  },

  formatColumnsToggleAll () {
    return 'Alle umschalten'
  },

  formatCopyRows () {
    return 'Zeilen kopieren'
  },

  formatDeleteLevel () {
    return 'Ebene entfernen'
  },

  formatDetailPagination (totalRows) {
    return `Zeige ${totalRows} Zeile${totalRows > 1 ? 'n' : ''}.`
  },

  formatDuplicateAlertDescription () {
    return 'Bitte doppelte Spalten entfenen oder ändern'
  },

  formatDuplicateAlertTitle () {
    return 'Doppelte Einträge gefunden!'
  },

  formatExport () {
    return 'Datenexport'
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

  formatFullscreen () {
    return 'Vollbild'
  },

  formatJumpTo () {
    return 'Springen'
  },

  formatLoadingMessage () {
    return 'Lade, bitte warten'
  },

  formatMultipleSort () {
    return 'Mehrfachsortierung'
  },

  formatNoMatches () {
    return 'Keine passenden Ergebnisse gefunden'
  },

  formatOrder () {
    return 'Reihenfolge'
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

  formatPrint () {
    return 'Drucken'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} Zeilen pro Seite.`
  },

  formatRefresh () {
    return 'Neu laden'
  },

  formatSRPaginationNextText () {
    return 'Nächste Seite'
  },

  formatSRPaginationPageText (page) {
    return `Zu Seite ${page}`
  },

  formatSRPaginationPreText () {
    return 'Vorherige Seite'
  },

  formatSearch () {
    return 'Suchen'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Zeige Zeile ${pageFrom} bis ${pageTo} von ${totalRows} Zeile${totalRows > 1 ? 'n' : ''} (Gefiltert von ${totalNotFiltered} Zeile${totalNotFiltered > 1 ? 'n' : ''})`
    }

    return `Zeige Zeile ${pageFrom} bis ${pageTo} von ${totalRows} Zeile${totalRows > 1 ? 'n' : ''}.`
  },

  formatSort () {
    return 'Sortieren'
  },

  formatSortBy () {
    return 'Sortieren nach'
  },

  formatSortOrders () {
    return {
      asc: 'Aufsteigend',
      desc: 'Absteigend'
    }
  },

  formatThenBy () {
    return 'anschließend'
  },

  formatToggleCustomViewOff () {
    return 'Hide custom view'
  },

  formatToggleCustomViewOn () {
    return 'Show custom view'
  },

  formatToggleOff () {
    return 'Kartenansicht'
  },

  formatToggleOn () {
    return 'Normale Ansicht'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE'])
