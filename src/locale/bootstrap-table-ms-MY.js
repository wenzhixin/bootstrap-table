/**
 * Bootstrap Table Malay translation
 * Author: Azamshul Azizy <azamshul@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['ms-MY'] = {
    formatLoadingMessage () {
      return 'Permintaan sedang dimuatkan. Sila tunggu sebentar...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} rekod setiap muka surat`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Sedang memaparkan rekod ${pageFrom} hingga ${pageTo} daripada jumlah ${totalRows} rekod`
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
    formatAllRows () {
      return 'Semua'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ms-MY'])
})(jQuery)
