/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableEsES={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['es-ES']={formatLoadingMessage:function(){return'Por favor espere'},formatRecordsPerPage:function(a){return a+' resultados por p\xE1gina'},formatShowingRows:function(a,b,c){return'Mostrando desde '+a+' hasta '+b+' - En total '+c+' resultados'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Buscar'},formatNoMatches:function(){return'No se encontraron resultados'},formatPaginationSwitch:function(){return'Ocultar/Mostrar paginaci\xF3n'},formatRefresh:function(){return'Refrescar'},formatToggle:function(){return'Ocultar/Mostrar'},formatColumns:function(){return'Columnas'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'Todos'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Exportar los datos'},formatClearFilters:function(){return'Borrar los filtros'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'B\xFAsqueda avanzada'},formatAdvancedCloseButton:function(){return'Cerrar'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['es-ES'])})(jQuery)});