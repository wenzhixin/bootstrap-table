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

You can custom the format localizations, the calling syntax:

{% highlight javascript %}
$('#table').bootstrapTable({
  formatName: function () {
    return 'Format message'
  }
})
{% endhighlight %}

## formatLoadingMessage

- **Parameter:** `undefined`

- **Default:** `'Loading, please wait…'`

## formatRecordsPerPage

- **Parameter:** `pageNumber`

- **Default:** `'%s records per page'`

## formatShowingRows

- **Parameter:** `pageFrom, pageTo, totalRows`

- **Default:** `'Showing %s to %s of %s rows'`

## formatSRPaginationPreText

- **Parameter:** `undefined`

- **Default:** `'previous page'`

## formatSRPaginationPageText

- **Parameter:** `page`

- **Default:** `'to page %s`

## formatSRPaginationNextText

- **Parameter:** `undefined`

- **Default:** `'next page'`

## formatDetailPagination

- **Parameter:** `totalRows`

- **Default:** `'Showing %s rows'`

## formatSearch

- **Parameter:** `undefined`

- **Default:** `'Search'`

## formatClearSearch

- **Parameter:** `undefined`

- **Default:** `'Clear Search'`

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

## formatRefresh

- **Parameter:** `undefined`

- **Default:** `'Refresh'`

## formatToggle

- **Parameter:** `undefined`

- **Default:** `'Toggle'`

## formatToggleOn

- **Parameter:** `undefined`

- **Default:** `'Show card view'`

## formatToggleOff

- **Parameter:** `undefined`

- **Default:** `'Hide card view'`

## formatColumns

- **Parameter:** `undefined`

- **Default:** `'Columns'`

## formatColumnsToggleAll

- **Parameter:** `undefined`

- **Default:** `'Toggle all'`

## formatFullscreen

- **Parameter:** `undefined`

- **Default:** `'Fullscreen'`

## formatAllRows

- **Parameter:** `undefined`

- **Default:** `'All'`
