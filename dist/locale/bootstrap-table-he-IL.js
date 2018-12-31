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
    global.bootstrapTableHeIL = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['he-IL'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'טוען, נא להמתין...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' \u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return '\u05DE\u05E6\u05D9\u05D2 ' + pageFrom + ' \u05E2\u05D3 ' + pageTo + ' \u05DE-' + totalRows + ' \u05E9\u05D5\u05E8\u05D5\u05EA';
    },
    formatSearch: function formatSearch() {
      return 'חיפוש';
    },
    formatNoMatches: function formatNoMatches() {
      return 'לא נמצאו רשומות תואמות';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'הסתר/הצג מספור דפים';
    },
    formatRefresh: function formatRefresh() {
      return 'רענן';
    },
    formatToggle: function formatToggle() {
      return 'החלף תצוגה';
    },
    formatColumns: function formatColumns() {
      return 'עמודות';
    },
    formatAllRows: function formatAllRows() {
      return 'הכל';
    }
  }; /**
      * Bootstrap Table Hebrew translation
      * Author: legshooter
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['he-IL']);
});