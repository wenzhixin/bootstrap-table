/**
 * Bootstrap Table Thai translation
 * Author: Monchai S.<monchais@gmail.com>
 */

$.fn.bootstrapTable.locales['th-TH'] = {
  formatLoadingMessage () {
    return 'กำลังโหลดข้อมูล, กรุณารอสักครู่'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} รายการต่อหน้า`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `รายการที่ ${pageFrom} ถึง ${pageTo} จากทั้งหมด ${totalRows} รายการ (filtered from ${totalNotFiltered} total rows)`
    }

    return `รายการที่ ${pageFrom} ถึง ${pageTo} จากทั้งหมด ${totalRows} รายการ`
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
    return 'Clear Search'
  },
  formatSearch () {
    return 'ค้นหา'
  },
  formatNoMatches () {
    return 'ไม่พบรายการที่ค้นหา !'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'รีเฟรส'
  },
  formatToggle () {
    return 'สลับมุมมอง'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'คอลัมน์'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'All'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Export data'
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

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['th-TH'])
