/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTablePtBR={exports:{}}.exports}})(this,function(){'use strict';(function(a){a.fn.bootstrapTable.locales['pt-BR']={formatLoadingMessage:function(){return'Carregando, aguarde'},formatRecordsPerPage:function(a){return a+' registros por p\xE1gina'},formatShowingRows:function(a,b,c){return'Exibindo '+a+' at\xE9 '+b+' de '+c+' linhas'},formatDetailPagination:function(a){return'Showing '+a+' rows'},formatSearch:function(){return'Pesquisar'},formatNoMatches:function(){return'Nenhum registro encontrado'},formatPaginationSwitch:function(){return'Ocultar/Exibir pagina\xE7\xE3o'},formatRefresh:function(){return'Recarregar'},formatToggle:function(){return'Alternar'},formatColumns:function(){return'Colunas'},formatFullscreen:function(){return'Fullscreen'},formatAllRows:function(){return'All'},formatAutoRefresh:function(){return'Auto Refresh'},formatExport:function(){return'Export data'},formatClearFilters:function(){return'Clear filters'},formatJumpto:function(){return'GO'},formatAdvancedSearch:function(){return'Advanced search'},formatAdvancedCloseButton:function(){return'Close'}},a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales['pt-BR'])})(jQuery)});