$(function () {
    $('h1').find('a')
        .attr('target', '_blank')
        .addClass('edit-page-link')
        .text('Edit on GitHub');
});