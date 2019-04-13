/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableNlNL={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['nl-NL']={formatLoadingMessage:function(){return'Laden, even geduld'},formatRecordsPerPage:function(a){return a+' records per pagina'},formatShowingRows:function(a,b,c){return'Toon '+a+' tot '+b+' van '+c+' record'+(1<c?'s':'')},formatDetailPagination:function(a){return'Toon '+a+' record'+(1<a?'s':'')},formatSearch:function(){return'Zoeken'},formatNoMatches:function(){return'Geen resultaten gevonden'},formatPaginationSwitch:function(){return'Verberg/Toon paginatie'},formatRefresh:function(){return'Vernieuwen'},formatToggle:function(){return'Omschakelen'},formatColumns:function(){return'Kolommen'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Alle'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Exporteer data'},formatClearFilters:function(){return'Verwijder filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['nl-NL'])})(jQuery)});