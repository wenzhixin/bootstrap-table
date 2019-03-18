/**
 * Bootstrap Table Slovak translation
 * Author: Jozef Dúc<jozef.d13@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['sk-SK'] = {
    formatLoadingMessage () {
      return 'Prosím čakajte'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} záznamov na stranu`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Zobrazená ${pageFrom}. - ${pageTo}. položka z celkových ${totalRows}`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
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
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Všetky'
    },
    formatAutoRefresh () {
      return 'Auto Refresh'
    },
    formatExport () {
      return 'Exportuj dáta'
    },
    formatClearFilters () {
      return 'Odstráň filtre'
    },
    formatJumpto () {
      return 'GO'
    },
    formatAdvancedSearch () {
      return 'Advanced search'
    },
    formatAdvancedCloseButton () {
      return 'Close'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['sk-SK'])
})(jQuery)
