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

## getSelections

- **Parameter:** `undefined`

- **Detail:**

  Return selected rows, when no record selected, an empty array will return.

## getAllSelections

- **Parameter:** `undefined`

- **Detail:**

  Return all selected rows contain search or filter, when no record selected, an empty array will return.

## showAllColumns

- **Parameter:** `undefined`

- **Detail:**

  Show All the columns.

## hideAllColumns

- **Parameter:** `undefined`

- **Detail:**

  Hide All the columns.

## getData

- **Parameter:** `useCurrentPage`

- **Detail:**

  Get the loaded data of table at the moment that this method is called. If you set the `useCurrentPage` to `true` the method will return the data in the current page.

## getRowByUniqueId

- **Parameter:** `id`

- **Detail:**

  Get data from table, the row that contains the `id` passed by parameter.

## load

- **Parameter:** `data`

- **Detail:**

  Load the `data` to table, the old rows will be removed.

## append

- **Parameter:** `data`

- **Detail:**

  Append the `data` to table.

## prepend

- **Parameter:** `data`

- **Detail:**

  Prepend the `data` to table.

## remove

- **Parameter:** `params`

- **Detail:**

  Remove data from table, the params contain two properties:

  * `field`: the field name of remove rows.
  * `values`: the array of values for rows which should be removed.

## removeAll

- **Parameter:** `undefined`

- **Detail:**

  Remove all data from table.

## removeByUniqueId

- **Parameter:** `id`

- **Detail:**

  Remove data from table, the row that contains the `id` passed by parameter.

## insertRow

- **Parameter:** `params`

- **Detail:**

  Insert a new row, the params contain following properties:

  * `index`: the row index to insert into.
  * `row`: the row data.

## updateRow

- **Parameter:** `params`

- **Detail:**

  Update the specified row(s), each params contain following properties:

  * `index`: the row index to be updated.
  * `row`: the new row data.

## updateByUniqueId

- **Parameter:** `params`

- **Detail:**

  Update the specified row(s), each params contain following properties:

  * `id`: a row id where the id should be the uniqueid field assigned to the table.
  * `row`: the new row data.

## updateCellById

- **Parameter:** `params`

- **Detail:**

  Update the cell specified by the id, each params contain following properties:

  * `id`: row id where the id should be the uniqueid field assigned to the table.
  * `field`: field name of the cell to be updated.
  * `value`: new value of the cell.

## showRow

- **Parameter:** `params`

- **Detail:**

  Show the specified row. The params must contain at least one of the following properties:

  * `index`: the row index.
  * `uniqueId`: the value of the uniqueId for that row.

## hideRow

- **Parameter:** `params`

- **Detail:**

  Hide the specified row. The params must contain at least one of the following properties:

  * `index`: the row index.
  * `uniqueId`: the value of the uniqueId for that row.

## getHiddenRows

- **Parameter:** `show`

- **Detail:**

  Get all rows hidden and if you pass the `show` parameter `true` the rows will be shown again, otherwise, the method only will return the rows hidden.

## mergeCells

- **Parameter:** `params`

- **Detail:**

  Merge some cells to one cell, the params contain following properties:

  * `index`: the row index.
  * `field`: the field name.
  * `rowspan`: the rowspan count to be merged.
  * `colspan`: the colspan count to be merged.

## updateCell

- **Parameter:** `params`

- **Detail:**

  Update one cell, the params contain following properties:

  * `index`: the row index.
  * `field`: the field name.
  * `value`: the new field value.

  To disable table re-initialization you can set `{reinit: false}`.

## refresh

- **Parameter:** `params`

- **Detail:**

  Refresh the remote server data, you can set `{silent: true}` to refresh the data silently, and set `{url: newUrl, pageNumber: pageNumber, pageSize: pageSize}` to change the url (optional), page number (optional) and page size (optional). To supply query params specific to this request, set `{query: {foo: 'bar'}}`.

