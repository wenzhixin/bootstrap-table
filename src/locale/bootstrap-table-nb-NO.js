/**
 * Bootstrap Table norwegian translation
 * Author: Jim Nordbø, jim@nordb.no
 */
($ => {
  $.fn.bootstrapTable.locales['nb-NO'] = {
    formatLoadingMessage () {
      return 'Oppdaterer, vennligst vent...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} poster pr side`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Viser ${pageFrom} til ${pageTo} av ${totalRows} rekker`
    },
    formatSearch () {
      return 'Søk'
    },
    formatNoMatches () {
      return 'Ingen poster funnet'
    },
    formatRefresh () {
      return 'Oppdater'
    },
    formatToggle () {
      return 'Endre'
    },
    formatColumns () {
      return 'Kolonner'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['nb-NO'])
})(jQuery)