---
layout: docs
title: Table Toolbar
description: Table Toolbar extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<script src="extensions/toolbar/bootstrap-table-toolbar.js"></script>
{% endhighlight %}

## Example

[Advanced Toolbar](https://examples.bootstrap-table.com/#extensions/toolbar.html)

## Options

### advancedSearch

- **attribute:** `data-advanced-search`

- **type:** `Boolean`

- **Detail:**

   Set true to allow the advanced search.

- **Default:** `false`

### idForm

- **attribute:** `data-id-form`

- **type:** `String`

- **Detail:**

   Must be set to know the idform.

- **Default:** `advancedSearch`

### actionForm

- **attribute:** `data-action-form`

- **type:** `String`

- **Detail:**

   Set the action of the form (pop-up).

- **Default:** `''`

### idTable

- **attribute:** `data-id-table`

- **type:** `String`

- **Detail:**

   Set the id of the table to create the pop-up form. Required.

- **Default:** `''`

## Locales

### formatAdvancedSearch

- **Detail:**

   Title of the advanced search modal

- **Default:** `Advanced search`

### formatAdvancedCloseButton

- **Detail:**

   Text of the close button

- **Default:** `Close`

## Events

### onColumnAdvancedSearch(column-advanced-search.bs.table)

* Fired when we are searching into the advanced search form
