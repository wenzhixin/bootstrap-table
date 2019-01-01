/**
 * Bootstrap Table Georgian translation
 * Author: Levan Lotuashvili <l.lotuashvili@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['ka-GE'] = {
    formatLoadingMessage () {
      return 'იტვირთება, გთხოვთ მოიცადოთ...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} ჩანაწერი თითო გვერდზე`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `ნაჩვენებია ${pageFrom}-დან ${pageTo}-მდე ჩანაწერი ჯამური ${totalRows}-დან`
    },
    formatSearch () {
      return 'ძებნა'
    },
    formatNoMatches () {
      return 'მონაცემები არ არის'
    },
    formatPaginationSwitch () {
      return 'გვერდების გადამრთველის დამალვა/გამოჩენა'
    },
    formatRefresh () {
      return 'განახლება'
    },
    formatToggle () {
      return 'ჩართვა/გამორთვა'
    },
    formatColumns () {
      return 'სვეტები'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ka-GE'])
})(jQuery)
