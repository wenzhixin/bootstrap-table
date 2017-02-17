# Print

Adds a button to the toolbar for printing the table in a predefined configurable format.

## Usage

```html
<script src="extensions/print/bootstrap-table-print.js"></script>
```

## Options

### showPrint

* type: Boolean
* description: Set true to show the Print button on the toolbar.
* default: `false`

### printAsFilteredAndSortedOnUI

* type: Boolean
* description: When true - print table as sorted and filtered on UI. Please note that if true is set, along with explicit predefined print options for filtering and sorting (printFilter, printSortOrder, printSortColumn)- then they will be applied on data already filtered and sorted by UI controls. For printing data as filtered and sorted on UI - do not set these 3 options: printFilter, printSortOrder, printSortColumn
* default: `true`

### printSortColumn

* type: String
* description: set column field name to sort by for the printed table 
* default: `undefined`

### printSortOrder

* type: String
* description: Valid values: 'asc', 'desc'. Relevant only if printSortColumn is set 
* default: `'asc'`

### printPageBuilder

* type: Function
* description: Receive html `<table>` element as string parameter, returns html string for printing. Used for styling and adding header or footer.
* default: `function(table){return printPageBuilderDefault(table)}`

## Column options

### printFilter

* type: String
* description: set value to filter the printed data by this column. 
* default: `undefined`

### printIgnore

* type: Boolean
* description: set true to hide this column in the printed page. 
* default: `false`

### printFormatter

* type: Function
* description: function(value, row, index) - returns a string. Formats the cell values for this column in the printed table. Function behaviour is similar to the 'formatter' column option
* default: `undefined`

## Icons

* print: `'glyphicon-print icon-share'`
