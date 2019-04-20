---
layout: docs
title: Table Group By v2
description: Table Group By v2 extension of Bootstrap Table.
group: extensions
toc: true
---

Use Plugin: [bootstrap-table-group-by-v2](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/group-by-v2) </br>
You must include the bootstrap-table-group-by.css file in order to get the appropriate style

## Usage

{% highlight html %}
<script src="extensions/group-by-v2/bootstrap-table-group-by.js"></script>
{% endhighlight %}

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
