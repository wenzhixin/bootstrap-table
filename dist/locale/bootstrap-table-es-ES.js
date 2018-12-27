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
        global.bootstrapTableEsES = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table Spanish Spain translation
     * Author: Marc Pina<iwalkalone69@gmail.com>
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['es-ES'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Por favor espere...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' resultados por página';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Mostrando desde ' + pageFrom + ' hasta ' + pageTo + ' - En total ' + totalRows + ' resultados';
            },
            formatSearch: function formatSearch() {
                return 'Buscar';
            },
            formatNoMatches: function formatNoMatches() {
                return 'No se encontraron resultados';
            },
            formatPaginationSwitch: function formatPaginationSwitch() {
                return 'Ocultar/Mostrar paginación';
            },
            formatRefresh: function formatRefresh() {
                return 'Refrescar';
            },
            formatToggle: function formatToggle() {
                return 'Ocultar/Mostrar';
            },
            formatColumns: function formatColumns() {
                return 'Columnas';
            },
            formatAllRows: function formatAllRows() {
                return 'Todos';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-ES']);
    })(jQuery);
});