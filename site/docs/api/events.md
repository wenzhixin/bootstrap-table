---
layout: docs
title: Events
description: The Events API of Bootstrap Table.
group: api
toc: true
---

Events can be binded in two ways:
- via the option object
- via jquery event handler

Binding via the option object:
{% highlight html %}
// Here you can expect to have as last parameter the boostrap-table object

$('#table').bootstrapTable({
  onEventName: function (arg1, arg2, ...) {
    // ...
  }
})
{% endhighlight %}

Binding via the jquery event handler:   
{% highlight html %}
// Here you can expect to have in the 'e' variable the sender property which is the boostrap-table object

$('#table').on('event-name.bs.table', function (e, arg1, arg2, ...) {
  // ...
})
{% endhighlight %}

*Hint: if you use the jquery event handler, make sure to bind the event listener before the event was executed!*

## onAll

- **jQuery Event:** `all.bs.table`

- **Parameter:** `name, args`

- **Detail:**

  Fires when all events trigger, the parameters contain:

  * `name`: the event name,
  * `args`: the event data.

## onCheck

- **jQuery Event:** `check.bs.table`

- **Parameter:** `row, $element`

- **Detail:**

  Fires when user check a row, the parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the DOM element checked.

## onCheckAll

- **jQuery Event:** `check-all.bs.table`

- **Parameter:** `rowsAfter, rowsBefore`

- **Detail:**

  Fires when user check all rows, the parameters contain:

  * `rowsAfter`: array of records of the now checked rows.
  * `rowsBefore`: array of records of the checked rows before.

## onCheckSome

- **jQuery Event:** `check-some.bs.table`

- **Parameter:** `rows`

- **Detail:**

  Fires when user check some rows, the parameters contain:

  * `rows`: array of records corresponding to newly checked rows.

## onClickCell

- **jQuery Event:** `click-cell.bs.table`

- **Parameter:** `field, value, row, $element`

- **Detail:**

  Fires when user click a cell, the parameters contain:

  * `field`: the field name corresponding to the clicked cell.
  * `value`: the data value corresponding to the clicked cell.
  * `row`: the record corresponding to the clicked row.
  * `$element`: the td element.

## onClickRow

- **jQuery Event:** `click-row.bs.table`

- **Parameter:** `row, $element, field`

- **Detail:**

  Fires when user click a row, the parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the tr element.
  * `field`: the field name corresponding to the clicked cell.

## onCollapseRow

- **jQuery Event:** `collapse-row.bs.table`

- **Parameter:** `index, row, detailView`

- **Detail:**

  Fires when click the detail icon to collapse the detail view, the parameters contain:

  * `index`: the index of the collapsed row.
  * `row`: the record corresponding to the collapsed row.
  * `detailView`: the collapsed detailView.

## onColumnSwitch

- **jQuery Event:** `column-switch.bs.table`

- **Parameter:** `field, checked`

