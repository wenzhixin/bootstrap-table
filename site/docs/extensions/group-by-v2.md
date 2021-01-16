---
layout: docs
title: Table Group By v2
description: Table Group By v2 extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<link rel="stylesheet" href="extensions/group-by-v2/bootstrap-table-group-by.css">
<script src="extensions/group-by-v2/bootstrap-table-group-by.js"></script>
{% endhighlight %}

## Example

[Group By v2](https://examples.bootstrap-table.com/#extensions/group-by-v2.html)

## Options

### groupBy

- **attribute:** `data-group-by`

- **type:** `Boolean`

- **Detail:**

   Set true to group the data by the field passed.

- **Default:** `false`

### groupByField

- **attribute:** `data-group-by-field`

- **type:** `String|Array`

- **Detail:**

   Set the field name(s) that you want to group the data.
   For a single field use a `String` e.g. `shape`.
   For a multiple fields use a `Array` e.g. `["shape", "color"]`.

- **Default:** `''`

### groupByFormatter

- **attribute:** `data-group-by-formatter`

- **type:** `Function`

- **Detail:**

   The group row formatter function, takes three parameters:

   * `value`: the group by value.
   * `idx`: the index of the group.
   * `data`: an array of rows in the group.

- **Default:** `undefined`

### groupByToggle

- **attribute:** `data-group-by-toggle`

- **type:** `Boolean`

- **Detail:**

   Set `true` to allow collapse/expand groups.

- **Default:** `false`

### groupByShowToggleIcon

- **attribute:** `data-group-by-show-toggle-icon`

- **type:** `Boolean`

- **Detail:**

   Set `true` to show icons if the group is collapsed or expanded (see groupByToggle).

- **Default:** `false`

### groupByCollapsedGroups

- **attribute:** `data-group-by-collapsed-groups`

- **type:** `Array|Function`

- **Detail:**

  All group keys (which are in this array will be collapsed by default.
  The value of this option can be:
  - A variable (array)
  - An Array string e.g. `["circle"]`
  - A function (returns an array) which gets as parameters:
     - The group key
     - The entries of the group

- **Default:** `[]`
