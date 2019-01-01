/**
 * Bootstrap Table Polish translation
 * Author: zergu <michal.zagdan @ gmail com>
 */
($ => {
  $.fn.bootstrapTable.locales['pl-PL'] = {
    formatLoadingMessage () {
      return 'Ładowanie, proszę czekać...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rekordów na stronę`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Wyświetlanie rekordów od ${pageFrom} do ${pageTo} z ${totalRows}`
    },
    formatSearch () {
      return 'Szukaj'
    },
    formatNoMatches () {
      return 'Niestety, nic nie znaleziono'
    },
    formatRefresh () {
      return 'Odśwież'
    },
    formatToggle () {
      return 'Przełącz'
    },
    formatColumns () {
      return 'Kolumny'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pl-PL'])
})(jQuery)
