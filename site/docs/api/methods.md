---
layout: docs
title: Methods
description: The Methods API of Bootstrap Table.
group: api
toc: true
---

The calling method syntax: `$('#table').bootstrapTable('method', parameter)`.

## append

- **Parameter:** `data`

- **Detail:**

  Append the `data` to the table.

- **Example:** [Append](https://examples.bootstrap-table.com/#methods/append.html)

## check

- **Parameter:** `index`

- **Detail:**

  Check a row. The row `index` starts with 0.

- **Example:** [Check/Uncheck](https://examples.bootstrap-table.com/#methods/check-uncheck.html)

## checkAll

- **Parameter:** `undefined`

- **Detail:**

  Check all current page rows.

- **Example:** [Check/Uncheck All](https://examples.bootstrap-table.com/#methods/check-uncheck-all.html)

## checkBy

- **Parameter:** `params`

- **Detail:**

  Check a row by an array of values, the params contain:

  * `field`: name of the field used to find records.
  * `values`: array of values for rows to check.
  * `onlyCurrentPage (default false)`: If `true`, only the visible dataset will be checked. If pagination is used, the other pages will be ignored.

- **Example:** [Check/Uncheck By](https://examples.bootstrap-table.com/#methods/check-uncheck-by.html)

## checkInvert

- **Parameter:** `undefined`

- **Detail:**

  Invert check of current page rows. Triggers `onCheckSome` and `onUncheckSome` events.

- **Example:** [Check Invert](https://examples.bootstrap-table.com/#methods/check-invert.html)

## collapseAllRows

- **Parameter:** `undefined`

- **Detail:**

  Collapse all rows if the detail view option is set to `true`.

- **Example:** [Expand/Collapse All Rows](https://examples.bootstrap-table.com/#methods/expand-collapse-all-rows.html)

## collapseRow

- **Parameter:** `index`

- **Detail:**

  Collapse the row with the `index` passed by parameter if the detail view option is set to `true`.

- **Example:** [Expand/Collapse Row](https://examples.bootstrap-table.com/#methods/expand-collapse-row.html)

## collapseRowByUniqueId

- **Parameter:** `uniqueId`

- **Detail:**

  Collapse the row with the `uniqueId` passed by parameter if the detail view option is set to `true`.

- **Example:** [Expand/Collapse Row by uniqueId](https://examples.bootstrap-table.com/#methods/expand-collapse-row-by-uniqueid.html)

## destroy

- **Parameter:** `undefined`

- **Detail:**

  Destroy the Bootstrap Table.

- **Example:** [Destroy](https://examples.bootstrap-table.com/#methods/destroy.html)

## expandAllRows

- **Parameter:** `undefined`

- **Detail:**

  Expand all rows if the detail view option is set to `true`.

- **Example:** [Expand/Collapse All Rows](https://examples.bootstrap-table.com/#methods/expand-collapse-all-rows.html)

## expandRow

- **Parameter:** `index`

- **Detail:**

  Expand the row that has the `index` passed by parameter if the detail view option is set to `true`.

- **Example:** [Expand/Collapse Row](https://examples.bootstrap-table.com/#methods/expand-collapse-row.html)

## expandRowByUniqueId

- **Parameter:** `uniqueId`

- **Detail:**

  Expand the row with the `uniqueId` passed by parameter if the detail view option is set to `true`.

- **Example:** [Expand/Collapse Row by uniqueId](https://examples.bootstrap-table.com/#methods/expand-collapse-row-by-uniqueid.html)

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

  (Can used only in client-side) Filter data in the table.
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

## getData

- **Parameter:** `params`

- **Detail:**

  Get the loaded data of the table at the moment that this method is called

  * `useCurrentPage`: if set to true, the method will return the data only on the current page.
  * `includeHiddenRows`: if set to true, the method will include the hidden rows.
  * `unfiltered`: if set to true, the method will include all data (unfiltered).
  * `formatted`: get the formatted value from the defined [formatter](https://bootstrap-table.com/docs/api/column-options/#formatter).

- **Example:** [Get Data](https://examples.bootstrap-table.com/#methods/get-data.html)

## getFooterData

- **Parameter:** `undefined`

- **Detail:**

  Get the loaded data of the footer at the moment that this method is called

- **Example:** [Get Footer Data](https://examples.bootstrap-table.com/#methods/get-footer-data.html)

## getHiddenColumns

- **Parameter:** `undefined`

- **Detail:**

  Get hidden columns.

- **Example:** [Get Visible/Hidden Columns](https://examples.bootstrap-table.com/#methods/get-visible-hidden-columns.html)

## getHiddenRows

- **Parameter:** `show`

- **Detail:**

  Get all rows hidden, and if you pass the `show` parameter `true`, the rows will be shown again. Otherwise, the method only will return the rows hidden.

- **Example:** [Get Hidden Rows](https://examples.bootstrap-table.com/#methods/get-hidden-rows.html)

## getOptions

- **Parameter:** `undefined`

- **Detail:**

  Return the options object.

- **Example:** [Get Options](https://examples.bootstrap-table.com/#methods/get-options.html)

## getRowByUniqueId

- **Parameter:** `id`

- **Detail:**

  Get data from the table, the row that contains the `id` passed by parameter.

- **Example:** [Get Row By Unique Id](https://examples.bootstrap-table.com/#methods/get-row-by-unique-id.html)

## getScrollPosition

- **Parameter:** `undefined`

- **Detail:**

  Get the current scroll position. The unit is `'px'`.

- **Example:** [Get Scroll Position](https://examples.bootstrap-table.com/#methods/get-scroll-position.html)

## getSelections

- **Parameter:** `undefined`

- **Detail:**

  Return selected rows. When no record is selected, an empty array will return.
  The selected rows will be unselected while some actions, e.g., searching or page change. If you want to maintain the selections, please use [maintainMetaData](https://bootstrap-table.com/docs/api/table-options/#maintainmetadata).

- **Example:** [Get Selections](https://examples.bootstrap-table.com/#methods/get-selections.html)

## getVisibleColumns

- **Parameter:** `-`

- **Detail:**

  Get visible columns.

- **Example:** [Get Visible/Hidden Columns](https://examples.bootstrap-table.com/#methods/get-visible-hidden-columns.html)

## hideAllColumns

- **Parameter:** `undefined`

- **Detail:**

  Hide All the columns.

- **Example:** [Show/Hide All Columns](https://examples.bootstrap-table.com/#methods/show-hide-all-columns.html)

## hideColumn

- **Parameter:** `field`

- **Detail:**

  Hide the specified `field` column.
  The parameter can be a string or an array of fields.

- **Example:** [Show/Hide Column](https://examples.bootstrap-table.com/#methods/show-hide-column.html)

## hideLoading

- **Parameter:** `undefined`

- **Detail:**

  Hide loading status.

- **Example:** [Show/Hide Loading](https://examples.bootstrap-table.com/#methods/show-hide-loading.html)

## hideRow

- **Parameter:** `params`

- **Detail:**

  Hide the specified row. The params must contain at least one of the following properties:

  * `index`: the row index.
  * `uniqueId`: the value of the uniqueId for that row.

- **Example:** [Show/Hide Row](https://examples.bootstrap-table.com/#methods/show-hide-row.html)

## insertRow

- **Parameter:** `params`

- **Detail:**

  Insert a new row. The params contain the following properties:

  * `index`: the row index to insert into.
  * `row`: the row data.

- **Example:** [Insert Row](https://examples.bootstrap-table.com/#methods/insert-row.html)

## load

- **Parameter:** `data`

- **Detail:**

  Load the `data` to the table. The old rows will be removed.

- **Example:** [Load](https://examples.bootstrap-table.com/#methods/load.html)

## mergeCells

- **Parameter:** `params`

- **Detail:**

  Merge some cells into one cell. The params contain the following properties:

  * `index`: the row index.
  * `field`: the field name.
  * `rowspan`: the rowspan count to be merged.
  * `colspan`: the colspan count to be merged.

- **Example:** [Merge Cells](https://examples.bootstrap-table.com/#methods/merge-cells.html)

## nextPage

- **Parameter:** `undefined`

- **Detail:**

  Go to the next page.

- **Example:** [Select/Prev/Next Page](https://examples.bootstrap-table.com/#methods/select-prev-next-page.html)

## prepend

- **Parameter:** `data`

- **Detail:**

  Prepend the `data` to the table.

- **Example:** [Prepend](https://examples.bootstrap-table.com/#methods/prepend.html)

## prevPage

- **Parameter:** `undefined`

- **Detail:**

  Go to the previous page.

- **Example:** [Select/Prev/Next Page](https://examples.bootstrap-table.com/#methods/select-prev-next-page.html)

## refresh

- **Parameter:** `params`

- **Detail:**

  Refresh/reload the remote server data, you can set `{silent: true}` to refresh the data silently, and set `{url: newUrl, pageNumber: pageNumber, pageSize: pageSize}` to change the url (optional), page number (optional) and page size (optional). To supply query params specific to this request, set `{query: {foo: 'bar'}}`.

- **Example:** [Refresh](https://examples.bootstrap-table.com/#methods/refresh.html)

## refreshOptions

- **Parameter:** `options`

- **Detail:**

  Refresh the table `options`.

- **Example:** [Refresh Options](https://examples.bootstrap-table.com/#methods/refresh-options.html)

## remove

- **Parameter:** `params`

- **Detail:**

  Remove data from the table. The params contain two properties:

  * `field`: the field name of remove rows. If `$index` is not in your fields, you can use this special field `$index` to remove rows by row index.
  * `values`: the array of values for rows that should be removed. If you use the special field `$index`, you can pass an array of indexes.

- **Example:** [Remove](https://examples.bootstrap-table.com/#methods/remove.html)

## removeAll

- **Parameter:** `undefined`

- **Detail:**

  Remove all data from the table.

- **Example:** [Remove All](https://examples.bootstrap-table.com/#methods/remove-all.html)

## removeByUniqueId

- **Parameter:** `id`

- **Detail:**

  Remove data from the table, the row that contains the `id` passed by parameter.

- **Example:** [Remove By Unique Id](https://examples.bootstrap-table.com/#methods/remove-by-unique-id.html)

## resetSearch

- **Parameter:** `text`

- **Detail:**

  Set the search `text`.

- **Example:** [Reset Search](https://examples.bootstrap-table.com/#methods/reset-search.html)

## resetView

- **Parameter:** `params`

- **Detail:**

  Reset the Bootstrap Table view. For example, reset the table height, the params contain:

  * `height`: the height of the table.

- **Example:** [Reset View](https://examples.bootstrap-table.com/#methods/reset-view.html)

## scrollTo

- **Parameter:** `value|object`

- **Detail:**

  - value
    - Scroll to the number `value` position, the unit is `'px'`, set `'bottom'` means scroll to the bottom.
  - object
    -  Scroll to the unit (`px` or `rows (index starts by 0)`)
    Default: `{unit: 'px', value: 0}`

- **Example:** [Scroll To](https://examples.bootstrap-table.com/#methods/scroll-to.html)

## selectPage

- **Parameter:** `page`

- **Detail:**

  Go to the specified `page`.

- **Example:** [Select/Prev/Next Page](https://examples.bootstrap-table.com/#methods/select-prev-next-page.html)

## showAllColumns

- **Parameter:** `undefined`

- **Detail:**

  Show All the columns.

- **Example:** [Show/Hide All Columns](https://examples.bootstrap-table.com/#methods/show-hide-all-columns.html)

## showColumn

- **Parameter:** `field`

- **Detail:**

  Show the specified `field` column.
  The parameter can be a string or an array of fields.

- **Example:** [Show/Hide Column](https://examples.bootstrap-table.com/#methods/show-hide-column.html)

## showLoading

- **Parameter:** `undefined`

- **Detail:**

  Show loading status.

- **Example:** [Show/Hide Loading](https://examples.bootstrap-table.com/#methods/show-hide-loading.html)

## showRow

- **Parameter:** `params`

- **Detail:**

  Show the specified row. The params must contain at least one of the following properties:

  * `index`: the row index.
  * `uniqueId`: the value of the uniqueId for that row.

- **Example:** [Show/Hide Row](https://examples.bootstrap-table.com/#methods/show-hide-row.html)

## sortBy

- **Parameter:** `params`

- **Detail:**

  Sorts the table by the specified field. The params must contain at least one of the following properties:

  * `field`: the field name.
  * `sortOrder`: the sort order, can only be 'asc' or 'desc'.

- **Example:** [Sort By](https://examples.bootstrap-table.com/#methods/sort-by.html)

## sortReset

- **Parameter:** `undefined`

- **Detail:**

  Resets sort state of the table regardless of whether caused by the user or programmatically.

- **Example:** [Sort reset](https://examples.bootstrap-table.com/#methods/sort-reset.html)

## toggleDetailView

- **Parameter:** `index`

- **Detail:**

  Toggle the row that has the `index` passed by parameter if the detail view option is set to `true`.

- **Example:** [Toggle Detail View](https://examples.bootstrap-table.com/#methods/toggle-detail-view.html)

## toggleFullscreen

- **Parameter:** `undefined`

- **Detail:**

  Toggle fullscreen.

- **Example:** [Toggle Fullscreen](https://examples.bootstrap-table.com/#methods/toggle-fullscreen.html)

## togglePagination

- **Parameter:** `undefined`

- **Detail:**

  Toggle the pagination option.

- **Example:** [Toggle Pagination](https://examples.bootstrap-table.com/#methods/toggle-pagination.html)

## toggleView

- **Parameter:** `undefined`

- **Detail:**

  Toggle the card/table view.

- **Example:** [Toggle View](https://examples.bootstrap-table.com/#methods/toggle-view.html)

## uncheck

- **Parameter:** `index`

- **Detail:**

  Uncheck a row. The row `index` starts with 0.

- **Example:** [Check/Uncheck](https://examples.bootstrap-table.com/#methods/check-uncheck.html)

## uncheckAll

- **Parameter:** `undefined`

- **Detail:**

  Uncheck all current page rows.

- **Example:** [Check/Uncheck All](https://examples.bootstrap-table.com/#methods/check-uncheck-all.html)

## uncheckBy

- **Parameter:** `params`

- **Detail:**

  Uncheck a row by an array of values. The params contain:

  * `field`: name of the field used to find records.
  * `values`: array of values for rows to uncheck.
  * `onlyCurrentPage (default false)`: If `true`, only the visible dataset will be unchecked. If pagination is used, the other pages will be ignored.

- **Example:** [Check/Uncheck By](https://examples.bootstrap-table.com/#methods/check-uncheck-by.html)

## updateByUniqueId

- **Parameter:** `params`

- **Detail:**

  Update the specified row(s). Each param contains the following properties:

  * `id`: a row id where the id should be the `uniqueId` field assigned to the table.
  * `row`: the new row data.
  * `replace` (optional): set to `true` to replace the row instead of extending.

- **Example:** [Update By Unique Id](https://examples.bootstrap-table.com/#methods/update-by-unique-id.html)

## updateCell

- **Parameter:** `params`

- **Detail:**

  Update one cell. The params contain the following properties:

  * `index`: the row index.
  * `field`: the field name.
  * `value`: the new field value.

  To disable table re-initialization, you can set `{reinit: false}`.

- **Example:** [Update Cell](https://examples.bootstrap-table.com/#methods/update-cell.html)

## updateCellByUniqueId

- **Parameter:** `params`

- **Detail:**

  Update the specified cell(s). Each param contains the following properties:

  * `id`: row id where the id should be the `uniqueId` field assigned to the table.
  * `field`: field name of the cell to be updated.
  * `value`: the new value of the cell.

  To disable table re-initialization, you can set `{reinit: false}`.

- **Example:** [Update Cell By Unique Id](https://examples.bootstrap-table.com/#methods/update-cell-by-unique-id.html)

## updateColumnTitle

- **Parameter:** `params`

- **Detail:**

  Update the field title of the column. The params contain the following properties:

  * `field`: the field name.
  * `title`: the field title.

- **Example:** [Update Column Title](https://examples.bootstrap-table.com/#methods/update-column-title.html)

## updateFormatText

- **Parameter:** `formatName, text`

- **Detail:**

  Update the localizations format text.

- **Example:** [Update Format Text](https://examples.bootstrap-table.com/#methods/update-format-text.html)

## updateRow

- **Parameter:** `params`

- **Detail:**

  Update the specified row(s). Each param contains the following properties:

  * `index`: the row index to be updated.
  * `row`: the new row data.
  * `replace` (optional): set to `true` to replace the row instead of extending.

- **Example:** [Update Row](https://examples.bootstrap-table.com/#methods/update-row.html)
