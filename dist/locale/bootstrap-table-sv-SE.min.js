/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableSvSE={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['sv-SE']={formatLoadingMessage:function(){return'Laddar, v\xE4nligen v\xE4nta'},formatRecordsPerPage:function(a){return a+' rader per sida'},formatShowingRows:function(a,b,c){return'Visa '+a+' till '+b+' av '+c+' rader'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'S\xF6k'},formatNoMatches:function(){return'Inga matchande resultat funna.'},formatPaginationSwitch:function(){return'Hide/Show pagination'},formatRefresh:function(){return'Uppdatera'},formatToggle:function(){return'Skifta'},formatColumns:function(){return'kolumn'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'All'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['sv-SE'])})(jQuery)});