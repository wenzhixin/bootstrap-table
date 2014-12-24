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
});