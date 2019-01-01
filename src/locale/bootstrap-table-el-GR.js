/**
 * Bootstrap Table Greek translation
 * Author: giannisdallas
 */
($ => {
  $.fn.bootstrapTable.locales['el-GR'] = {
    formatLoadingMessage () {
      return 'Φορτώνει, παρακαλώ περιμένετε...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} αποτελέσματα ανά σελίδα`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Εμφανίζονται από την ${pageFrom} ως την ${pageTo} από σύνολο ${totalRows} σειρών`
    },
    formatSearch () {
      return 'Αναζητήστε'
    },
    formatNoMatches () {
      return 'Δεν βρέθηκαν αποτελέσματα'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['el-GR'])
})(jQuery)
