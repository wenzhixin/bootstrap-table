/**
 * Bootstrap Table Malay translation
 * Author: Azamshul Azizy <azamshul@gmail.com>
 */

$.fn.bootstrapTable.locales['ms-MY'] = $.fn.bootstrapTable.locales['ms'] = {
  formatAdvancedCloseButton () {
    return 'Close'
  },

  formatAdvancedSearch () {
    return 'Advanced search'
  },

  formatAllRows () {
    return 'Semua'
  },

  formatAutoRefresh () {
    return 'Auto Refresh'
  },

  formatClearSearch () {
    return 'Clear Search'
  },

  formatColumns () {
    return 'Lajur'
  },

  formatColumnsToggleAll () {
    return 'Toggle all'
  },

  formatCopyRows () {
    return 'Copy Rows'
  },

  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },

  formatExport () {
    return 'Export data'
  },

  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },

  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },

  formatFilterControlSwitchShow () {
    return 'Show controls'
  },

  formatFullscreen () {
    return 'Fullscreen'
  },

  formatJumpTo () {
    return 'GO'
  },

  formatLoadingMessage () {
    return 'Permintaan sedang dimuatkan. Sila tunggu sebentar'
  },

  formatNoMatches () {
    return 'Tiada rekod yang menyamai permintaan'
  },

  formatPaginationSwitch () {
    return 'Tunjuk/sembunyi muka surat'
  },

  formatPaginationSwitchDown () {
    return 'Show pagination'
  },

  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },

  formatPrint () {
    return 'Print'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rekod setiap muka surat`
  },

  formatRefresh () {
    return 'Muatsemula'
  },

  formatSearch () {
    return 'Cari'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Sedang memaparkan rekod ${pageFrom} hingga ${pageTo} daripada jumlah ${totalRows} rekod (filtered from ${totalNotFiltered} total rows)`
    }

    return `Sedang memaparkan rekod ${pageFrom} hingga ${pageTo} daripada jumlah ${totalRows} rekod`
  },

  formatSRPaginationNextText () {
    return 'next page'
  },

  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },

  formatSRPaginationPreText () {
    return 'previous page'
  },

  formatToggleOff () {
    return 'Hide card view'
  },

  formatToggleOn () {
    return 'Show card view'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['ms-MY'])
