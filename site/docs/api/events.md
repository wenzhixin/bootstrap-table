---
layout: docs
title: Events
description: The Events API of Bootstrap Table.
group: api
toc: true
---

Events can be bound in two ways:
- via the option object
- via jquery event handler

Binding via the options object:
{% highlight html %}
// Here, you can expect to have as the last parameter the bootstrap-table object

$('#table').bootstrapTable({
  onEventName: function (arg1, arg2, ...) {
    // ...
  }
})
{% endhighlight %}

Binding via the jquery event handler:
{% highlight html %}
// Here, you can expect to have in the 'e' variable the sender property, which is the bootstrap-table object

$('#table').on('event-name.bs.table', function (e, arg1, arg2, ...) {
  // ...
})
{% endhighlight %}

*Hint: if you use the jquery event handler, make sure to bind the event listener before the event is executed!*

## onAll

- **jQuery Event:** `all.bs.table`

- **Parameter:** `name, args`

- **Detail:**

  It fires when any event triggers. The parameters contain:

  * `name`: the event name,
  * `args`: the event data.

## onCheck

- **jQuery Event:** `check.bs.table`

- **Parameter:** `row, $element`

- **Detail:**

  It fires when the user checks a row. The parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the DOM element checked.

## onCheckAll

- **jQuery Event:** `check-all.bs.table`

- **Parameter:** `rowsAfter, rowsBefore`

- **Detail:**

  It fires when the user checks all rows. The parameters contain:

  * `rowsAfter`: array of records of the now checked rows.
  * `rowsBefore`: array of records of the checked rows before.

## onCheckSome

- **jQuery Event:** `check-some.bs.table`

- **Parameter:** `rows`

- **Detail:**

  It fires when the user checks some rows. The parameters contain:

  * `rows`: array of records corresponding to newly checked rows.

## onClickCell

- **jQuery Event:** `click-cell.bs.table`

- **Parameter:** `field, value, row, $element`

- **Detail:**

  It fires when the user clicks a cell. The parameters contain:

  * `field`: the field name corresponding to the clicked cell.
  * `value`: the data value corresponding to the clicked cell.
  * `row`: the record corresponding to the clicked row.
  * `$element`: the td element.

## onClickRow

- **jQuery Event:** `click-row.bs.table`

- **Parameter:** `row, $element, field`

- **Detail:**

  It fires when the user clicks a row. The parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the tr element.
  * `field`: the field name corresponding to the clicked cell.

## onCollapseRow

- **jQuery Event:** `collapse-row.bs.table`

- **Parameter:** `index, row, detailView`

- **Detail:**

  It fires when you click the detail icon to collapse the detail view. The parameters contain:

  * `index`: the index of the collapsed row.
  * `row`: the record corresponding to the collapsed row.
  * `detailView`: the collapsed detailView.

## onColumnSwitch

- **jQuery Event:** `column-switch.bs.table`

- **Parameter:** `field, checked`

