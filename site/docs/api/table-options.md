---
layout: docs
title: Table Options
description: The table options API of Bootstrap Table.
group: api
redirect_from:
  - "/docs/api/"
  - "/documentation/"
  - "/zh-cn/documentation/"
  - "/es/documentation/"
toc: true
---

The table options are defined in `jQuery.fn.bootstrapTable.defaults`.

## -

- **Attribute:** `data-toggle`

- **Type:** `String`

- **Detail:**

  Activate bootstrap table without writing JavaScript.

- **Default:** `'table'`

## locale

- **Attribute:** `data-locale`

- **Type:** `String`

- **Detail:**

  Sets the locale to use (i.e. `'zh-CN'`). Locale files must be pre-loaded.
  Allows for fallback locales, if loaded, in the following order:

  * First tries for the locale as specified,
  * Then tries the locale with '_' translated to '-' and the region code upper cased,
  * Then tries the the short locale code (i.e. `'zh'` instead of `'fr-CA'`),
  * And finally will use the last locale file loaded (or the default locale if no locales loaded).

  If left `undfined` or an empty string, uses the last locale loaded (or `'en-US'` if no locale files loaded).

- **Default:** `undefined`

## height

- **Attribute:** `data-height`

- **Type:** `Number`

- **Detail:**

  The height of table, enable fixed header of table.

- **Default:** `undefined`

## undefinedText

- **Attribute:** `data-undefined-text`

- **Type:** `String`

- **Detail:**

  Defines the default `undefined` text.

- **Default:** `'-'`

## classes

- **Attribute:** `data-classes`

- **Type:** `String`

- **Detail:**

  The class name of table. By default, the table is bordered, you can add `'table-no-bordered'` to remove table-bordered style.

- **Default:** `'table table-hover'`

## theadClasses

- **Attribute:** `data-thead-classes`

- **Type:** `String`

- **Detail:**

  The class name of table thead. Bootstrap V4, use the modifier classes `.thead-light` or `.thead-dark` to make `thead`s appear light or dark gray.

- **Default:** `''`

## sortClass

- **Attribute:** `data-sort-class`

- **Type:** `String`

- **Detail:**

  The class name of the `td` elements which are sorted.

- **Default:** `undefined`

## striped

- **Attribute:** `data-striped`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to stripe the rows.

- **Default:** `false`

## rowStyle

- **Attribute:** `data-row-style`

- **Type:** `Function`

- **Detail:**

  The row style formatter function, takes two parameters:

  * `row`: the row record data.
  * `index`: the row index.

  Support classes or css. Example usage:

  {% highlight javascript %}
  function rowStyle(row, index) {
    return {
      classes: 'text-nowrap another-class',
      css: {color: 'blue', 'font-size': '50px'}
    }
  }
  {% endhighlight %}

- **Default:** `{}`

## rowAttributes

- **Attribute:** `data-row-attributes`

- **Type:** `Function`

- **Detail:**

  The row attribute formatter function, takes two parameters:

  * `row`: the row record data.
  * `index`: the row index.

  Support all custom attributes.

- **Default:** `{}`

## sortable

- **Attribute:** `data-sortable`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to disable sortable of all columns.

- **Default:** `true`

## silentSort

- **Attribute:** `data-silent-sort`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to sort the data silently. This options works when the sidePagination option is set to `'server'`.

- **Default:** `true`

## sortName

- **Attribute:** `data-sort-name`

- **Type:** `String`

- **Detail:**

  Defines which column will be sorted.

- **Default:** `undefined`

## sortOrder

- **Attribute:** `data-sort-order`

- **Type:** `String`

- **Detail:**

  Defines the column sort order, can only be `'asc'` or `'desc'`.

- **Default:** `'asc'`

## sortStable

- **Attribute:** `data-sort-stable`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to get a stable sorting. We will add `'_position'` property to the row.

- **Default:** `false`

## rememberOrder

- **Attribute:** `data-remember-order`

- **Type:** `Boolean`

- **Detail:**

  Set true remember the order for each column.

- **Default:** `false`

## customSort

- **Attribute:** `data-custom-sort`

- **Type:** `Function`

- **Detail:**

  The custom sort function is executed instead of built-in sort function, takes two parameters:

  * `sortName`: the sort name.
  * `sortOrder`: the sort order.

  Example usage:

  {% highlight javascript %}
  function customSort(sortName, sortOrder) {
    //Sort logic here.
    //You must use `this.data` array in order to sort the data. NO use `this.options.data`.
  }
  {% endhighlight %}

- **Default:** `$.noop`

## columns

- **Attribute:** `-`

- **Type:** `Array`

