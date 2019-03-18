/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableEtEE={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['et-EE']={formatLoadingMessage:function(){return'P\xE4ring k\xE4ib, palun oota'},formatRecordsPerPage:function(a){return a+' rida lehe kohta'},formatShowingRows:function(a,b,c){return'N\xE4itan tulemusi '+a+' kuni '+b+' - kokku '+c+' tulemust'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Otsi'},formatNoMatches:function(){return'P\xE4ringu tingimustele ei vastanud \xFChtegi tulemust'},formatPaginationSwitch:function(){return'N\xE4ita/Peida lehtedeks jagamine'},formatRefresh:function(){return'V\xE4rskenda'},formatToggle:function(){return'L\xFClita'},formatColumns:function(){return'Veerud'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'K\xF5ik'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['et-EE'])})(jQuery)});