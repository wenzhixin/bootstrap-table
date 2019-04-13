/**
 * Bootstrap Table Vietnamese translation
 * Author: Duc N. PHAM <pngduc@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['vi-VN'] = {
    formatLoadingMessage () {
      return 'Đang tải'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} bản ghi mỗi trang`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Hiển thị từ trang ${pageFrom} đến ${pageTo} của ${totalRows} bảng ghi`
    },
    formatDetailPagination (totalRows) {
      return `Showing ${totalRows} rows`
    },
    formatSearch () {
      return 'Tìm kiếm'
    },
    formatNoMatches () {
      return 'Không có dữ liệu'
    },
    formatPaginationSwitch () {
      return 'Hide/Show pagination'
    },
    formatRefresh () {
      return 'Refresh'
    },
    formatToggle () {
      return 'Toggle'
    },
    formatColumns () {
      return 'Columns'
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
    formatJumpto () {
      return 'GO'
    },
    formatAdvancedSearch () {
      return 'Advanced search'
    },
    formatAdvancedCloseButton () {
      return 'Close'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN'])
})(jQuery)
