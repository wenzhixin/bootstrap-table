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
        showGotoTop();
        showBaiduShare();
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