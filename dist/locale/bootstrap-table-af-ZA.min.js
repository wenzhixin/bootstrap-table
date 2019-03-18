/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableAfZA={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['af-ZA']={formatLoadingMessage:function(){return'Besig om te laai, wag asseblief'},formatRecordsPerPage:function(a){return a+' rekords per bladsy'},formatShowingRows:function(a,b,c){return'Resultate '+a+' tot '+b+' van '+c+' rye'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Soek'},formatNoMatches:function(){return'Geen rekords gevind nie'},formatPaginationSwitch:function(){return'Wys/verberg bladsy nummering'},formatRefresh:function(){return'Herlaai'},formatToggle:function(){return'Wissel'},formatColumns:function(){return'Kolomme'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'All'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['af-ZA'])})(jQuery)});