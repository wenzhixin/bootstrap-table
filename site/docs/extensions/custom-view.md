---
layout: docs
title: Custom View
description: Custom View extension of Bootstrap Table.
group: extensions
toc: true
---

## Description
This extension adds the ability to create a custom view to display the data.

## Usage

{% highlight html %}
<script src="extensions/custom-view/bootstrap-table-custom-view.js"></script>
{% endhighlight %}

## Example

[Custom View](https://examples.bootstrap-table.com/#extensions/custom-view.html)

## Options

### customView

- **Attribute:** `data-custom-view`

- **Type:** `Function|Boolean`

- **Detail:**

  Set to `false` to disable this extension.  
  Set to `function` to format your custom view.

- **Default:** `false`

### showCustomView

- **Attribute:** `data-show-custom-view`

- **Type:** `Boolean`

- **Detail:**

  Set to `true` to show the custom view as default view.

- **Default:** `false`

### showCustomViewButton

- **Attribute:** `data-show-custom-view-button`

- **Type:** `Boolean`

- **Detail:**

  Set to `true` to show the custom view toggle button.

- **Default:** `false`
