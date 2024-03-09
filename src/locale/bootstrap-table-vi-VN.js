/**
 * Bootstrap Table Vietnamese translation
 * Author: Duc N. PHAM <pngduc@gmail.com>
 * Revision: Le Ngo Duc Manh <myt@nnsvn.me> (07/Mar/2024)
 */

$.fn.bootstrapTable.locales['vi-VN'] = $.fn.bootstrapTable.locales['vi'] = {
  formatCopyRows () {
    return 'Sao chép hàng'
  },
  formatPrint () {
    return 'In'
  },
  formatLoadingMessage () {
    return 'Đang tải'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} bản ghi mỗi trang`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Hiển thị từ trang ${pageFrom} đến ${pageTo} của ${totalRows} bản ghi (được lọc từ tổng ${totalNotFiltered} hàng)`
    }

    return `Hiển thị từ trang ${pageFrom} đến ${pageTo} của ${totalRows} bản ghi`
  },
  formatSRPaginationPreText () {
    return 'trang trước'
  },
  formatSRPaginationPageText (page) {
    return `đến trang ${page}`
  },
  formatSRPaginationNextText () {
    return 'trang sau'
  },
  formatDetailPagination (totalRows) {
    return `Đang hiện ${totalRows} hàng`
  },
  formatClearSearch () {
    return 'Xoá tìm kiếm'
  },
  formatSearch () {
    return 'Tìm kiếm'
  },
  formatNoMatches () {
    return 'Không có dữ liệu'
  },
  formatPaginationSwitch () {
    return 'Ẩn/Hiện phân trang'
  },
  formatPaginationSwitchDown () {
    return 'Hiện phân trang'
  },
  formatPaginationSwitchUp () {
    return 'Ẩn phân trang'
  },
  formatRefresh () {
    return 'Làm mới'
  },
  formatToggleOn () {
    return 'Hiển thị các thẻ'
  },
  formatToggleOff () {
    return 'Ẩn các thẻ'
  },
  formatColumns () {
    return 'Cột'
  },
  formatColumnsToggleAll () {
    return 'Hiện tất cả'
  },
  formatFullscreen () {
    return 'Toàn màn hình'
  },
  formatAllRows () {
    return 'Tất cả'
  },
  formatAutoRefresh () {
    return 'Tự động làm mới'
  },
  formatExport () {
    return 'Xuất dữ liệu'
  },
  formatJumpTo () {
    return 'Đến'
  },
  formatAdvancedSearch () {
    return 'Tìm kiếm nâng cao'
  },
  formatAdvancedCloseButton () {
    return 'Đóng'
  },
  formatFilterControlSwitch () {
    return 'Ẩn/Hiện điều khiển'
  },
  formatFilterControlSwitchHide () {
    return 'Ẩn điều khiển'
  },
  formatFilterControlSwitchShow () {
    return 'Hiện điều khiển'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN'])
