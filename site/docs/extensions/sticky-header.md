---
layout: docs
title: Table Sticky Header
description: Table Sticky Header extension of Bootstrap Table.
group: extensions
toc: true
---

This is an extension for [Bootstrap table](http://github.com/wenzhixin/bootstrap-table) module which provides a sticky header for the table when scrolling. </br>
You must include the bootstrap-table-sticky-header.css file in order to get the appropriate style

## Usage

{% highlight html %}
<script src="extensions/sticky-header/bootstrap-table-sticky-header.js"></script>
{% endhighlight %}

## Options

### stickyHeader

- **type:** `Boolean`

- **Detail:**

   Set true to use sticky header.

- **Default:** `false`

### stickyHeaderOffsetY

- **type:** `String`

- **Detail:**

   Set the Y offset from the top of the window to pin the sticky header. If there is a fixed navigation bar with a height of 60px, this value would be `60px`.

- **Default:** `undefined`
