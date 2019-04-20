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
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
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
  formatRefresh () {
    return 'รีเฟรส'
  },
  formatToggle () {
    return 'สลับมุมมอง'
  },
  formatColumns () {
    return 'คอลัมน์'
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
  formatClearFilters () {
    return 'Clear filters'
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
