/**
 * Bootstrap Table Brazilian Portuguese Translation
 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['pt-BR'] = {
        formatLoadingMessage: function () {
            return 'Carregando, aguarde…';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' registros por página';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Exibindo ' + pageFrom + ' até ' + pageTo + ' de ' + totalRows + ' linhas';
        },
        formatSearch: function () {
            return 'Busca';
        },
        formatNoMatches: function () {
            return 'Nenhum registro encontrado';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR']);

})(jQuery);
