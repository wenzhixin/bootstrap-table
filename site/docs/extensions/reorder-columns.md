---
layout: docs
title: Table Reorder Columns
description: Table Reorder Columns extension of Bootstrap Table.
group: extensions
toc: true
---

Dependence:
* [dragTable](https://github.com/akottr/dragtable/) v2.0.14 (must include the css file)
* [jquery-ui](https://code.jquery.com/ui/) v1.11


## Usage

{% highlight html %}
<link rel="stylesheet" href="dragtable.css">
<script src="jquery-ui.js"></script>
<script src="jquery.dragtable.js"></script>
<script src="extensions/reorder-columns/bootstrap-table-reorder-columns.js"></script>
{% endhighlight %}

## Example

[Reorder Columns](https://examples.bootstrap-table.com/#extensions/reorder-columns.html)

## Options

### reorderableColumns

- **type:** `Boolean`

- **Detail:**

   Set true to allow the reorder feature.

- **Default:** `false`

### maxMovingRows

- **type:** `Integer`

- **Detail:**

   Moving only the header. Recommended for very large tables (cells > 1000)

- **Default:** `10`

### dragaccept

- **type:** `String`

- **Detail:**

   Allow to drag only the rows that have the css class as attribute.

- **Default:** `null`

## Events

### onReorderColumn(reorder-column.bs.table)

Fired when the column was dropped, receive as parameter the new header fields order
