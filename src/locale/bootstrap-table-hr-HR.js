/**
 * Bootstrap Table Croatian translation
 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
 * Author: Petra Štrbenac (petra.strbenac@gmail.com)
 */
($ => {
  $.fn.bootstrapTable.locales['hr-HR'] = {
    formatLoadingMessage () {
      return 'Molimo pričekajte ...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} broj zapisa po stranici`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Prikazujem ${pageFrom}. - ${pageTo}. od ukupnog broja zapisa ${totalRows}`
    },
    formatSearch () {
      return 'Pretraži'
    },
    formatNoMatches () {
      return 'Nije pronađen niti jedan zapis'
    },
    formatPaginationSwitch () {
      return 'Prikaži/sakrij stranice'
    },
    formatRefresh () {
      return 'Osvježi'
    },
    formatToggle () {
      return 'Promijeni prikaz'
    },
    formatColumns () {
      return 'Kolone'
    },
    formatAllRows () {
      return 'Sve'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hr-HR'])
})(jQuery)
