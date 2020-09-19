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

   Force multiple sort table (usable after manual data changes).


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

## Localizations

### formatAddLevel

- **Detail:**

  Text of the add level button

- **Default:** `function () { return "Add Level" }`

### formatCancel

- **Detail:**

  Text of the delete level button

- **Default:** `function () { return "Cancel" }`

### formatColumn

- **Detail:**

  Text of Column header

- **Default:** `function () { return "Column" }`

### formatDeleteLevel

- **Detail:**

  Text of the delete level button

- **Default:** `function () { return "Delete Level" }`

### formatDuplicateAlertTitle

- **Detail:**

  Title of the duplicate alert

- **Default:** `function () { return "Duplicate(s) detected!" }`

### formatDuplicateAlertDescription

- **Detail:**

  Text of the duplicate alert

- **Default:** `function () { return "Please remove or change any duplicate column." }`

### formatMultipleSort

- **Detail:**

  Title of the advanced search modal

- **Default:** `function () { return "Multiple Sort" }`

### formatOrder

- **Detail:**

  Text of the delete level button

- **Default:** `function () { return "Order" }`

### formatSort

- **Detail:**

  Text of the delete level button

- **Default:** `function () { return "Sort" }`

### formatSortBy

- **Detail:**

  Text of the delete level button

- **Default:** `function () { return "Sort by" }`

### formatSortOrders

- **Detail:**

  Text of the sort orders

- **Default:**
  - asc : `function () { return "Ascending" }`
  - desc : `function () { return "Descending" }`

### formatThenBy

- **Detail:**

  Text of the delete level button

- **Default:** `function () { return "Then by" }`

## Events

### onMultipleSort(multiple-sort.bs.table)

* Fires when sorting with one or multiple Sort Priority.
