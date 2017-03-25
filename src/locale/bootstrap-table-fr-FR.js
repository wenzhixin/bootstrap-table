/**
 * Bootstrap Table French (France) translation
 * Author: Dennis Hernández (http://djhvscf.github.io/Blog/)
 * Modification: Tidalf (https://github.com/TidalfFR)
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['fr-FR'] = {
        formatLoadingMessage: function () {
            return 'Chargement en cours, patientez, s´il vous plaît ...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' lignes par page';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Affichage des lignes ' + pageFrom + ' à ' + pageTo + ' sur ' + totalRows + ' lignes au total';
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
        },
        formatAllRows: function () {
            return 'Tous';
        }
        formatExport: function () {
            return 'Exporter les données';
        },
        formatClearFilters: function () {
            return 'Vider les filtres';
        },
        formatMultipleSort: function() {
+            return 'Tri avancé';
+        },
+        formatAddLevel: function() {
+            return 'Ajouter un niveau';
+        },
+        formatDeleteLevel: function() {
+            return 'Supprimer un niveau';
+        },
+        formatColumn: function() {
+            return 'Colonne';
+        },
+        formatOrder: function() {
+            return 'Ordre';
+        },
+        formatSortBy: function() {
+            return 'Trier par';
+        },
+        formatThenBy: function() {
+            return 'Puis par';
+        },
+        formatSort: function() {
+            return 'Trier';
+        },
+        formatCancel: function() {
+            return 'Annuler';
+        },
+        formatDuplicateAlertTitle: function() {
+            return 'Doublon(s) détecté(s)!';
+        },
+        formatDuplicateAlertDescription: function() {
+            return 'Supprimez ou changez les colonnes dupliquées.';
+        },
+        formatSortOrders: function() {
+            return {
+                asc: 'Croissant',
+                desc: 'Décroissant'
+            };
+        },
         formatAdvancedSearch: function() {
+            return 'Recherche avancée';
+        },
+        formatAdvancedCloseButton: function() {
+            return "Fermer";
+        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fr-FR']);

})(jQuery);
