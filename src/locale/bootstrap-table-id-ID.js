/**
 * Bootstrap Table Indonesian translation
 * Author: Andre Gardiner<andre@sirdre.com>
 */
($ => {
  $.fn.bootstrapTable.locales['id-ID'] = {
    formatLoadingMessage () {
      return 'Memuat, mohon tunggu...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} baris per halaman`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Menampilkan ${pageFrom} sampai ${pageTo} dari ${totalRows} baris`
    },
    formatSearch () {
      return 'Pencarian'
    },
    formatNoMatches () {
      return 'Tidak ditemukan data yang cocok'
    },
    formatPaginationSwitch () {
      return 'Sembunyikan/Tampilkan halaman'
    },
    formatRefresh () {
      return 'Muat ulang'
    },
    formatToggle () {
      return 'Beralih'
    },
    formatColumns () {
      return 'kolom'
    },
    formatAllRows () {
      return 'Semua'
    },
    formatExport () {
      return 'Ekspor data'
    },
    formatClearFilters () {
      return 'Bersihkan filter'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID'])
})(jQuery)
