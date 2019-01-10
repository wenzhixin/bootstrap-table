---
layout: docs
title: Table Multiple Selection Row
description: Table Multiple Selection Row extension of Bootstrap Table.
group: extensions
toc: true
---

Use Plugin: [bootstrap-table-multiple-selection-row](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/multiple-selection-row)

## Usage

{% highlight html %}
<link rel="stylesheet" type="text/css" href="extensions/multiple-selection-row/bootstrap-table-multiple-selection-row.css">
<script src="extensions/multiple-selection-row/bootstrap-table-multiple-selection-row.js"></script>
{% endhighlight %}

## Options

### multipleSelectRow

- **type:** `Boolean`

- **Detail:**

   Set true to enable the multiple selection row.

- **Default:** `false`

### multipleSelectRowCssClass

- **type:** `String`

- **Detail:**

   The class that will be applied in the rows selected.

- **Default:** `multiple-select-row-selected`

## Methods

### clearAllMultipleSelectionRow

* Clear all the selected rows.
  * Parameters
      * It does not receive parameters.
  * Example: <code> $table.bootstrapTable("clearAllMultipleSelectionRow");</code>
