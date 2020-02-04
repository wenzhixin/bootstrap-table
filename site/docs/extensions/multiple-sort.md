---
layout: docs
title: Table Multiple Sort
description: Table Multiple Sort extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<script src="extensions/multiple-sort/bootstrap-table-multiple-sort.js"></script>
{% endhighlight %}

## Example

[Multiple Sort](https://examples.bootstrap-table.com/#extensions/multiple-sort.html)

## Options

### showMultiSort

- **attribute:** `data-show-multi-sort`

- **type:** `Boolean`

- **Detail:**

   Set true to allow the multiple sort.

- **Default:** `false`

### showMultiSortButton

- **attribute:** `data-show-multi-sort-button`

- **type:** `Boolean`

- **Detail:**

   Set false to hide multiple sort UI button.

- **Default:** `true`

### multiSortStrictSort

- **attribute:** `data-multi-sort-strict-sort`

- **type:** `Boolean`

- **Detail:**

   Set true to enable strict sorting. This means that strings will be compared and ordered using toLowerCase.

- **Default:** `false`

### sortPriority

- **attribute:** `data-sort-priority`

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


### multiSort

- **parameters:** sortPriority

- **Detail:**

   Set one or multiple sort priority

   Example:
   ```
  [
    {
      "sortName": "forks_count",
      "sortOrder": "desc"
    },
    {
      "sortName": "stargazers_count",
      "sortOrder": "asc"
    }
  ]
  ```

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
