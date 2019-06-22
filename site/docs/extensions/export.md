---
layout: docs
title: Table Export
description: Table Export extension of Bootstrap Table.
group: extensions
toc: true
---

Use Plugin: [tableExport.jquery.plugin](https://github.com/hhurz/tableExport.jquery.plugin)

This is an important link to check out as some file types may require extra steps.

## Usage

{% highlight html %}
<script src="extensions/export/bootstrap-table-export.js"></script>
{% endhighlight %}

## Options

### showExport

- **type:** `Boolean`

- **Detail:**

   set `true` to show export button.

- **Default:** `false`

### exportDataType

- **type:** `String`

- **Detail:**

   export data type, support: 'basic', 'all', 'selected'.

- **Default:** `basic`

### exportTypes

- **type:** `Array`

- **Detail:**

   export types, support types: 'json', 'xml', 'png', 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'.

- **Default:** `['json', 'xml', 'csv', 'txt', 'sql', 'excel']`

### exportOptions

- **type:** `Object`

- **Detail:**

   export [options](https://github.com/hhurz/tableExport.jquery.plugin#options) of `tableExport.jquery.plugin`

   `exportOptions.fileName` can be a string or a function, for example:

   ```js
   exportOptions: {
      fileName: function () {
         return 'exportName'
      }
   }
   ```

- **Default:** `{}`

## Column options

### forceExport

- **type:** `Boolean`

- **Detail:**

   Set `true` to force export a column e.g. hidden columns.

- **Default:** `false`

## Events

### onExportSaved

- **jQuery Event:** `export-saved.bs.table`

- **Parameter:** `exportedRows`

- **Detail:**

  Fired when the data is exported, the parameter contain:

  * `exportedRows`: The exported rows (depends on exportDataType)

### Icons

- export: `'glyphicon-export icon-share'`
