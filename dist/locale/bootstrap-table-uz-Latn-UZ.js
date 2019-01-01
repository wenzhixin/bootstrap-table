(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.bootstrapTableUzLatnUZ = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Bootstrap Table Uzbek translation
   * Author: Nabijon Masharipov <mnabijonz@gmail.com>
   */
  (function ($) {
    $.fn.bootstrapTable.locales['uz-Latn-UZ'] = {
      formatLoadingMessage: function formatLoadingMessage() {
        return 'Yuklanyapti, iltimos kuting...';
      },
      formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
        return pageNumber + ' qator har sahifada';
      },
      formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
        return 'Ko\'rsatypati ' + pageFrom + ' dan ' + pageTo + ' gacha ' + totalRows + ' qatorlarni';
      },
      formatSearch: function formatSearch() {
        return 'Qidirish';
      },
      formatNoMatches: function formatNoMatches() {
        return 'Hech narsa topilmadi';
      },
      formatPaginationSwitch: function formatPaginationSwitch() {
        return 'Sahifalashni yashirish/ko\'rsatish';
      },
      formatRefresh: function formatRefresh() {
        return 'Yangilash';
      },
      formatToggle: function formatToggle() {
        return 'Ko\'rinish';
      },
      formatColumns: function formatColumns() {
        return 'Ustunlar';
      },
      formatAllRows: function formatAllRows() {
        return 'Hammasi';
      },
      formatExport: function formatExport() {
        return 'Eksport';
      },
      formatClearFilters: function formatClearFilters() {
        return 'Filtrlarni tozalash';
      }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uz-Latn-UZ']);
  })(jQuery);
});