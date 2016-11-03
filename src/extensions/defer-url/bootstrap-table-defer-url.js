/**
 * When using server-side processing, the default mode of operation for
 * bootstrap-table is to simply throw away any data that currently exists in the
 * table and make a request to the server to get the first page of data to
 * display. This is fine for an empty table, but if you already have the first
 * page of data displayed in the plain HTML, it is a waste of resources. As
 * such, you can use data-defer-url instead of data-url to allow you to instruct
 * bootstrap-table to not make that initial request, rather it will use the data
 * already on the page.
 *
 * @author: Ruben Suarez
 * @webSite: http://rubensa.eu.org
 * @version: v1.0.0
 */

(function($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        deferUrl : undefined
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor, _init = BootstrapTable.prototype.init;

    BootstrapTable.prototype.init = function() {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.deferUrl) {
            this.options.url = this.options.deferUrl;
        }
    }
})(jQuery);