# Table Reorder Columns

Use Plugin: [bootstrap-table-reorder-columns](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/reordercolumns) </br>
Dependence: [dragTable](https://github.com/akottr/dragtable/) v2.0.14 (must include the css file), </br>
[jquery-ui](https://code.jquery.com/ui/) v1.11


## Usage

```html
<link rel="stylesheet" href=".../dragtable.css">
<script src=".../jquery-ui.js"></script>
<script src=".../jquery.dragtable.js"></script>
<script src="extensions/reordercolumns/bootstrap-table-reorder-columns.js"></script>
```

## Options

### reorderableColumns

* type: Boolean
* description: Set true to allow the reorder feature.
* default: `false`

### maxMovingRows

* type: Integer
* description: Moving only the header. Recommended for very large tables (cells > 1000)
* default: `10`

## Events

### onReorderColumn(reorder-column.bs.table)

Fired when the column was dropped, receive as parameter the new header fields order