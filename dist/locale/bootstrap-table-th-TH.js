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
    global.bootstrapTableThTH = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['th-TH'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'กำลังโหลดข้อมูล, กรุณารอสักครู่...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return '\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ' + pageFrom + ' \u0E16\u0E36\u0E07 ' + pageTo + ' \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ' + totalRows + ' \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23';
    },
    formatSearch: function formatSearch() {
      return 'ค้นหา';
    },
    formatNoMatches: function formatNoMatches() {
      return 'ไม่พบรายการที่ค้นหา !';
    },
    formatRefresh: function formatRefresh() {
      return 'รีเฟรส';
    },
    formatToggle: function formatToggle() {
      return 'สลับมุมมอง';
    },
    formatColumns: function formatColumns() {
      return 'คอลัมน์';
    }
  }; /**
      * Bootstrap Table Thai translation
      * Author: Monchai S.<monchais@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['th-TH']);
});