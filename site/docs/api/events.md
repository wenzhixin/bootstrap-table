---
layout: docs
title: Events
description: The Events API of Bootstrap Table.
group: api
toc: true
---

To use event syntax:

{% highlight html %}
$('#table').bootstrapTable({
  onEventName: function (arg1, arg2, ...) {
    // ...
  }
})

$('#table').on('event-name.bs.table', function (e, arg1, arg2, ...) {
  // ...
})
{% endhighlight %}

## onAll

- **jQuery Event:** `all.bs.table`

- **Parameter:** `name, args`

- **Detail:**

  Fires when all events trigger, the parameters contain:

  * `name`: the event name,
  * `args`: the event data.

## onClickRow

- **jQuery Event:** `click-row.bs.table`

- **Parameter:** `row, $element, field`

- **Detail:**

  Fires when user click a row, the parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the tr element.
  * `field`: the field name corresponding to the clicked cell.

## onDblClickRow

- **jQuery Event:** `dbl-click-row.bs.table`

- **Parameter:** `row, $element, field`

- **Detail:**

  Fires when user double click a row, the parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the tr element.
  * `field`: the field name corresponding to the clicked cell.

## onClickCell

- **jQuery Event:** `click-cell.bs.table`

- **Parameter:** `field, value, row, $element`

- **Detail:**

  Fires when user click a cell, the parameters contain:

  * `field`: the field name corresponding to the clicked cell.
  * `value`: the data value corresponding to the clicked cell.
  * `row`: the record corresponding to the clicked row.
  * `$element`: the td element.

## onDblClickCell

- **jQuery Event:** `dbl-click-cell.bs.table`

- **Parameter:** `field, value, row, $element`

- **Detail:**

  Fires when user double click a cell, the parameters contain:

  * `field`: the field name corresponding to the clicked cell.
  * `value`: the data value corresponding to the clicked cell.
  * `row`: the record corresponding to the clicked row.
  * `$element`: the td element.

## onSort

- **jQuery Event:** `sort.bs.table`

- **Parameter:** `name, order`

- **Detail:**

  Fires when user sort a column, the parameters contain:

  * `name`: the sort column field name.
  * `order`: the sort column order.

## onCheck

- **jQuery Event:** `check.bs.table`

- **Parameter:** `row, $element`

- **Detail:**

  Fires when user check a row, the parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the DOM element checked.

## onUncheck

- **jQuery Event:** `uncheck.bs.table`

- **Parameter:** `row, $element`

- **Detail:**

  Fires when user uncheck a row, the parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the DOM element unchecked.

## onCheckAll

- **jQuery Event:** `check-all.bs.table`

- **Parameter:** `rowsAfter, rowsBefore`

- **Detail:**

  Fires when user check all rows, the parameters contain:

  * `rowsAfter`: array of records of the now checked rows.
  * `rowsBefore`: array of records of the checked rows before.

## onUncheckAll

- **jQuery Event:** `uncheck-all.bs.table`

- **Parameter:** `rowsAfter, rowsBefore`

- **Detail:**

  Fires when user uncheck all rows, the parameters contain:

  * `rowsAfter`: array of records of the now checked rows.
  * `rowsBefore`: array of records of the checked rows before.

## onCheckSome

- **jQuery Event:** `check-some.bs.table`

- **Parameter:** `rows`

- **Detail:**

  Fires when user check some rows, the parameters contain:

  * `rows`: array of records corresponding to newly checked rows.

## onUncheckSome

- **jQuery Event:** `uncheck-some.bs.table`

- **Parameter:** `rows`

- **Detail:**

  Fires when user uncheck some rows, the parameters contain:

  * `rows`: array of records corresponding to previously checked rows.

## onLoadSuccess

- **jQuery Event:** `load-success.bs.table`

- **Parameter:** `data`

- **Detail:**

  Fires when remote data is loaded successfully, the parameters contain:

  * `data`: the remote data.
  * `status`: the status code of `jqXHR` (from 1.15.5).
  * `jqXHR`: jqXHR object, which is a superset of the XMLHTTPRequest object. For more information, see the [jqXHR Type](http://api.jquery.com/Types/#jqXHR) (from 1.15.5).

## onLoadError

- **jQuery Event:** `load-error.bs.table`

- **Parameter:** `status, jqXHR`

- **Detail:**

  Fires when some errors occur to load remote data, the parameters contain:

  * `status`: the status code of `jqXHR`.
  * `jqXHR`: jqXHR object, which is a superset of the XMLHTTPRequest object. For more information, see the [jqXHR Type](http://api.jquery.com/Types/#jqXHR).

## onColumnSwitch

- **jQuery Event:** `column-switch.bs.table`

- **Parameter:** `field, checked`

- **Detail:**

  Fires when switch the column visible ([showColumns](/docs/api/table-options/#showcolumns)), the parameters contain:

  * `field`: the field name corresponding to the switch column.
  * `checked`: the checked state of the column.

## onPageChange

- **jQuery Event:** `page-change.bs.table`

- **Parameter:** `number, size`

- **Detail:**

  Fires when change the page number or page size, the parameters contain:

  * `number`: the page number.
  * `size`: the page size.

## onSearch

- **jQuery Event:** `search.bs.table`

- **Parameter:** `text`

- **Detail:**

  Fires when search the table, the parameters contain:

  * `text`: the text of the search input.

## onToggle

- **jQuery Event:** `toggle.bs.table`

- **Parameter:** `cardView`

- **Detail:**

  Fires when toggle the view of table, the parameters contain:

  * `cardView`: the cardView state of the table.

## onPreBody

- **jQuery Event:** `pre-body.bs.table`

- **Parameter:** `data`

- **Detail:**

  Fires before the table body is rendered, the parameters contain:

  * `data`: the rendered data.

## onPostBody

- **jQuery Event:** `post-body.bs.table`

- **Parameter:** `data`

- **Detail:**

  Fires after the table body is rendered and available in the DOM, the parameters contain:

  * `data`: the rendered data.

## onPostHeader

- **jQuery Event:** `post-header.bs.table`

- **Parameter:** `undefined`

- **Detail:**

  Fires after the table header is rendered and available in the DOM.

## onPostFooter

- **jQuery Event:** `post-footer.bs.table`

- **Parameter:** `$tableFooter`

- **Detail:**

  Fires after the footer is rendered and available in the DOM, the parameters contain:

  * `$tableFooter`: the DOM element of the footer.

## onExpandRow

- **jQuery Event:** `expand-row.bs.table`

- **Parameter:** `index, row, $detail`

- **Detail:**

  Fires when click the detail icon to expand the detail view, the parameters contain:

  * `index`: the index of the expanded row.
  * `row`: the record corresponding to the expanded row.
  * `$detail`: the DOM element of the detail `div` after current `tr` element, you can use jQuery methods to custom the detail views.

## onCollapseRow

- **jQuery Event:** `collapse-row.bs.table`

- **Parameter:** `index, row, detailView`

- **Detail:**

  Fires when click the detail icon to collapse the detail view, the parameters contain:

  * `index`: the index of the collapsed row.
  * `row`: the record corresponding to the collapsed row.
  * `detailView`: the collapsed detailView.

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

## onRefresh

- **jQuery Event:** `refresh.bs.table`

- **Parameter:** `params`

- **Detail:**

  Fires after the click the refresh button, the parameters contain:

  * `params`: the additional parameters request to the server.

## onScrollBody

- **jQuery Event:** `scroll-body.bs.table`

- **Parameter:**: `$tableBody` (from 1.15.5)

- **Detail:**

  Fires when table body scroll.
