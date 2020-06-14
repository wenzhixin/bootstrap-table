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

- **attribute:** `data-reorderable-columns`

- **type:** `Boolean`

- **Detail:**

   Set true to allow the reorder feature.

- **Default:** `false`

### dragaccept

- **attribute:** `data-dragaccept`

- **type:** `String`

- **Detail:**

   Allow to drag only the rows that have the css class as attribute.

- **Default:** `null`

### maxMovingRows

- **attribute:** `data-max-moving-rows`

- **type:** `Integer`

- **Detail:**

   Moving only the header. Recommended for very large tables (cells > 1000)

- **Default:** `10`

## Events

### onReorderColumn(reorder-column.bs.table)

Fired when the column was dropped, receive as parameter the new header fields order.

## Methods

### orderColumns

- **parameters:** `object` e.g. `{name: 0, price: 1}`

- **Detail:**

   Reorders the the columns by the given object.
   The Object key has to be the [field](https://bootstrap-table.com/docs/api/column-options/#field) and the value is the column index (starts by 0).
