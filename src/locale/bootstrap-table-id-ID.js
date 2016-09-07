/**
 * Bootstrap Table Indonesian translation
 * Author: Andre Gardiner<andre@sirdre.com> 
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['id-ID'] = {
        formatLoadingMessage: function () {
            return 'Loading, harap tunggu ...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' baris per halaman';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Menampilkan ' + pageFrom + ' sampai ' + pageTo + ' dari ' + totalRows + ' baris';
        }, 
        formatSearch: function () {
            return 'Pencarian';
        },
        formatNoMatches: function () {
            return 'Tidak ada catatan yang cocok ditemukan';
        },
        formatPaginationSwitch: function () {
            return 'Sembunyikan/Tampilkan pagination';
        },
        formatRefresh: function () {
            return 'Menyegarkan';
        },
        formatToggle: function () {
            return 'Beralih';
        },
        formatColumns: function () {
            return 'kolom';
        },
        formatAllRows: function () {
            return 'Semua';
        },
        formatExport: function () {
            return 'Data ekspor';
        },
        formatClearFilters: function () {
            return 'Jelas filter';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['id-ID']);

})(jQuery);
