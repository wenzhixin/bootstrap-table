/*
* bootstrap-table - v1.12.1 - 2018-03-12
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2018 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";a.extend(a.fn.bootstrapTable.defaults,{deferUrl:void 0});var b=a.fn.bootstrapTable.Constructor,c=b.prototype.init;b.prototype.init=function(){c.apply(this,Array.prototype.slice.apply(arguments)),this.options.deferUrl&&(this.options.url=this.options.deferUrl)}}(jQuery);