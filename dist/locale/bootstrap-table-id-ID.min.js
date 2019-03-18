/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableIdID={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['id-ID']={formatLoadingMessage:function(){return'Memuat, mohon tunggu'},formatRecordsPerPage:function(a){return a+' baris per halaman'},formatShowingRows:function(a,b,c){return'Menampilkan '+a+' sampai '+b+' dari '+c+' baris'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Pencarian'},formatNoMatches:function(){return'Tidak ditemukan data yang cocok'},formatPaginationSwitch:function(){return'Sembunyikan/Tampilkan halaman'},formatRefresh:function(){return'Muat ulang'},formatToggle:function(){return'Beralih'},formatColumns:function(){return'kolom'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Semua'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Ekspor data'},formatClearFilters:function(){return'Bersihkan filter'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['id-ID'])})(jQuery)});