/**
 * Bootstrap Table Spanish (Costa Rica) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        formatLoadingMessage: function () {
            return 'Cargando, por favor espere...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' registros por página';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Mostrando de ' + pageFrom + ' a ' + pageTo + ' registros de ' + totalRows + ' registros en total';
        },
        formatSearch: function () {
            return 'Buscar';
        },
        formatNoMatches: function () {
            return 'No se encontraron registros';
        },
        formatRefresh: function () {
            return 'Refrescar';
        },
        formatToggle: function () {
            return 'Alternar';
        },
        formatColumns: function () {
            return 'Columnas';
        }
    });
})(jQuery);
