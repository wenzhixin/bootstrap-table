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
        global.bootstrapTableMultiToggle = mod.exports;
    }
})(this, function (_jquery) {
    'use strict';

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var sprintf = _jquery2.default.fn.bootstrapTable.utils.sprintf; /**
                                                                     * @author Homer Glascock <HopGlascock@gmail.com>
                                                                     * @version: v1.0.0
                                                                     */


    var reInit = function reInit(self) {
        self.initHeader();
        self.initSearch();
        self.initPagination();
        self.initBody();
    };

    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, {
        showToggleBtn: false,
        multiToggleDefaults: [] //column names go here
    });

    _jquery2.default.fn.bootstrapTable.methods.push('hideAllColumns', 'showAllColumns');

    var BootstrapTable = _jquery2.default.fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initToolbar = function () {

        _initToolbar.apply(this, Array.prototype.slice.apply(arguments));

        var that = this,
            $btnGroup = this.$toolbar.find('>.btn-group');

        if (typeof this.options.multiToggleDefaults === 'string') {
            this.options.multiToggleDefaults = JSON.parse(this.options.multiToggleDefaults);
        }

        if (this.options.showToggleBtn && this.options.showColumns) {
            var showbtn = "<button class='btn btn-default hidden' id='showAllBtn'><span class='glyphicon glyphicon-resize-full icon-zoom-in'></span></button>",
                hidebtn = "<button class='btn btn-default' id='hideAllBtn'><span class='glyphicon glyphicon-resize-small icon-zoom-out'></span></button>";

            $btnGroup.append(showbtn + hidebtn);

            $btnGroup.find('#showAllBtn').click(function () {
                that.showAllColumns();
                $btnGroup.find('#hideAllBtn').toggleClass('hidden');
                $btnGroup.find('#showAllBtn').toggleClass('hidden');
            });
            $btnGroup.find('#hideAllBtn').click(function () {
                that.hideAllColumns();
                $btnGroup.find('#hideAllBtn').toggleClass('hidden');
                $btnGroup.find('#showAllBtn').toggleClass('hidden');
            });
        }
    };

    BootstrapTable.prototype.hideAllColumns = function () {
        var that = this,
            defaults = that.options.multiToggleDefaults;

        _jquery2.default.each(this.columns, function (index, column) {
            //if its one of the defaults dont touch it
            if (defaults.indexOf(column.field) == -1 && column.switchable) {
                column.visible = false;
                var $items = that.$toolbar.find('.keep-open input').prop('disabled', false);
                $items.filter(sprintf('[value="%s"]', index)).prop('checked', false);
            }
        });

        reInit(that);
    };

    BootstrapTable.prototype.showAllColumns = function () {
        var that = this;
        _jquery2.default.each(this.columns, function (index, column) {
            if (column.switchable) {
                column.visible = true;
            }

            var $items = that.$toolbar.find('.keep-open input').prop('disabled', false);
            $items.filter(sprintf('[value="%s"]', index)).prop('checked', true);
        });

        reInit(that);

        that.toggleColumn(0, that.columns[0].visible, false);
    };
});