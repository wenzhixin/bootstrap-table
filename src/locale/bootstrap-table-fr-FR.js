/**
 * Bootstrap Table French (France) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 */
(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        formatLoadingMessage: function () {
            return 'Chargement en cours, s´il vous plaît patienter ...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' dossiers par page';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Affichage de ' + pageFrom + ' à ' + pageTo + ' dossiers ' + totalRows + ' dossiers au total';
        },
        formatSearch: function () {
            return 'Rechercher';
        },
        formatNoMatches: function () {
            return 'Aucun résultat trouvé';
        },
        formatRefresh: function () {
            return 'Rafraîchir';
        },
        formatToggle: function () {
            return 'Alterner';
        },
        formatColumns: function () {
            return 'Colonnes';
        }
    });
})(jQuery);
