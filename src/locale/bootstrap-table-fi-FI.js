/**
 * Bootstrap Table Finnish translations
 * Author: Minna Lehtomäki <minna.j.lehtomaki@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['fi-FI'] = {
    formatLoadingMessage () {
      return 'Ladataan, ole hyvä ja odota...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} riviä sivulla`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Näytetään rivit ${pageFrom} - ${pageTo} / ${totalRows}`
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
    formatAllRows () {
      return 'Kaikki'
    },
    formatExport () {
      return 'Vie tiedot'
    },
    formatClearFilters () {
      return 'Poista suodattimet'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fi-FI'])
})(jQuery)
