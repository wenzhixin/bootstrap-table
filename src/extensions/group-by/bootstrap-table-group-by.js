/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

!function ($) {

    'use strict';

   var groupBy = function ( array , f ) {
        var groups = {};
        array.forEach( function( o )
        {
            var group = JSON.stringify( f(o) );
            groups[group] = groups[group] || [];
            groups[group].push( o );
        });
        return Object.keys(groups).map( function( group )
        {
            return groups[group];
        });
    };

    $.extend($.fn.bootstrapTable.defaults, {
        groupBy: false,
        groupByName: ''
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initData = BootstrapTable.prototype.initData;

    BootstrapTable.prototype.initData = function () {
        _initData.apply(this, Array.prototype.slice.apply(arguments));

        /*if ((!this.options.groupBy) || (this.groupByName === '')) {
            return;
        }*/

        var that = this;
        //**TESTING**
        this.options.groupByName = 'name';
        console.log(this.options.data);
        var result = groupBy(this.options.data, function(item) {
            return [item[that.options.groupByName]];
        });
        console.log(result);
        //**TESTING**
    };
}(jQuery);