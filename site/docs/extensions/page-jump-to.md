---
layout: docs
title: Table Page Jump To
description: Table Page Jump To the extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<link rel="stylesheet" href="extensions/page-jump-to/bootstrap-table-jump-to.css"></style>
<script src="extensions/page-jump-to/bootstrap-table-jump-to.js"></script>
{% endhighlight %}

## Example

[Page Jump To](https://examples.bootstrap-table.com/#extensions/page-jump-to.html)

## Options

### showJumpTo

- **attribute:** `data-show-jump-to`

- **type:** `Boolean`

- **Detail:**

  Set true to enable show 'jump to page'. Can be defined via `data-show-jump-to` HTML attributes.

- **Default:** `false`

### showJumpToByPages

- **attribute:** `data-show-jump-to-by-pages`

- **type:** `Number`

- **Detail:**

  Show 'jump to page' only if the total page is greater than or equal to the set value.

- **Default:** `0`

## Localizations

### formatJumpTo

- **Parameter:** `undefined`

- **Default:** `function () { return "GO" }`
