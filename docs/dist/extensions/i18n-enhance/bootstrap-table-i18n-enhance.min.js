/*
* bootstrap-table - v1.12.1 - 2018-03-12
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2018 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";var b=a.fn.bootstrapTable.Constructor;b.prototype.changeTitle=function(b){a.each(this.options.columns,function(c,d){a.each(d,function(a,c){c.field&&(c.title=b[c.field])})}),this.initHeader(),this.initBody(),this.initToolbar()},b.prototype.changeLocale=function(a){this.options.locale=a,this.initLocale(),this.initPagination(),this.initBody(),this.initToolbar()},a.fn.bootstrapTable.methods.push("changeTitle"),a.fn.bootstrapTable.methods.push("changeLocale")}(jQuery);