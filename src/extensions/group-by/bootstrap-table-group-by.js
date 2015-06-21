/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

!function ($) {

    'use strict';

    var setObjectKeys = function () {
        // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
       Object.keys = function(o) {
           if (o !== Object(o)) {
               throw new TypeError('Object.keys called on a non-object');
           }
           var k = [],
               p;
           for (p in o) {
               if (Object.prototype.hasOwnProperty.call(o, p)) {
                   k.push(p);
               }
           }
           return k;
       }
    };

   var groupBy = function (array , f) {
       var groups = {};
       array.forEach( function(o) {
           var group = JSON.stringify(f(o));
           groups[group] = groups[group] || [];
           groups[group].push(o);
       });
       return Object.keys(groups).map(function (group) {
            return groups[group];
       });
    };

    $.extend($.fn.bootstrapTable.defaults, {
        groupBy: false,
        groupByField: ''
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _init = BootstrapTable.prototype.init,
        _initData = BootstrapTable.prototype.initData;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        /*if (!this.options.groupBy) {
            return;
        }*/

        // Compatibility: IE < 9 and old browsers
        if (!Object.keys) {
            setObjectKeys();
        }
    };

    BootstrapTable.prototype.initData = function () {
        _initData.apply(this, Array.prototype.slice.apply(arguments));

        /*if ((!this.options.groupBy) || (this.groupByName === '')) {
            return;
        }*/

        var that = this;
        //**TESTING**
        this.options.groupByField = 'name';
        var result = groupBy(this.options.data, function(item) {
            return [item[that.options.groupByField]];
        });

        for (var i = 0; i < result.length; i++) {
            result[i].unshift({name: 'Testing'});
        }

        console.log(result);
        //**TESTING**
    };
}(jQuery);