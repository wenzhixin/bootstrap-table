/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableFrFR={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['fr-FR']={formatLoadingMessage:function(){return'Chargement en cours, patientez, s\xB4il vous pla\xEEt'},formatRecordsPerPage:function(a){return a+' lignes par page'},formatShowingRows:function(a,b,c){return'Affichage des lignes '+a+' \xE0 '+b+' sur '+c+' lignes au total'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Rechercher'},formatNoMatches:function(){return'Aucun r\xE9sultat trouv\xE9'},formatPaginationSwitch:function(){return'Montrer/Masquer pagination'},formatRefresh:function(){return'Rafra\xEEchir'},formatToggle:function(){return'Alterner'},formatColumns:function(){return'Colonnes'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Tous'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Exporter les donn\xE9es'},formatClearFilters:function(){return'Vider les filtres'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Recherche avanc\xE9e'},formatAdvancedCloseButton:function(){return'Fermer'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['fr-FR'])})(jQuery)});