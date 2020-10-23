/**
 * Bootstrap Table Indonesian translation
 * Author: Andre Gardiner<andre@sirdre.com>
 */

$.fn.bootstrapTable.locales['id-ID'] = $.fn.bootstrapTable.locales['id'] = {
  formatCopyRows () {
    return 'Copy Rows'
  },
  formatPrint () {
    return 'Print'
  },
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
    return 'Bersihkan filter'
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
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Muat ulang'
  },
  formatToggle () {
    return 'Beralih'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'kolom'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
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
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  },
  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID'])
