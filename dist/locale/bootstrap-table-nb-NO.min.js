/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableNbNO={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['nb-NO']={formatLoadingMessage:function(){return'Oppdaterer, vennligst vent'},formatRecordsPerPage:function(a){return a+' poster pr side'},formatShowingRows:function(a,b,c){return'Viser '+a+' til '+b+' av '+c+' rekker'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'S\xF8k'},formatNoMatches:function(){return'Ingen poster funnet'},formatPaginationSwitch:function(){return'Hide/Show pagination'},formatRefresh:function(){return'Oppdater'},formatToggle:function(){return'Endre'},formatColumns:function(){return'Kolonner'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'All'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['nb-NO'])})(jQuery)});