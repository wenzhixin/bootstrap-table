---
layout: docs
title: Table Group By
description: Table Group By extension of Bootstrap Table.
group: extensions
toc: true
---

Use Plugin: [bootstrap-table-group-by](https://github.com/djhvscf/bootstrap-table-group-by) </br>
Dependence: [jquery-treetable](https://github.com/ludo/jquery-treetable/) v3.2.0 </br>
You must include the bootstrap-table-group-by.css file in order to get the appropriate style

## Usage

{% highlight html %}
<script src="extensions/group-by/bootstrap-table-group-by.js"></script>
{% endhighlight %}

## Options

### groupBy

- **type:** `Boolean`

- **Detail:**

   Set true to group the data by the field passed.

- **Default:** `false`

### groupByField

- **type:** `Array`

- **Detail:**

   Set the array fields that you want to group the data.

- **Default:** `[]`

### groupBySumGroup

- **type:** `Boolean`

- **Detail:**

   Set to True to include a sum per column.

- **Default:** `false`

### groupByInitExpanded

- **type:** `Boolean`

- **Detail:**

   You can use the node number (parent row index) or you can use the `all` option in order to expand all nodes of the table.

- **Default:** `undefined`

## Methods

### expandAll

* Expand all the nodes in the table.

### collapseAll

* Collapse all the nodes in the table.

## Column options

### groupBySumGroup

- **type:** `Boolean`

- **Detail:**

   Set to True to sum the column values.

- **Default:** `false`


## Known issues

### OnSort

* When sort options are set to True the group by is not working properly, for now if these properties are set to True the group by extension will be disabled.
