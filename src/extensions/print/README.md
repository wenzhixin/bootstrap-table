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

## Icons

* print: `'glyphicon-print icon-share'`
