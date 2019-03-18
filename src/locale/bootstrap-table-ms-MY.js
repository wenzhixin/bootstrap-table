/**
 * Bootstrap Table Malay translation
 * Author: Azamshul Azizy <azamshul@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['ms-MY'] = {
    formatLoadingMessage () {
      return 'Permintaan sedang dimuatkan. Sila tunggu sebentar'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rekod setiap muka surat`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Sedang memaparkan rekod ${pageFrom} hingga ${pageTo} daripada jumlah ${totalRows} rekod`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'Cari'
    },
    formatNoMatches () {
      return 'Tiada rekod yang menyamai permintaan'
    },
    formatPaginationSwitch () {
      return 'Tunjuk/sembunyi muka surat'
    },
    formatRefresh () {
      return 'Muatsemula'
    },
    formatToggle () {
      return 'Tukar'
    },
    formatColumns () {
      return 'Lajur'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Semua'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ms-MY'])
})(jQuery)
