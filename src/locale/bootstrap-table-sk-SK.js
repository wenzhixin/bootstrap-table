/**
 * Bootstrap Table Slovak translation
 * Author: Jozef Dúc<jozef.d13@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['sk-SK'] = {
    formatLoadingMessage () {
      return 'Prosím čakajte ...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} záznamov na stranu`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Zobrazená ${pageFrom}. - ${pageTo}. položka z celkových ${totalRows}`
    },
    formatSearch () {
      return 'Vyhľadávanie'
    },
    formatNoMatches () {
      return 'Nenájdená žiadna vyhovujúca položka'
    },
    formatPaginationSwitch () {
      return 'Skry/Zobraz stránkovanie'
    },
    formatRefresh () {
      return 'Obnoviť'
    },
    formatToggle () {
      return 'Prepni'
    },
    formatColumns () {
      return 'Stĺpce'
    },
    formatAllRows () {
      return 'Všetky'
    },
    formatExport () {
      return 'Exportuj dáta'
    },
    formatClearFilters () {
      return 'Odstráň filtre'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK'])
})(jQuery)
