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

## Example

[Copy Rows](https://examples.bootstrap-table.com/#extensions/copy-rows.html)

## Options

### showCopyRows

- **type:** `Boolean`

- **Detail:**

   Set `true` to show the copy button. This button copy the contents of the selected rows to the clipboard.

- **Default:** `false`

### copyWithHidden

- **type:** `Boolean`

- **Detail:**

   Set `true` to copy with hidden columns.

- **Default:** `false`

### copyDelimiter

- **type:** `String`

- **Detail:**

   This delimiter will be inserted in-between the column values when copying.

- **Default:** `', '`

### copyNewline

- **type:** `String`

- **Detail:**

   This newline will be inserted in-between the row values when copying.

- **Default:** `'\n'`

## Methods

### copyColumnsToClipboard

* Copy the contents of the selected rows to the clipboard.
