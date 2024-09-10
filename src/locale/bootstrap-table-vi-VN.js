/**
 * Bootstrap Table Vietnamese translation
 * Author: Duc N. PHAM <pngduc@gmail.com>
 * Revision: Le Ngo Duc Manh <myt@nnsvn.me> (07/Mar/2024)
 */

$.fn.bootstrapTable.locales['vi-VN'] = $.fn.bootstrapTable.locales['vi'] = {
  formatAdvancedCloseButton () {
    return 'Đóng'
  },

  formatAdvancedSearch () {
    return 'Tìm kiếm nâng cao'
  },

  formatAllRows () {
    return 'Tất cả'
  },

  formatAutoRefresh () {
    return 'Tự động làm mới'
  },

  formatClearSearch () {
    return 'Xoá tìm kiếm'
  },

  formatColumns () {
    return 'Cột'
  },

  formatColumnsToggleAll () {
    return 'Hiện tất cả'
  },

  formatCopyRows () {
    return 'Sao chép hàng'
  },

  formatDetailPagination (totalRows) {
    return `Đang hiện ${totalRows} hàng`
  },

  formatExport () {
    return 'Xuất dữ liệu'
  },

  formatFilterControlSwitch () {
    return 'Ẩn/Hiện điều khiển'
  },

  formatFilterControlSwitchHide () {
    return 'Ẩn điều khiển'
  },

  formatFilterControlSwitchShow () {
    return 'Hiện điều khiển'
  },

  formatFullscreen () {
    return 'Toàn màn hình'
  },

  formatJumpTo () {
    return 'Đến'
  },

  formatLoadingMessage () {
    return 'Đang tải'
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

  formatPrint () {
    return 'In'
  },

  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} bản ghi mỗi trang`
  },

  formatRefresh () {
    return 'Làm mới'
  },

  formatSearch () {
    return 'Tìm kiếm'
  },

  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Hiển thị từ trang ${pageFrom} đến ${pageTo} của ${totalRows} bản ghi (được lọc từ tổng ${totalNotFiltered} hàng)`
    }

    return `Hiển thị từ trang ${pageFrom} đến ${pageTo} của ${totalRows} bản ghi`
  },

  formatSRPaginationNextText () {
    return 'trang sau'
  },

  formatSRPaginationPageText (page) {
    return `đến trang ${page}`
  },

  formatSRPaginationPreText () {
    return 'trang trước'
  },

  formatToggleOff () {
    return 'Ẩn các thẻ'
  },

  formatToggleOn () {
    return 'Hiển thị các thẻ'
  }
}

Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN'])
