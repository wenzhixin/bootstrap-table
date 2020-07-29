---
layout: docs
title: Column Options
description: The column options API of Bootstrap Table.
group: api
toc: true
---

The column options is defined in `jQuery.fn.bootstrapTable.columnDefaults`.

## align

- **Attribute:** `data-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the column data. `'left'`, `'right'`, `'center'` can be used.

- **Default:** `undefined`

- **Example:** [Aligning Columns](https://examples.bootstrap-table.com/#column-options/aligning-columns.html)

## cardVisible

- **Attribute:** `data-card-visible`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide the columns item in card view state.

- **Default:** `true`

- **Example:** [Card Visible](https://examples.bootstrap-table.com/#column-options/card-visible.html)

## cellStyle

- **Attribute:** `data-cell-style`

- **Type:** `Function`

- **Detail:**

  The cell style formatter function, take four parameters:

  * `value`: the field value.
  * `row`: the row record data.
  * `index`: the row index.
  * `field`: the row field.

  Support classes or css.

- **Default:** `undefined`

- **Example:** [Cell Style](https://examples.bootstrap-table.com/#column-options/cell-style.html)

## checkbox

- **Attribute:** `data-checkbox`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a checkbox. The checkbox column has fixed width.

  If a value is given the Checkbox is automatically checked.
  Its also possible to check/uncheck the checkbox by use an formatter (return `true` to check, return `false` to uncheck).

- **Default:** `false`

- **Example:** [Column Checkbox](https://examples.bootstrap-table.com/#column-options/checkbox.html)

## checkboxEnabled

- **Attribute:** `data-checkbox-enabled`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to disable the the checkboxes/radioboxes.

- **Default:** `true`

- **Example:** [Checkbox Enabled](https://examples.bootstrap-table.com/#column-options/checkbox-enabled.html) and [Checkbox Disabled](https://examples.bootstrap-table.com/#column-options/checkbox-disabled.html)

## class

- **Attribute:** `class | data-class`

- **Type:** `String`

- **Detail:**

  The column class name.

- **Default:** `undefined`

- **Example:** [Column Class](https://examples.bootstrap-table.com/#column-options/class.html)

## clickToSelect

- **Attribute:** `data-click-to-select`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to select checkbox or radiobox when clicking rows.

- **Default:** `false`

- **Example:** [Click to Select](https://examples.bootstrap-table.com/#column-options/click-to-select.html)

## colspan

- **Attribute:** `colspan | data-colspan`

- **Type:** `Number`

- **Detail:**

  Indicate how many columns a cell should take up.

- **Default:** `undefined`

- **Example:** [Rowspan Colspan](https://examples.bootstrap-table.com/#column-options/rowspan-colspan.html)

## detailFormatter

- **Attribute:** `data-detail-formatter`

- **Type:** `Function`

- **Detail:**

  Format your detail view when `detailView` and `detailViewByClick` is set to `true`. Return a `String` and it will be appended into the detail view cell, optionally render the element directly using the third parameter which is a jQuery element of the target cell.

  Fallback is the detail-formatter of the table.

- **Default:** `function(index, row, $element) { return '' }`

- **Example:** [Detail Formatter](https://examples.bootstrap-table.com/#column-options/detail-formatter.html)

## escape

- **Attribute:** `data-escape`

- **Type:** `Boolean`

- **Detail:**

  Escapes a string for insertion into HTML, replacing &, <, >, ", \`, and ' characters.

- **Default:** `false`

- **Example:** [Column Escape](https://examples.bootstrap-table.com/#column-options/escape.html)

## events

- **Attribute:** `data-events`

- **Type:** `Object`

- **Detail:**

  The cell events listener when you use formatter function, take four parameters:

  * `event`: the jQuery event.
  * `value`: the field value.
  * `row`: the row record data.
  * `index`: the row index.

  Example code:

   {% highlight html %}
  <th .. data-events="operateEvent">
  var operateEvents = {
    'click .like': function (e, value, row, index) {}
  }
  {% endhighlight %}

- **Default:** `undefined`

- **Example:** [Column Events](https://examples.bootstrap-table.com/#column-options/events.html)
## falign

- **Attribute:** `data-falign`

- **Type:** `String`

- **Detail:**

  Indicate how to align the table footer. `'left'`, `'right'`, `'center'` can be used.

- **Default:** `undefined`

- **Example:** [Aligning Footer](https://examples.bootstrap-table.com/#column-options/aligning-footer.html)

## field

- **Attribute:** `data-field`

- **Type:** `String`

- **Detail:**

  The column field name. This field must be unique, or some unknown problems may occur.

- **Default:** `undefined`

- **Example:** [Column Field](https://examples.bootstrap-table.com/#column-options/field.html)

## footerFormatter

- **Attribute:** `data-footer-formatter`

- **Type:** `Function`

- **Detail:**

  The context (this) is the column Object.

  The function, takes two parameters:

  * `data`: Array of all the data rows.
  * `value`: If footer data is set, the value of the footer column.

  the function should return a string with the text to show in the footer cell.

  If you fetch data from a server and tries to set the footer value from the server response, please use the `footerField` Option.

- **Default:** `undefined`

- **Example:** [Footer Formatter](https://examples.bootstrap-table.com/#column-options/footer-formatter.html)

## formatter

- **Attribute:** `data-formatter`

- **Type:** `Function`

- **Detail:**

  The context (this) is the column Object.

  The cell formatter function, take four parameters:

  * `value`: the field value.
  * `row`: the row record data.
  * `index`: the row index.
  * `field`: the row field.

- **Default:** `undefined`

- **Example:** [Column Formatter](https://examples.bootstrap-table.com/#column-options/formatter.html)

## halign

- **Attribute:** `data-halign`

- **Type:** `String`

- **Detail:**

  Indicate how to align the table header. `'left'`, `'right'`, `'center'` can be used.

- **Default:** `undefined`

- **Example:** [Aligning Columns](https://examples.bootstrap-table.com/#column-options/aligning-columns.html)

## order

- **Attribute:** `data-order`

- **Type:** `String`

- **Detail:**

  The default sort order, can only be `'asc'` or `'desc'`.

- **Default:** `'asc'`

- **Example:** [Sort Name Order](https://examples.bootstrap-table.com/#column-options/sort-name-order.html)

## radio

- **Attribute:** `data-radio`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a radio. The radio column has fixed width.

  If a value is given the Checkbox is automatically checked.
  Its also possible to check/uncheck the radio by use an formatter (return `true` to check, return `false` to uncheck).

- **Default:** `false`

- **Example:** [Column Radio](https://examples.bootstrap-table.com/#column-options/radio.html)

## rowspan

- **Attribute:** `rowspan | data-rowspan`

- **Type:** `Number`

- **Detail:**

  Indicate how many rows a cell should take up.

- **Default:** `undefined`

- **Example:** [Rowspan Colspan](https://examples.bootstrap-table.com/#column-options/rowspan-colspan.html)

## searchable

- **Attribute:** `data-searchable`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to search data for this column.

- **Default:** `true`

- **Example:** [Column Searchable](https://examples.bootstrap-table.com/#column-options/searchable.html)

## searchFormatter

- **Attribute:** `data-search-formatter`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to search use formatted data.

- **Default:** `true`

- **Example:** [Search Formatter](https://examples.bootstrap-table.com/#column-options/search-formatter.html)

## searchHighlightFormatter

- **Attribute:** `data-search-highlight-formatter`

- **Type:** `Boolean|Function`

- **Detail:**

  Define a `function` to use a custom highlight formatter for the [search highlight](https://bootstrap-table.com/docs/api/table-options/#searchhighlight) option.

- **Default:** `true`

- **Example:** [Searchable Highlight Formatter](https://examples.bootstrap-table.com/#column-options/search-highlight-formatter.html)

## showSelectTitle

- **Attribute:** `data-show-select-title`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the title of column with 'radio' or 'singleSelect' 'checkbox' option.

- **Default:** `false`

- **Example:** [Show Select Title](https://examples.bootstrap-table.com/#column-options/show-select-title.html)

## sortable

- **Attribute:** `data-sortable`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to allow the column can be sorted.

- **Default:** `false`

- **Example:** [Column Sortable](https://examples.bootstrap-table.com/#column-options/sortable.html)

## sorter

- **Attribute:** `data-sorter`

- **Type:** `Function`

- **Detail:**

  The custom field sort function that used to do local sorting, take four parameters:

  * `fieldA`: the first field value.
  * `fieldB`: the second field value.
  * `rowA`: the first row.
  * `rowB`: the second row.

  Expected return values: `-1, 0, 1`.

- **Default:** `undefined`

- **Example:** [Column Sorter](https://examples.bootstrap-table.com/#column-options/sorter.html)

## sortName

- **Attribute:** `data-sort-name`

- **Type:** `String`

- **Detail:**

  Provide a customizable sort-name, not the default sort-name in the header, or the field name of the column. For example, a column might display the value of fieldName of 'html' such as `<b><span style="color:red">abc</span></b>`, but a fieldName to sort is 'content' with the value of `'abc'`.

- **Default:** `undefined`

- **Example:** [Sort Name Order](https://examples.bootstrap-table.com/#column-options/sort-name-order.html)

## switchable

- **Attribute:** `data-switchable`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to disable the switchable of columns item.

- **Default:** `true`

- **Example:** [Column Switchable](https://examples.bootstrap-table.com/#column-options/switchable.html)

## title

- **Attribute:** `data-title`

- **Type:** `String`

- **Detail:**

  The column title text.

- **Default:** `undefined`

- **Example:** [Column Title](https://examples.bootstrap-table.com/#column-options/title.html)

## titleTooltip

- **Attribute:** `data-title-tooltip`

- **Type:** `String`

- **Detail:**

  The column title tooltip text. This option also support the title HTML attribute.

- **Default:** `undefined`

- **Example:** [Title Tooltip](https://examples.bootstrap-table.com/#column-options/title-tooltip.html)

## valign

- **Attribute:** `data-valign`

- **Type:** `String`

- **Detail:**

  Indicate how to align the cell data. `'top'`, `'middle'`, `'bottom'` can be used.

- **Default:** `undefined`

- **Example:** [Aligning Columns](https://examples.bootstrap-table.com/#column-options/aligning-columns.html)

## visible

- **Attribute:** `data-visible`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide the columns item.

- **Default:** `true`


- **Example:** [Column Visible](https://examples.bootstrap-table.com/#column-options/visible.html)

## width

- **Attribute:** `data-width`

- **Type:** `Number`

- **Detail:**

  The width of column. If not defined, the width will auto expand to fit its contents. Though if the table is left responsive and sized too small this `'width'` might be ignored (use min/max-width via class or such then). The default used Unit is 'px', use `widthUnit` to change it!

- **Default:** `undefined`

- **Example:** [Column Width](https://examples.bootstrap-table.com/#column-options/width.html)

## widthUnit

- **Attribute:** `data-width-unit`

- **Type:** `String`

- **Detail:**

  Defines the unit which is used for the option `width`.

- **Default:** `px`

- **Example:** [Width Unit](https://examples.bootstrap-table.com/#column-options/width-unit.html)
