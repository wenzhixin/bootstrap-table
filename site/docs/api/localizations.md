---
layout: docs
title: Localizations
description: The Localizations API of Bootstrap Table.
group: api
toc: true
---

We can import [all locale files](https://github.com/wenzhixin/bootstrap-table/tree/master/src/locale) what you need:

{% highlight html %}
```html
<script src="bootstrap-table-en-US.js"></script>
<script src="bootstrap-table-zh-CN.js"></script>
...
{% endhighlight %}

And then use JavaScript to switch locale:

{% highlight javascript %}
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en-US'])
// $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN'])
// ...
{% endhighlight %}

Or use data attributes to set locale for table:

{% highlight html %}
<table data-toggle="table" data-locale="en-US">
</table>
{% endhighlight %}

Or use JavaScript to set locale for table:

{% highlight javascript %}
$('#table').bootstrapTable({
  locale: 'en-US'
})
{% endhighlight %}

You can use short code for the locale:
{% highlight javascript %}
$('#table').bootstrapTable({
  locale: 'en'
})
{% endhighlight %}

List of all existing translations with their short codes is on [Github](https://github.com/wenzhixin/bootstrap-table/tree/develop/src/locale)

You can custom the format localizations, the calling syntax:

{% highlight javascript %}
$('#table').bootstrapTable({
  formatName: function () {
    return 'Format message'
  }
})
{% endhighlight %}

## formatAllRows

- **Parameter:** `undefined`

- **Default:** `'All'`
## formatClearSearch

- **Parameter:** `undefined`

- **Default:** `'Clear Search'`

## formatColumns

- **Parameter:** `undefined`

- **Default:** `'Columns'`

## formatColumnsToggleAll

- **Parameter:** `undefined`

- **Default:** `'Toggle all'`

## formatDetailPagination

- **Parameter:** `totalRows`

- **Default:** `'Showing %s rows'`

## formatFullscreen

- **Parameter:** `undefined`

- **Default:** `'Fullscreen'`

## formatLoadingMessage

- **Parameter:** `undefined`

- **Default:** `'Loading, please wait…'`

## formatNoMatches

- **Parameter:** `undefined`

- **Default:** `'No matching records found'`

## formatPaginationSwitch

- **Parameter:** `undefined`

- **Default:** `'Hide/Show pagination'`

## formatPaginationSwitchDown

- **Parameter:** `undefined`

- **Default:** `'Show pagination'`

## formatPaginationSwitchUp

- **Parameter:** `undefined`

- **Default:** `'Hide pagination'`

## formatRecordsPerPage

- **Parameter:** `pageNumber`

- **Default:** `'%s records per page'`

## formatRefresh

- **Parameter:** `undefined`

- **Default:** `'Refresh'`

## formatSearch

- **Parameter:** `undefined`

- **Default:** `'Search'`

## formatShowingRows

- **Parameter:** `pageFrom, pageTo, totalRows`

- **Default:** `'Showing %s to %s of %s rows'`

## formatSRPaginationNextText

- **Parameter:** `undefined`

- **Default:** `'next page'`

## formatSRPaginationPageText

- **Parameter:** `page`

- **Default:** `'to page %s`

## formatSRPaginationPreText

- **Parameter:** `undefined`

- **Default:** `'previous page'`

## formatToggle

- **Parameter:** `undefined`

- **Default:** `'Toggle'`

## formatToggleOff

- **Parameter:** `undefined`

- **Default:** `'Hide card view'`

## formatToggleOn

- **Parameter:** `undefined`

- **Default:** `'Show card view'`

