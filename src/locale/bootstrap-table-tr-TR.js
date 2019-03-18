/**
 * Bootstrap Table Turkish translation
 * Author: Emin Şen
 * Author: Sercan Cakir <srcnckr@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['tr-TR'] = {
    formatLoadingMessage () {
      return 'Yükleniyor, lütfen bekleyin'
    },
    formatRecordsPerPage (pageNumber) {
      return `Sayfa başına ${pageNumber} kayıt.`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `${totalRows} kayıttan ${pageFrom}-${pageTo} arası gösteriliyor.`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'Ara'
    },
    formatNoMatches () {
      return 'Eşleşen kayıt bulunamadı.'
    },
    formatPaginationSwitch () {
      return 'Hide/Show pagination'
    },
    formatRefresh () {
      return 'Yenile'
    },
    formatToggle () {
      return 'Değiştir'
    },
    formatColumns () {
      return 'Sütunlar'
    },
    formatFullscreen () {
      return 'Fullscreen'
    },
    formatAllRows () {
      return 'Tüm Satırlar'
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

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['tr-TR'])
})(jQuery)