## refreshOptions

- **Parameter:** `options`

- **Detail:**

  Refresh the table `options`.

## resetSearch

- **Parameter:** `text`

- **Detail:**

  Set the search `text`.

## showLoading

- **Parameter:** `undefined`

- **Detail:**

  Show loading status.

## hideLoading

- **Parameter:** `undefined`

- **Detail:**

  Hide loading status.

## checkAll

- **Parameter:** `undefined`

- **Detail:**

  Check all current page rows.

## uncheckAll

- **Parameter:** `undefined`

- **Detail:**

  Uncheck all current page rows.

## checkInvert

- **Parameter:** `undefined`

- **Detail:**

  Invert check of current page rows. Triggers `onCheckSome` and `onUncheckSome` events.

## check

- **Parameter:** `index`

- **Detail:**

  Check a row, the row `index` start with 0.

## uncheck

- **Parameter:** `index`

- **Detail:**

  Uncheck a row, the row `index` start with 0.

## checkBy

- **Parameter:** `params`

- **Detail:**

  Check a row by array of values, the params contain:

  * `field`: name of the field used to find records.
  * `values`: array of values for rows to check.

## uncheckBy

- **Parameter:** `params`

- **Detail:**

  Uncheck a row by array of values, the params contain:

  * `field`: name of the field used to find records.
  * `values`: array of values for rows to uncheck.

## resetView

- **Parameter:** `params`

- **Detail:**

  Reset the Bootstrap Table view, for example reset the table height, the params contain:

  * `height`: the height of the table.

## resetWidth

- **Parameter:** `undefined`

- **Detail:**

  Resizes header and footer to fit current columns width.

## destroy

- **Parameter:** `undefined`

- **Detail:**

  Destroy the Bootstrap Table.

## showColumn

- **Parameter:** `field`

- **Detail:**

  Show the specified `field` column.   
  The parameter can be a string or a array of fields.

## hideColumn

- **Parameter:** `field`

- **Detail:**

  Hide the specified `field` column.   
  The parameter can be a string or a array of fields.

## getHiddenColumns

- **Parameter:** `undefined`

- **Detail:**

  Get hidden columns.

## getVisibleColumns

- **Parameter:** `-`

- **Detail:**

  Get visible columns.

## scrollTo

- **Parameter:** `value|object`

- **Detail:**

  - value
    - Scroll to the number `value` position, the unit is `'px'`, set `'bottom'` means scroll to the bottom.
  - object
    -  Scroll to the unit (`px` or `rows (index starts by 0)`)   
    Default: `{unit: 'px', value: 0}`
    
## getScrollPosition

- **Parameter:** `undefined`

- **Detail:**

  Get the current scroll position, the unit is `'px'`.

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
    
  #####Filter Algorithm
  
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


## selectPage

- **Parameter:** `page`

- **Detail:**

  Go to the a specified `page`.

## prevPage

- **Parameter:** `undefined`

- **Detail:**

  Go to previous page.

## nextPage

- **Parameter:** `undefined`

- **Detail:**

  Go to next page.

## togglePagination

- **Parameter:** `undefined`

- **Detail:**

  Toggle the pagination option.

## toggleView

- **Parameter:** `undefined`

- **Detail:**

  Toggle the card/table view.

## toggleDetailView

- **Parameter:** `index`

- **Detail:**

  Toggle the row that has the `index` passed by parameter if the detail view option is set to `true`.

## expandRow

- **Parameter:** `index`

- **Detail:**

  Expand the row that has the `index` passed by parameter if the detail view option is set to `true`.

## collapseRow

- **Parameter:** `index`

- **Detail:**

  Collapse the row that has the `index` passed by parameter if the detail view option is set to `true`.

## expandAllRows

- **Detail:**

  Expand all rows if the detail view option is set to `true`.

## collapseAllRows

- **Detail:**

  Collapse all rows if the detail view option is set to `true`.
