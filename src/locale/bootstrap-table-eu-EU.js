/**
 * Bootstrap Table Basque (Basque Country) translation
 * Author: Iker Ibarguren Berasaluze<ikerib@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['eu-EU'] = {
    formatLoadingMessage () {
      return 'Itxaron mesedez...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} emaitza orriko.`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `${totalRows} erregistroetatik ${pageFrom}etik ${pageTo}erakoak erakusten.`
    },
    formatSearch () {
      return 'Bilatu'
    },
    formatNoMatches () {
      return 'Ez da emaitzarik aurkitu'
    },
    formatPaginationSwitch () {
      return 'Ezkutatu/Erakutsi orrikatzea'
    },
    formatRefresh () {
      return 'Eguneratu'
    },
    formatToggle () {
      return 'Ezkutatu/Erakutsi'
    },
    formatColumns () {
      return 'Zutabeak'
    },
    formatAllRows () {
      return 'Guztiak'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['eu-EU'])
})(jQuery)