- **Detail:**

  It fires when switch the column visible ([showColumns](/docs/api/table-options/#showcolumns)). The parameters contain:

  * `field`: the field name corresponding to the switch column.
  * `checked`: the checked state of the column.

## onColumnSwitchAll

- **jQuery Event:** `column-switch-all.bs.table`

- **Parameter:** `checked`

- **Detail:**

  It fires when toggle all columns. The parameters contain:

  * `checked`: the checked state of the column.

## onDblClickCell

- **jQuery Event:** `dbl-click-cell.bs.table`

- **Parameter:** `field, value, row, $element`

- **Detail:**

  It fires when the user double click a cell. The parameters contain:

  * `field`: the field name corresponding to the clicked cell.
  * `value`: the data value corresponding to the clicked cell.
  * `row`: the record corresponding to the clicked row.
  * `$element`: the td element.

## onDblClickRow

- **jQuery Event:** `dbl-click-row.bs.table`

- **Parameter:** `row, $element, field`

- **Detail:**

  It fires when the user doubles click a row. The parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the tr element.
  * `field`: the field name corresponding to the clicked cell.

## onExpandRow

- **jQuery Event:** `expand-row.bs.table`

- **Parameter:** `index, row, $detail`

- **Detail:**

  It fires when you click the detail icon to expand the detail view. The parameters contain:

  * `index`: the index of the expanded row.
  * `row`: the record corresponding to the expanded row.
  * `$detail`: the DOM element of the detail `div` after the current `tr` element, you can use jQuery methods to custom the detail views.

## onLoadError

- **jQuery Event:** `load-error.bs.table`

- **Parameter:** `status, jqXHR`

- **Detail:**

  It fires when some errors occur to load remote data. The parameters contain:

  * `status`: the status code of `jqXHR`.
  * `jqXHR`: jqXHR object, which is a super set of the XMLHTTPRequest object. For more information, see the [jqXHR Type](http://api.jquery.com/Types/#jqXHR).

## onLoadSuccess

- **jQuery Event:** `load-success.bs.table`

- **Parameter:** `data`

- **Detail:**

  It fires when remote data is loaded successfully. The parameters contain:

  * `data`: the remote data loaded into the table. (Note: this data cannot be modified once it’s loaded into the table. If you need to process received data before using it in the table, write your custom [responseHandler](/docs/api/table-options/#responsehandler) instead.)
  * `status`: the status code of `jqXHR`.
  * `jqXHR`: jqXHR object, which is a super set of the XMLHTTPRequest object. For more information, see the [jqXHR Type](http://api.jquery.com/Types/#jqXHR).

## onPageChange

- **jQuery Event:** `page-change.bs.table`

- **Parameter:** `number, size`

- **Detail:**

  It fires when changing the page number or page size. The parameters contain:

  * `number`: the page number.
  * `size`: the page size.

## onPostBody

- **jQuery Event:** `post-body.bs.table`

- **Parameter:** `data`

- **Detail:**

  It fires after the table body are rendered and available in the DOM. The parameters contain:

  * `data`: the rendered data.

## onPostFooter

- **jQuery Event:** `post-footer.bs.table`

- **Parameter:** `$tableFooter`

- **Detail:**

  It fires after the footer are rendered and available in the DOM. The parameters contain:

  * `$tableFooter`: the DOM element of the footer.

## onPostHeader

- **jQuery Event:** `post-header.bs.table`

- **Parameter:** `undefined`

- **Detail:**

  It fires after the table header is rendered and available in the DOM.

## onPreBody

- **jQuery Event:** `pre-body.bs.table`

- **Parameter:** `data`

- **Detail:**

  It fires before the table body are rendered. The parameters contain:

  * `data`: the rendered data.

## onRefresh

- **jQuery Event:** `refresh.bs.table`

- **Parameter:** `params`

- **Detail:**

  It fires after the click of the refresh button. The parameters contain:

  * `params`: the additional parameters request to the server.

## onRefreshOptions

- **jQuery Event:** `refresh-options.bs.table`

- **Parameter:** `options`

- **Detail:**

  It fires after refreshing the options, and before destroying and init the table. The parameters contain:

  * `options`: the table options object.

## onResetView

- **jQuery Event:** `reset-view.bs.table`

- **Parameter:** `undefined`

- **Detail:**

  It fires when resetting the view of the table.

## onScrollBody

- **jQuery Event:** `scroll-body.bs.table`

- **Parameter:** `$tableBody`

- **Detail:**

  It fires when the table body scroll.
## onSearch

- **jQuery Event:** `search.bs.table`

- **Parameter:** `text`

- **Detail:**

  It fires when searching the table. The parameters contain:

  * `text`: the text of the search input.

## onSort

- **jQuery Event:** `sort.bs.table`

- **Parameter:** `name, order`

- **Detail:**

  It fires when the user sort a column. The parameters contain:

  * `name`: the sort column field name.
  * `order`: the sort column order.

## onToggle

- **jQuery Event:** `toggle.bs.table`

- **Parameter:** `cardView`

- **Detail:**

  It fires when toggling the view of the table. The parameters contain:

  * `cardView`: the cardView state of the table.

## onTogglePagination

- **jQuery Event:** `toggle-pagination.bs.table`

- **Parameter:** `state`

- **Detail:**

  It fires when the pagination is toggled:

  * `state`: the new pagination state (`true`-> Pagination is enabled, `false` -> Pagination is disabled )

## onUncheck

- **jQuery Event:** `uncheck.bs.table`

- **Parameter:** `row, $element`

- **Detail:**

  It fires when the user unchecks a row. The parameters contain:

  * `row`: the record corresponding to the clicked row.
  * `$element`: the DOM element unchecked.

## onUncheckAll

- **jQuery Event:** `uncheck-all.bs.table`

- **Parameter:** `rowsAfter, rowsBefore`

- **Detail:**

  It fires when the user unchecks all rows. The parameters contain:

  * `rowsAfter`: array of records of the now checked rows.
  * `rowsBefore`: array of records of the checked rows before.

## onUncheckSome

- **jQuery Event:** `uncheck-some.bs.table`

- **Parameter:** `rows`

- **Detail:**

  It fires when the user unchecks some rows. The parameters contain:

  * `rows`: array of records corresponding to previously checked rows.

## onVirtualScroll

- **jQuery Event:** `virtual-scroll.bs.table`

- **Parameter:** `startIndex, endIndex`

- **Detail:**

  It fires when the user scrolls the virtual scroll. The parameters contain:

  * `startIndex`: the start row index of the virtual scroll.
  * `endIndex`: the end row index of the virtual scroll.
