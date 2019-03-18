/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableEuEU={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['eu-EU']={formatLoadingMessage:function(){return'Itxaron mesedez'},formatRecordsPerPage:function(a){return a+' emaitza orriko.'},formatShowingRows:function(a,b,c){return c+' erregistroetatik '+a+'etik '+b+'erakoak erakusten.'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Bilatu'},formatNoMatches:function(){return'Ez da emaitzarik aurkitu'},formatPaginationSwitch:function(){return'Ezkutatu/Erakutsi orrikatzea'},formatRefresh:function(){return'Eguneratu'},formatToggle:function(){return'Ezkutatu/Erakutsi'},formatColumns:function(){return'Zutabeak'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Guztiak'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['eu-EU'])})(jQuery)});