/**
 * Bootstrap Table Finnish translations
 * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['fi-FI'] = {
    formatLoadingMessage () {
      return 'Ladataan, ole hyvä ja odota'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} riviä sivulla`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Näytetään rivit ${pageFrom} - ${pageTo} / ${totalRows}`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'Hae'
    },
    formatNoMatches () {
      return 'Hakuehtoja vastaavia tuloksia ei löytynyt'
    },
    formatPaginationSwitch () {
      return 'Näytä/Piilota sivutus'
    },
    formatRefresh () {
      return 'Päivitä'
    },
    formatToggle () {
      return 'Valitse'
    },
    formatColumns () {
      return 'Sarakkeet'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Kaikki'
    },
    formatAutoRefresh () {
      return 'Auto Refresh'
    },
    formatExport () {
      return 'Vie tiedot'
    },
    formatClearFilters () {
      return 'Poista suodattimet'
    },
    formatJumpto () {
      return 'GO'
    },
    formatAdvancedSearch () {
      return 'Advanced search'
    },
    formatAdvancedCloseButton () {
      return 'Close'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI'])
})(jQuery)
