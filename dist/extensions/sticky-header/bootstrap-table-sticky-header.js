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
        global.bootstrapTableStickyHeader = mod.exports;
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
                                                                     * @author vincent loh <vincent.ml@gmail.com>
                                                                     * @version: v1.1.0
                                                                     * https://github.com/vinzloh/bootstrap-table/
                                                                     * Sticky header for bootstrap-table
                                                                     * @update J Manuel Corona <jmcg92@gmail.com>
                                                                     */

    _jquery2.default.extend(_jquery2.default.fn.bootstrapTable.defaults, {
        stickyHeader: false
    });

    var bootstrapVersion = 3;
    try {
        bootstrapVersion = parseInt(_jquery2.default.fn.dropdown.Constructor.VERSION, 10);
    } catch (e) {}
    var hidden_class = bootstrapVersion > 3 ? 'd-none' : 'hidden';

    var BootstrapTable = _jquery2.default.fn.bootstrapTable.Constructor,
        _initHeader = BootstrapTable.prototype.initHeader;

    BootstrapTable.prototype.initHeader = function () {
        var that = this;
        _initHeader.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.stickyHeader) {
            return;
        }

        var table = this.$tableBody.find('table'),
            table_id = table.attr('id'),
            header_id = table.attr('id') + '-sticky-header',
            sticky_header_container_id = header_id + '-sticky-header-container',
            anchor_begin_id = header_id + '_sticky_anchor_begin',
            anchor_end_id = header_id + '_sticky_anchor_end';
        // add begin and end anchors to track table position

        table.before(sprintf('<div id="%s" class="%s"></div>', sticky_header_container_id, hidden_class));
        table.before(sprintf('<div id="%s"></div>', anchor_begin_id));
        table.after(sprintf('<div id="%s"></div>', anchor_end_id));

        table.find('thead').attr('id', header_id);

        // clone header just once, to be used as sticky header
        // deep clone header. using source header affects tbody>td width
        this.$stickyHeader = (0, _jquery2.default)((0, _jquery2.default)('#' + header_id).clone(true, true));
        // avoid id conflict
        this.$stickyHeader.removeAttr('id');

        // render sticky on window scroll or resize
        (0, _jquery2.default)(window).on('resize.' + table_id, table, render_sticky_header);
        (0, _jquery2.default)(window).on('scroll.' + table_id, table, render_sticky_header);
        // render sticky when table scroll left-right
        table.closest('.fixed-table-container').find('.fixed-table-body').on('scroll.' + table_id, table, match_position_x);

        this.$el.on('all.bs.table', function (e) {
            that.$stickyHeader = (0, _jquery2.default)((0, _jquery2.default)('#' + header_id).clone(true, true));
            that.$stickyHeader.removeAttr('id');
        });

        function render_sticky_header(event) {
            var table = event.data;
            var table_header_id = table.find('thead').attr('id');
            // console.log('render_sticky_header for > '+table_header_id);
            if (table.length < 1 || (0, _jquery2.default)('#' + table_id).length < 1) {
                // turn off window listeners
                (0, _jquery2.default)(window).off('resize.' + table_id);
                (0, _jquery2.default)(window).off('scroll.' + table_id);
                table.closest('.fixed-table-container').find('.fixed-table-body').off('scroll.' + table_id);
                return;
            }
            // get header height
            var header_height = '0';
            if (that.options.stickyHeaderOffsetY) header_height = that.options.stickyHeaderOffsetY.replace('px', '');
            // window scroll top
            var t = (0, _jquery2.default)(window).scrollTop();
            // top anchor scroll position, minus header height
            var e = (0, _jquery2.default)("#" + anchor_begin_id).offset().top - header_height;
            // bottom anchor scroll position, minus header height, minus sticky height
            var e_end = (0, _jquery2.default)("#" + anchor_end_id).offset().top - header_height - (0, _jquery2.default)('#' + table_header_id).css('height').replace('px', '');
            // show sticky when top anchor touches header, and when bottom anchor not exceeded
            if (t > e && t <= e_end) {
                // ensure clone and source column widths are the same
                _jquery2.default.each(that.$stickyHeader.find('tr').eq(0).find('th'), function (index, item) {
                    (0, _jquery2.default)(item).css('min-width', (0, _jquery2.default)('#' + table_header_id + ' tr').eq(0).find('th').eq(index).css('width'));
                });
                // match bootstrap table style
                (0, _jquery2.default)("#" + sticky_header_container_id).removeClass(hidden_class).addClass("fix-sticky fixed-table-container");
                // stick it in position
                (0, _jquery2.default)("#" + sticky_header_container_id).css('top', header_height + 'px');
                // create scrollable container for header
                var scrollable_div = (0, _jquery2.default)('<div style="position:absolute;width:100%;overflow-x:hidden;" />');
                // append cloned header to dom
                (0, _jquery2.default)("#" + sticky_header_container_id).html(scrollable_div.append(that.$stickyHeader));
                // match clone and source header positions when left-right scroll
                match_position_x(event);
            } else {
                // hide sticky
                (0, _jquery2.default)("#" + sticky_header_container_id).removeClass("fix-sticky").addClass(hidden_class);
            }
        }
        function match_position_x(event) {
            var table = event.data;
            var table_header_id = table.find('thead').attr('id');
            // match clone and source header positions when left-right scroll
            (0, _jquery2.default)("#" + sticky_header_container_id).css('width', +table.closest('.fixed-table-body').css('width').replace('px', '') + 1);
            (0, _jquery2.default)("#" + sticky_header_container_id + " thead").parent().scrollLeft(Math.abs((0, _jquery2.default)('#' + table_header_id).position().left));
        }
    };
});