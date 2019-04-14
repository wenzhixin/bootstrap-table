/**
 * Bootstrap Table Indonesian translation
 * Author: Andre Gardiner<andre@sirdre.com>
 */

$.fn.bootstrapTable.locales['id-ID'] = {
  formatLoadingMessage () {
    return 'Memuat, mohon tunggu'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} baris per halaman`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Menampilkan ${pageFrom} sampai ${pageTo} dari ${totalRows} baris (filtered from ${totalNotFiltered} total rows)`
    }

    return `Menampilkan ${pageFrom} sampai ${pageTo} dari ${totalRows} baris`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
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
    return 'Ekspor data'
  },
  formatClearFilters () {
    return 'Bersihkan filter'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID'])
