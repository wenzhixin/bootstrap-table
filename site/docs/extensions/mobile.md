---
layout: docs
title: Table Mobile
description: Table Mobile extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<script src="extensions/mobile/bootstrap-table-mobile.js"></script>
{% endhighlight %}

## Example

[Mobile](https://examples.bootstrap-table.com/#extensions/mobile.html)

## Options

### checkOnInit

- **attribute:** `data-check-on-init`

- **type:** `Boolean`

- **Detail:**

  Set true to check the window size on init.

- **Default:** `true`

### columnsHidden

- **attribute:** `data-columns-hidden`

- **type:** `String`

- **Detail:**

  Set the columns fields in this array to hide those columns in the card view mode. Use this way in `data-*` configuration: ` data-columns-hidden="['name', 'description']"` or this way in the JavaScript configuration: `columnsHidden = ['name', 'description']`.

- **Default:** `undefined`

### minHeight

- **attribute:** `data-min-height`

- **type:** `Integer`

- **Detail:**

  Set the minimum height when the table will change the view.

- **Default:** `undefined`

### minWidth

- **attribute:** `data-min-width`

- **type:** `Integer`

- **Detail:**

  Set the minimum width when the table will change the view.

- **Default:** `562`

### mobileResponsive

- **attribute:** `data-mobile-responsive`

- **type:** `Boolean`

- **Detail:**

  Set true to change the view between the card and table view depending on the width and height given.

- **Default:** `false`
