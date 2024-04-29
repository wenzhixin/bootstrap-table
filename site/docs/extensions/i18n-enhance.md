---
layout: docs
title: Table i18n Enhance
description: Table i18n Enhance extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<script src="extensions/i18n-enhance/bootstrap-table-i18n-enhance.js"></script>
{% endhighlight %}

## Example

[i18n Enhance](https://examples.bootstrap-table.com/#extensions/i18n-enhance.html)

## Methods

### changeLocale

Change table locale.

* Parameters: `localeId`
* Example: <code> $table.bootstrapTable('changeLocale', 'zh_TW')</code>

### changeTitle

Change the column's title.

* Parameters: `object`, the object's key is a column field, value is the new title.
* Example:
{% highlight html %}
$table.bootstrapTable('changeTitle', {
  columnA.field: 'New column A title.',
  columnB.field: 'New column B title.'
})
{% endhighlight %}
