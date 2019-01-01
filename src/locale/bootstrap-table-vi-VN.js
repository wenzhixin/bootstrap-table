/**
 * Bootstrap Table Vietnamese translation
 * Author: Duc N. PHAM <pngduc@gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['vi-VN'] = {
    formatLoadingMessage () {
      return 'Đang tải...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} bản ghi mỗi trang`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `Hiển thị từ trang ${pageFrom} đến ${pageTo} của ${totalRows} bảng ghi`
    },
    formatSearch () {
      return 'Tìm kiếm'
    },
    formatNoMatches () {
      return 'Không có dữ liệu'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN'])
})(jQuery)