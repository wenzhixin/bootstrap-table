---
layout: docs
title: Table Sticky Header
description: Table Sticky Header extension of Bootstrap Table.
group: extensions
toc: true
---

This is an extension that provides a sticky header for the table when scrolling.

## Usage

{% highlight html %}
<link rel="stylesheet" href="extensions/sticky-header/bootstrap-table-sticky-header.css">
<script src="extensions/sticky-header/bootstrap-table-sticky-header.js"></script>
{% endhighlight %}

## Example

[Sticky Header](https://examples.bootstrap-table.com/#extensions/sticky-header.html)

## Options

### stickyHeader

- **attribute:** `data-sticky-header`

- **type:** `Boolean`

- **Detail:**

  Set true to use a sticky header.

- **Default:** `false`

### stickyHeaderOffsetLeft

- **attribute:** `data-sticky-header-offset-left`

- **type:** `Number`

- **Detail:**

  Set the left offset of the sticky header container. If the body padding left is `60px`, this value would be `60`.

- **Default:** `0`

### stickyHeaderOffsetRight

- **attribute:** `data-sticky-header-offset-right`

- **type:** `Number`

- **Detail:**

  Set the right offset of the sticky header container. If the body padding right is `60px`, this value would be `60`.

- **Default:** `0`

### stickyHeaderOffsetY

- **attribute:** `data-sticky-header-offset-y`

- **type:** `Number`

- **Detail:**

  Set the Y offset from the top of the window to pin the sticky header. If there is a fixed navigation bar with a height of `60px`, this value would be `60`.

- **Default:** `0`
