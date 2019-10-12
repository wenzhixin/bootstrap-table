---
layout: docs
title: Methods
description: The Methods API of Bootstrap Table.
group: api
toc: true
---

The calling method syntax: `$('#table').bootstrapTable('method', parameter)`.

## getOptions

- **Parameter:** `undefined`

- **Detail:**

  Return the options object.

- **Example:** [Get Options](https://examples.bootstrap-table.com/#methods/get-options.html)

## refreshOptions

- **Parameter:** `options`

- **Detail:**

  Refresh the table `options`.

- **Example:** [Refresh Options](https://examples.bootstrap-table.com/#methods/refresh-options.html)

## getData

- **Parameter:** `params`

- **Detail:**

  Get the loaded data of table at the moment that this method is called

  * `useCurrentPage`: if set to true the method will return the data only in the current page.
  * `includeHiddenRows`: if set to true the method will include the hidden rows.

- **Example:** [Get Data](https://examples.bootstrap-table.com/#methods/getData.html)

## getSelections

- **Parameter:** `undefined`

- **Detail:**

  Return selected rows, when no record selected, an empty array will return.

- **Example:** [Get Selections](https://examples.bootstrap-table.com/#methods/get-selections.html)

## getAllSelections

- **Parameter:** `undefined`

- **Detail:**

  Return all selected rows contain search or filter, when no record selected, an empty array will return.

- **Example:** [Get All Selections](https://examples.bootstrap-table.com/#methods/get-all-selections.html)

## load

- **Parameter:** `data`

- **Detail:**

  Load the `data` to table, the old rows will be removed.

- **Example:** [Load](https://examples.bootstrap-table.com/#methods/load.html)

## append

- **Parameter:** `data`

- **Detail:**

  Append the `data` to table.

- **Example:** [Append](https://examples.bootstrap-table.com/#methods/append.html)

## prepend

- **Parameter:** `data`

- **Detail:**

  Prepend the `data` to table.

- **Example:** [Prepend](https://examples.bootstrap-table.com/#methods/prepend.html)

## remove

- **Parameter:** `params`

- **Detail:**

  Remove data from table, the params contain two properties:

  * `field`: the field name of remove rows.
  * `values`: the array of values for rows which should be removed.

- **Example:** [Remove](https://examples.bootstrap-table.com/#methods/remove.html)

## removeAll

- **Parameter:** `undefined`

- **Detail:**

  Remove all data from table.

- **Example:** [Remove All](https://examples.bootstrap-table.com/#methods/remove-all.html)

## insertRow

- **Parameter:** `params`

- **Detail:**

  Insert a new row, the params contain following properties:

  * `index`: the row index to insert into.
  * `row`: the row data.

- **Example:** [Insert Row](https://examples.bootstrap-table.com/#methods/insert-row.html)

## updateRow

- **Parameter:** `params`

- **Detail:**

  Update the specified row(s), each params contain following properties:

  * `index`: the row index to be updated.
  * `row`: the new row data.
  * `replace` (optional): set to `true` to replace the row instead of extending.

- **Example:** [Update Row](https://examples.bootstrap-table.com/#methods/update-row.html)

## getRowByUniqueId

- **Parameter:** `id`

- **Detail:**

  Get data from table, the row that contains the `id` passed by parameter.

- **Example:** [Get Row By Unique Id](https://examples.bootstrap-table.com/#methods/get-row-by-unique-id.html)

## updateByUniqueId

- **Parameter:** `params`

- **Detail:**

  Update the specified row(s), each params contain following properties:

  * `id`: a row id where the id should be the uniqueid field assigned to the table.
  * `row`: the new row data.
  * `replace` (optional): set to `true` to replace the row instead of extending.

- **Example:** [Update By Unique Id](https://examples.bootstrap-table.com/#methods/update-by-unique-id.html)

## removeByUniqueId

- **Parameter:** `id`

- **Detail:**

  Remove data from table, the row that contains the `id` passed by parameter.

- **Example:** [Remove By Unique Id](https://examples.bootstrap-table.com/#methods/remove-by-unique-id.html)

## updateCell

- **Parameter:** `params`

- **Detail:**

  Update one cell, the params contain following properties:

  * `index`: the row index.
  * `field`: the field name.
  * `value`: the new field value.

  To disable table re-initialization you can set `{reinit: false}`.

- **Example:** [Update Cell](https://examples.bootstrap-table.com/#methods/update-cell.html)

## updateCellByUniqueId

- **Parameter:** `params`

- **Detail:**

  Update the cell specified by the id, each params contain following properties:

  * `id`: row id where the id should be the `uniqueId` field assigned to the table.
  * `field`: field name of the cell to be updated.
  * `value`: new value of the cell.

- **Example:** [Update Cell By Unique Id](https://examples.bootstrap-table.com/#methods/update-cell-by-unique-id.html)

## showRow

- **Parameter:** `params`

- **Detail:**

  Show the specified row. The params must contain at least one of the following properties:

  * `index`: the row index.
  * `uniqueId`: the value of the uniqueId for that row.

- **Example:** [Show/Hide Row](https://examples.bootstrap-table.com/#methods/show-hide-row.html)

## hideRow

- **Parameter:** `params`

- **Detail:**

  Hide the specified row. The params must contain at least one of the following properties:

  * `index`: the row index.
  * `uniqueId`: the value of the uniqueId for that row.

- **Example:** [Show/Hide Row](https://examples.bootstrap-table.com/#methods/show-hide-row.html)

## getHiddenRows

- **Parameter:** `show`

- **Detail:**

  Get all rows hidden and if you pass the `show` parameter `true` the rows will be shown again, otherwise, the method only will return the rows hidden.

- **Example:** [Get Hidden Rows](https://examples.bootstrap-table.com/#methods/get-hidden-rows.html)

## showColumn

- **Parameter:** `field`

- **Detail:**

  Show the specified `field` column.
  The parameter can be a string or a array of fields.

- **Example:** [Show/Hide Column](https://examples.bootstrap-table.com/#methods/show-hide-column.html)

## hideColumn

- **Parameter:** `field`

- **Detail:**

  Hide the specified `field` column.
  The parameter can be a string or a array of fields.

- **Example:** [Show/Hide Column](https://examples.bootstrap-table.com/#methods/show-hide-column.html)

## getVisibleColumns

- **Parameter:** `-`

- **Detail:**

  Get visible columns.

- **Example:** [Get Visible/Hidden Columns](https://examples.bootstrap-table.com/#methods/get-visible-hidden-columns.html)

## getHiddenColumns

- **Parameter:** `undefined`

- **Detail:**

  Get hidden columns.

- **Example:** [Get Visible/Hidden Columns](https://examples.bootstrap-table.com/#methods/get-visible-hidden-columns.html)

## showAllColumns

- **Parameter:** `undefined`

- **Detail:**

  Show All the columns.

- **Example:** [Show/Hide All Columns](https://examples.bootstrap-table.com/#methods/show-hide-all-columns.html)

## hideAllColumns

- **Parameter:** `undefined`

- **Detail:**

  Hide All the columns.

- **Example:** [Show/Hide All Columns](https://examples.bootstrap-table.com/#methods/show-hide-all-columns.html)

## mergeCells

- **Parameter:** `params`

- **Detail:**

  Merge some cells to one cell, the params contain following properties:

  * `index`: the row index.
  * `field`: the field name.
  * `rowspan`: the rowspan count to be merged.
  * `colspan`: the colspan count to be merged.

- **Example:** [Merge Cells](https://examples.bootstrap-table.com/#methods/merge-cells.html)

## checkAll

- **Parameter:** `undefined`

- **Detail:**

  Check all current page rows.

- **Example:** [Check/Uncheck All](https://examples.bootstrap-table.com/#methods/check-uncheck-all.html)

## uncheckAll

- **Parameter:** `undefined`

- **Detail:**

  Uncheck all current page rows.

- **Example:** [Check/Uncheck All](https://examples.bootstrap-table.com/#methods/check-uncheck-all.html)

## checkInvert

- **Parameter:** `undefined`

- **Detail:**

  Invert check of current page rows. Triggers `onCheckSome` and `onUncheckSome` events.

- **Example:** [Check Invert](https://examples.bootstrap-table.com/#methods/check-invert.html)

## check

- **Parameter:** `index`

- **Detail:**

  Check a row, the row `index` start with 0.

- **Example:** [Check/Uncheck](https://examples.bootstrap-table.com/#methods/check-uncheck.html)

## uncheck

- **Parameter:** `index`

- **Detail:**

  Uncheck a row, the row `index` start with 0.

- **Example:** [Check/Uncheck](https://examples.bootstrap-table.com/#methods/check-uncheck.html)

## checkBy

- **Parameter:** `params`

- **Detail:**

  Check a row by array of values, the params contain:

  * `field`: name of the field used to find records.
  * `values`: array of values for rows to check.

- **Example:** [Check/Uncheck By](https://examples.bootstrap-table.com/#methods/check-uncheck-by.html)

## uncheckBy

- **Parameter:** `params`

- **Detail:**

  Uncheck a row by array of values, the params contain:

  * `field`: name of the field used to find records.
  * `values`: array of values for rows to uncheck.

- **Example:** [Check/Uncheck By](https://examples.bootstrap-table.com/#methods/check-uncheck-by.html)

## refresh

- **Parameter:** `params`

- **Detail:**

  Refresh/reload the remote server data, you can set `{silent: true}` to refresh the data silently, and set `{url: newUrl, pageNumber: pageNumber, pageSize: pageSize}` to change the url (optional), page number (optional) and page size (optional). To supply query params specific to this request, set `{query: {foo: 'bar'}}`.

- **Example:** [Refresh](https://examples.bootstrap-table.com/#methods/refresh.html)

## destroy

- **Parameter:** `undefined`

- **Detail:**

  Destroy the Bootstrap Table.

- **Example:** [Destroy](https://examples.bootstrap-table.com/#methods/destroy.html)

## resetView

- **Parameter:** `params`

- **Detail:**

  Reset the Bootstrap Table view, for example reset the table height, the params contain:

  * `height`: the height of the table.

- **Example:** [Reset View](https://examples.bootstrap-table.com/#methods/reset-view.html)

## resetWidth

- **Parameter:** `undefined`

- **Detail:**

  Resizes header and footer to fit current columns width.

## showLoading

- **Parameter:** `undefined`

- **Detail:**

  Show loading status.

- **Example:** [Show/Hide Loading](https://examples.bootstrap-table.com/#methods/show-hide-loading.html)

## hideLoading

- **Parameter:** `undefined`

- **Detail:**

  Hide loading status.

- **Example:** [Show/Hide Loading](https://examples.bootstrap-table.com/#methods/show-hide-loading.html)

## togglePagination

- **Parameter:** `undefined`

- **Detail:**

  Toggle the pagination option.

- **Example:** [Toggle Pagination](https://examples.bootstrap-table.com/#methods/toggle-pagination.html)

## toggleFullscreen

- **Parameter:** `undefined`

- **Detail:**

  Toggle fullscreen.

- **Example:** [Toggle Fullscreen](https://examples.bootstrap-table.com/#methods/toggle-fullscreen.html)

## toggleView

- **Parameter:** `undefined`

- **Detail:**

  Toggle the card/table view.

- **Example:** [Toggle View](https://examples.bootstrap-table.com/#methods/toggle-view.html)

## resetSearch

- **Parameter:** `text`

- **Detail:**

  Set the search `text`.

- **Example:** [Reset Search](https://examples.bootstrap-table.com/#methods/reset-search.html)

## filterBy

- **Parameter:**
    - `filter - An Object of filter`
    Default: `{}`
    - `options - An Object of options`
    Default:
        ```
        {
            'filterAlgorithm': 'and'
        }
        ```

- **Detail:**

  (Can use only in client-side) Filter data in table.
  There are multiple ways to filter:
  - Leave the options blank to use the `and` filter.
  - Set the `filterAlgorithm` (see at parameter) to `or` to use the `or` filter.
  - Pass a function to the `filterAlgorithm` (see at parameter) to use a `custom` filter.

  **Filter Algorithm**

  - And
    - Filter `{age: 10}` to show the data only age is equal to 10.  You can also filter with an array of values, as in: `{age: 10, hairColor: ['blue', 'red', 'green']}` to find data where age is equal to 10 and hairColor is either blue, red, or green.
  - Or
    - Filter `{age: 10, name: "santa"}` to show all Data which has a age of 10 **or** the name is equals to santa.
  - Custom
    - Filter by your Custom algorithm
    - Function parameters:
        - Row
        - Filters
    - Return `true` to keep the row and return `false` to filter the row.

- **Example:** [Filter By](https://examples.bootstrap-table.com/#methods/filter-by.html)

## scrollTo

- **Parameter:** `value|object`

- **Detail:**

  - value
    - Scroll to the number `value` position, the unit is `'px'`, set `'bottom'` means scroll to the bottom.
  - object
    -  Scroll to the unit (`px` or `rows (index starts by 0)`)
    Default: `{unit: 'px', value: 0}`

- **Example:** [Scroll To](https://examples.bootstrap-table.com/#methods/scorll-to.html)

## getScrollPosition

- **Parameter:** `undefined`

- **Detail:**

  Get the current scroll position, the unit is `'px'`.

- **Example:** [Get Scroll Position](https://examples.bootstrap-table.com/#methods/get-scroll-position.html)

## selectPage

- **Parameter:** `page`

- **Detail:**

  Go to the a specified `page`.

- **Example:** [Select/Prev/Next Page](https://examples.bootstrap-table.com/#methods/select-prev-next-page.html)

## prevPage

- **Parameter:** `undefined`

- **Detail:**

  Go to previous page.

- **Example:** [Select/Prev/Next Page](https://examples.bootstrap-table.com/#methods/select-prev-next-page.html)

## nextPage

- **Parameter:** `undefined`

- **Detail:**

  Go to next page.

- **Example:** [Select/Prev/Next Page](https://examples.bootstrap-table.com/#methods/select-prev-next-page.html)

## toggleDetailView

- **Parameter:** `index`

- **Detail:**

  Toggle the row that has the `index` passed by parameter if the detail view option is set to `true`.

- **Example:** [Toggle Detail View](https://examples.bootstrap-table.com/#methods/toggle-detail-view.html)

## expandRow

- **Parameter:** `index`

- **Detail:**

  Expand the row that has the `index` passed by parameter if the detail view option is set to `true`.

- **Example:** [Expand/Collapse Row](https://examples.bootstrap-table.com/#methods/expand-collapse-row.html)

## collapseRow

- **Parameter:** `index`

- **Detail:**

  Collapse the row that has the `index` passed by parameter if the detail view option is set to `true`.

- **Example:** [Expand/Collapse Row](https://examples.bootstrap-table.com/#methods/expand-collapse-row.html)

## expandAllRows

- **Parameter:** `undefined`

- **Detail:**

  Expand all rows if the detail view option is set to `true`.

- **Example:** [Expand/Collapse All Rows](https://examples.bootstrap-table.com/#methods/expand-collapse-all-rows.html)

## collapseAllRows

- **Parameter:** `undefined`

- **Detail:**

  Collapse all rows if the detail view option is set to `true`.

- **Example:** [Expand/Collapse All Rows](https://examples.bootstrap-table.com/#methods/expand-collapse-all-rows.html)

## updateColumnTitle

- **Parameter:** `params`

- **Detail:**

  Update the field title of column, the params contain following properties:

  * `field`: the field name.
  * `title`: the field title.

- **Example:** [Update Column Title](https://examples.bootstrap-table.com/#methods/update-column-title.html)

## updateFormatText

- **Parameter:** `formatName, text`

- **Detail:**

  Update the localizations format text.

- **Example:** [Update Format Text](https://examples.bootstrap-table.com/#methods/update-format-text.html)
