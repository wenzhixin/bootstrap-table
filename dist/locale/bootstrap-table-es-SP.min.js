/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableEsSP={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['es-SP']={formatLoadingMessage:function(){return'Cargando, por favor espera'},formatRecordsPerPage:function(a){return a+' registros por p&#225;gina.'},formatShowingRows:function(a,b,c){return a+' - '+b+' de '+c+' registros.'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Buscar'},formatNoMatches:function(){return'No se han encontrado registros.'},formatPaginationSwitch:function(){return'Hide/Show pagination'},formatRefresh:function(){return'Actualizar'},formatToggle:function(){return'Alternar'},formatColumns:function(){return'Columnas'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Todo'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['es-SP'])})(jQuery)});