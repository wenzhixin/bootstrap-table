/*
* bootstrap-table - v1.8.0 - 2015-05-22
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2015 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";var b=function(a,b){a.options.flat&&(a.options.data=g.flatHelper(b)),"server"===a.options.sidePagination&&(a.data=a.options.data)};a.extend(a.fn.bootstrapTable.defaults,{flat:!1});var c=a.fn.bootstrapTable.Constructor,d=c.prototype.initData,e=c.prototype.init,f=c.prototype.initTable;c.prototype.initData=function(a){d.apply(this,Array.prototype.slice.apply(arguments)),b(this,void 0===a?this.options.data:a)},c.prototype.init=function(){b(this,this.options.data),e.apply(this,Array.prototype.slice.apply(arguments))},c.prototype.initTable=function(){b(this,this.options.data),f.apply(this,Array.prototype.slice.apply(arguments))};var g={flat:function(b){function c(b,e){if(Object(b)!==b)d[e]=b;else if(a.isArray(b))for(var f=0,g=b.length;g>f;f++)c(b[f],e?e+"."+f:""+f),0==g&&(d[e]=[]);else{var h=!0;for(var i in b)h=!1,c(b[i],e?e+"."+i:i);h&&(d[e]={})}}var d={};return c(b,""),d},flatHelper:function(b){var c=[],d=[];return a.isArray(b)||(d.push(b),b=d),a.each(b,function(a,b){c.push(g.flat(b))}),c}}}(jQuery);