/**
 * plugin for bootstrap-table scroll2loading
 * @author Chinarma <chinarma@qq.com>
 * just use infiniteScrolling: true to enable scroll to loading next page.
 */
(function($) {
    'use strict';
    var scrollLoad = 0;
    var touchstartY = 0;
    $.extend($.fn.bootstrapTable.defaults, {
        infiniteScrolling: false
    });
    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initBody = BootstrapTable.prototype.initBody,
        _initPagination = BootstrapTable.prototype.initPagination,
        _load = BootstrapTable.prototype.load;
    BootstrapTable.prototype.load = function(data) {
        if (scrollLoad) {
            if (this.options.pagination && this.options.sidePagination === 'server') {
                this.options.totalRows = data[this.options.totalField]
                data = data[this.options.dataField]
            } else if (!Array.isArray(data)) {
                data = data.data
            }
            this.append(data);
            return;
        };
        _load.apply(this, Array.prototype.slice.apply(arguments));
    }
    BootstrapTable.prototype.initPagination = function() {
        if (this.options.infiniteScrolling && this.options.url !== '' && this.options.sidePagination == 'server') {
            var html = [];
            this.pageFrom = 1;
            this.totalPages = ~~((this.options.totalRows - 1) / this.options.pageSize) + 1;
            this.options.totalPages = this.totalPages;
            this.pageTo = this.options.pageNumber * this.options.pageSize;
            if (this.pageTo > this.options.totalRows) {
                this.pageTo = this.options.totalRows;
            }
            html.push(sprintf('<div class="%s-%s pagination-detail">', 'pull', this.options.paginationDetailHAlign), this.options.formatShowingRows(this.pageFrom, this.pageTo, this.options.totalRows), '</span></div>');
            html.push('<div class="pull-right">*滚动加载</div>');


            this.$pagination.html(html.join(''));
            return;
        }
        _initPagination.apply(this, Array.prototype.slice.apply(arguments));
    }
    BootstrapTable.prototype.initBody = function() {
        scrollLoad = 0;
        _initBody.apply(this, Array.prototype.slice.apply(arguments));
        var that = this;
        if (!this.options.infiniteScrolling || this.options.url == '') {
            return;
        }
        $(that.$el).find(".fixed-table-scrollLoading").remove('');
        if (typeof(this.options.totalPages) == 'undefined' || this.options.pageNumber == this.options.totalPages) {
            console.log(this.options);
            console.log('xxxx');
            this.$tableBody.off('wheel');
            $(this).off('touchend');
            $(this).off('touchstart');
            return;
        }
        this.$tableBody.off('touchstart').on('touchstart', function(e) {
            touchstartY = e.originalEvent.changedTouches[0].pageY;
        });
        this.$tableBody.off('wheel touchend').on('wheel touchend', function(e) {
            if (scrollLoad) {
                if (scrollLoad > 20) {
                    $(this).off('wheel');
                    $(this).off('touchend');
                    $(this).off('touchstart');
                    that.options.pageNumber++;
                    that.initServer(true);
                } else {
                    scrollLoad++;
                }
            } else {
                if ($(this).scrollTop() >= $(this)[0].scrollHeight - $(this).innerHeight() && // scroll bottom 
                    ((e.type == 'wheel' && e.originalEvent.deltaY > 0) || (e.type == 'touchend' && touchstartY - e.originalEvent.changedTouches[0].pageY > 50))) {
                    that.$body.append('<tr class="fixed-table-scrollLoading"><td colspan="100" class="text-center">滚动加载更多.....</td></tr>');
                    scrollLoad++;
                    if (e.type == 'touchend') {
                        scrollLoad += 20
                    };
                }
            }
        });
    };
})(jQuery);