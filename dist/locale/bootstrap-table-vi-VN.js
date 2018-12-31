(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jquery);
    global.bootstrapTableViVN = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['vi-VN'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Đang tải...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' b\u1EA3n ghi m\u1ED7i trang';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Hi\u1EC3n th\u1ECB t\u1EEB trang ' + pageFrom + ' \u0111\u1EBFn ' + pageTo + ' c\u1EE7a ' + totalRows + ' b\u1EA3ng ghi';
    },
    formatSearch: function formatSearch() {
      return 'Tìm kiếm';
    },
    formatNoMatches: function formatNoMatches() {
      return 'Không có dữ liệu';
    }
  }; /**
      * Bootstrap Table Vietnamese translation
      * Author: Duc N. PHAM <pngduc@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['vi-VN']);
});