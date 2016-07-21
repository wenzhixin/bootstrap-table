$(function () {
    $('h1').find('a')
        .attr('target', '_blank')
        .addClass('edit-page-link')
        .text('Edit on GitHub');

    // languages
    $('[data-language]').each(function (i) {
        var $this = $(this),
            language = $this.data('language');

        // default
        if (i === 0) {
            $this.addClass('active');
        }

        $this.find('a').attr('href', '/' + (language === 'en' ? '' : language));
        if (location.href.indexOf(language) !== -1) {
            $this.addClass('active').siblings().removeClass('active');
            $('.language').text($(this).text());
        }
    });

    // examples
    $('#examples').load('/wenzhixin/bootstrap-table/issues/1765 #issue-119870991 .comment-body', function () {
        var $this = $(this);
        $this.find('h1').each(function () {
            $(this).after('<hr>');
        });
        $this.find('li').each(function () {
            var $href = $(this).find('a[href^="http://jsfiddle.net"]');
            var href = $href.attr('href');

            href = href.replace(/\/$/, '');
            $(this).append([
                '<div class="examples-parent">',
                '<iframe width="100%" height="300" data-src="',
                href,
                '/embedded/result,html,js,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>',
                '<button class="examples-button btn btn-primary btn-lg">',
                '<i class="glyphicon glyphicon-fire"></i>',
                ' Start Example</button>',
                '</div>',
                '<hr>'
            ].join(''));
        });
        $('[data-container="#sidenav"]').sideNav();
    });
    $(document).on('click', 'button.examples-button', function () {
        var $iframe = $(this).prev();
        $iframe.attr('src', $iframe.data('src'));
        $(this).remove();
    });

    if (location.href.indexOf('documentation') > -1) {
        var query = {
            t: '',
            c: '',
            e: '',
            m: '',
            l: ''
        };
        $.each(location.search.substring(1).split('&'), function (i, t) {
            var arr = t.split('=');
            if (query.hasOwnProperty(arr[0])) {
                query[arr[0]] = arr[1];
            }
        });
        $.each(query, function (id, value) {
            $('#' + id).bootstrapTable({
                searchText: value
            });
        });
    }
});

function methodFormatter(value) {
    if (!value) {
        return '';
    }
    var href = 'http://issues.wenzhixin.net.cn/bootstrap-table/#methods/' + value + '.html';
    return '<a target="_blank" href="' + href + '"><i class="glyphicon glyphicon-screenshot"></i></a>';
}
