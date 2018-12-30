/**
 * Bootstrap Table Swedish translation
 * Author: C Bratt <bratt@inix.se>
 */
($ => {
  $.fn.bootstrapTable.locales['sv-SE'] = {
    formatLoadingMessage () {
      return 'Laddar, vänligen vänta...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rader per sida`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Visa ${pageFrom} till ${pageTo} av ${totalRows} rader`
    },
    formatSearch () {
      return 'Sök'
    },
    formatNoMatches () {
      return 'Inga matchande resultat funna.'
    },
    formatRefresh () {
      return 'Uppdatera'
    },
    formatToggle () {
      return 'Skifta'
    },
    formatColumns () {
      return 'kolumn'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sv-SE'])
})(jQuery)
