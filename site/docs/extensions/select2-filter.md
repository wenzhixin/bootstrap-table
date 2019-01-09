# Table Select2 Filter

Use Plugin: [bootstrap-table-select2-filter](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/select2-filter) </br>
Dependence if you use the select2 option: [Select2](https://select2.github.io/) v4.0.0 upper

## Usage

```html
<script src="extensions/select2-filter/bootstrap-table-select2-filter.js"></script>
```

## Options

### filter

* type: Boolean
* description: enabled select2 filter exetension.
* default: `false`

### filterValues

* type: Object
* description: Set default selected value. <br>Example: <code>{columnA.field.:'Column A Selected Value',columnB.field:'Column B Selected Value'}</code>
* default: `undefined`

### filterTemplate
* type: Object
* description: customize default filter template. <br>Example: <code> {
&nbsp;&nbsp;input: function (bootstrapTable, column, isVisible) {
&nbsp;&nbsp;return `'<input type="text" class="form-control input-sm" data-filter-field="' + column.field + '" style="width: 100%; visibility:' + isVisible + '">'`;
          }
</code>

## Column options

### filter

* type: Object
* description: Set filter option to configure the filter. <br>Example: {type:'select', data:["itemA", "itemB", "itemC"]}
	* type: default support adding `input` or `select` into the column.
	* data: need to set when type is `select` , filter data list. (The same as [Select2 Options](http://select2.github.io/examples.html#data))
* default: `undefined`
* customize filter: <code>  filter: {
&nbsp;template: // HTML String or jQuery Object,
&nbsp;setFilterValue: function ($filter, field, value) { <br>&nbsp;&nbsp;&nbsp;&nbsp;// set template default value.
&nbsp;}
            }
</code>

## Methods

### setSelect2Data


* Set column's filter data.
  * Parameters
      * String : column field.
      * Object : filter data list.
  * Example: <code> $table.bootstrapTable("setSelect2Data", "columnA.filed", ["itemA", "itemB", "itemC"]);</code>


### setFilterValues
  * Parameters
      * Object : column field / default value.
  * Example: <code> $table.bootstrapTable("setFilterValues",  {columnA.field.:'Column A Selected Value',columnB.field:'Column B Selected Value'});</code>