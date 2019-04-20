/**
 * Bootstrap Table Uzbek translation
 * Author: Nabijon Masharipov <mnabijonz@gmail.com>
 */

$.fn.bootstrapTable.locales['uz-Latn-UZ'] = {
  formatLoadingMessage () {
    return 'Yuklanyapti, iltimos kuting'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} qator har sahifada`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Ko'rsatypati ${pageFrom} dan ${pageTo} gacha ${totalRows} qatorlarni (filtered from ${totalNotFiltered} total rows)`
    }

    return `Ko'rsatypati ${pageFrom} dan ${pageTo} gacha ${totalRows} qatorlarni`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Qidirish'
  },
  formatNoMatches () {
    return 'Hech narsa topilmadi'
  },
  formatPaginationSwitch () {
    return 'Sahifalashni yashirish/ko\'rsatish'
  },
  formatRefresh () {
    return 'Yangilash'
  },
  formatToggle () {
    return 'Ko\'rinish'
  },
  formatColumns () {
    return 'Ustunlar'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'Hammasi'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Eksport'
  },
  formatClearFilters () {
    return 'Filtrlarni tozalash'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uz-Latn-UZ'])
