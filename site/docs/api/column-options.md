---
layout: docs
title: Column Options
description: The column options API of Bootstrap Table.
group: api
toc: true
---

The column options is defined in `jQuery.fn.bootstrapTable.columnDefaults`.

## field

- **Attribute:** `data-field`

- **Type:** `String`

- **Detail:**

  The column field name.

- **Default:** `undefined`

## title

- **Attribute:** `data-title`

- **Type:** `String`

- **Detail:**

  The column title text.

- **Default:** `undefined`

## titleTooltip

- **Attribute:** `data-title-tooltip`

- **Type:** `String`

- **Detail:**

  The column title tooltip text. This option also support the title HTML attribute.

- **Default:** `undefined`

## class

- **Attribute:** `class | data-class`

- **Type:** `String`

- **Detail:**

  The column class name.

- **Default:** `undefined`

## width

- **Attribute:** `data-width`

- **Type:** `Number`

- **Detail:**

  The width of column. If not defined, the width will auto expand to fit its contents. Though if the table is left responsive and sized too small this `'width'` might be ignored (use min/max-width via class or such then). The default used Unit is 'px', use `widthUnit` to change it!

- **Default:** `undefined`

## widthUnit

- **Attribute:** `data-width-unit`

- **Type:** `String`

- **Detail:**

  Defines the unit which is used for the option `width`.

- **Default:** `px`

## rowspan

- **Attribute:** `rowspan | data-rowspan`

- **Type:** `Number`

- **Detail:**

  Indicate how many rows a cell should take up.

- **Default:** `undefined`

## colspan

- **Attribute:** `colspan | data-colspan`

- **Type:** `Number`

- **Detail:**

  Indicate how many columns a cell should take up.

- **Default:** `undefined`

## align

- **Attribute:** `data-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the column data. `'left'`, `'right'`, `'center'` can be used.

- **Default:** `undefined`

## halign

- **Attribute:** `data-halign`

- **Type:** `String`

- **Detail:**

  Indicate how to align the table header. `'left'`, `'right'`, `'center'` can be used.

- **Default:** `undefined`

## falign

- **Attribute:** `data-falign`

- **Type:** `String`

- **Detail:**

  Indicate how to align the table footer. `'left'`, `'right'`, `'center'` can be used.

- **Default:** `undefined`

## valign

- **Attribute:** `data-valign`

- **Type:** `String`

- **Detail:**

  Indicate how to align the cell data. `'top'`, `'middle'`, `'bottom'` can be used.

- **Default:** `undefined`

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

## radio

- **Attribute:** `data-radio`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a radio. The radio column has fixed width.
  
  If a value is given the Checkbox is automatically checked.  
  Its also possible to check/uncheck the radio by use an formatter (return `true` to check, return `false` to uncheck).

- **Default:** `false`

## checkbox

- **Attribute:** `data-checkbox`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a checkbox. The checkbox column has fixed width.
  
  If a value is given the Checkbox is automatically checked.  
  Its also possible to check/uncheck the checkbox by use an formatter (return `true` to check, return `false` to uncheck). 

- **Default:** `false`

## checkboxEnabled

- **Attribute:** `data-checkbox-enabled`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to disable the the checkboxes/radioboxes.

- **Default:** `true`

## clickToSelect

- **Attribute:** `data-click-to-select`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to select checkbox or radio when the column is clicked.

- **Default:** `true`

## showSelectTitle

- **Attribute:** `data-show-select-title`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the title of column with 'radio' or 'singleSelect' 'checkbox' option.

- **Default:** `false`

## sortable

- **Attribute:** `data-sortable`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to allow the column can be sorted.

- **Default:** `false`

## sortName

- **Attribute:** `data-sort-name`

- **Type:** `String`

- **Detail:**

  Provide a customizable sort-name, not the default sort-name in the header, or the field name of the column. For example, a column might display the value of fieldName of 'html' such as `<b><span style="color:red">abc</span></b>`, but a fieldName to sort is 'content' with the value of `'abc'`.

- **Default:** `undefined`

## order

- **Attribute:** `data-order`

- **Type:** `String`

- **Detail:**

  The default sort order, can only be `'asc'` or `'desc'`.

- **Default:** `'asc'`

## sorter

- **Attribute:** `data-sorter`

- **Type:** `Function`

- **Detail:**

  The custom field sort function that used to do local sorting, take four parameters:

  * `a`: the first field value.
  * `b`: the second field value.
  * `rowA`: the first row.
  * `rowB`: the second row.

- **Default:** `undefined`

## visible

- **Attribute:** `data-visible`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide the columns item.

- **Default:** `true`

## switchable

- **Attribute:** `data-switchable`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to disable the switchable of columns item.

- **Default:** `true`

## cardVisible

- **Attribute:** `data-card-visible`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide the columns item in card view state.

- **Default:** `true`

## searchable

- **Attribute:** `data-searchable`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to search data for this column.

- **Default:** `true`

## formatter

- **Attribute:** `data-formatter`

- **Type:** `Function`

- **Detail:**

  The context (this) is the column Object.

  The cell formatter function, take three parameters:

  * `value`: the field value.
  * `row`: the row record data.
  * `index`: the row index.
  * `field`: the row field.

- **Default:** `undefined`

## footerFormatter

- **Attribute:** `data-footer-formatter`

- **Type:** `Function`

- **Detail:**

  The context (this) is the column Object.

  The function, take one parameter:

  * `data`: Array of all the  data rows.

  the function should return a string with the text to show in the footer cell.

- **Default:** `undefined`

## detailFormatter

- **Attribute:** `data-detail-formatter`

- **Type:** `Function`

- **Detail:**

  Format your detail view when `detailView` and `detailViewByClick` is set to `true`. Return a `String` and it will be appended into the detail view cell, optionally render the element directly using the third parameter which is a jQuery element of the target cell.

  Fallback is the detail-formatter of the table.

- **Default:** `function(index, row, element) { return '' }`

## searchFormatter

- **Attribute:** `data-search-formatter`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to search use formatted data.

- **Default:** `true`

## escape

- **Attribute:** `data-escape`

- **Type:** `Boolean`

- **Detail:**

  Escapes a string for insertion into HTML, replacing &, <, >, ", \`, and ' characters.

- **Default:** `false`

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
