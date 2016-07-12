# Table Mobile

Use Plugin: [bootstrap-table-multiple-selection-row](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/multiple-selection-row)

## Usage

```html
<script src="extensions/mobile/bootstrap-table-multiple-selection-row.js"></script>
```

## Options

### multipleSelectRow

* type: Boolean
* description: Set true to enable the multiple selection row.
* default: `false`

### multipleSelectRowCssClass

* type: String
* description: The class that will be applied in the rows selected.
* default: `multiple-select-row-selected`

### minWidth

* type: Integer
* description: Set the minimum width when the table will change the view.
* default: `562`

### minHeight

* type: Integer
* description: Set the minimum height when the table will change the view.
* default: `undefined`

### columnsHidden

* type: String
* description: Set the columns fields in this array in order to hide those columns in the cardView mode. Use this way in `data-*` configuration: ` data-columns-hidden="['name', 'description']"` or this way in javascript configuration: `columnsHidden = ['name', 'description']`. 
* default: `undefined`
