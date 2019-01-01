/**
 * Bootstrap Table Afrikaans translation
 * Author: Phillip Kruger <phillip.kruger@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['af-ZA'] = {
    formatLoadingMessage () {
      return 'Besig om te laai, wag asseblief ...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rekords per bladsy`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Resultate ${pageFrom} tot ${pageTo} van ${totalRows} rye`
    },
    formatSearch () {
      return 'Soek'
    },
    formatNoMatches () {
      return 'Geen rekords gevind nie'
    },
    formatPaginationSwitch () {
      return 'Wys/verberg bladsy nummering'
    },
    formatRefresh () {
      return 'Herlaai'
    },
    formatToggle () {
      return 'Wissel'
    },
    formatColumns () {
      return 'Kolomme'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['af-ZA'])
})(jQuery)
