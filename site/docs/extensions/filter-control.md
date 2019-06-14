---
layout: docs
title: Table Filter Control
description: Table Filter Control extension of Bootstrap Table.
group: extensions
toc: true
---

Use Plugin: [bootstrap-table-filter-control](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/filter-control)

Dependence if you use the datepicker option: [bootstrap-datepicker](https://github.com/eternicode/bootstrap-datepicker) v1.4.0

## Usage

{% highlight html %}
<link rel="stylesheet" type="text/css" href="extensions/filter-control/bootstrap-table-filter-control.css">
<script src="extensions/filter-control/bootstrap-table-filter-control.js"></script>
{% endhighlight %}

## Options

### filterControl

- **type:** `Boolean`

- **Detail:**

   Set true to add an `input` or `select` into the column.

- **Default:** `false`

### filterDataCollector

- **type:** `Function`

- **Detail:**

   Collect data which will added to the select filter, to filter through e.g. labels which are comma separated and displayed with a formatter.

- **Default:** `undefined`

### alignmentSelectControlOptions

- **type:** `String`

- **Detail:**

   Set the alignemnt of the select control options. Use Use `left`, `right` or `auto`.

- **Default:** `undefined`

### hideUnusedSelectOptions

- **type:** `Boolean`

- **Detail:**

   Set to true in order to hide the options that are not in the table. This option does not work on server-side pagination.

- **Default:** `false`

### disableControlWhenSearch

- **type:** `Boolean`

- **Detail:**

   Set to true if you want to disable the control while the server is responding the data. This options will work if the sidePagination is 'server'.

- **Default:** `false`

### searchOnEnterKey

- **type:** `Boolean`

- **Detail:**

   Set to true to fire the search action when the user press the enter key.

- **Default:** `false`

## Column options

### filterControl

- **type:** `String`

- **Detail:**

   Set `input`: show an input control, `select`: show a select control, `datepicker`: show a datepicker control.

- **Default:** `undefined`

### filterData

- **type:** `String`

- **Detail:**

   Set custom select filter values, use `var:variable` to load from a variable or `url:http://www.example.com/data.json` to load from a remote json file or `json:{key:data}` to load from a json string.

- **Default:** `undefined`

### filterDefault

- **type:** `String`

- **Detail:**

   Set the default value of the filter.

- **Default:** `undefined`

### filterDatepickerOptions
- **type:** `Object`

- **Detail:**

   If the datepicker option is set use this option to configure the datepicker with the native options. Use this way: `data-filter-datepicker-options='{"autoclose":true, "clearBtn": true, "todayHighlight": true}'`.

- **Default:** `undefined`

### filterStrictSearch
- **type:** `Boolean`

- **Detail:**

   Set to true if you want to use the strict search mode.

- **Default:** `false`

### filterStartsWithSearch
- **type:** `Boolean`

- **Detail:**

   Set to true if you want to use the starts with search mode.

- **Default:** `false`

### filterControlPlaceholder
- **type:** `String`

- **Detail:**

   Set this in order to show a placeholder only in the input filter control.

- **Default:** `''`

### filterOrderBy
- **type:** `String`

- **Detail:**

   Set this to order the options in a select control whether ascending or descending.

- **Default:** `'asc'`

### Icons
* clear: 'glyphicon-trash icon-clear'

## Locale

### formatClearFilters
- **type:** `Function`

- **Default:** `function () { return "Clear Filters";}`

## Events

### onColumnSearch(column-search.bs.table)

* Fired when we are searching into the column data

### onCreatedControls(created-controls.bs.table)

* Fired when we are searching into the column data

## Methods

### triggerSearch

* Trigger manually the search action

### clearFilterControl

* Clear all the controls added by this plugin (similar to filterShowClear option).
