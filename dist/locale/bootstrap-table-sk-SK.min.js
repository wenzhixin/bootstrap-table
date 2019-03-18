/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableSkSK={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['sk-SK']={formatLoadingMessage:function(){return'Pros\xEDm \u010Dakajte'},formatRecordsPerPage:function(a){return a+' z\xE1znamov na stranu'},formatShowingRows:function(a,b,c){return'Zobrazen\xE1 '+a+'. - '+b+'. polo\u017Eka z celkov\xFDch '+c},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Vyh\u013Ead\xE1vanie'},formatNoMatches:function(){return'Nen\xE1jden\xE1 \u017Eiadna vyhovuj\xFAca polo\u017Eka'},formatPaginationSwitch:function(){return'Skry/Zobraz str\xE1nkovanie'},formatRefresh:function(){return'Obnovi\u0165'},formatToggle:function(){return'Prepni'},formatColumns:function(){return'St\u013Apce'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'V\u0161etky'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Exportuj d\xE1ta'},formatClearFilters:function(){return'Odstr\xE1\u0148 filtre'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['sk-SK'])})(jQuery)});