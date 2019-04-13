/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableItIT={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['it-IT']={formatLoadingMessage:function(){return'Caricamento in corso'},formatRecordsPerPage:function(a){return a+' elementi per pagina'},formatShowingRows:function(a,b,c){return'Visualizzazione da '+a+' a '+b+' di '+c+' elementi'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Cerca'},formatNoMatches:function(){return'Nessun elemento trovato'},formatPaginationSwitch:function(){return'Nascondi/Mostra paginazione'},formatRefresh:function(){return'Aggiorna'},formatToggle:function(){return'Attiva/Disattiva'},formatColumns:function(){return'Colonne'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Tutto'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Esporta dati'},formatClearFilters:function(){return'Pulisci filtri'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['it-IT'])})(jQuery)});