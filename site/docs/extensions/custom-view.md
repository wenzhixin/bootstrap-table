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

### Icons

- Toggle custom view:
    * Bootstrap3: `glyphicon glyphicon-eye-open`
    * Bootstrap4: `fa fa-eye`
    * Semantic: `fa fa-eye`
    * Foundation: `fa fa-eye`
    * Bulma: `fa fa-eye`
    * Materialize: `remove_red_eye`

## Methods

### toggleCustomView

* Toggles the view between the table and the custom view.

## Events

### onCustomViewPostBody(custom-view-post-body.bs.table)

* Fires before the custom view was rendered.

### onCustomViewPreBody(custom-view-pre-body.bs.table)

* Fires after the custom view was rendered.

## Localizations

### formatToggleCustomView

- **type:** `Function`

- **Default:** `function () { return "Toggle custom view" }`