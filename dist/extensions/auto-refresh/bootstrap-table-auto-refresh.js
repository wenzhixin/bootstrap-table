(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('jquery'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.jquery);
        global.bootstrapTableAutoRefresh = mod.exports;
    }
})(this, function (_jquery) {
    'use strict';

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, {
        autoRefresh: false,
        autoRefreshInterval: 60,
        autoRefreshSilent: true,
        autoRefreshStatus: true,
        autoRefreshFunction: null
    }); /**
         * @author: Alec Fenichel
         * @webSite: https://fenichelar.com
         * @version: v1.0.0
         */


    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults.icons, {
        autoRefresh: 'glyphicon-time icon-time'
    });

    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.locales, {
        formatAutoRefresh: function formatAutoRefresh() {
            return 'Auto Refresh';
        }
    });

    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, _jquery2.default.fn.bootstrapTable.locales);

    var BootstrapTable = _jquery2.default.fn.bootstrapTable.Constructor;
    var _init = BootstrapTable.prototype.init;
    var _initToolbar = BootstrapTable.prototype.initToolbar;
    var sprintf = _jquery2.default.fn.bootstrapTable.utils.sprintf;

    BootstrapTable.prototype.init = function () {
        _init.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.autoRefresh && this.options.autoRefreshStatus) {
            var that = this;
            this.options.autoRefreshFunction = setInterval(function () {
                that.refresh({ silent: that.options.autoRefreshSilent });
            }, this.options.autoRefreshInterval * 1000);
        }
    };

    BootstrapTable.prototype.initToolbar = function () {
        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.autoRefresh) {
            var $btnGroup = this.$toolbar.find('>.btn-group');
            var $btnAutoRefresh = $btnGroup.find('.auto-refresh');

            if (!$btnAutoRefresh.length) {
                $btnAutoRefresh = (0, _jquery2.default)([sprintf('<button class="btn btn-default auto-refresh %s" ', this.options.autoRefreshStatus ? 'enabled' : ''), 'type="button" ', sprintf('title="%s">', this.options.formatAutoRefresh()), sprintf('<i class="%s %s"></i>', this.options.iconsPrefix, this.options.icons.autoRefresh), '</button>'].join('')).appendTo($btnGroup);

                $btnAutoRefresh.on('click', _jquery2.default.proxy(this.toggleAutoRefresh, this));
            }
        }
    };

    BootstrapTable.prototype.toggleAutoRefresh = function () {
        if (this.options.autoRefresh) {
            if (this.options.autoRefreshStatus) {
                clearInterval(this.options.autoRefreshFunction);
                this.$toolbar.find('>.btn-group').find('.auto-refresh').removeClass('enabled');
            } else {
                var that = this;
                this.options.autoRefreshFunction = setInterval(function () {
                    that.refresh({ silent: that.options.autoRefreshSilent });
                }, this.options.autoRefreshInterval * 1000);
                this.$toolbar.find('>.btn-group').find('.auto-refresh').addClass('enabled');
            }
            this.options.autoRefreshStatus = !this.options.autoRefreshStatus;
        }
    };
});