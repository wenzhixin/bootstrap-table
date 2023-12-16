---
layout: docs
title: Table Print
description: Table Print extension of Bootstrap Table.
group: extensions
toc: true
---

Adds a button to the toolbar for printing the table in a predefined configurable format.

## Usage

{% highlight html %}
<script src="extensions/print/bootstrap-table-print.js"></script>
{% endhighlight %}

## Example

[Print](https://examples.bootstrap-table.com/#extensions/print.html)

## Options

### showPrint

- **attribute:** `data-show-print`

- **type:** `Boolean`

- **Detail:**

  Set true to show the Print button on the toolbar.

- **Default:** `false`

### printAsFilteredAndSortedOnUI

- **attribute:** `data-print-as-filtered-and-sorted-on-ui`

- **type:** `Boolean`

- **Detail:**

  When true - print table as sorted and filtered on UI. Please note that if true is set, along with explicit predefined print options for filtering and sorting (printFilter, printSortOrder, printSortColumn)- then they will be applied on data already filtered and sorted by UI controls. For printing data as filtered and sorted on UI - do not set these 3 options: printFilter, printSortOrder, printSortColumn

- **Default:** `true`

### printPageBuilder

- **attribute:** `data-print-page-builder`

- **type:** `Function`

- **Detail:**

  Receive html `<table>` element as string parameter, returns html string for printing. Used for styling and adding header or footer.

- **Default:**
{% highlight javascript %}
printPageBuilder: function(table) {
  return `
    <html>
    <head>
    <style type="text/css" media="print">
    @page {
      size: auto;
      margin: 25px 0 25px 0;
    }
    </style>
    <style type="text/css" media="all">
    table {
      border-collapse: collapse;
      font-size: 12px;
    }
    table, th, td {
      border: 1px solid grey;
    }
    th, td {
      text-align: center;
      vertical-align: middle;
    }
    p {
      font-weight: bold;
      margin-left:20px;
    }
    table {
      width: 94%;
      margin-left: 3%;
      margin-right: 3%;
    }
    div.bs-table-print {
      text-align:center;
    }
    </style>
    </head>
    <title>Print Table</title>
    <body>
    <p>Printed on: ${new Date} </p>
    <div class="bs-table-print">${table}</div>
    </body>
    </html>
  `
}
{% endhighlight %}

### printSortColumn

- **attribute:** `data-print-sort-column`

- **type:** `String`

- **Detail:**

  set column field name to sort by for the printed table

- **Default:** `undefined`

### printSortOrder

- **attribute:** `data-print-sort-order`

- **type:** `String`

- **Detail:**

  Valid values: 'asc', 'desc'. Relevant only if printSortColumn is set

- **Default:** `'asc'`

### Icons

* print: `'glyphicon-print icon-share'`

## Column options

### printFilter

- **attribute:** `data-print-filter`

- **type:** `String`

- **Detail:**

  set value to filter the printed data by this column.

- **Default:** `undefined`

### printFormatter

- **attribute:** `data-print-formatter`

- **type:** `Function`

- **Detail:**

  function(value, row, index) - returns a string. Formats the cell values for this column in the printed table. Function behavior is similar to the 'formatter' column option

- **Default:** `undefined`

### printIgnore

- **attribute:** `data-print-ignore`

- **type:** `Boolean`

- **Detail:**

  set true to hide this column in the printed page.

- **Default:** `false`

## Localizations

### formatPrint

- **type:** `Function`

- **Default:** `function () { return "Print" }`
