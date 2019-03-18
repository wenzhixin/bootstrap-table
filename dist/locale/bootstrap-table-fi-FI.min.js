/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableFiFI={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['fi-FI']={formatLoadingMessage:function(){return'Ladataan, ole hyv\xE4 ja odota'},formatRecordsPerPage:function(a){return a+' rivi\xE4 sivulla'},formatShowingRows:function(a,b,c){return'N\xE4ytet\xE4\xE4n rivit '+a+' - '+b+' / '+c},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Hae'},formatNoMatches:function(){return'Hakuehtoja vastaavia tuloksia ei l\xF6ytynyt'},formatPaginationSwitch:function(){return'N\xE4yt\xE4/Piilota sivutus'},formatRefresh:function(){return'P\xE4ivit\xE4'},formatToggle:function(){return'Valitse'},formatColumns:function(){return'Sarakkeet'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Kaikki'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Vie tiedot'},formatClearFilters:function(){return'Poista suodattimet'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['fi-FI'])})(jQuery)});