---
layout: docs
title: Table Group By v2
description: Table Group By v2 extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<link rel="stylesheet" src="extensions/group-by-v2/bootstrap-table-group-by.css">
<script src="extensions/group-by-v2/bootstrap-table-group-by.js"></script>
{% endhighlight %}

## Example

[Group By v2](https://examples.bootstrap-table.com/#extensions/group-by-v2.html)

## Options

### groupBy

- **type:** `Boolean`

- **Detail:**

   Set true to group the data by the field passed.

- **Default:** `false`

### groupByField

- **type:** `String`

- **Detail:**

   Set the field name that you want to group the data.

- **Default:** `''`

### groupByFormatter

- **type:** `Function`

- **Detail:**

   The group row formatter function, takes three parameters:

   * `value`: the group by value.
   * `idx`: the index of the group.
   * `data`: an array of rows in the group.

- **Default:** `undefined`
