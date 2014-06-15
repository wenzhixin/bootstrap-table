$(function() {
    $('.bs-example').each(function() {
        var source = $('<div></div>').text($(this).html()).html(),
            sources = source.split('\n'),
            codes = [],
            spaces = 0;

        $.each(sources, function(i, text) {
            if (!$.trim(text)) {
                return;
            }
            if (!spaces) {
                spaces = text.match(/(^\s+)/)[1].length;
            }
            codes.push(text.substring(spaces));
        });
        $(this).next().find('code').html(codes.join('\n'));
    });
});