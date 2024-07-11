/**
 * Bootstrap Table Indonesian translation
 * Author: Andre Gardiner<andre@sirdre.com>
 */

$.fn.bootstrapTable.locales['id-ID'] = $.fn.bootstrapTable.locales['id'] = {
  formatCopyRows () {
    return 'Salin baris'
  },
  formatPrint () {
    return 'Mencetak'
  },
  formatLoadingMessage () {
    return 'Pemuatan sedang berlangsung'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} baris per halaman`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Menampilkan dari ${pageFrom} hingga ${pageTo} pada ${totalRows} baris (difilter dari ${totalNotFiltered} baris)`
    }
    return `Menampilkan dari ${pageFrom} hingga ${pageTo} pada ${totalRows} baris`
  },
  formatSRPaginationPreText () {
    return 'halaman sebelumnya'
  },
  formatSRPaginationPageText (page) {
    return `ke halaman ${page}`
  },
  formatSRPaginationNextText () {
    return 'halaman berikutnya'
  },
  formatDetailPagination (totalRows) {
    return `Tampilan ${totalRows} baris`
  },
  formatClearSearch () {
    return 'Menghapus pencarian'
  },
  formatSearch () {
    return 'Pencarian'
  },
  formatNoMatches () {
    return 'Tidak ada hasil'
  },
  formatPaginationSwitch () {
    return 'Sembunyikan/Tampilkan penomoran halaman'
  },
  formatPaginationSwitchDown () {
    return 'Tampilkan penomoran halaman'
  },
  formatPaginationSwitchUp () {
    return 'Sembunyikan penomoran halaman'
  },
  formatRefresh () {
    return 'Segarkan'
  },
  formatToggleOn () {
    return 'Menampilkan tampilan peta'
  },
  formatToggleOff () {
    return 'Menyembunyikan tampilan peta'
  },
  formatColumns () {
    return 'Kolom'
  },
  formatColumnsToggleAll () {
    return 'Tampilkan semua'
  },
  formatFullscreen () {
    return 'Layar penuh'
  },
  formatAllRows () {
    return 'Semua'
  },
  formatAutoRefresh () {
    return 'Penyegaran otomatis'
  },
  formatExport () {
    return 'Mengekspor data'
  },
  formatJumpTo () {
    return 'Pergi ke'
  },
  formatAdvancedSearch () {
    return 'Pencarian lanjutan'
  },
  formatAdvancedCloseButton () {
    return 'Tutup'
  },
  formatFilterControlSwitch () {
    return 'Menyembunyikan/Menampilkan kontrol'
  },
  formatFilterControlSwitchHide () {
    return 'Menyembunyikan kontrol'
  },
  formatFilterControlSwitchShow () {
    return 'Menampilkan kontrol'
  },
  formatToggleCustomViewOn () {
    return 'Menampilkan tampilan khusus'
  },
  formatToggleCustomViewOff () {
    return 'Menyembunyikan tampilan khusus'
  },
  formatClearFilters () {
    return 'Menghapus filter'
  },
  formatAddLevel () {
    return 'Menambahkan level'
  },
  formatCancel () {
    return 'Batal'
  },
  formatColumn () {
    return 'Kolom'
  },
  formatDeleteLevel () {
    return 'Menghapus level'
  },
  formatDuplicateAlertTitle () {
    return 'Entri duplikat telah ditemukan!'
  },
  formatDuplicateAlertDescription () {
    return 'Harap hapus atau ubah entri duplikat'
  },
  formatMultipleSort () {
    return 'Penyortiran ganda'
  },
  formatOrder () {
    return 'Urutan'
  },
  formatSort () {
    return 'Penyortiran'
  },
  formatSortBy () {
    return 'Urutkan berdasarkan'
  },
  formatSortOrders () {
    return {
      asc: 'Menaik',
      desc: 'Menurun'
    }
  },
  formatThenBy () {
    return 'Kemudian oleh'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID'])
