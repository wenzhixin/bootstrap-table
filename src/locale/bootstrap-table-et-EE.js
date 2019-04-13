/**
 * Bootstrap Table Estonian translation
 * Author: kristjan@logist.it>
 */
($ => {
  $.fn.bootstrapTable.locales['et-EE'] = {
    formatLoadingMessage () {
      return 'Päring käib, palun oota'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rida lehe kohta`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Näitan tulemusi ${pageFrom} kuni ${pageTo} - kokku ${totalRows} tulemust`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
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
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Kõik'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['et-EE'])
})(jQuery)
