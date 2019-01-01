/**
* Bootstrap Table German translation
* Author: Paul Mohr - Sopamo<p.mohr@sopamo.de>
*/
($ => {
  $.fn.bootstrapTable.locales['de-DE'] = {
    formatLoadingMessage () {
      return 'Lade, bitte warten...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} Zeilen pro Seite.`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Zeige Zeile ${pageFrom} bis ${pageTo} von ${totalRows} Zeile${(totalRows > 1) ? 'n' : ''}.`
    },
    formatDetailPagination (totalRows) {
      return `Zeige ${totalRows} Zeile${(totalRows > 1) ? 'n' : ''}.`
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
    formatRefresh () {
      return 'Neu laden'
    },
    formatToggle () {
      return 'Umschalten'
    },
    formatColumns () {
      return 'Spalten'
    },
    formatAllRows () {
      return 'Alle'
    },
    formatExport () {
      return 'Datenexport'
    },
    formatClearFilters () {
      return 'Lösche Filter'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['de-DE'])
})(jQuery)
