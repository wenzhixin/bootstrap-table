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
    $('iframe[data-src]').each(function () {
        $(this).wrap('<div class="examples-parent"></div>').parent()
            .append('<button class="examples-button btn btn-primary btn-lg"><i class="glyphicon glyphicon-fire"></i> Start Example</button>');
    });
    $(document).on('click', 'button.examples-button', function () {
        var $iframe = $(this).prev();
        $iframe.attr('src', $iframe.data('src'));
        $(this).remove();
    });
});