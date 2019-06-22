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

- **Example:** [From HTML](https://examples.bootstrap-table.com/#welcomes/from-html.html)

## height

- **Attribute:** `data-height`

- **Type:** `Number`

- **Detail:**

  The height of table, enable fixed header of table.

  Note that if there are multiple tables on a page and the height option is set at the same time, you need to add the `id` attribute to each table, otherwise, the window resize will not work properly.

- **Default:** `undefined`

- **Example:** [Table Height](https://examples.bootstrap-table.com/#options/table-height.html)

## classes

- **Attribute:** `data-classes`

- **Type:** `String`

- **Detail:**

  The class name of table. `'table'`, `'table-bordered'`, `'table-hover'`, `'table-striped'`, `'table-dark'`, `'table-sm'` and `'table-borderless'` can be used. By default, the table is bordered.

- **Default:** `'table table-bordered table-hover'`

- **Example:** [Table Classes](https://examples.bootstrap-table.com/#options/table-classes.html)

## theadClasses

- **Attribute:** `data-thead-classes`

- **Type:** `String`

- **Detail:**

  The class name of table thead. Bootstrap v4, use the modifier classes `.thead-light` or `.thead-dark` to make `thead`s appear light or dark gray.

- **Default:** `''`

- **Example:** [Thead Classes](https://examples.bootstrap-table.com/#options/thead-classes.html)

## rowStyle

- **Attribute:** `data-row-style`

- **Type:** `Function`

- **Detail:**

  The row style formatter function, takes two parameters:

  * `row`: the row record data.
  * `index`: the row index.

  Support classes or css.

- **Default:** `{}`

- **Example:** [Row Style](https://examples.bootstrap-table.com/#options/row-style.html)

## rowAttributes

- **Attribute:** `data-row-attributes`

- **Type:** `Function`

- **Detail:**

  The row attribute formatter function, takes two parameters:

  * `row`: the row record data.
  * `index`: the row index.

  Support all custom attributes.

- **Default:** `{}`

- **Example:** [Row Attributes](https://examples.bootstrap-table.com/#options/row-attributes.html)

## undefinedText

- **Attribute:** `data-undefined-text`

- **Type:** `String`

- **Detail:**

  Defines the default `undefined` text.

- **Default:** `'-'`

- **Example:** [Undefined Text](https://examples.bootstrap-table.com/#options/undefined-text.html)

## locale

- **Attribute:** `data-locale`

- **Type:** `String`

- **Detail:**

  Sets the locale to use (i.e. `'zh-CN'`). Locale files must be pre-loaded.
  Allows for fallback locales, if loaded, in the following order:

  * First tries for the locale as specified,
  * Then tries the locale with '_' translated to '-' and the region code upper cased,
  * Then tries the short locale code (i.e. `'zh'` instead of `'zh-CN'`),
  * And finally will use the last locale file loaded (or the default locale if no locales loaded).

  If left `undefined` or an empty string, use the last locale loaded (or `'en-US'` if no locale files loaded).

- **Default:** `undefined`

- **Example:** [Table Locale](https://examples.bootstrap-table.com/#options/table-locale.html)

## virtualScroll

- **Attribute:** `data-virtual-scroll`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable virtual scroll to displays a virtual, "infinite" list.

- **Default:** `false`

- **Example:** [Large Data](https://examples.bootstrap-table.com/#options/large-data.html)

## virtualScrollItemHeight

- **Attribute:** `data-virtual-scroll-item-height`

- **Type:** `Number`

- **Detail:**

  If this option is not define, we will use the height of the first item by default.

  It is **important** to provide this if virtual item height will be significantly larger than the default height. This dimension is used to help determine how many cells should be created when initialized, and to help calculate the height of the scrollable area. This height value can only use `px` units.

- **Default:** `undefined`

- **Example:** [Virtual Scroll Item Height](https://examples.bootstrap-table.com/#options/virtual-scroll-item-height.html)

## sortable

- **Attribute:** `data-sortable`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to disable sortable of all columns.

- **Default:** `true`

- **Example:** [Table Sortable](https://examples.bootstrap-table.com/#options/table-sortable.html)

## sortClass

- **Attribute:** `data-sort-class`

- **Type:** `String`

- **Detail:**

  The class name of the `td` elements which are sorted.

- **Default:** `undefined`

- **Example:** [Sort Class](https://examples.bootstrap-table.com/#options/sort-class.html)

## silentSort

- **Attribute:** `data-silent-sort`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to sort the data with the loading message. This options works when the sidePagination option is set to `'server'`.

- **Default:** `true`

- **Example:** [Silent Sort](https://examples.bootstrap-table.com/#options/silent-sort.html)

## sortName

- **Attribute:** `data-sort-name`

- **Type:** `String`

- **Detail:**

  Defines which column will be sorted.

- **Default:** `undefined`

- **Example:** [Sort Name Order](https://examples.bootstrap-table.com/#options/sort-name-order.html)

## sortOrder

- **Attribute:** `data-sort-order`

- **Type:** `String`

- **Detail:**

  Defines the column sort order, can only be `'asc'` or `'desc'`.

- **Default:** `'asc'`

- **Example:** [Sort Name Order](https://examples.bootstrap-table.com/#options/sort-name-order.html)

## sortStable

- **Attribute:** `data-sort-stable`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to get a stable sorting. We will add `'_position'` property to the row.

- **Default:** `false`

- **Example:** [Sort Stable](https://examples.bootstrap-table.com/#options/sort-stable.html)

## rememberOrder

- **Attribute:** `data-remember-order`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to remember the order for each column.

- **Default:** `false`

- **Example:** [Remember Order](https://examples.bootstrap-table.com/#options/remember-order.html)

## customSort

- **Attribute:** `data-custom-sort`

- **Type:** `Function`

- **Detail:**

  The custom sort function is executed instead of the built-in sort function, takes three parameters:

  * `sortName`: the sort name.
  * `sortOrder`: the sort order.
  * `data`: the rows data.

- **Default:** `undefined`

- **Example:** [Custom Order](https://examples.bootstrap-table.com/#options/custom-order.html)

## columns

- **Attribute:** `-`

- **Type:** `Array`

- **Detail:**

  The table columns config object, see column properties for more details.

- **Default:** `[]`

- **Example:** [Table Columns](https://examples.bootstrap-table.com/#options/table-columns.html)

## data

- **Attribute:** `data-data`

- **Type:** `Array | Object`

- **Detail:**

  The data to be loaded.

- **Default:** `[]`

- **Example:** [From Data](https://examples.bootstrap-table.com/#welcomes/from-data.html)

## url

- **Attribute:** `data-url`

- **Type:** `String`

- **Detail:**

  A URL to request data from remote site.

  Note that the required server response format is different depending on whether the `'sidePagination'` option is specified. See the following examples:

  * [Without server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data1.json)
  * [With server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data2.json)

- **Default:** `undefined`

- **Example:** [From URL](https://examples.bootstrap-table.com/#welcomes/from-url.html)

- **Error handling**

  To get loading errors please use [onLoadError](https://bootstrap-table.com/docs/api/events/#onloaderror)

## method

- **Attribute:** `data-method`

- **Type:** `String`

- **Detail:**

  The method type to request remote data.

- **Default:** `'get'`

- **Example:** [Table Method](https://examples.bootstrap-table.com/#options/table-method.html)

## cache

- **Attribute:** `data-cache`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to disable caching of AJAX requests.

- **Default:** `true`

- **Example:** [Table Cache](https://examples.bootstrap-table.com/#options/table-cache.html)

## contentType

- **Attribute:** `data-content-type`

- **Type:** `String`

- **Detail:**

  The contentType of request remote data, for example: `application/x-www-form-urlencoded`.

- **Default:** `'application/json'`

- **Example:** [Content Type](https://examples.bootstrap-table.com/#options/content-type.html)

## dataType

- **Attribute:** `data-data-type`

- **Type:** `String`

- **Detail:**

  The type of data that you are expecting back from the server.

- **Default:** `'json'`

- **Example:** [Data Type](https://examples.bootstrap-table.com/#options/data-type.html)

## ajax

- **Attribute:** `data-ajax`

- **Type:** `Function`

- **Detail:**

  A method to replace ajax call. Should implement the same API as jQuery ajax method.

- **Default:** `undefined`

- **Example:** [Table AJAX](https://examples.bootstrap-table.com/#options/table-ajax.html)

## ajaxOptions

- **Attribute:** `data-ajax-options`

- **Type:** `Object`

- **Detail:**

  Additional options for submit ajax request. List of values: [jQuery.ajax](http://api.jquery.com/jQuery.ajax).

- **Default:** `{}`

- **Example:** [AJAX Options](https://examples.bootstrap-table.com/#options/ajax-options.html)

## queryParams

- **Attribute:** `data-query-params`

- **Type:** `Function`

- **Detail:**

  When requesting remote data, you can send additional parameters by modifying queryParams.

  If `queryParamsType = 'limit'`, the params object contains: `limit`, `offset`, `search`, `sort`, `order`.

  Else, it contains: `pageSize`, `pageNumber`, `searchText`, `sortName`, `sortOrder`.

  Return `false` to stop request.

- **Default:** `function(params) { return params }`

- **Example:** [Query Params](https://examples.bootstrap-table.com/#options/query-params.html)

## queryParamsType

- **Attribute:** `data-query-params-type`

- **Type:** `String`

- **Detail:**

  Set `'limit'` to send query params with RESTFul type.

- **Default:** `'limit'`

- **Example:** [Query Params Type](https://examples.bootstrap-table.com/#options/query-params-type.html)

## responseHandler

- **Attribute:** `data-response-handler`

- **Type:** `Function`

- **Detail:**

  Before load remote data, handler the response data format, the parameters object contains:

  * `res`: the response data.

- **Default:** `function(res) { return res }`

- **Example:** [Response Handler](https://examples.bootstrap-table.com/#options/response-handler.html)

## totalField

- **Attribute:** `data-total-field`

- **Type:** `String`

- **Detail:**

  Key in incoming json containing `'total'` data.

- **Default:** `'total'`

- **Example:** [Total/Data Field](https://examples.bootstrap-table.com/#options/total-data-field.html)

## totalNotFilteredField

- **Attribute:** `data-total-not-filtered-field`

- **Type:** `string`

- **Detail:**

  The field from the json response which will used for `showExtendedPagination`.

- **Default:** `totalNotFiltered`

- **Example:** [Total Not Filtered Field](https://examples.bootstrap-table.com/#options/total-not-filtered-field.html)

## dataField

- **Attribute:** `data-data-field`

- **Type:** `String`

- **Detail:**

  Key in incoming json containing `'rows'` data list.

- **Default:** `'rows'`

- **Example:** [Total/Data Field](https://examples.bootstrap-table.com/#options/total-data-field.html)

## pagination

- **Attribute:** `data-pagination`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a pagination toolbar on table bottom.

- **Default:** `false`

- **Example:** [Table Pagination](https://examples.bootstrap-table.com/#options/table-pagination.html)

## onlyInfoPagination

- **Attribute:** `data-only-info-pagination`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show only the quantity of the data that is showing in the table. It needs the pagination table options is set to true.

- **Default:** `false`

- **Example:** [Only Info Pagination](https://examples.bootstrap-table.com/#options/only-info-pagination.html)

## showExtendedPagination

- **Attribute:** `data-show-extended-pagination`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a extended version of pagination (including the count of all rows with out filters).
  If you use pagination on the server side pls use `totalNotFilteredField` to define the count.

- **Default:** `false`

- **Example:** [Show Extended Pagination](https://examples.bootstrap-table.com/#options/show-extended-pagination.html)

## paginationLoop

- **Attribute:** `data-pagination-loop`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable pagination continuous loop mode.

- **Default:** `true`

- **Example:** [Pagination Loop](https://examples.bootstrap-table.com/#options/pagination-loop.html)

## sidePagination

- **Attribute:** `data-side-pagination`

- **Type:** `String`

- **Detail:**

  Defines the side pagination of the table, can only be `'client'` or `'server'`.
  Using `'server'` side requires either setting the `'url'` or `'ajax'` option.

  Note that the required server response format is different depending on whether the  `'sidePagination'` option is set to `'client'` or `'server'`. See the following examples:

  * [Without server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data1.json)
  * [With server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data2.json)

- **Default:** `'client'`

- **Example:** [Client Side Pagination](https://examples.bootstrap-table.com/#options/client-side-pagination.html) and [Server Side Pagination](https://examples.bootstrap-table.com/#options/server-side-pagination.html)

## totalRows

- **Attribute:** `data-total-rows`

- **Type:** `Number`

- **Detail:**

  This property is mainly passed in by pagination server, which is easy to use.

- **Default:** `0`

## totalNotFiltered

- **Attribute:** `data-total-not-filtered`

- **Type:** `Number`

- **Detail:**

  This property is mainly passed in by pagination server, which is easy to use.

- **Default:** `0`

## pageNumber

- **Attribute:** `data-page-number`

- **Type:** `Number`

- **Detail:**

  When set pagination property, initialize the page number.

- **Default:** `1`

- **Example:** [Page Number](https://examples.bootstrap-table.com/#options/page-number.html)

## pageSize

- **Attribute:** `data-page-size`

- **Type:** `Number`

- **Detail:**

  When set pagination property, initialize the page size.

- **Default:** `10`

- **Example:** [Page Size](https://examples.bootstrap-table.com/#options/page-size.html)

## pageList

- **Attribute:** `data-page-list`

- **Type:** `Array`

- **Detail:**

  When set pagination property, initialize the page size selecting list. If you include the `'all'` or `'unlimited'` option, all the records will be shown in your table.

- **Default:** `[10, 25, 50, 100]`

- **Example:** [Page List](https://examples.bootstrap-table.com/#options/page-list.html)

## paginationHAlign

- **Attribute:** `data-pagination-h-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the pagination. `'left'`, `'right'` can be used.

- **Default:** `'right'`

- **Example:** [Pagination H Align](https://examples.bootstrap-table.com/#options/pagination-h-align.html)

## paginationVAlign

- **Attribute:** `data-pagination-v-align`

- **Type:** `String`

- **Detail:**

  Indicate how to vertical align the pagination. `'top'`, `'bottom'`, `'both'` (put the pagination on top and bottom)  can be used.

- **Default:** `'bottom'`

- **Example:** [Pagination V Align](https://examples.bootstrap-table.com/#options/pagination-v-align.html)

## paginationDetailHAlign

- **Attribute:** `data-pagination-detail-h-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the pagination detail. `'left'`, `'right'` can be used.

- **Default:** `'left'`

- **Example:** [Pagination H Align](https://examples.bootstrap-table.com/#options/pagination-h-align.html)

## paginationPreText

- **Attribute:** `data-pagination-pre-text`

- **Type:** `String`

- **Detail:**

  Indicate the icon or text to be shown in the pagination detail, the previous button.

- **Default:** `'‹'`

- **Example:** [Pagination Text](https://examples.bootstrap-table.com/#options/pagination-text.html)

## paginationNextText

- **Attribute:** `data-pagination-next-text`

- **Type:** `String`

- **Detail:**

  Indicate the icon or text to be shown in the pagination detail, the next button.

- **Default:** `'›'`

- **Example:** [Pagination Text](https://examples.bootstrap-table.com/#options/pagination-text.html)

## paginationSuccessivelySize

- **Attribute:** `data-pagination-successively-size`

- **Type:** `Number`

- **Detail:**

  Maximum successive number of pages in a row.

- **Default:** `5`

- **Example:** [Pagination Index Number](https://examples.bootstrap-table.com/#options/pagination-index-number.html)

## paginationPagesBySide

- **Attribute:** `data-pagination-pages-by-side`

- **Type:** `Number`

- **Detail:**

  The number of pages on each side (right, left) of the current page.

- **Default:** `1`

- **Example:** [Pagination Index Number](https://examples.bootstrap-table.com/#options/pagination-index-number.html)

## paginationUseIntermediate

- **Attribute:** `data-pagination-use-intermediate`

- **Type:** `Boolean`

- **Detail:**

  Calculate and show intermediate pages for quick access.

- **Default:** `false`

- **Example:** [Pagination Index Number](https://examples.bootstrap-table.com/#options/pagination-index-number.html)

## search

- **Attribute:** `data-search`

- **Type:** `Boolean`

- **Detail:**

  Enable the search input.

  There are 3 ways to search:
  - The value contains the search query (Default).
    Example: Github contains git.
  - The value must be identical to the search query.
    Example: Github (value) and Github (search query).
  - Comparisons (<, >, <=, =<, >=, =>).
    Example: 4 is larger than 3.

- **Default:** `false`

- **Example:** [Table Search](https://examples.bootstrap-table.com/#options/table-search.html)

## searchOnEnterKey

- **Attribute:** `data-search-on-enter-key`

- **Type:** `Boolean`

- **Detail:**

  The search method will be executed until the Enter key is pressed.

- **Default:** `false`

- **Example:** [Search On Enter Key](https://examples.bootstrap-table.com/#options/search-on-enter-key.html)

## strictSearch

- **Attribute:** `data-strict-search`

- **Type:** `Boolean`

- **Detail:**

  Enable the strict search.
  Disables the comparison checks.

- **Default:** `false`

- **Example:** [Strict Search](https://examples.bootstrap-table.com/#options/strict-search.html)

## visibleSearch

- **Attribute:** `visible-search`

- **Type:** `Boolean`

- **Detail:**

  set `true` to search only in visible column/data, if the data contains other values which are not displayed they will be ignored while searching.

- **Default:** `false`

- **Example:** [visible search](https://examples.bootstrap-table.com/#options/visible-search.html)

## showButtonIcons

- **Attribute:** `show-button-icons`

- **Type:** `Boolean`

- **Detail:**

  All buttons will show icons on it

- **Default:** `true`

- **Example:** [show button icons](https://examples.bootstrap-table.com/#options/show-button-icons.html)

## showButtonText

- **Attribute:** `show-button-text`

- **Type:** `Boolean`

- **Detail:**

  All buttons will show an text on it

- **Default:** `false`

- **Example:** [show button text](https://examples.bootstrap-table.com/#options/show-button-text.html)

## showSearchButton

- **Attribute:** `data-show-search-button`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a search Button behind the search input.
  The Search will only be executed if the button is pressed (e.g. to prevent traffic or loading time).

- **Default:** `false`

- **Example:** [Show Search Button](https://examples.bootstrap-table.com/#options/show-search-button.html)

## showSearchClearButton

- **Attribute:** `data-show-search-clear-button`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a clear Button behind the search input which will clear the search input (also all filter from filter-control (if enabled)).

- **Default:** `false`

- **Example:** [Show Search Clear Button](https://examples.bootstrap-table.com/#options/show-search-clear-button.html)

## trimOnSearch

- **Attribute:** `data-trim-on-search`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to trim spaces in search field.

- **Default:** `true`

- **Example:** [Trim On Search](https://examples.bootstrap-table.com/#options/trim-on-search.html)

## searchAlign

- **Attribute:** `data-search-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the search input. `'left'`, `'right'` can be used.

- **Default:** `'right'`

- **Example:** [Search Align](https://examples.bootstrap-table.com/#options/search-align.html)

## searchTimeOut

- **Attribute:** `data-search-time-out`

- **Type:** `Number`

- **Detail:**

  Set timeout for search fire.

- **Default:** `500`

- **Example:** [Search Time Out](https://examples.bootstrap-table.com/#options/search-time-out.html)

## searchText

- **Attribute:** `data-search-text`

- **Type:** `String`

- **Detail:**

  When set search property, initialize the search text.

- **Default:** `''`

- **Example:** [Search Text](https://examples.bootstrap-table.com/#options/search-text.html)

## customSearch

- **Attribute:** `data-custom-search`

- **Type:** `Function`

- **Detail:**

  The custom search function is executed instead of built-in search function, takes two parameters:

  * `data`: the table data.
  * `text`: the search text.

  Example usage:

  {% highlight javascript %}
  function customSearch(data, text) {
    return data.filter(function (row) {
      return row.field.indexOf(text) > -1
    })
  }
  {% endhighlight %}

- **Default:** `undefined`

- **Example:** [Custom Search](https://examples.bootstrap-table.com/#options/custom-search.html)

## showHeader

- **Attribute:** `data-show-header`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide the table header.

- **Default:** `true`

- **Example:** [Show Header](https://examples.bootstrap-table.com/#options/show-header.html)

## showFooter

- **Attribute:** `data-show-footer`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the summary footer row.

- **Default:** `false`

- **Example:** [Show Footer](https://examples.bootstrap-table.com/#options/show-footer.html)

## footerStyle

- **Attribute:** `data-footer-style`

- **Type:** `Function`

- **Detail:**

  The footer style formatter function, takes one parameter:

  * `column`: the column object.

  Support `classes` or `css`. Example usage:

  {% highlight javascript %}
  function footerStyle(column) {
    return {
      css: { 'font-weight': 'normal' },
      classes: 'my-class'
    }
  }
  {% endhighlight %}

- **Default:** `{}`

- **Example:** [Footer Style](https://examples.bootstrap-table.com/#options/footer-style.html)

## showColumns

- **Attribute:** `data-show-columns`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the columns drop down list.

- **Default:** `false`

- **Example:** [Basic Columns](https://examples.bootstrap-table.com/#options/basic-columns.html) and [Large Columns](https://examples.bootstrap-table.com/#options/large-columns.html)

## showColumnsToggleAll

- **Attribute:** `data-show-columns-toggle-all`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a toogle all checkbox within the columns option/dropdown.

- **Default:** `false`

- **Example:** [Columns Toggle All](https://examples.bootstrap-table.com/#options/columns-toggle-all.html)

## minimumCountColumns

- **Attribute:** `data-minimum-count-columns`

- **Type:** `Number`

- **Detail:**

  The minimum number of columns to hide from the columns drop down list.

- **Default:** `1`

- **Example:** [Minimum Count Columns](https://examples.bootstrap-table.com/#options/minimum-count-columns.html)

## showPaginationSwitch

- **Attribute:** `data-show-pagination-switch`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the pagination switch button.

- **Default:** `false`

- **Example:** [Show Pagination Switch](https://examples.bootstrap-table.com/#options/show-pagination-switch.html)

## showRefresh

- **Attribute:** `data-show-refresh`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the refresh button.

- **Default:** `false`

- **Example:** [Show Refresh](https://examples.bootstrap-table.com/#options/show-refresh.html)

## showToggle

- **Attribute:** `data-show-toggle`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the toggle button to toggle table / card view.

- **Default:** `false`

- **Example:** [Show Toggle](https://examples.bootstrap-table.com/#options/show-toggle.html)

## showFullscreen

- **Attribute:** `data-show-fullscreen`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the fullscreen button.

- **Default:** `false`

- **Example:** [Show Fullscreen](https://examples.bootstrap-table.com/#options/show-fullscreen.html)

## smartDisplay

- **Attribute:** `data-smart-display`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to display pagination or card view smartly.

- **Default:** `true`

- **Example:** [Smart Display](https://examples.bootstrap-table.com/#options/smart-display.html)

## escape

- **Attribute:** `data-escape`

- **Type:** `Boolean`

- **Detail:**

  Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.

- **Default:** `false`

- **Example:** [Table Escape](https://examples.bootstrap-table.com/#options/table-escape.html)

## filterOptions

- **Attribute:** `data-filter-options`

- **Type:** `Boolean`

- **Detail:**

  Define the default filter options of algorithm, `filterAlgorithm: 'and'` means all given filter must match, `filterAlgorithm: 'or'` means one of the given filter must match.

- **Default:** `{ filterAlgorithm: 'and' }`

- **Example:** [Filter Options](https://examples.bootstrap-table.com/#options/filter-options.html)

## idField

- **Attribute:** `data-id-field`

- **Type:** `String`

- **Detail:**

  Indicate which field will be used as checkbox/radiobox value, its the counterpart to [selectItemName](https://bootstrap-table.com/docs/api/table-options/#selectitemname).

- **Default:** `undefined`

- **Example:** [Id Field](https://examples.bootstrap-table.com/#options/id-field.html)

## selectItemName

- **Attribute:** `data-select-item-name`

- **Type:** `String`

- **Detail:**

  The name of radio or checkbox input.

- **Default:** `'btSelectItem'`

- **Example:** [Id Field](https://examples.bootstrap-table.com/#options/id-field.html)

## clickToSelect

- **Attribute:** `data-click-to-select`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to select checkbox or radiobox when clicking rows.

- **Default:** `false`

- **Example:** [Click To Select](https://examples.bootstrap-table.com/#options/click-to-select.html)

## ignoreClickToSelectOn

- **Attribute:** `data-ignore-click-to-select-on`

- **Type:** `Function`

- **Detail:**

  Set the ignore elements `clickToSelect` on. Takes one parameter:

  * `element`: the element clicked on.

  Return true if the click should be ignored, false if the click should cause the row to be selected. This option is only relevant if `clickToSelect` is true.

- **Default:** `{ return ['A', 'BUTTON'].includes(tagName) }`

- **Example:** [Ignore Click To Select On](https://examples.bootstrap-table.com/#options/ignore-click-to-select-on.html)

## singleSelect

- **Attribute:** `data-single-select`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to allow checkbox selecting only one row.

- **Default:** `false`

- **Example:** [Single Select](https://examples.bootstrap-table.com/#options/single-select.html)

## checkboxHeader

- **Attribute:** `data-checkbox-header`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide check-all checkbox in header row.

- **Default:** `true`

- **Example:** [Checkbox Header](https://examples.bootstrap-table.com/#options/checkbox-header.html)

## maintainMetaData

- **Attribute:** `data-maintain-meta-data`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to maintain the following meta data on change page and search:
   * selected rows
   * hidden rows

- **Default:** `false`

- **Example:** [Maintain Meta Data](https://examples.bootstrap-table.com/#options/maintain-meta-data.html)

## multipleSelectRow

- **Attribute:** `data-multiple-select-row`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable the multiple selection row. Can use the ctrl+click to select one row or use shift+click to select a range of rows.

- **Default:** `false`

- **Example:** [Multiple Select Row](https://examples.bootstrap-table.com/#options/multiple-select-row.html)

## uniqueId

- **Attribute:** `data-unique-id`

- **Type:** `String`

- **Detail:**

  Indicate an unique identifier for each row.

- **Default:** `undefined`

- **Example:** [getRowByUniqueId](https://examples.bootstrap-table.com/#methods/getRowByUniqueId.html)

## cardView

- **Attribute:** `data-card-view`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show card view table, for example mobile view.

- **Default:** `false`

- **Example:** [Card View](https://examples.bootstrap-table.com/#options/card-view.html)

## detailView

- **Attribute:** `data-detail-view`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show detail view table.

- **Default:** `false`

- **Example:** [Detail View](https://examples.bootstrap-table.com/#options/detail-view.html)

## detailViewIcon

- **Attribute:** `data-detail-view-icon`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the detail view column (plus/minus icon).

- **Default:** `true`

- **Example:** [Detail View Icon](https://examples.bootstrap-table.com/#options/detail-view-icon.html)

## detailViewByClick

- **Attribute:** `data-detail-view-by-click`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to toggle the detail view, when a cell is clicked.

- **Default:** `false`

- **Example:** [Detail View Icon](https://examples.bootstrap-table.com/#options/detail-view-icon.html)

## detailFormatter

- **Attribute:** `data-detail-formatter`

- **Type:** `Function`

- **Detail:**

  Format your detail view when `detailView` is set to `true`. Return a String and it will be appended into the detail view cell, optionally render the element directly using the third parameter which is a jQuery element of the target cell.

- **Default:** `function(index, row, element) { return '' }`

- **Example:** [Detail View](https://examples.bootstrap-table.com/#options/detail-view.html)

## detailFilter

- **Attribute:** `data-detail-filter`

- **Type:** `Function`

- **Detail:**

  Enable expansion per row when `detailView` is set to `true`. Return true and the row will be enabled for expansion, return false and expansion for the row will be disabled. Default function returns true to enable expansion for all rows.

- **Default:** `function(index, row) { return true }`

- **Example:** [Detail Filter](https://examples.bootstrap-table.com/#options/detail-filter.html)

## toolbar

- **Attribute:** `data-toolbar`

- **Type:** `String/Node`

- **Detail:**

  A jQuery selector that indicates the toolbar, for example: `#toolbar`, `.toolbar`, or a DOM node.

- **Default:** `undefined`

- **Example:** [Custom Toolbar](https://examples.bootstrap-table.com/#options/custom-toolbar.html)

## toolbarAlign

- **Attribute:** `data-toolbar-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the custom toolbar. `'left'`, `'right'` can be used.

- **Default:** `'left'`

- **Example:** [Toolbar Align](https://examples.bootstrap-table.com/#options/toolbar-align.html)

## buttonsToolbar

- **Attribute:** `data-buttons-toolbar`

- **Type:** `String/Node`

- **Detail:**

  A jQuery selector that indicates the custom buttons toolbar, for example: `#buttons-toolbar`, `.buttons-toolbar`, or a DOM node.

- **Default:** `undefined`

- **Example:** [Buttons Toolbar](https://examples.bootstrap-table.com/#options/buttons-toolbar.html)

## buttonsAlign

- **Attribute:** `data-buttons-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the toolbar buttons. `'left'`, `'right'` can be used.

- **Default:** `'right'`

- **Example:** [Buttons Align](https://examples.bootstrap-table.com/#options/buttons-align.html)

## buttonsPrefix

- **Attribute:** `data-buttons-prefix`

- **Type:** `String`

- **Detail:**

  Defines prefix of table buttons.

- **Default:** `'btn'`

- **Example:** [Buttons Prefix](https://examples.bootstrap-table.com/#options/buttons-prefix.html)

## buttonsClass

- **Attribute:** `data-buttons-class`

- **Type:** `String`

- **Detail:**

  Defines the class (added after `'btn-'`) of table buttons.

- **Default:** `'secondary'`

- **Example:** [Buttons Class](https://examples.bootstrap-table.com/#options/buttons-class.html)

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
    fullscreen: 'fa-arrows-alt',
    detailOpen: 'fa-plus',
    detailClose: 'fa-minus'
  }
  {% endhighlight %}

- **Example:** [Table Icons](https://examples.bootstrap-table.com/#options/table-icons.html)

## html

- **Attribute:** `data-html`

- **Type:** `Object`

- **Detail:**

  Defines some html of the table.

- **Default:**

  Too much code, please checkout the source code of the `index.js`

- **Example:** [Table Html](https://examples.bootstrap-table.com/#options/table-html.html)

## iconSize

- **Attribute:** `data-icon-size`

- **Type:** `String`

- **Detail:**

  Defines icon size, `undefined`, `'lg'`, `'sm'` can be used.

- **Default:** `undefined`

- **Example:** [Icon Size](https://examples.bootstrap-table.com/#options/icon-size.html)

## iconsPrefix

- **Attribute:** `data-icons-prefix`

- **Type:** `String`

- **Detail:**

  Defines icon set name (`'glyphicon'` or `'fa'` for FontAwesome). By default `'fa'` is used for Bootstrap v4.

- **Default:** `'fa'`

- **Example:** [Icons Prefix](https://examples.bootstrap-table.com/#options/icons-prefix.html)
