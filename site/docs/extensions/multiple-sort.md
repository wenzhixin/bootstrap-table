---
layout: docs
title: Table Multiple Sort
description: Table Multiple Sort extension of Bootstrap Table.
group: extensions
toc: true
---

Use Plugin: [bootstrap-table-multiple-sort](https://github.com/dimbslmh/bootstrap-table/tree/master/src/extensions/multiple-sort)

## Usage

{% highlight html %}
<script src="extensions/multiple-sort/bootstrap-table-multiple-sort.js"></script>
{% endhighlight %}

## Options

### showMultiSort

- **type:** `Boolean`

- **Detail:**

   Set true to allow the multiple sort.

- **Default:** `false`

### showMultiSortButton

- **type:** `Boolean`

- **Detail:**

   Set false to hide multiple sort UI button.

- **Default:** `true`

### sortPriority

- **type:** `Object`

- **Detail:**

   Set one or multiple sort priority. Example: '[{"sortName": "forks_count","sortOrder":"desc"},{"sortName":"stargazers_count","sortOrder":"desc"}]'

- **Default:**null

### Icons
* sort: `glyphicon-sort`
* plus: `glyphicon-plus`
* minus: `glyphicon-minus`

## methods

### multipleSort

- **parameters:** none

- **Detail:**

   Force mutltiple sort table (usable after manual data changes).

## Locales

### formatMultipleSort


- **Detail:**

   Title of the advanced search modal

- **Default:** `Multiple Sort`

### formatAddLevel


- **Detail:**

   Text of the add level button

- **Default:** `Add Level`

### formatDeleteLevel


- **Detail:**

   Text of the delete level button

- **Default:** `Delete Level`

### formatColumn


- **Detail:**

   Text of Column header

- **Default:** `Column`

### formatOrder


- **Detail:**

   Text of the delete level button

- **Default:** `Order`

### formatSortBy


- **Detail:**

   Text of the delete level button

- **Default:** `Sort by`

### formatThenBy


- **Detail:**

   Text of the delete level button

- **Default:** `Then by`

### formatSort


- **Detail:**

   Text of the delete level button

- **Default:** `Sort`

### formatCancel


- **Detail:**

   Text of the delete level button

- **Default:** `Cancel`

### formatDuplicateAlertTitle


- **Detail:**

   Title of the duplicate alert

- **Default:** `Duplicate(s) detected!`

### formatDuplicateAlertDescription


- **Detail:**

   Text of the duplicate alert

- **Default:** `Please remove or change any duplicate column.`

### formatSortOrders


- **Detail:**

   Text of the sort orders

- **Default:**asc : `Ascending` and desc : `Descending`

## Events

### onMultipleSort(multiple-sort.bs.table)

* Fires when sorting with one or multiple Sort Priority.
