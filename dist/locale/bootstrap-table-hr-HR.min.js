/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableHrHR={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['hr-HR']={formatLoadingMessage:function(){return'Molimo pri\u010Dekajte'},formatRecordsPerPage:function(a){return a+' broj zapisa po stranici'},formatShowingRows:function(a,b,c){return'Prikazujem '+a+'. - '+b+'. od ukupnog broja zapisa '+c},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Pretra\u017Ei'},formatNoMatches:function(){return'Nije prona\u0111en niti jedan zapis'},formatPaginationSwitch:function(){return'Prika\u017Ei/sakrij stranice'},formatRefresh:function(){return'Osvje\u017Ei'},formatToggle:function(){return'Promijeni prikaz'},formatColumns:function(){return'Kolone'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Sve'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['hr-HR'])})(jQuery)});