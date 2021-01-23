---
layout: docs
title: Table Filter Control
description: Table Filter Control extension of Bootstrap Table.
group: extensions
toc: true
---

Dependence if you use the datepicker option: [bootstrap-datepicker](https://github.com/eternicode/bootstrap-datepicker) v1.4.0

## Usage

{% highlight html %}
<link rel="stylesheet" type="text/css" href="extensions/filter-control/bootstrap-table-filter-control.css">
<script src="extensions/filter-control/bootstrap-table-filter-control.js"></script>
{% endhighlight %}

## Example

[Filter Control](https://examples.bootstrap-table.com/#extensions/filter-control.html)

## Options

### filterControl

- **Attribute:** `data-filter-control`

- **type:** `Boolean`

- **Detail:**

   Set to `true` to add an `input` or `select` into the column.

- **Default:** `false`

### filterControlVisible

- **Attribute:** `data-filter-control-visible`

- **type:** `Boolean`

- **Detail:**

   Set to `false` to hide the filter controls.

- **Default:** `true`

### alignmentSelectControlOptions

- **Attribute:** `data-alignment-select-control-options`

- **type:** `String`

- **Detail:**

   Set the alignment of the select control options. Use Use `left`, `right` or `auto`.

- **Default:** `undefined`

### disableControlWhenSearch

- **Attribute:** `data-disable-control-when-search`

- **type:** `Boolean`

- **Detail:**

   Set to true if you want to disable the control while the server is responding the data. This options will work if the sidePagination is 'server'.

- **Default:** `false`

### filterControlContainer

- **Attribute:** `data-filter-control-container`

- **type:** `Selector`

- **Detail:**

   Set to e.g. `#filter` to allow custom input filter in a element with the id `filter`.
   Each filter element (input or select) must have the following class `bootstrap-table-filter-control-<FieldName>` (<FieldName> must be replaced with the defined [Field](https://bootstrap-table.com/docs/api/column-options/#field) name).

- **Default:** `false`

### filterDataCollector

- **Attribute:** `data-filter-data-collector`

- **type:** `Function`

- **Detail:**

   Collect data which will added to the select filter, to filter through e.g. labels which are comma separated and displayed with a formatter.

- **Default:** `undefined`

### hideUnusedSelectOptions

- **Attribute:** `data-hide-unused-select-options`

- **type:** `Boolean`

- **Detail:**

   Set to true in order to hide the options that are not in the table. This option does not work on server-side pagination.

- **Default:** `false`

### searchOnEnterKey

- **Attribute:** `data-search-on-enter-key`

- **type:** `Boolean`

- **Detail:**

   Set to true to fire the search action when the user press the enter key.

- **Default:** `false`

### showFilterControlSwitch

- **Attribute:** `data-show-filter-control-switch`

- **type:** `Boolean`

- **Detail:**

   Set to `true` to show the filter control switch button.

- **Default:** `false`

## Column options

### filterControl

- **Attribute:** `data-filter-control`

- **type:** `String`

- **Detail:**

   Set `input`: show an input control, `select`: show a select control, `datepicker`: show a datepicker control.

- **Default:** `undefined`

### filterControlPlaceholder

- **attribute:** `data-filter-control-placeholder`

- **type:** `String`

- **Detail:**

   Set this in order to show a placeholder only in the input filter control.

- **Default:** `''`

### filterCustomSearch

- **Attribute:** `data-filter-custom-search`

- **type:** `function`

- **Detail:**

   The custom search function is executed instead of built-in search function, takes four parameters:

     * `text`: the search text.
     * `value`: the the value of the column to compare.
     * `field`: the column field name.
     * `data`: the table data.

   Return `false` to filter out the current column/row.
   Return `true` to not filter out the current column/row.
   Return `null` to skip the custom search for the current value.

- **Default:** `undefined`

### filterData

- **Attribute:** `data-filter-data`

- **type:** `String`

- **Detail:**

   Set custom select filter values, use
   `var:variable` to load from a variable
   `obj:variable.key` to load from a object
   `url:http://www.example.com/data.json` to load from a remote json file
   `json:{key:data}` to load from a json string.
   `func:functionName` to load from a function.

- **Default:** `undefined`

### filterDatepickerOptions

- **Attribute:** `data-filter-datepicker-options`

- **type:** `Object`

- **Detail:**

   If the datepicker option is set use this option to configure the datepicker with the native options. Use this way: `data-filter-datepicker-options='{"autoclose":true, "clearBtn": true, "todayHighlight": true}'`.

- **Default:** `undefined`

### filterDefault

- **Attribute:** `data-filter-default`

- **type:** `String`

- **Detail:**

   Set the default value of the filter.
   
   If you use the datepicker, make sure your date format match the [format](https://bootstrap-datepicker.readthedocs.io/en/stable/options.html?highlight=format#format) of the datepicker. You can change the datepicker format using [filterDatepickerOptions](https://bootstrap-table.com/docs/extensions/filter-control/#filterdatepickeroptions).

- **Default:** `undefined`

### filterOrderBy

- **attribute:** `data-filter-order-by`

- **type:** `String`

- **Detail:**

   Set this to order the options in a select control whether ascending (`'asc'`), descending (`'desc'`) or in the order provided by the server (`'server'`).

- **Default:** `'asc'`

### filterStartsWithSearch

- **attribute:** `data-filter-starts-with-search`

- **type:** `Boolean`

- **Detail:**

   Set to true if you want to use the starts with search mode.

- **Default:** `false`

### filterStrictSearch

- **Attribute:** `data-filter-strict-search`

- **type:** `Boolean`

- **Detail:**

   Set to true if you want to use the strict search mode.

- **Default:** `false`

### Icons

* clear: `'glyphicon-trash icon-clear'`
* filterControlSwitchHide: `'glyphicon-zoom-out icon-zoom-out'`
* filterControlSwitchShow: `'glyphicon-zoom-in icon-zoom-in'`

## Events

### onColumnSearch(column-search.bs.table)

* Fired when we are searching into the column data

### onCreatedControls(created-controls.bs.table)

* Fired when we are searching into the column data

## Methods

### triggerSearch

* Trigger manually the search action

### clearFilterControl

* Clear all the controls added by this plugin (similar to showSearchClearButton option).

### toggleFilterControl

* Toggles the visibility (show/hide) of the filter controls.

## Localizations

### formatClearFilters

- **type:** `Function`

- **Default:** `function () { return "Clear Filters" }`

### formatFilterControlSwitch

- **type:** `Function`

- **Default:** `function () { return "Hide/Show controls" }`

### formatFilterControlSwitchHide

- **type:** `Function`

- **Default:** `function () { return "Hide controls" }`

### formatFilterControlSwitchShow

- **type:** `Function`

- **Default:** `function () { return "Show controls" }`
