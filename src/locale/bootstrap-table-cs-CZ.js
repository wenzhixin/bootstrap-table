/**
 * Bootstrap Table Czech translation
 * Author: Lukas Kral (monarcha@seznam.cz)
 * Author: Jakub Svestka <svestka1999@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['cs-CZ'] = {
    formatLoadingMessage () {
      return 'Čekejte, prosím...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} položek na stránku`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Zobrazena ${pageFrom}. - ${pageTo}. položka z celkových ${totalRows}`
    },
    formatSearch () {
      return 'Vyhledávání'
    },
    formatNoMatches () {
      return 'Nenalezena žádná vyhovující položka'
    },
    formatPaginationSwitch () {
      return 'Skrýt/Zobrazit stránkování'
    },
    formatRefresh () {
      return 'Aktualizovat'
    },
    formatToggle () {
      return 'Přepni'
    },
    formatColumns () {
      return 'Sloupce'
    },
    formatAllRows () {
      return 'Vše'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['cs-CZ'])
})(jQuery)
