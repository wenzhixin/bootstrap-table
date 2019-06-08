/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTablePlPL={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['pl-PL']={formatLoadingMessage:function(){return'\u0141adowanie, prosz\u0119 czeka\u0107'},formatRecordsPerPage:function(a){return a+' rekord\xF3w na stron\u0119'},formatShowingRows:function(a,b,c){return'Wy\u015Bwietlanie rekord\xF3w od '+a+' do '+b+' z '+c},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Szukaj'},formatNoMatches:function(){return'Niestety, nic nie znaleziono'},formatPaginationSwitch:function(){return'Hide/Show pagination'},formatRefresh:function(){return'Od\u015Bwie\u017C'},formatToggle:function(){return'Prze\u0142\u0105cz'},formatColumns:function(){return'Kolumny'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'All'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['pl-PL'])})(jQuery)});