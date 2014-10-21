# Table Filter

Use Plugin: [bootstrap table filters](https://github.com/lukaskral/bootstrap-table-filter)

## Usage

```html
<script src="extensions/filter/bootstrap-table-filter.js"></script>
```

## Options

### showFilter

* type: Boolean
* description: set true to show filter menu.
* default: `false`

## [Examples](http://wenzhixin.net.cn/p/bootstrap-table/docs/extensions.html#filter)

```html
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/table-filter/bootstrap-table-filter.css">
<link rel="stylesheet" href="../src/bootstrap-table.css">

<div id="filter-bar"></div>
<table data-toggle="table"
       data-height="299"
       data-url="data1.json"
       data-toolbar="#filter-bar"
       data-show-toggle="true"
       data-show-columns="true"
       data-show-filter="true">
    <thead>
    <tr>
        <th data-field="id" data-align="right" data-sortable="true">Item ID</th>
        <th data-field="name" data-align="center" data-sortable="true">Item Name</th>
        <th data-field="price" data-align="" data-sortable="true">Item Price</th>
    </tr>
    </thead>
</table>

<script src="assets/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/table-filter/bootstrap-table-filter.js"></script>
<script src="assets/table-filter/ext/bs-table.js"></script>
<script src="../src/bootstrap-table.js"></script>
<script src="../src/extensions/export/bootstrap-table-export.js"></script>
```
