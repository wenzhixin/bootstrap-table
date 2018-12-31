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
    global.bootstrapTableEnUS = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _jquery2.default.fn.bootstrapTable.locales['en-US'] = {
    formatLoadingMessage: function formatLoadingMessage() {
      return 'Loading, please wait...';
    },
    formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
      return pageNumber + ' rows per page';
    },
    formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
      return 'Showing ' + pageFrom + ' to ' + pageTo + ' of ' + totalRows + ' rows';
    },
    formatSearch: function formatSearch() {
      return 'Search';
    },
    formatNoMatches: function formatNoMatches() {
      return 'No matching records found';
    },
    formatPaginationSwitch: function formatPaginationSwitch() {
      return 'Hide/Show pagination';
    },
    formatRefresh: function formatRefresh() {
      return 'Refresh';
    },
    formatToggle: function formatToggle() {
      return 'Toggle';
    },
    formatColumns: function formatColumns() {
      return 'Columns';
    },
    formatAllRows: function formatAllRows() {
      return 'All';
    },
    formatExport: function formatExport() {
      return 'Export data';
    },
    formatClearFilters: function formatClearFilters() {
      return 'Clear filters';
    }
  }; /**
      * Bootstrap Table English translation
      * Author: Zhixin Wen<wenzhixin2010@gmail.com>
      */


  _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales['en-US']);
});