---
layout: docs
title: Table Treegrid
description: Table Treegrid extension of Bootstrap Table.
group: extensions
toc: true
---

Dependence: [jquery-treegrid](https://github.com/maxazan/jquery-treegrid) v0.3.0

## Usage

{% highlight html %}
<script src="extensions/treegrid/bootstrap-table-treegrid.js"></script>
{% endhighlight %}

## Example

[Treegrid](https://examples.bootstrap-table.com/#extensions/treegrid.html)

## Options

### treeEnable

- **attribute:** `data-tree-enable`

- **type:** `Boolean`

- **Detail:**

  Set `true` to enable the tree grid.

- **Default:** `false`

### idField

- **attribute:** `data-id-field`

- **type:** `String`

- **Detail:**

  Overwrite the default idField to `'id'`.

- **Default:** `'id'`

### parentIdField

- **attribute:** `data-parent-id-field`

- **type:** `String`

- **Detail:**

  Set the parent id field.

- **Default:** `'pid'`

### treeShowField

- **attribute:** `data-tree-show-field`

- **type:** `String`

- **Detail:**

  Set the `treeShowField` will auto enable the tree grid.

- **Default:** `''`

### rootParentId

- **attribute:** `data-root-parent-id`

- **type:** `String`

- **Detail:**

  Set the root parent id.

- **Default:** `null`
