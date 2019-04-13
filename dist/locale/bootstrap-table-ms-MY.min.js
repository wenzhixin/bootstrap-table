/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableMsMY={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['ms-MY']={formatLoadingMessage:function(){return'Permintaan sedang dimuatkan. Sila tunggu sebentar'},formatRecordsPerPage:function(a){return a+' rekod setiap muka surat'},formatShowingRows:function(a,b,c){return'Sedang memaparkan rekod '+a+' hingga '+b+' daripada jumlah '+c+' rekod'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Cari'},formatNoMatches:function(){return'Tiada rekod yang menyamai permintaan'},formatPaginationSwitch:function(){return'Tunjuk/sembunyi muka surat'},formatRefresh:function(){return'Muatsemula'},formatToggle:function(){return'Tukar'},formatColumns:function(){return'Lajur'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Semua'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['ms-MY'])})(jQuery)});