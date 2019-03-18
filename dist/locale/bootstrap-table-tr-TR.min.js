/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableTrTR={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['tr-TR']={formatLoadingMessage:function(){return'Y\xFCkleniyor, l\xFCtfen bekleyin'},formatRecordsPerPage:function(a){return'Sayfa ba\u015F\u0131na '+a+' kay\u0131t.'},formatShowingRows:function(a,b,c){return c+' kay\u0131ttan '+a+'-'+b+' aras\u0131 g\xF6steriliyor.'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Ara'},formatNoMatches:function(){return'E\u015Fle\u015Fen kay\u0131t bulunamad\u0131.'},formatPaginationSwitch:function(){return'Hide/Show pagination'},formatRefresh:function(){return'Yenile'},formatToggle:function(){return'De\u011Fi\u015Ftir'},formatColumns:function(){return'S\xFCtunlar'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'T\xFCm Sat\u0131rlar'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['tr-TR'])})(jQuery)});