---
layout: docs
title: Table Mobile
description: Table Mobile extension of Bootstrap Table.
group: extensions
toc: true
---

Use Plugin: [bootstrap-table-mobile](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/mobile)

## Usage

{% highlight html %}
<script src="extensions/mobile/bootstrap-table-mobile.js"></script>
{% endhighlight %}

## Options

### mobileResponsive

- **type:** `Boolean`

- **Detail:**

   Set true to change the view between card and table view depending on width and height given.

- **Default:** `false`

### checkOnInit

- **type:** `Boolean`

- **Detail:**

   Set true to check the window size on init.

- **Default:** `true`

### minWidth

- **type:** `Integer`

- **Detail:**

   Set the minimum width when the table will change the view.

- **Default:** `562`

### minHeight

- **type:** `Integer`

- **Detail:**

   Set the minimum height when the table will change the view.

- **Default:** `undefined`

### columnsHidden

- **type:** `String`

- **Detail:**

   Set the columns fields in this array in order to hide those columns in the cardView mode. Use this way in `data-*` configuration: ` data-columns-hidden="['name', 'description']"` or this way in javascript configuration: `columnsHidden = ['name', 'description']`.

- **Default:** `undefined`
