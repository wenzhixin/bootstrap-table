/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableViVN={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['vi-VN']={formatLoadingMessage:function(){return'\u0110ang t\u1EA3i'},formatRecordsPerPage:function(a){return a+' b\u1EA3n ghi m\u1ED7i trang'},formatShowingRows:function(a,b,c){return'Hi\u1EC3n th\u1ECB t\u1EEB trang '+a+' \u0111\u1EBFn '+b+' c\u1EE7a '+c+' b\u1EA3ng ghi'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'T\xECm ki\u1EBFm'},formatNoMatches:function(){return'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u'},formatPaginationSwitch:function(){return'Hide/Show pagination'},formatRefresh:function(){return'Refresh'},formatToggle:function(){return'Toggle'},formatColumns:function(){return'Columns'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'All'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['vi-VN'])})(jQuery)});