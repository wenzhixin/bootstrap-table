---
layout: docs
title: Table Toolbar
description: Table Toolbar extension of Bootstrap Table.
group: extensions
toc: true
---

Use Plugin: [bootstrap-table-toolbar](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/toolbar)

## Usage

{% highlight html %}
<script src="extensions/toolbar/bootstrap-table-toolbar.js"></script>
{% endhighlight %}

## Options

### advancedSearch

- **type:** `Boolean`

- **Detail:**

   Set true to allow the advanced search.

- **Default:** `false`

### idForm

- **type:** `String`

- **Detail:**

   Must be set to know the idform.

- **Default:** `advancedSearch`

### actionForm

- **type:** `String`

- **Detail:**

   Set the action of the form (pop-up).

- **Default:** `''`

### idTable

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