- **Detail:**

  The table columns config object, see column properties for more details.

- **Default:** `[]`

## data

- **Attribute:** `-`

- **Type:** `Array | Object`

- **Detail:**

  The data to be loaded.

- **Default:** `[]`

## totalField

- **Attribute:** `data-total-field`

- **Type:** `String`

- **Detail:**

  Key in incoming json containing `'total'` data .

- **Default:** `'total'`

## dataField

- **Attribute:** `data-data-field`

- **Type:** `String`

- **Detail:**

  Key in incoming json containing `'rows'` data list.

- **Default:** `'rows'`

## method

- **Attribute:** `data-method`

- **Type:** `String`

- **Detail:**

  The method type to request remote data.

- **Default:** `'get'`

## url

- **Attribute:** `data-url`

- **Type:** `String`

- **Detail:**

  A URL to request data from remote site.

  Note that the required server response format is different depending on whether the `'sidePagination'` option is specified. See the following examples:

  * [Without server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data1.json)
  * [With server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data2.json)

- **Default:** `undefined`

## ajax

- **Attribute:** `data-ajax`

- **Type:** `Function`

- **Detail:**

  A method to replace ajax call. Should implement the same API as jQuery ajax method.

- **Default:** `undefined`

## cache

- **Attribute:** `data-cache`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to disable caching of AJAX requests.

- **Default:** `true`

## contentType

- **Attribute:** `data-content-type`

- **Type:** `String`

- **Detail:**

  The contentType of request remote data.

- **Default:** `'application/json'`

## dataType

- **Attribute:** `data-data-type`

- **Type:** `String`

- **Detail:**

  The type of data that you are expecting back from the server.

- **Default:** `'json'`

## ajaxOptions

- **Attribute:** `data-ajax-options`

- **Type:** `Object`

