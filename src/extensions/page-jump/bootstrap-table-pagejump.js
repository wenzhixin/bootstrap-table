/**
 * @author zhaoshuxue <zhaoshuxue@163.com>
 * extensions: https://github.com/zhaoshuxue/bootstrap-table/src/extensions/page-jump
 */

(function ($) {
    'use strict';
    $.extend($.fn.bootstrapTable.defaults, {
        // 默认不显示
        paginationShowPageGo: false
    });

    $.extend($.fn.bootstrapTable.locales, {
        pageGo: function () {
            return 'Page Jump';
        }
    });
    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initPagination = BootstrapTable.prototype.initPagination;

    BootstrapTable.prototype.initPagination = function() {
        _initPagination.apply(this, Array.prototype.slice.apply(arguments));
        if(this.options.paginationShowPageGo){
            var html = [];

            html.push(
                '<ul class="pagination-jump">',
                '<li class=""><span>' + this.options.pageGo() + ':</span></li>',
                '<li class=""><input type="text" class="page-input" value="' + this.options.pageNumber + '"   /></li>',
                '<li class="page-go"><a class="jump-go" href="">GO</a></li>',
                '</ul>');
            this.$pagination.find('ul.pagination').after(html.join(''));

            this.$pagination.find('.page-go').off('click').on('click', $.proxy(this.onPageGo, this));
            this.$pagination.find('.page-input').off('keyup').on('keyup', function(){
                this.value = this.value.length == 1 ? this.value.replace(/[^1-9]/g,'') : this.value.replace(/\D/g,'');
            });
        }
    };

    BootstrapTable.prototype.onPageGo = function (event) {
        // var $this = $(event.currentTarget);
        var $toPage=this.$pagination.find('.page-input');

        if (this.options.pageNumber === +$toPage.val()) {
            return false;
        }
        this.selectPage(+$toPage.val());
        // this.options.pageNumber = +$toPage.val();

        // this.updatePagination(event);
        // $this.prev().find('input').val(this.options.pageNumber);
        return false;
    };
})(jQuery);