- **Detail:**

  Fires when switch the column visible ([showColumns](/docs/api/table-options/#showcolumns)), the parameters contain:

  * `field`: the field name corresponding to the switch column.
  * `checked`: the checked state of the column.

## onDblClickCell

- **jQuery Event:** `dbl-click-cell.bs.table`

- **Parameter:** `field, value, row, $element`

- **Detail:**

  Fires when user double click a cell, the parameters contain:

  * `field`: the field name corresponding to the clicked cell.
  * `value`: the data value corresponding to the clicked cell.
  * `row`: the record corresponding to the clicked row.
  * `$element`: the td element.

## onDblClickRow

- **jQuery Event:** `dbl-click-row.bs.table`

- **Parameter:** `row, $element, field`

- **Detail:**

  Fires when user double click a row, the parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the tr element.
  * `field`: the field name corresponding to the clicked cell.

## onExpandRow

- **jQuery Event:** `expand-row.bs.table`

- **Parameter:** `index, row, $detail`

- **Detail:**

  Fires when click the detail icon to expand the detail view, the parameters contain:

  * `index`: the index of the expanded row.
  * `row`: the record corresponding to the expanded row.
  * `$detail`: the DOM element of the detail `div` after current `tr` element, you can use jQuery methods to custom the detail views.

## onLoadError

- **jQuery Event:** `load-error.bs.table`

- **Parameter:** `status, jqXHR`

- **Detail:**

  Fires when some errors occur to load remote data, the parameters contain:

  * `status`: the status code of `jqXHR`.
  * `jqXHR`: jqXHR object, which is a super set of the XMLHTTPRequest object. For more information, see the [jqXHR Type](http://api.jquery.com/Types/#jqXHR).

## onLoadSuccess

- **jQuery Event:** `load-success.bs.table`

- **Parameter:** `data`

- **Detail:**

  Fires when remote data is loaded successfully, the parameters contain:

  * `data`: the remote data.
  * `status`: the status code of `jqXHR`.
  * `jqXHR`: jqXHR object, which is a super set of the XMLHTTPRequest object. For more information, see the [jqXHR Type](http://api.jquery.com/Types/#jqXHR).

## onPageChange

- **jQuery Event:** `page-change.bs.table`

- **Parameter:** `number, size`

- **Detail:**

  Fires when change the page number or page size, the parameters contain:

  * `number`: the page number.
  * `size`: the page size.

## onPostBody

- **jQuery Event:** `post-body.bs.table`

- **Parameter:** `data`

- **Detail:**

  Fires after the table body is rendered and available in the DOM, the parameters contain:

  * `data`: the rendered data.

## onPostFooter

- **jQuery Event:** `post-footer.bs.table`

- **Parameter:** `$tableFooter`

- **Detail:**

  Fires after the footer is rendered and available in the DOM, the parameters contain:

  * `$tableFooter`: the DOM element of the footer.

## onPostHeader

- **jQuery Event:** `post-header.bs.table`

- **Parameter:** `undefined`

- **Detail:**

  Fires after the table header is rendered and available in the DOM.

## onPreBody

- **jQuery Event:** `pre-body.bs.table`

- **Parameter:** `data`

- **Detail:**

  Fires before the table body is rendered, the parameters contain:

  * `data`: the rendered data.

## onRefresh

- **jQuery Event:** `refresh.bs.table`

- **Parameter:** `params`

- **Detail:**

  Fires after the click the refresh button, the parameters contain:

  * `params`: the additional parameters request to the server.

## onRefreshOptions

- **jQuery Event:** `refresh-options.bs.table`

- **Parameter:** `options`

- **Detail:**

  Fires after refresh the options and before destroy and init the table, the parameters contain:

  * `options`: the table options object.

## onResetView

- **jQuery Event:** `reset-view.bs.table`

- **Parameter:** `undefined`

- **Detail:**

  Fires when reset view of the table.

## onScrollBody

- **jQuery Event:** `scroll-body.bs.table`

- **Parameter:** `$tableBody`

- **Detail:**

  Fires when table body scroll.
## onSearch

- **jQuery Event:** `search.bs.table`

- **Parameter:** `text`

- **Detail:**

  Fires when search the table, the parameters contain:

  * `text`: the text of the search input.

## onSort

- **jQuery Event:** `sort.bs.table`

- **Parameter:** `name, order`

- **Detail:**

  Fires when user sort a column, the parameters contain:

  * `name`: the sort column field name.
  * `order`: the sort column order.

## onToggle

- **jQuery Event:** `toggle.bs.table`

- **Parameter:** `cardView`

- **Detail:**

  Fires when toggle the view of table, the parameters contain:

  * `cardView`: the cardView state of the table.

## onUncheck

- **jQuery Event:** `uncheck.bs.table`

- **Parameter:** `row, $element`

- **Detail:**

  Fires when user uncheck a row, the parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the DOM element unchecked.

## onUncheckAll

- **jQuery Event:** `uncheck-all.bs.table`

- **Parameter:** `rowsAfter, rowsBefore`

- **Detail:**

  Fires when user uncheck all rows, the parameters contain:

  * `rowsAfter`: array of records of the now checked rows.
  * `rowsBefore`: array of records of the checked rows before.

## onUncheckSome

- **jQuery Event:** `uncheck-some.bs.table`

- **Parameter:** `rows`

- **Detail:**

  Fires when user uncheck some rows, the parameters contain:

  * `rows`: array of records corresponding to previously checked rows.
