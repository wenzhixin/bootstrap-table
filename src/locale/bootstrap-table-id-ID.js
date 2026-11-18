/**
 * Bootstrap Table Indonesian translation
 * Author: Andre Gardiner<andre@sirdre.com>
 */

$.fn.bootstrapTable.locales['id-ID'] = $.fn.bootstrapTable.locales['id'] = {
  formatAddLevel () {
    return 'Menambahkan level'
  },

  formatAdvancedCloseButton () {
    return 'Tutup'
  },

  formatAdvancedSearch () {
    return 'Pencarian lanjutan'
  },

  formatAllRows () {
    return 'Semua'
  },

  formatAutoRefresh () {
    return 'Penyegaran otomatis'
  },

  formatCancel () {
    return 'Batal'
  },

  formatClearSearch () {
    return 'Menghapus pencarian'
  },

  formatColumn () {
    return 'Kolom'
  },

  formatColumns () {
    return 'Kolom'
  },

  formatColumnsToggleAll () {
    return 'Tampilkan semua'
  },

  formatCopyRows () {
    return 'Salin baris'
  },

  formatDeleteLevel () {
    return 'Menghapus level'
  },

  formatDetailPagination (totalRows) {
    return `Tampilan ${totalRows} baris`
  },

  formatDuplicateAlertDescription () {
    return 'Harap hapus atau ubah entri duplikat'
  },

  formatDuplicateAlertTitle () {
    return 'Entri duplikat telah ditemukan!'
  },

  formatExport () {
    return 'Mengekspor data'
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

  formatFullscreen () {
    return 'Layar penuh'
  },

  formatJumpTo () {
    return 'Pergi ke'
  },

  formatLoadingMessage () {
    return 'Pemuatan sedang berlangsung'
  },

  formatMultipleSort () {
    return 'Penyortiran ganda'
  },

  formatNoMatches () {
    return 'Tidak ada hasil'
  },

  formatOrder () {
    return 'Urutan'
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

  formatPrint () {
    return 'Mencetak'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} baris per halaman`
  },

  formatRefresh () {
    return 'Segarkan'
  },

  formatSRPaginationNextText () {
    return 'halaman berikutnya'
  },

  formatSRPaginationPageText (page) {
    return `ke halaman ${page}`
  },

  formatSRPaginationPreText () {
    return 'halaman sebelumnya'
  },

  formatSearch () {
    return 'Pencarian'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Menampilkan dari ${pageFrom} hingga ${pageTo} pada ${totalRows} baris (difilter dari ${totalNotFiltered} baris)`
    }

    return `Menampilkan dari ${pageFrom} hingga ${pageTo} pada ${totalRows} baris`
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
  },

  formatToggleCustomViewOff () {
    return 'Menyembunyikan tampilan khusus'
  },

  formatToggleCustomViewOn () {
    return 'Menampilkan tampilan khusus'
  },

  formatToggleOff () {
    return 'Menyembunyikan tampilan peta'
  },

  formatToggleOn () {
    return 'Menampilkan tampilan peta'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID'])
