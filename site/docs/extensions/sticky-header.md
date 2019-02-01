---
layout: docs
title: Table Sticky Header
description: Table Sticky Header extension of Bootstrap Table.
group: extensions
toc: true
---

This is an extension which provides a sticky header for the table when scrolling.

## Usage

{% highlight html %}
<script src="extensions/sticky-header/bootstrap-table-sticky-header.js"></script>
{% endhighlight %}

## Example

[Sticky Header](https://examples.bootstrap-table.com/#extensions/sticky-header.html)

## Options

### stickyHeader

- **type:** `Boolean`

- **Detail:**

   Set true to use sticky header.

- **Default:** `false`

### stickyHeaderOffsetY

- **type:** `Number`

- **Detail:**

   Set the Y offset from the top of the window to pin the sticky header. If there is a fixed navigation bar with a height of 60px, this value would be `60`.

- **Default:** `0`
