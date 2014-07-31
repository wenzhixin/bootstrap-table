$(function() {
    'use strict';

    function main() {
        $(window).scroll(showGotoTop);
        $(window).resize(showGotoTop);
        $('.goto-top').click(function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            return false;
        });
        initScrollspy();
        showGotoTop();
        showBaiduShare();
    }

    function initScrollspy() {
        var $window = $(window);
        var $body = $(document.body);

        var navHeight = $('.navbar').outerHeight(true) + 10;

        $body.scrollspy({
            target: '.bs-sidebar',
            offset: navHeight
        });
        $body.scrollspy('refresh');

        // affix
        setTimeout(function () {
            var $sideBar = $('.bs-sidebar');

            $sideBar.affix({
                offset: {
                    top: function () {
                        var offsetTop = $sideBar.offset().top;
                        var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10);
                        var navOuterHeight = $('.bs-docs-nav').height();

                        return (this.top = offsetTop - navOuterHeight - sideBarMargin);
                    },
                    bottom: function () {
                        return (this.bottom = $('.bs-footer').outerHeight(true));
                    }
                }
            });
        }, 100);
    }

    function showGotoTop() {
        var $gotoTop = $('.goto-top'),
            $bdshare = $('#bdshare');

        if ($(document).scrollTop() > 0) {
            $gotoTop.fadeIn('slow');
            $bdshare.fadeOut('slow');
        } else {
            $gotoTop.fadeOut('slow');
            $bdshare.fadeIn('slow');
        }
    }

    function showBaiduShare() {
        $('#bdshell_js').attr('src', 'http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000');
    }

    main();
});