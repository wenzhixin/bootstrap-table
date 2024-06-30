(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.assign.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.assign.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, global.jQuery));
})(this, (function (es_array_concat_js, es_object_assign_js, $) { 'use strict';

  /**
   * Bootstrap Table Vietnamese translation
   * Author: Duc N. PHAM <pngduc@gmail.com>
   * Revision: Le Ngo Duc Manh <myt@nnsvn.me> (07/Mar/2024)
   */

  $.fn.bootstrapTable.locales['vi-VN'] = $.fn.bootstrapTable.locales['vi'] = {
    formatCopyRows: function formatCopyRows() {
      return 'Sao chép hàng';
    },
    formatPrint: function formatPrint() {
      return 'In';
    },
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Đang tải';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return "".concat(pageNumber, " b\u1EA3n ghi m\u1ED7i trang");
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
      if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
        return "Hi\u1EC3n th\u1ECB t\u1EEB trang ".concat(pageFrom, " \u0111\u1EBFn ").concat(pageTo, " c\u1EE7a ").concat(totalRows, " b\u1EA3n ghi (\u0111\u01B0\u1EE3c l\u1ECDc t\u1EEB t\u1ED5ng ").concat(totalNotFiltered, " h\xE0ng)");
      }
      return "Hi\u1EC3n th\u1ECB t\u1EEB trang ".concat(pageFrom, " \u0111\u1EBFn ").concat(pageTo, " c\u1EE7a ").concat(totalRows, " b\u1EA3n ghi");
    },
    formatSRPaginationPreText: function formatSRPaginationPreText() {
      return 'trang trước';
    },
    formatSRPaginationPageText: function formatSRPaginationPageText(page) {
      return "\u0111\u1EBFn trang ".concat(page);
    },
    formatSRPaginationNextText: function formatSRPaginationNextText() {
      return 'trang sau';
    },
    formatDetailPagination: function formatDetailPagination(totalRows) {
      return "\u0110ang hi\u1EC7n ".concat(totalRows, " h\xE0ng");
    },
    formatClearSearch: function formatClearSearch() {
      return 'Xoá tìm kiếm';
    },
    formatSearch: function formatSearch() {
      return 'Tìm kiếm';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Không có dữ liệu';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Ẩn/Hiện phân trang';
    },
    formatPaginationSwitchDown: function formatPaginationSwitchDown() {
      return 'Hiện phân trang';
    },
    formatPaginationSwitchUp: function formatPaginationSwitchUp() {
      return 'Ẩn phân trang';
    },
    formatRefresh: function formatRefresh() {
      return 'Làm mới';
    },
    formatToggleOn: function formatToggleOn() {
      return 'Hiển thị các thẻ';
    },
    formatToggleOff: function formatToggleOff() {
      return 'Ẩn các thẻ';
    },
    formatColumns: function formatColumns() {
      return 'Cột';
    },
    formatColumnsToggleAll: function formatColumnsToggleAll() {
      return 'Hiện tất cả';
    },
    formatFullscreen: function formatFullscreen() {
      return 'Toàn màn hình';
    },
    formatAllRows: function formatAllRows() {
      return 'Tất cả';
    },
    formatAutoRefresh: function formatAutoRefresh() {
      return 'Tự động làm mới';
    },
    formatExport: function formatExport() {
      return 'Xuất dữ liệu';
    },
    formatJumpTo: function formatJumpTo() {
      return 'Đến';
    },
    formatAdvancedSearch: function formatAdvancedSearch() {
      return 'Tìm kiếm nâng cao';
    },
    formatAdvancedCloseButton: function formatAdvancedCloseButton() {
      return 'Đóng';
    },
    formatFilterControlSwitch: function formatFilterControlSwitch() {
      return 'Ẩn/Hiện điều khiển';
    },
    formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
      return 'Ẩn điều khiển';
    },
    formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
      return 'Hiện điều khiển';
    }
  };
  Object.assign($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['vi-VN']);

}));
