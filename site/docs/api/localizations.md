---
layout: docs
title: Localizations
description: The Methods API of Bootstrap Table.
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

## formatLoadingMessage

- **Parameter:** `undefined`

- **Default:** `'Loading, please wait…'`

## formatRecordsPerPage

- **Parameter:** `pageNumber`

- **Default:** `'%s records per page'`

## formatShowingRows

- **Parameter:** `pageFrom, pageTo, totalRows`

- **Default:** `'Showing %s to %s of %s rows'`

## formatDetailPagination

- **Parameter:** `totalRows`

- **Default:** `'Showing %s rows'`

## formatSearch

- **Parameter:** `undefined`

- **Default:** `'Search'`

## formatNoMatches

- **Parameter:** `undefined`

- **Default:** `'No matching records found'`

## formatRefresh

- **Parameter:** `undefined`

- **Default:** `'Refresh'`

## formatToggle

- **Parameter:** `undefined`

- **Default:** `'Toggle'`

## formatColumns

- **Parameter:** `undefined`

- **Default:** `'Columns'`

## formatAllRows

- **Parameter:** `undefined`

- **Default:** `'All'`

## formatFullscreen

- **Parameter:** `undefined`

- **Default:** `'Fullscreen'`
