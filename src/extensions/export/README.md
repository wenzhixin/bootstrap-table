# Table Export

Use Plugin: [tableExport.jquery.plugin](https://github.com/kayalshri/tableExport.jquery.plugin)

## Usage

```html
<script src="extensions/export/bootstrap-table-export.js"></script>
```

## Options

### showExport

* type: Boolean
* description: set `true` to show export button.
* default: `false`

### exportTypes

* type: Array
* description: export types, support types: 'json', 'xml', 'png', 'csv', 'txt', 'sql', 'doc', 'excel', 'powerpoint', 'pdf'.
* default: `['json', 'xml', 'csv', 'txt', 'sql', 'excel']`

## [Examples](http://wenzhixin.net.cn/p/bootstrap-table/docs/extensions.html#export)

```html
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="../src/bootstrap-table.css">

<table data-toggle="table"
       data-url="data1.json"
       data-show-columns="true"
       data-search="true"
       data-show-refresh="true"
       data-show-toggle="true"
       data-pagination="true"
       data-height="299"
       data-show-export="true">
    <thead>
    <tr>
        <th data-field="id">ID</th>
        <th data-field="name">Item Name</th>
        <th data-field="price">Item Price</th>
    </tr>
    </thead>
</table>

<script src="assets/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/table-export/tableExport.js"></script>
<script src="assets/table-export/jquery.base64.js"></script>
<script src="../src/bootstrap-table.js"></script>
<script src="../src/extensions/export/bootstrap-table-export.js"></script>
```
