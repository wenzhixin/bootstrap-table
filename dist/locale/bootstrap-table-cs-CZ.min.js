/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableCsCZ={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['cs-CZ']={formatLoadingMessage:function(){return'\u010Cekejte, pros\xEDm'},formatRecordsPerPage:function(a){return a+' polo\u017Eek na str\xE1nku'},formatShowingRows:function(a,b,c){return'Zobrazena '+a+'. - '+b+'. polo\u017Eka z celkov\xFDch '+c},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Vyhled\xE1v\xE1n\xED'},formatNoMatches:function(){return'Nenalezena \u017E\xE1dn\xE1 vyhovuj\xEDc\xED polo\u017Eka'},formatPaginationSwitch:function(){return'Skr\xFDt/Zobrazit str\xE1nkov\xE1n\xED'},formatRefresh:function(){return'Aktualizovat'},formatToggle:function(){return'P\u0159epni'},formatColumns:function(){return'Sloupce'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'V\u0161e'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['cs-CZ'])})(jQuery)});