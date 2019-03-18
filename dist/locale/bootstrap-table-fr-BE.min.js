/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableFrBE={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['fr-BE']={formatLoadingMessage:function(){return'Chargement en cours'},formatRecordsPerPage:function(a){return a+' entr\xE9es par page'},formatShowingRows:function(a,b,c){return'Affiche de'+a+' \xE0 '+b+' sur '+c+' lignes'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Recherche'},formatNoMatches:function(){return'Pas de fichiers trouv\xE9s'},formatPaginationSwitch:function(){return'Hide/Show pagination'},formatRefresh:function(){return'Refresh'},formatToggle:function(){return'Toggle'},formatColumns:function(){return'Columns'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'All'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['fr-BE'])})(jQuery)});