/**
 * Bootstrap Table Slovak translation
 * Author: Jozef Dúc<jozef.d13@gmail.com>
 */

$.fn.bootstrapTable.locales['sk-SK'] = {
  formatLoadingMessage () {
    return 'Prosím čakajte'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} záznamov na stranu`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Zobrazená ${pageFrom}. - ${pageTo}. položka z celkových ${totalRows} (filtered from ${totalNotFiltered} total rows)`
    }

    return `Zobrazená ${pageFrom}. - ${pageTo}. položka z celkových ${totalRows}`
  },
  formatSRPaginationPreText () {
    return 'previous page'
  },
  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },
  formatSRPaginationNextText () {
    return 'next page'
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatClearSearch () {
    return 'Odstráň filtre'
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
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Obnoviť'
  },
  formatToggle () {
    return 'Prepni'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Stĺpce'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
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
  formatJumpTo () {
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
