/**
 * Bootstrap Table Estonian translation
 * Author: kristjan@logist.it>
 */
($ => {
  $.fn.bootstrapTable.locales['et-EE'] = {
    formatLoadingMessage () {
      return 'Päring käib, palun oota...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rida lehe kohta`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Näitan tulemusi ${pageFrom} kuni ${pageTo} - kokku ${totalRows} tulemust`
    },
    formatSearch () {
      return 'Otsi'
    },
    formatNoMatches () {
      return 'Päringu tingimustele ei vastanud ühtegi tulemust'
    },
    formatPaginationSwitch () {
      return 'Näita/Peida lehtedeks jagamine'
    },
    formatRefresh () {
      return 'Värskenda'
    },
    formatToggle () {
      return 'Lülita'
    },
    formatColumns () {
      return 'Veerud'
    },
    formatAllRows () {
      return 'Kõik'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['et-EE'])
})(jQuery)