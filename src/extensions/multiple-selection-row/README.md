# Table Multiple Selection Row

Use Plugin: [bootstrap-table-multiple-selection-row](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/multiple-selection-row)

## Usage

```html
<link rel="stylesheet" type="text/css" href="extensions/multiple-selection-row/bootstrap-table-multiple-selection-row.css">
<script src="extensions/multiple-selection-row/bootstrap-table-multiple-selection-row.js"></script>
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

## Methods

### clearAllMultipleSelectionRow

* Clear all the selected rows.
  * Parameters
      * It does not receive parameters.
  * Example: <code> $table.bootstrapTable("clearAllMultipleSelectionRow");</code>
