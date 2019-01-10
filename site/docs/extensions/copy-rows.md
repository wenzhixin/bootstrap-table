---
layout: docs
title: Table Copy Rows
description: Table Copy Rows extension of Bootstrap Table.
group: extensions
toc: true
---

This extension adds functionality for copying selected rows to the clipboard. Currently works on all desktop browsers except safari.

## Usage

{% highlight html %}
<script src="extensions/copy-rows/bootstrap-table-copy-rows.js"></script>
{% endhighlight %}

## Options

### copyBtn

- **type:** `Boolean`

- **Detail:**

   Set true to show the copy button. This button copys the contents of the selected rows to the clipboard.

- **Default:** `false`

### copyWHiddenBtn

- **type:** `Boolean`

- **Detail:**

   Set true to show the copy with hidden button. This button copys the contents of the selected rows to the clipboard, *including hidden rows*.

- **Default:** `false`

### copyDelemeter

- **type:** `String`

- **Detail:**

   This string will be inserted in-between the column values when copying

- **Default:** `''`

## Methods

### copyColumnsToClipboard

* copys the contents of the selected rows to the clipboard.

### copyColumnsToClipboardWithHidden

* copys the contents of the selected rows to the clipboard, **including hidden rows**.