- **Detail:**

  Additional options for submit ajax request. List of values: [jQuery.ajax](http://api.jquery.com/jQuery.ajax).

- **Default:** `{}`

## queryParams

- **Attribute:** `data-query-params`

- **Type:** `Function`

- **Detail:**

  When requesting remote data, you can send additional parameters by modifying queryParams.

  If `queryParamsType = 'limit'`, the params object contains: `limit`, `offset`, `search`, `sort`, `order`.

  Else, it contains: `pageSize`, `pageNumber`, `searchText`, `sortName`, `sortOrder`.

  Return `false` to stop request.

- **Default:** `function(params) { return params }`

## queryParamsType

- **Attribute:** `data-query-params-type`

- **Type:** `String`

- **Detail:**

  Set `'limit'` to send query params with RESTFul type.

- **Default:** `'limit'`

## responseHandler

- **Attribute:** `data-response-handler`

- **Type:** `Function`

- **Detail:**

  Before load remote data, handler the response data format, the parameters object contains:

  * `res`: the response data.

- **Default:** `function(res) { return res }`

## pagination

- **Attribute:** `data-pagination`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a pagination toolbar on table bottom.

- **Default:** `false`

## onlyInfoPagination

- **Attribute:** `data-only-info-pagination`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show only the quantity of the data that is showing in the table. It needs the pagination table options is set to true.

- **Default:** `false`

## paginationLoop

- **Attribute:** `data-pagination-loop`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable pagination continuous loop mode.

- **Default:** `true`

## sidePagination

- **Attribute:** `data-side-pagination`

- **Type:** `String`

- **Detail:**

  Defines the side pagination of the table, can only be `'client'` or `'server'`.
  Using `'server'` side requires either setting the `'url'` or `'ajax'` option.

  Note that the required server response format is different depending on whether the `'client'` or `'server'` option is specified. See the following examples:

  * [Without server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data1.json)
  * [With server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data2.json)

- **Default:** `'client'`

## totalRows

- **Attribute:** `data-total-rows`

- **Type:** `Number`

- **Detail:**

  This property is mainly passed in by server side pagination, which is easy to use. It can be set with custom pagination.

- **Default:** `0`

## pageNumber

- **Attribute:** `data-page-number`

- **Type:** `Number`

- **Detail:**

  When set pagination property, initialize the page number.

- **Default:** `1`

## pageSize

- **Attribute:** `data-page-size`

- **Type:** `Number`

- **Detail:**

  When set pagination property, initialize the page size.

- **Default:** `10`

## pageList

- **Attribute:** `data-page-list`

- **Type:** `Array`

- **Detail:**

  When set pagination property, initialize the page size selecting list. If you include the `'All'` or `'Unlimited'` option, all the records will be shown in your table.

- **Default:** `[10, 25, 50, 100]`

## paginationHAlign

- **Attribute:** `data-pagination-h-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the pagination. `'left'`, `'right'` can be used.

- **Default:** `'right'`

## paginationVAlign

- **Attribute:** `data-pagination-v-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the pagination. `'top'`, `'bottom'`, `'both'` (put the pagination on top and bottom)  can be used.

- **Default:** `'bottom'`

## paginationDetailHAlign

- **Attribute:** `data-pagination-detail-h-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the pagination detail. `'left'`, `'right'` can be used.

- **Default:** `'left'`

## paginationPreText

- **Attribute:** `data-pagination-pre-text`

- **Type:** `String`

- **Detail:**

  Indicate the icon or text to be shown in the pagination detail, the previous button.

- **Default:** `'‹'`

## paginationNextText

- **Attribute:** `data-pagination-next-text`

- **Type:** `String`

- **Detail:**

  Indicate the icon or text to be shown in the pagination detail, the next button.

- **Default:** `'›'`

## paginationSuccessivelySize

- **Attribute:** `data-pagination-successively-size`

- **Type:** `Number`

- **Detail:**

  Maximum successive number of pages in a row.

- **Default:** `5`

## paginationPagesBySide

- **Attribute:** `data-pagination-pages-by-side`

- **Type:** `Number`

- **Detail:**

  The number of pages on each side (right, left) of the current page.

- **Default:** `1`

## paginationUseIntermediate

- **Attribute:** `data-pagination-use-intermediate`

- **Type:** `Boolean`

- **Detail:**

  Calculate and show intermediate pages for quick access

- **Default:** `false`

## search

- **Attribute:** `data-search`

- **Type:** `Boolean`

- **Detail:**

  Enable the search input.

- **Default:** `false`

## searchOnEnterKey

- **Attribute:** `data-search-on-enter-key`

- **Type:** `Boolean`

- **Detail:**

  The search method will be executed until the Enter key is pressed.

- **Default:** `false`

## strictSearch

- **Attribute:** `data-strict-search`

- **Type:** `Boolean`

- **Detail:**

  Enable the strict search.

- **Default:** `false`

## trimOnSearch

- **Attribute:** `data-trim-on-search`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to trim spaces in search field.

- **Default:** `true`

## searchAlign

- **Attribute:** `data-search-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the search input. `'left'`, `'right'` can be used.

- **Default:** `'right'`

## searchTimeOut

- **Attribute:** `data-search-time-out`

- **Type:** `Number`

- **Detail:**

  Set timeout for search fire.

- **Default:** `500`

## searchText

- **Attribute:** `data-search-text`

- **Type:** `String`

- **Detail:**

  When set search property, initialize the search text.

- **Default:** `''`

## customSearch

- **Attribute:** `data-custom-search`

- **Type:** `Function`

- **Detail:**

  The custom search function is executed instead of built-in search function, takes one parameters:

  * `text`: the search text.

  Example usage:

  {% highlight javascript %}
  function customSearch(text) {
    //Search logic here.
    //You must use `this.data` array in order to filter the data. NO use `this.options.data`.
  }
  {% endhighlight %}

- **Default:** `$.noop`

## showHeader

- **Attribute:** `data-show-header`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide the table header.

- **Default:** `true`

## showFooter

- **Attribute:** `data-show-footer`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the summary footer row.

- **Default:** `false`

## footerStyle

- **Attribute:** `data-footer-style`

- **Type:** `Function`

- **Detail:**

  The footer style formatter function, takes two parameters:

  * `row`: the row record data.
  * `index`: the row index.

  Support classes or css. Example usage:

  {% highlight javascript %}
  function footerStyle(value, row, index) {
    return {
      css: { "font-weight": "bold" }
    }
  }
  {% endhighlight %}

- **Default:** `{}`

## showColumns

- **Attribute:** `data-show-columns`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the columns drop down list.

- **Default:** `false`

## minimumCountColumns

- **Attribute:** `data-minimum-count-columns`

- **Type:** `Number`

- **Detail:**

  The minimum number of columns to hide from the columns drop down list.

- **Default:** `1`

## showPaginationSwitch

- **Attribute:** `data-show-pagination-switch`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the pagination switch button.

- **Default:** `false`

## showRefresh

- **Attribute:** `data-show-refresh`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the refresh button.

- **Default:** `false`

## showToggle

- **Attribute:** `data-show-toggle`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the toggle button to toggle table / card view.

- **Default:** `false`

## showFullscreen

- **Attribute:** `data-show-fullscreen`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the fullscreen button.

- **Default:** `false`

## smartDisplay

- **Attribute:** `data-smart-display`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to display pagination or card view smartly.

- **Default:** `true`

## escape

- **Attribute:** `data-escape`

- **Type:** `Boolean`

- **Detail:**

  Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.

- **Default:** `false`

## idField

- **Attribute:** `data-id-field`

- **Type:** `String`

- **Detail:**

  Indicate which field is an identity field.

- **Default:** `undefined`

## uniqueId

- **Attribute:** `data-unique-id`

- **Type:** `String`

- **Detail:**

  Indicate an unique identifier for each row.

- **Default:** `undefined`

## cardView

- **Attribute:** `data-card-view`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show card view table, for example mobile view.

- **Default:** `false`

## detailView

- **Attribute:** `data-detail-view`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show detail view table.

- **Default:** `false`

## detailFormatter

- **Attribute:** `data-detail-formatter`

- **Type:** `Function`

- **Detail:**

  Format your detail view when detailView is set to true. Return a String and it will be appended into the detail view cell, optionally render the element directly using the third parameter which is a jQuery element of the target cell.

- **Default:** `function(index, row, element) { return '' }`

## detailFilter

- **Attribute:** `data-detail-filter`

- **Type:** `Function`

- **Detail:**

  Enable expansion per row when detailView is set to true. Return true and the row will be enabled for expansion, return false and expansion for the row will be disabled. Default function returns true to enable expansion for all rows.

- **Default:** `function(index, row) { return true }`

## selectItemName

- **Attribute:** `data-select-item-name`

- **Type:** `String`

- **Detail:**

  The name of radio or checkbox input.

- **Default:** `'btSelectItem'`

## clickToSelect

- **Attribute:** `data-click-to-select`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to select checkbox or radiobox when clicking rows.

- **Default:** `false`

## ignoreClickToSelectOn

- **Attribute:** `data-ignore-click-to-select-on`

- **Type:** `Function`

- **Detail:**

  Takes one parameters:

  * `element`: the element clicked on.

  Return true if the click should be ignored, false if the click should cause the row to be selected. This option is only relevant if clickToSelect is true.

- **Default:** `{ return $.inArray(element.tagName, ['A', 'BUTTON']) }`

## singleSelect

- **Attribute:** `data-single-select`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to allow checkbox selecting only one row.

- **Default:** `false`

## checkboxHeader

- **Attribute:** `data-checkbox-header`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide check-all checkbox in header row.

- **Default:** `true`

## maintainSelected

- **Attribute:** `data-maintain-selected`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to maintain selected rows on change page and search.

- **Default:** `false`

## toolbar

- **Attribute:** `data-toolbar`

- **Type:** `String/Node`

- **Detail:**

  A jQuery selector that indicates the toolbar, for example: `#toolbar`, `.toolbar`, or a DOM node.

- **Default:** `undefined`

## toolbarAlign

- **Attribute:** `data-toolbar-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the custom toolbar. `'left'`, `'right'` can be used.

- **Default:** `'left'`

## buttonsToolbar

- **Attribute:** `data-buttons-toolbar`

- **Type:** `String/Node`

- **Detail:**

  A jQuery selector that indicates the buttons toolbar, for example: `#buttons-toolbar`, `.buttons-toolbar`, or a DOM node.

- **Default:** `undefined`

## buttonsAlign

- **Attribute:** `data-buttons-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the toolbar buttons. `'left'`, `'right'` can be used.

- **Default:** `'right'`

## buttonsClass

- **Attribute:** `data-buttons-class`

- **Type:** `String`

- **Detail:**

  Defines the Bootstrap class (added after `'btn-'`) of table buttons.

- **Default:** `'secondary'`

## icons

- **Attribute:** `data-icons`

- **Type:** `Object`

- **Detail:**

  Defines icons used in the toolbar, pagination, and details view.

- **Default:**

  {% highlight html %}
  {
    paginationSwitchDown: 'fa-caret-square-down',
    paginationSwitchUp: 'fa-caret-square-up',
    refresh: 'fa-sync',
    toggleOff: 'fa-toggle-off',
    toggleOn: 'fa-toggle-on',
    columns: 'fa-th-list',
    detailOpen: 'fa-plus',
    detailClose: 'fa-minus',
    fullscreen: 'fa-arrows-alt'
  }
  {% endhighlight %}

## iconSize

- **Attribute:** `data-icon-size`

- **Type:** `String`

- **Detail:**

  Defines icon size: `undefined` => `btnxs` => `btn-xssm` => `btn-smlg` => `btn-lg`

- **Default:** `undefined`

## iconsPrefix

- **Attribute:** `data-icons-prefix`

- **Type:** `String`

- **Detail:**

  Defines icon set name (`'glyphicon'` or `'fa'` for FontAwesome). By default `'fa'` is used for Bootstrap V4.

- **Default:** `'fa'`
