# Table Filter Control

Use Plugin: [bootstrap-table-filter-control](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/filter-control)
Dependence if you use the datepicker option: [jquery-ui](http://code.jquery.com/ui/1.11.4/jquery-ui.js) v1.11.4 (must include the css file), </br>
[jquery-ui css](http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css) v1.11.4

## Usage

```html
<script src="extensions/filter-control/bootstrap-table-filter-control.js"></script>
```

## Options

### filterControl

* type: Boolean
* description: Set true to add an `input` or `select` into the column.
* default: `false`

## Column options

### filterControl

* type: String
* description: Set `input`: show an input control, `select`: show a select control, 'datepicker': show a datepicker control.
* default: `undefined`

### filterDatepickerOptions
* type: Object
* description: If the datepicker option is set use this option to configure the datepicker with the native options. Use this way: `data-filter-datepicker-options='{"firstDay":2, "changeMonth": true, "showButtonPanel": true}'`.
* default: `undefined`

## Events

### onColumnSearch(column-search.bs.table)

* Fired when we are searching into the column data