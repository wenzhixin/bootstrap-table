/**
 * @author: Alec Fenichel
 * @webSite: https://fenichelar.com
 * @version: v1.0.0
 */

(function ($) {

    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        autoRefresh: false,
        autoRefreshInterval: 60,
        autoRefreshSilent: true,
        autoRefreshStatus: true,
        autoRefreshFunction: null
    });
    
    var bootstrapVersion = 3;
    try {
      var rawVersion = $.fn.dropdown.Constructor.VERSION;

      // Only try to parse VERSION if is is defined.
      // It is undefined in older versions of Bootstrap (tested with 3.1.1).
      if (rawVersion !== undefined) {
        bootstrapVersion = parseInt(rawVersion, 10);
      }
    } catch (e) {
      // ignore
    }
    
    switch(bootstrapVersion){
        case 4:
            $.extend($.fn.bootstrapTable.defaults.icons, {
                autoRefresh: 'fa-clock'
            });
            break;
        default:
            $.extend($.fn.bootstrapTable.defaults.icons, {
                autoRefresh: 'glyphicon-time icon-time'
            });
    }

    $.extend($.fn.bootstrapTable.locales, {
        formatAutoRefresh: function() {
            return 'Auto Refresh';
        }
    });

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    var BootstrapTable = $.fn.bootstrapTable.Constructor;
    var _init = BootstrapTable.prototype.init;
    var _initToolbar = BootstrapTable.prototype.initToolbar;
    var sprintf = $.fn.bootstrapTable.utils.sprintf;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.autoRefresh && this.options.autoRefreshStatus) {
            var that = this;
            this.options.autoRefreshFunction = setInterval(function () {
                that.refresh({silent: that.options.autoRefreshSilent});
            }, this.options.autoRefreshInterval*1000);
        }
    };

    BootstrapTable.prototype.initToolbar = function() {
        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.autoRefresh) {
            var $btnGroup = this.$toolbar.find('>.btn-group');
            var $btnAutoRefresh = $btnGroup.find('.auto-refresh');

            if (!$btnAutoRefresh.length) {
                $btnAutoRefresh = $([
                    sprintf('<button class="btn btn-default auto-refresh %s" ', this.options.autoRefreshStatus ? 'enabled' : ''),
                    'type="button" ',
                    sprintf('title="%s">', this.options.formatAutoRefresh()),
                    sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.autoRefresh),
                    '</button>'
                ].join('')).appendTo($btnGroup);

                $btnAutoRefresh.on('click', $.proxy(this.toggleAutoRefresh, this));
            }
        }
    };

    BootstrapTable.prototype.toggleAutoRefresh = function() {
        if (this.options.autoRefresh) {
            if (this.options.autoRefreshStatus) {
                clearInterval(this.options.autoRefreshFunction);
                this.$toolbar.find('>.btn-group').find('.auto-refresh').removeClass('enabled');
            } else {
                var that = this;
                this.options.autoRefreshFunction = setInterval(function () {
                    that.refresh({silent: that.options.autoRefreshSilent});
                }, this.options.autoRefreshInterval*1000);
                this.$toolbar.find('>.btn-group').find('.auto-refresh').addClass('enabled');
            }
            this.options.autoRefreshStatus = !this.options.autoRefreshStatus;
        }
    };

})(jQuery);
