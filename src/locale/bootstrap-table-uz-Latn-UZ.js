/**
 * Bootstrap Table Uzbek translation
 * Author: Nabijon Masharipov <mnabijonz@gmail.com>
 */

$.fn.bootstrapTable.locales['uz-Latn-UZ'] = $.fn.bootstrapTable.locales['uz'] = {
  formatAdvancedCloseButton () {
    return 'Close'
  },

  formatAdvancedSearch () {
    return 'Advanced search'
  },

  formatAllRows () {
    return 'Hammasi'
  },

  formatAutoRefresh () {
    return 'Auto Refresh'
  },

  formatClearSearch () {
    return 'Filtrlarni tozalash'
  },

  formatColumns () {
    return 'Ustunlar'
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
    return 'Eksport'
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
    return 'Yuklanyapti, iltimos kuting'
  },

  formatNoMatches () {
    return 'Hech narsa topilmadi'
  },

  formatPaginationSwitch () {
    return 'Sahifalashni yashirish/ko\'rsatish'
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
    return `${pageNumber} qator har sahifada`
  },

  formatRefresh () {
    return 'Yangilash'
  },

  formatSearch () {
    return 'Qidirish'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Ko'rsatypati ${pageFrom} dan ${pageTo} gacha ${totalRows} qatorlarni (filtered from ${totalNotFiltered} total rows)`
    }

    return `Ko'rsatypati ${pageFrom} dan ${pageTo} gacha ${totalRows} qatorlarni`
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

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uz-Latn-UZ'])
