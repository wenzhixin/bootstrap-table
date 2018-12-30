/**
 * Bootstrap Table Romanian translation
 * Author: cristake <cristianiosif@me.com>
 */
($ => {
  $.fn.bootstrapTable.locales['ro-RO'] = {
    formatLoadingMessage () {
      return 'Se incarca, va rugam asteptati...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} inregistrari pe pagina`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Arata de la ${pageFrom} pana la ${pageTo} din ${totalRows} randuri`
    },
    formatSearch () {
      return 'Cauta'
    },
    formatNoMatches () {
      return 'Nu au fost gasite inregistrari'
    },
    formatPaginationSwitch () {
      return 'Ascunde/Arata paginatia'
    },
    formatRefresh () {
      return 'Reincarca'
    },
    formatToggle () {
      return 'Comuta'
    },
    formatColumns () {
      return 'Coloane'
    },
    formatAllRows () {
      return 'Toate'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ro-RO'])
})(jQuery)