---
layout: docs
title: Table Reorder Rows
description: Table Reorder Rows extension of Bootstrap Table.
group: extensions
toc: true
---

Dependence: [tablednd](https://github.com/isocra/TableDnD) v0.9

if you want you can include the bootstrap-table-reorder-rows.css file to use the default dragClass.

## Usage

{% highlight html %}
<link rel="stylesheet" href="extensions/reorder-rows/bootstrap-table-reorder-rows.css">
<script src=".../jquery.tablednd.js"></script>
<script src="extensions/reorder-rows/bootstrap-table-reorder-rows.js"></script>
{% endhighlight %}

## Example

[Reorder Rows](https://examples.bootstrap-table.com/#extensions/reorder-rows.html)

## Options

### reorderableRows

- **attribute:** `data-reorderable-rows`

- **type:** `Boolean`

- **Detail:**

  Set true to allow the reorder feature.

- **Default:** `false`

### onAllowDrop

- **attribute:** `data-on-allow-drop`

- **type:** `function`

- **Detail:**

  Pass a function that will be called as a row over another row. If the function returns true, allow dropping on that row, otherwise not. The function takes 4 parameters:
  - the dragged-row data
  - the data of the row under the cursor
  - the dragged row
  - the row under the cursor

  It returns a boolean: true allows the drop, false doesn’t allow it.
- **Default:** `null`

### onDragStop

- **attribute:** `data-on-drag-stop`

- **type:** `function`

- **Detail:**

  Pass a function that will be called when the user stops dragging regardless of if the rows have been rearranged. The function takes 3 parameters: the table, the row data and the row which the user was dragging.

- **Default:** `null`

### onDragStyle

- **attribute:** `data-on-drag-style`

- **type:** `String`

- **Detail:**

  This is the style that is assigned to the row during drag. There are limitations to the styles that can be associated with a row (such as you can't assign a border well you can, but it won't be displayed).

- **Default:** `null`

### onDragClass

- **attribute:** `data-on-drag-class`

- **type:** `String`

- **Detail:**

  This class is added for the duration of the drag and then removed when the row is dropped. It is more flexible than using onDragStyle since it can be inherited by the row cells and other content.

- **Default:** `reorder-rows-on-drag-class`

### onDropStyle

- **attribute:** `data-on-drop-style`

- **type:** `String`

- **Detail:**

  This is the style that is assigned to the row when it is dropped. As for onDragStyle, there are limitations to what you can do. Also, this replaces the original style, so again consider using onDragClass which is simply added and then removed on drop.

- **Default:** `null`

### onReorderRowsDrag

- **attribute:** `data-on-reorder-rows-drag`

- **type:** `Function`

- **Detail:**

  Pass a function that will be called when the user starts dragging. The function takes 1 parameter: the row which the user has started to drag.

- **Default:** `empty function`

### onReorderRowsDrop

- **attribute:** `data-on-reorder-rows-drop`

- **type:** `Function`

- **Detail:**

  Pass a function that will be called when the row is dropped. The function takes 1 parameter:  the row that was dropped.

- **Default:** `empty function`

### dragHandle

- **attribute:** `data-drag-handle`

- **type:** `String`

- **Detail:**

  This is the cursor element.

  **Note: This option is mainly used to adapt to the `TableDnD` plugin. Under no special circumstances, please do not modify the default value.**

- **Default:** `>tbody>tr>td:not(.bs-checkbox)`

### useRowAttrFunc

- **attribute:** `data-use-row-attr-func`

- **type:** `Boolean`

- **Detail:**

  This function must be used if your `tr` elements won't have the `id` attribute. If your `tr` elements don't have the `id` attribute this plugin doesn't fire the onDrop event.

- **Default:** `false`

## Events

### onReorderRow(reorder-row.bs.table)

Fired when the row was dropped, receives two parameters:
* The new table data
* The dropped row
* The row of the old position
