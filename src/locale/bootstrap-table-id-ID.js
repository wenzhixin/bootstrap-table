/**
 * Bootstrap Table Indonesian translation
 * Author: Andre Gardiner<andre@sirdre.com>
 */

$.fn.bootstrapTable.locales['id-ID'] = $.fn.bootstrapTable.locales['id'] = {
  // General.
  formatAllRows () {
    return 'Semua'
  },
  formatClearSearch () {
    return 'Menghapus pencarian'
  },
  formatColumns () {
    return 'Kolom'
  },
  formatColumnsToggleAll () {
    return 'Tampilkan semua'
  },
  formatDetailPagination (totalRows) {
    return `Tampilan ${totalRows} baris`
  },
  formatFullscreen () {
    return 'Layar penuh'
  },
  formatLoadingMessage () {
    return 'Pemuatan sedang berlangsung'
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
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} baris per halaman`
  },
  formatRefresh () {
    return 'Segarkan'
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
  formatSRPaginationNextText () {
    return 'halaman berikutnya'
  },
  formatSRPaginationPageText (page) {
    return `ke halaman ${page}`
  },
  formatSRPaginationPreText () {
    return 'halaman sebelumnya'
  },
  formatToggleOn () {
    return 'Menampilkan tampilan peta'
  },
  formatToggleOff () {
    return 'Menyembunyikan tampilan peta'
  },

  // Extension: Auto Refresh.
  formatAutoRefresh () {
    return 'Penyegaran otomatis'
  },

  // Extension: Copy Rows.
  formatCopyRows () {
    return 'Salin baris'
  },

  // Extension: Custom View.
  formatToggleCustomViewOn () {
    return 'Menampilkan tampilan khusus'
  },
  formatToggleCustomViewOff () {
    return 'Menyembunyikan tampilan khusus'
  },

  // Extension: Export.
  formatExport () {
    return 'Mengekspor data'
  },

  // Extension: Filter Control.
  formatClearFilters () {
    return 'Menghapus filter'
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

  // Extension: Multiple Sort.
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
  },

  // Extension: Page Jump To.
  formatJumpTo () {
    return 'Pergi ke'
  },

  // Extension: Print.
  formatPrint () {
    return 'Mencetak'
  },

  // Extension: Toolbar.
  formatAdvancedCloseButton () {
    return 'Tutup'
  },
  formatAdvancedSearch () {
    return 'Pencarian lanjutan'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID'])
