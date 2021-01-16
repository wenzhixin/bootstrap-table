---
layout: docs
title: Table Fixed Columns
description: Table Fixed columns extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<link rel="stylesheet" href="extensions/fixed-columns/bootstrap-table-fixed-columns.css">
<script src="extensions/fixed-columns/bootstrap-table-fixed-columns.js"></script>
{% endhighlight %}

## Example

[Fixed Columns](https://examples.bootstrap-table.com/#extensions/fixed-columns.html)

## Options

### fixedColumns

- **attribute:** `data-fixed-columns`

- **type:** `Boolean`

- **Detail:**

  Set `true` to enable fixed columns.

- **Default:** `false`

### fixedNumber

- **attribute:** `data-fixed-number`

- **type:** Number

- **Detail:**

  The number of the left fixed columns.

- **Default:** `0`

### fixedRightNumber

- **type:** Number

- **Detail:**

  The number of the right fixed columns.

- **Default:** `0`

## Note

* Not support `detailView` option.
* Not support `cardView` option.
* Not support `showFooter` option.
* Need to import after sticky-header when using with sticky-header extension. For example:
{% highlight html %}
<link rel="stylesheet" href="extensions/sticky-header/bootstrap-table-sticky-header.css">
<link rel="stylesheet" href="extensions/fixed-columns/bootstrap-table-fixed-columns.css">
<script src="extensions/sticky-header/bootstrap-table-sticky-header.js"></script>
<script src="extensions/fixed-columns/bootstrap-table-fixed-columns.js"></script>
{% endhighlight %}
