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
        global.bootstrapTableFrBE = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Bootstrap Table French (Belgium) translation
     * Author: Julien Bisconti (julien.bisconti@gmail.com)
     */
    (function ($) {
        'use strict';

        $.fn.bootstrapTable.locales['fr-BE'] = {
            formatLoadingMessage: function formatLoadingMessage() {
                return 'Chargement en cours...';
            },
            formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
                return pageNumber + ' entrées par page';
            },
            formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows) {
                return 'Affiche de' + pageFrom + ' à ' + pageTo + ' sur ' + totalRows + ' lignes';
            },
            formatSearch: function formatSearch() {
                return 'Recherche';
            },
            formatNoMatches: function formatNoMatches() {
                return 'Pas de fichiers trouvés';
            }
        };

        $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-BE']);
    })(jQuery);
});