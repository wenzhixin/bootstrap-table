/**
 * Bootstrap Table Hungarian translation
 * Author: Nagy Gergely <info@nagygergely.eu>
 */
($ => {
  $.fn.bootstrapTable.locales['hu-HU'] = {
    formatLoadingMessage () {
      return 'Betöltés, kérem várjon'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rekord per oldal`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Megjelenítve ${pageFrom} - ${pageTo} / ${totalRows} összesen`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'Keresés'
    },
    formatNoMatches () {
      return 'Nincs találat'
    },
    formatPaginationSwitch () {
      return 'Lapozó elrejtése/megjelenítése'
    },
    formatRefresh () {
      return 'Frissítés'
    },
    formatToggle () {
      return 'Összecsuk/Kinyit'
    },
    formatColumns () {
      return 'Oszlopok'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Összes'
    },
    formatAutoRefresh () {
      return 'Auto Refresh'
    },
    formatExport () {
      return 'Export data'
    },
    formatClearFilters () {
      return 'Clear filters'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['hu-HU'])
})(jQuery)
