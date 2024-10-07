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

## buttons

- **Attribute:** `data-buttons`

- **Type:** `Function`

- **Detail:**

  This option allows creating/adding custom button(s) to the "buttons bar" (top right of the table).
  These buttons can be sorted with the table option [buttonsOrder](https://bootstrap-table.com/docs/api/table-options/#buttonsorder), the used key/name for the event should be used for that!

  The custom button is highly configurable, the following options exists:
  - `text`
    - Description: This options is used for the [showButtonText](https://bootstrap-table.com/docs/api/table-options/#showbuttontext) table option.
    - Type: `String`
  - `icon`
    - Description: This option is used for the [showButtonIcons](https://bootstrap-table.com/docs/api/table-options/#showbuttonicons) table option.
    - Type: `String` - Only needs the icon class e.g. `fa-users`
  - `render`
    - Description: Set this option to `false` to hide the button by default, the button is visible again when you add the data attribute `data-show-button-name="true"`.
  - `attributes`
    - Description: This option allows adding additional html attributes e.g. `title`
    - Type: `Object`
    - Example: `{title: 'Button title'}`
  - `html`
    - Description: If you don't want to autogenerate the html, you can use this option to insert your custom html.
      The `event` option only works if you custom HTML contains `name="button-name"`.
      If this option is used the following options will be ignored:
      - `text`
      - `icon`
      - `attributes`
    - Type: `Function|String`
  - `event`
    - Description: Should be used if you want to add an event to the button
    - Type: `Function|Object|String`

  The `event` option can be configured in three ways.
  One event with `click` event:
  ```javascript
  {
    'event': () => { }
  }
  ```

  One event with a self-defined event type:
  ```javascript
    {
      'event': {
        'mouseenter': () => { }
      }
    }
  ```

  Multiple events with self-defined event types:
  ```javascript
    {
      'event': {
        'click': () => { },
        'mouseenter': () => { },
        'mouseleave': () => { }
      }
    }
  ```

  **Hint:** Instead of inline functions, you also can use function names.

  A configured custom button could look like this:
  ``` javascript
  {
    btnRemoveEvenRows: {
      'text': 'Remove even Rows',
      'icon': 'fa-trash',
      'event': () => {
        //DO STUFF TO REMOVE EVEN ROWS
      },
      'attributes': {
        'title': 'Remove all rows which has a even id'
      }
    }
  }
  ```

- **Default:** `{}`

- **Example:** [Buttons](https://examples.bootstrap-table.com/#options/buttons.html)

## buttonsAlign

- **Attribute:** `data-buttons-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the toolbar buttons. `'left'`, `'right'` can be used.

- **Default:** `'right'`

- **Example:** [Buttons Align](https://examples.bootstrap-table.com/#options/buttons-align.html)

## buttonsAttributeTitle

- **Attribute:** `data-buttons-attribute-title`

- **Type:** `String`

- **Detail:**

  Customize the title attribute of the toolbar buttons, which is mainly used to customize the toolbar style.

- **Default:** `'title'`

- **Example:** [Buttons Attribute Title](https://examples.bootstrap-table.com/#options/buttons-attribute-title.html)

## buttonsClass

- **Attribute:** `data-buttons-class`

- **Type:** `String`

- **Detail:**

  Defines the class (added after `'btn-'`) of table buttons.

- **Default:** `'secondary'`

- **Example:** [Buttons Class](https://examples.bootstrap-table.com/#options/buttons-class.html)

## buttonsOrder

- **Attribute:** `data-buttons-order`

- **Type:** `Array`

- **Detail:**

  Indicate how to custom order the toolbar buttons.

- **Default:** `['paginationSwitch', 'refresh', 'toggle', 'fullscreen', 'columns']`

- **Example:** [Buttons Order](https://examples.bootstrap-table.com/#options/buttons-order.html)

## buttonsPrefix

- **Attribute:** `data-buttons-prefix`

- **Type:** `String`

- **Detail:**

  Defines prefix of table buttons.

- **Default:** `'btn'`

- **Example:** [Buttons Prefix](https://examples.bootstrap-table.com/#options/buttons-prefix.html)

## buttonsToolbar

- **Attribute:** `data-buttons-toolbar`

- **Type:** `String/Node`

- **Detail:**

  A jQuery selector that indicates the custom buttons toolbar, for example: `#buttons-toolbar`, `.buttons-toolbar`, or a DOM node.

- **Default:** `undefined`

- **Example:** [Buttons Toolbar](https://examples.bootstrap-table.com/#options/buttons-toolbar.html)

## cache

- **Attribute:** `data-cache`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to disable caching of AJAX requests.

- **Default:** `true`

- **Example:** [Table Cache](https://examples.bootstrap-table.com/#options/table-cache.html)

## cardView

- **Attribute:** `data-card-view`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show card view table, for example, mobile view.

- **Default:** `false`

- **Example:** [Card View](https://examples.bootstrap-table.com/#options/card-view.html)

## checkboxHeader

- **Attribute:** `data-checkbox-header`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide the check-all checkbox in the header row.

- **Default:** `true`

- **Example:** [Checkbox Header](https://examples.bootstrap-table.com/#options/checkbox-header.html)

## classes

- **Attribute:** `data-classes`

- **Type:** `String`

- **Detail:**

  The class name of table. `'table'`, `'table-bordered'`, `'table-hover'`, `'table-striped'`, `'table-dark'`, `'table-sm'` and `'table-borderless'` can be used. By default, the table is bordered.

- **Default:** `'table table-bordered table-hover'`

- **Example:** [Table Classes](https://examples.bootstrap-table.com/#options/table-classes.html)

## clickToSelect

- **Attribute:** `data-click-to-select`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to select the checkbox or radio box when clicking rows.

- **Default:** `false`

- **Example:** [Click To Select](https://examples.bootstrap-table.com/#options/click-to-select.html)

## columns

- **Attribute:** `-`

- **Type:** `Array`

- **Detail:**

  The table columns config object. See column properties for more details.

- **Default:** `[]`

- **Example:** [Table Columns](https://examples.bootstrap-table.com/#options/table-columns.html)

## contentType

- **Attribute:** `data-content-type`

- **Type:** `String`

- **Detail:**

  The contentType of request remote data, for example: `application/x-www-form-urlencoded`.

- **Default:** `'application/json'`

- **Example:** [Content Type](https://examples.bootstrap-table.com/#options/content-type.html)

## customSearch

- **Attribute:** `data-custom-search`

- **Type:** `Function`

- **Detail:**

  The custom search function is executed instead of the built-in search function, takes three parameters:

  * `data`: the table data.
  * `text`: the search text.
  * `filter`: the filter object from `filterBy` method.

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

## customSort

- **Attribute:** `data-custom-sort`

- **Type:** `Function`

- **Detail:**

  The custom sort function is executed instead of the built-in sort function, takes three parameters:

  * `sortName`: the sort name.
  * `sortOrder`: the sort order.
  * `data`: the rows data.

- **Default:** `undefined`

- **Example:** [Custom Order](https://examples.bootstrap-table.com/#options/custom-sort.html)

## data

- **Attribute:** `data-data`

- **Type:** `Array | Object`

- **Detail:**

  The data to be loaded.

  If in the data has `_<field>_rowspan` or `_<field>_colspan` property, then will merge cells auto, for example:
  ```js
  $table.bootstrapTable({
    data: [
      {
        id: 1,
        name: 'Item 1',
        _name_rowspan: 2,
        price: '$1'
      },
      {
        id: 2,
        price: '$2'
      }
    ]
  })
  ```
  If using this feature, the `data` is required to ensure that the format is correct.

- **Default:** `[]`

- **Example:** [From Data](https://examples.bootstrap-table.com/#welcomes/from-data.html)

## dataField

- **Attribute:** `data-data-field`

- **Type:** `String`

- **Detail:**

  Key in incoming JSON containing `'rows'` data list.

- **Default:** `'rows'`

- **Example:** [Total/Data Field](https://examples.bootstrap-table.com/#options/total-data-field.html)

## dataType

- **Attribute:** `data-data-type`

- **Type:** `String`

- **Detail:**

  The type of data that you are expecting back from the server.

- **Default:** `'json'`

- **Example:** [Data Type](https://examples.bootstrap-table.com/#options/data-type.html)

## detailFilter

- **Attribute:** `data-detail-filter`

- **Type:** `Function`

- **Detail:**

  Enable expansion per row when `detailView` is set to `true`. Return true, and the row will be enabled for expansion, return false and expansion for the row will be disabled. Default function returns true to allow expansion for all rows.

- **Default:** `function(index, row) { return true }`

- **Example:** [Detail Filter](https://examples.bootstrap-table.com/#options/detail-filter.html)

## detailFormatter

- **Attribute:** `data-detail-formatter`

- **Type:** `Function`

- **Detail:**

  Format your detail view when `detailView` is set to `true`. Return a String, and it will be appended into the detail view cell, optionally render the element directly using the third parameter, which is a jQuery element of the target cell.

- **Default:** `function(index, row, element) { return '' }`

- **Example:** [Detail View](https://examples.bootstrap-table.com/#options/detail-view.html)

## detailView

- **Attribute:** `data-detail-view`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a detailed view table. You can set the `uniqueId` option to maintain the detail view state when refreshing the table.

- **Default:** `false`

- **Example:** [Detail View UniqueId](https://examples.bootstrap-table.com/#options/detail-view-unique-id.html)

## detailViewAlign

- **Attribute:** `data-detail-view-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the detail view icon. `'left'`, `'right'` can be used.

- **Default:** `'left'`

- **Example:** [Detail view Align](https://examples.bootstrap-table.com/#options/detail-view-align.html)

## detailViewByClick

- **Attribute:** `data-detail-view-by-click`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to toggle the detail view when a cell is clicked.

- **Default:** `false`

- **Example:** [Detail View Icon](https://examples.bootstrap-table.com/#options/detail-view-icon.html)

## detailViewIcon

- **Attribute:** `data-detail-view-icon`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the detail view column (plus/minus icon).

- **Default:** `true`

- **Example:** [Detail View Icon](https://examples.bootstrap-table.com/#options/detail-view-icon.html)

## escape

- **Attribute:** `data-escape`

- **Type:** `Boolean`

- **Detail:**

  Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
  To disable it for the column titles check the `escapeTitle` option.

- **Default:** `false`

- **Example:** [Table Escape](https://examples.bootstrap-table.com/#options/table-escape.html)

## escapeTitle

- **Attribute:** `data-escape-title`

- **Type:** `Boolean`

- **Detail:**

  Toggles if the `escape` option should be applied to the column titles.

- **Default:** `true`

- **Example:** [Table Escape title](https://examples.bootstrap-table.com/#options/table-escape-title.html)

## filterOptions

- **Attribute:** `data-filter-options`

- **Type:** `Boolean`

- **Detail:**

  Define the default filter options of the algorithm, `filterAlgorithm: 'and'` means all given filters must match, `filterAlgorithm: 'or'` means one of the given filters must match.

- **Default:** `{ filterAlgorithm: 'and' }`

- **Example:** [Filter Options](https://examples.bootstrap-table.com/#options/filter-options.html)

## fixedScroll

- **Attribute:** `data-fixed-scroll`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable the fixed scrollbar position of the table when loading data.

- **Default:** `false`

- **Example:** [Fixed Scroll](https://examples.bootstrap-table.com/#options/fixed-scroll.html)

## footerField

- **Attribute:** `data-footer-field`

- **Type:** `String`

- **Detail:**

  Defines the key of the footer Object (From data array or server response JSON).
  The footer Object can be used to set/define footer colspan and/or the value of the footer.
  Only triggered when `data-pagination` is `true` and `data-side-pagination` is `server`.


  {% highlight javascript %}
    {
      "rows": [
        {
          "id": 0,
          "name": "Item 0",
          "price": "$0",
          "amount": 3
        }
      ],
      "footer": {
        "id": "footer id",
        "_id_colspan": 2,
        "name": "footer name"
      }
    }
    {% endhighlight %}

- **Default:** `footerField`

- **Example:** [Footer Field](https://examples.bootstrap-table.com/#options/footer-field.html)

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

## headerStyle

- **Attribute:** `data-header-style`

- **Type:** `Function`

- **Detail:**

  The header style formatter function, takes one parameter:

  * `column`: the column object.

  Support `classes` or `css`. Example usage:

  {% highlight javascript %}
  function headerStyle(column) {
    return {
      css: { 'font-weight': 'normal' },
      classes: 'my-class'
    }
  }
  {% endhighlight %}

- **Default:** `{}`

- **Example:** [Header Style](https://examples.bootstrap-table.com/#options/header-style.html)

## height

- **Attribute:** `data-height`

- **Type:** `Number`

- **Detail:**

  The height of the table, enables a fixed header of the table.

- **Default:** `undefined`

- **Example:** [Table Height](https://examples.bootstrap-table.com/#options/table-height.html)

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

  Defines icon set name. By default, this option is automatically calculated by the theme.

  ```js
  {
    bootstrap3: 'glyphicon',
    bootstrap4: 'fa',
    bootstrap5: 'bi',
    'bootstrap-table': 'icon',
    bulma: 'fa',
    foundation: 'fa',
    materialize: 'material-icons',
    semantic: 'fa'
  }
  ```

- **Default:** `undefined`

- **Example:** [Icons Prefix](https://examples.bootstrap-table.com/#options/icons-prefix.html)
## idField

- **Attribute:** `data-id-field`

- **Type:** `String`

- **Detail:**

  Indicate which field will be used as checkbox/radio value, its the counterpart to [selectItemName](https://bootstrap-table.com/docs/api/table-options/#selectitemname).

- **Default:** `undefined`

- **Example:** [Id Field](https://examples.bootstrap-table.com/#options/id-field.html)

## ignoreClickToSelectOn

- **Attribute:** `data-ignore-click-to-select-on`

- **Type:** `Function`

- **Detail:**

  Set the ignore elements `clickToSelect` on. Takes one parameter:

  * `element`: the element clicked on.

  Return true if the click should be ignored, false if the click should cause the row to be selected. This option is only relevant if `clickToSelect` is true.

- **Default:** `{ return ['A', 'BUTTON'].includes(tagName) }`

- **Example:** [Ignore Click To Select On](https://examples.bootstrap-table.com/#options/ignore-click-to-select-on.html)

## loadingFontSize

- **Attribute:** `data-loading-font-size`

- **Type:** `String`

- **Detail:**

  To define the font size of the loading text, the default value is `'auto'`, calculated automatically according to the table width, between 12px and 32px.

- **Default:** `'auto'`

- **Example:** [Loading Font Size](https://examples.bootstrap-table.com/#options/loading-font-size.html)

## loadingTemplate

- **Attribute:** `data-loading-template`

- **Type:** `Function`

- **Detail:**

  To custom the loading type by yourself. The parameters object contain:

  * loadingMessage: the `formatLoadingMessage` locale.

- **Default:**
  ```js
  function (loadingMessage) {
    return '<span class="loading-wrap">' +
      '<span class="loading-text">' +
      loadingMessage +
      '</span>' +
      '<span class="animation-wrap"><span class="animation-dot"></span></span>' +
      '</span>'
  }
  ```

- **Example:** [Loading Template](https://examples.bootstrap-table.com/#options/loading-template.html)

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

## maintainMetaData

- **Attribute:** `data-maintain-meta-data`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to maintain the following metadata on the change page and search:
   * selected rows
   * hidden rows

- **Default:** `false`

- **Example:** [Maintain Meta Data](https://examples.bootstrap-table.com/#options/maintain-meta-data.html)

## method

- **Attribute:** `data-method`

- **Type:** `String`

- **Detail:**

  The method type to request remote data.

- **Default:** `'get'`

- **Example:** [Table Method](https://examples.bootstrap-table.com/#options/table-method.html)

## minimumCountColumns

- **Attribute:** `data-minimum-count-columns`

- **Type:** `Number`

- **Detail:**

  The minimum number of columns to hide from the columns dropdown list.

- **Default:** `1`

- **Example:** [Minimum Count Columns](https://examples.bootstrap-table.com/#options/minimum-count-columns.html)

## multipleSelectRow

- **Attribute:** `data-multiple-select-row`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable the multiple selection row. Can use the ctrl+click to select one row or shift+click to select a range of rows.

- **Default:** `false`

- **Example:** [Multiple Select Row](https://examples.bootstrap-table.com/#options/multiple-select-row.html)

## pageList

- **Attribute:** `data-page-list`

- **Type:** `Array`

- **Detail:**

  When setting the pagination property, initialize the page size by selecting the list. If you include the `'all'` or `'unlimited'` option, all the records will be shown in your table.

  *Hint: If the table has lesser rows as the option(s), the options will be hidden automatically. To disable that feature, you can set [smartDisplay](https://bootstrap-table.com/docs/api/table-options/#smartdisplay) to `false`*

- **Default:** `[10, 25, 50, 100]`

- **Example:** [Page List](https://examples.bootstrap-table.com/#options/page-list.html)

## pageNumber

- **Attribute:** `data-page-number`

- **Type:** `Number`

- **Detail:**

  When setting the pagination property, initialize the page number.

- **Default:** `1`

- **Example:** [Page Number](https://examples.bootstrap-table.com/#options/page-number.html)

## pageSize

- **Attribute:** `data-page-size`

- **Type:** `Number`

- **Detail:**

  When setting the pagination property, initialize the page size.

- **Default:** `10`

- **Example:** [Page Size](https://examples.bootstrap-table.com/#options/page-size.html)

## pagination

- **Attribute:** `data-pagination`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a pagination toolbar on the table bottom.

- **Default:** `false`

- **Example:** [Table Pagination](https://examples.bootstrap-table.com/#options/table-pagination.html)

## paginationDetailHAlign

- **Attribute:** `data-pagination-detail-h-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the pagination detail. `'left'`, `'right'` can be used.

- **Default:** `'left'`

- **Example:** [Pagination H Align](https://examples.bootstrap-table.com/#options/pagination-h-align.html)

## paginationHAlign

- **Attribute:** `data-pagination-h-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the pagination. `'left'`, `'right'` can be used.

- **Default:** `'right'`

- **Example:** [Pagination H Align](https://examples.bootstrap-table.com/#options/pagination-h-align.html)

## paginationLoadMore

- **Attribute:** `data-pagination-load-more`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable loading more data through pagination. It is only used in the client-side pagination. In general, to implement the "load more" functionality, it is often necessary to combine it with a `responseHandler` to process the returned data.

  It is primarily used in scenarios where the total number of pages is unknown. In such cases, it is not possible to display the exact total count or calculate the total number of pages. Instead, a display format such as "100+" can be utilized to indicate the presence of additional items beyond the displayed count. As the user navigates to the last page, more data is loaded, along with an update to the pagination information. This process continues until all data loading is complete.

- **Default:** `false`

- **Example:** [Pagination Load More](https://examples.bootstrap-table.com/#options/pagination-load-more.html)


## paginationLoop

- **Attribute:** `data-pagination-loop`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable pagination continuous loop mode.

- **Default:** `true`

- **Example:** [Pagination Loop](https://examples.bootstrap-table.com/#options/pagination-loop.html)

## paginationNextText

- **Attribute:** `data-pagination-next-text`

- **Type:** `String`

- **Detail:**

  Indicate the icon or text to be shown in the pagination detail, the next button.

- **Default:** `'›'`

- **Example:** [Pagination Text](https://examples.bootstrap-table.com/#options/pagination-text.html)

## paginationPagesBySide

- **Attribute:** `data-pagination-pages-by-side`

- **Type:** `Number`

- **Detail:**

  The number of pages on each side (right, left) of the current page.

- **Default:** `1`

- **Example:** [Pagination Index Number](https://examples.bootstrap-table.com/#options/pagination-index-number.html)

## paginationParts

- **Attribute:** `data-pagination-parts`

- **Type:** `Array`

- **Detail:**

  These options define which parts of the pagination should be visible.
  * `pageInfo` Shows which dataset will be displayed on the current page (e.g. `Showing 1 to 10 of 54 rows`).
  * `pageInfoShort` Similar to `pageInfo`, it only displays how many rows the table has (e.g. `Showing 54 rows`).
  * `pageSize` Shows the dropdown which defines how many rows should be displayed on the page.
  * `pageList` Shows the main part of the pagination (The list of the pages).

- **Default:** `['pageInfo', 'pageSize', 'pageList']`

- **Example:** [Pagination Parts](https://examples.bootstrap-table.com/#options/pagination-parts.html)

## paginationPreText

- **Attribute:** `data-pagination-pre-text`

- **Type:** `String`

- **Detail:**

  Indicate the icon or text shown in the pagination detail, the previous button.

- **Default:** `'‹'`

- **Example:** [Pagination Text](https://examples.bootstrap-table.com/#options/pagination-text.html)

## paginationSuccessivelySize

- **Attribute:** `data-pagination-successively-size`

- **Type:** `Number`

- **Detail:**

  Maximum successive number of pages in a row.

- **Default:** `5`

- **Example:** [Pagination Index Number](https://examples.bootstrap-table.com/#options/pagination-index-number.html)

## paginationUseIntermediate

- **Attribute:** `data-pagination-use-intermediate`

- **Type:** `Boolean`

- **Detail:**

  Calculate and show intermediate pages for quick access.

- **Default:** `false`

- **Example:** [Pagination Index Number](https://examples.bootstrap-table.com/#options/pagination-index-number.html)

## paginationVAlign

- **Attribute:** `data-pagination-v-align`

- **Type:** `String`

- **Detail:**

  Indicate how to vertical-align the pagination. `'top'`, `'bottom'`, `'both'` (put the pagination on top and bottom)  can be used.

- **Default:** `'bottom'`

- **Example:** [Pagination V Align](https://examples.bootstrap-table.com/#options/pagination-v-align.html)

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

## regexSearch

- **Attribute:** `data-regex-search`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable the regex search.
  If this option is enabled, you can search with regex, e.g. `[47a]$` for all items which end with a `4`, `7` or `a`.
  The regex can be entered with `/[47a]$/gim` or without `[47a]$` flags. The default flags are `gim`.


- **Default:** `false`

- **Example:** [Regex Search](https://examples.bootstrap-table.com/#options/regex-search.html)

## rememberOrder

- **Attribute:** `data-remember-order`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to remember the order for each column.

- **Default:** `false`

- **Example:** [Remember Order](https://examples.bootstrap-table.com/#options/remember-order.html)

## responseHandler

- **Attribute:** `data-response-handler`

- **Type:** `Function`

- **Detail:**

  Before loading remote data, handle the response data format. The parameters object contains:

  * `res`: the response data.
  * `jqXHR`: jqXHR object, which is a super set of the XMLHTTPRequest object. For more information, see the [jqXHR Type](http://api.jquery.com/Types/#jqXHR).

- **Default:** `function(res) { return res }`

- **Example:** [Response Handler](https://examples.bootstrap-table.com/#options/response-handler.html)

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

## search

- **Attribute:** `data-search`

- **Type:** `Boolean`

- **Detail:**

  Enable the search input.

  There are three ways to search:
  - The value contains the search query (Default).
    Example: Github contains git.
  - The value must be identical to the search query.
    Example: Github (value) and Github (search query).
  - Comparisons (<, >, <=, =<, >=, =>).
    Example: 4 is larger than 3.

  Notes:
  - If you want to use a custom search input, use the [searchSelector](https://bootstrap-table.com/docs/api/table-options/#searchSelector).
  - You can also search via regex using the [regexSearch](https://bootstrap-table.com/docs/api/table-options/#regexSearch) option.
  - If you want to send searchable params to server-side pagination, use the [searchable](https://bootstrap-table.com/docs/api/table-options/#searchable) option.

- **Default:** `false`

- **Example:** [Table Search](https://examples.bootstrap-table.com/#options/table-search.html)

## searchable

- **Attribute:** `data-searchable`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to send [searchable params](https://bootstrap-table.com/docs/api/column-options/#searchable) to the server while using server-side pagination.

- **Default:** `false`

- **Example:** [Searchable](https://examples.bootstrap-table.com/#options/searchable.html)

## searchAccentNeutralise

- **Attribute:** `data-search-accent-neutralise`

- **Type:** `Boolean`

- **Detail:**

  Set to `true` if you want to use the accent neutralize feature.

- **Default:** `false`

- **Example:** [Search Accent Neutralise](https://examples.bootstrap-table.com/#options/search-accent-neutralise.html)

## searchAlign

- **Attribute:** `data-search-align`

- **Type:** `String`

- **Detail:**

  Indicate how to align the search input. `'left'`, `'right'` can be used.

- **Default:** `'right'`

- **Example:** [Search Align](https://examples.bootstrap-table.com/#options/search-align.html)

## searchHighlight

- **Attribute:** `data-search-highlight`

- **Type:** `Boolean`

- **Detail:**

  Set to `true` to highlight the searched text (using the `<mark>` HTML tag).
  You can also define a [custom highlight formatter](https://bootstrap-table.com/docs/api/column-options/#searchhighlightformatter), e.g., for values with HTML or to use a custom highlight color.

- **Default:** `'false'`

- **Example:** [Search Highlight](https://examples.bootstrap-table.com/#options/search-highlight.html)

## searchOnEnterKey

- **Attribute:** `data-search-on-enter-key`

- **Type:** `Boolean`

- **Detail:**

  The search method will be executed until the Enter key is pressed.

- **Default:** `false`

- **Example:** [Search On Enter Key](https://examples.bootstrap-table.com/#options/search-on-enter-key.html)

## searchSelector

- **Attribute:** `data-search-selector`

- **Type:** `Boolean|String`

- **Detail:**

  If this option is set (must be a valid dom selector, e.g. `#customSearch`), the found dom element (an `input` element) will be used as table search instead of the built-in search input.

- **Default:** `false`

- **Example:** [Search Selector](https://examples.bootstrap-table.com/#options/search-selector.html)

## searchText

- **Attribute:** `data-search-text`

- **Type:** `String`

- **Detail:**

  When setting search property, initialize the search text.

- **Default:** `''`

- **Example:** [Search Text](https://examples.bootstrap-table.com/#options/search-text.html)

## searchTimeOut

- **Attribute:** `data-search-time-out`

- **Type:** `Number`

- **Detail:**

  Set timeout for search fire.

- **Default:** `500`

- **Example:** [Search Time Out](https://examples.bootstrap-table.com/#options/search-time-out.html)

## selectItemName

- **Attribute:** `data-select-item-name`

- **Type:** `String`

- **Detail:**

  The name of the radio or checkbox input.

- **Default:** `'btSelectItem'`

- **Example:** [Id Field](https://examples.bootstrap-table.com/#options/id-field.html)

## serverSort

- **Attribute:** `data-server-sort`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to sort the data on the client-side, only works when the `sidePagination` is `server`.

- **Default:** `true`

- **Example:** [Server Sort](https://examples.bootstrap-table.com/#options/server-sort.html)

## showButtonIcons

- **Attribute:** `data-show-button-icons`

- **Type:** `Boolean`

- **Detail:**

  All buttons will show icons on them.

- **Default:** `true`

- **Example:** [show button icons](https://examples.bootstrap-table.com/#options/show-button-icons.html)

## showButtonText

- **Attribute:** `data-show-button-text`

- **Type:** `Boolean`

- **Detail:**

  All buttons will show text on them.

- **Default:** `false`

- **Example:** [show button text](https://examples.bootstrap-table.com/#options/show-button-text.html)

## showColumns

- **Attribute:** `data-show-columns`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the columns drop down list. We can set the [`switchable`](/docs/api/column-options/#switchable) column option to `false` to hide the columns item in the drop down list. The minimum number of selected columns can be controlled with the [minimumCountColumns](/docs/api/table-options/#minimumcountcolumns) table option.

- **Default:** `false`

- **Example:** [Basic Columns](https://examples.bootstrap-table.com/#options/basic-columns.html) and [Large Columns](https://examples.bootstrap-table.com/#options/large-columns.html)

## showColumnsSearch

- **Attribute:** `data-show-columns-search`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a search for the column's filter.

- **Default:** `false`

- **Example:** [Columns Search](https://examples.bootstrap-table.com/#options/columns-search.html)

## showColumnsToggleAll

- **Attribute:** `data-show-columns-toggle-all`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a toggle all checkbox within the columns option/dropdown.

- **Default:** `false`

- **Example:** [Columns Toggle All](https://examples.bootstrap-table.com/#options/columns-toggle-all.html)

## showExtendedPagination

- **Attribute:** `data-show-extended-pagination`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show an extended version of pagination (including the count of all rows without filters).
  If you use pagination on the server side, please use `totalNotFilteredField` to define the count.

- **Default:** `false`

- **Example:** [Show Extended Pagination](https://examples.bootstrap-table.com/#options/show-extended-pagination.html)

## showFooter

- **Attribute:** `data-show-footer`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the summary footer row.

- **Default:** `false`

- **Example:** [Show Footer](https://examples.bootstrap-table.com/#options/show-footer.html)

## showFullscreen

- **Attribute:** `data-show-fullscreen`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the fullscreen button.

- **Default:** `false`

- **Example:** [Show Fullscreen](https://examples.bootstrap-table.com/#options/show-fullscreen.html)

## showHeader

- **Attribute:** `data-show-header`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to hide the table header.

- **Default:** `true`

- **Example:** [Show Header](https://examples.bootstrap-table.com/#options/show-header.html)

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

## showSearchButton

- **Attribute:** `data-show-search-button`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a search Button behind the search input.
  The Search will only be executed if the button is pressed (e.g., to prevent traffic or loading time).

- **Default:** `false`

- **Example:** [Show Search Button](https://examples.bootstrap-table.com/#options/show-search-button.html)

## showSearchClearButton

- **Attribute:** `data-show-search-clear-button`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show a clear Button behind the search input, which will clear the search input (also all filter from filter-control (if enabled)).

- **Default:** `false`

- **Example:** [Show Search Clear Button](https://examples.bootstrap-table.com/#options/show-search-clear-button.html)

## showToggle

- **Attribute:** `data-show-toggle`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to show the toggle button to toggle table/card view.

- **Default:** `false`

- **Example:** [Show Toggle](https://examples.bootstrap-table.com/#options/show-toggle.html)

## sidePagination

- **Attribute:** `data-side-pagination`

- **Type:** `String`

- **Detail:**

  Defines the side pagination of the table, can only be `'client'` or `'server'`.
  Using the `'server'` side requires setting the `'url'` or `'ajax'` option.

  Note that the required server response format is different depending on whether the  `'sidePagination'` option is set to `'client'` or `'server'`. See the following examples:

  * [Without server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data1.json)
  * [With server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data2.json)

  **URL parameters:**

  When `sidePagination` is set to `server`, the bootstrap table will make calls to the `url` with the following URL parameters:

  - `offset` with a value between 0 and `total` - 1, indicating the first record to include.
  - `limit` with a value indicating the number of rows per page.

  When implementing server-side pagination, you must implement a JSON view in a format like [this example](https://examples.wenzhixin.net.cn/examples/bootstrap_table/data). That view must take the URL parameter values indicated above and return records starting at the `offset` index and returns the number of records indicated by `limit`.  For example, if you want records 11-20, your view must obtain the `offset=10` and `limit=10` from the URL string and return records like [this example](https://examples.wenzhixin.net.cn/examples/bootstrap_table/data?offset=10&limit=10).

- **Default:** `'client'`

- **Example:** [Client Side Pagination](https://examples.bootstrap-table.com/#options/client-side-pagination.html) and [Server Side Pagination](https://examples.bootstrap-table.com/#options/server-side-pagination.html)

## silentSort

- **Attribute:** `data-silent-sort`

- **Type:** `Boolean`

- **Detail:**

  Set `false` to sort the data with the loading message. This options works when the sidePagination option is set to `'server'`.

- **Default:** `true`

- **Example:** [Silent Sort](https://examples.bootstrap-table.com/#options/silent-sort.html)

## singleSelect

- **Attribute:** `data-single-select`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to allow a checkbox selecting only one row.

- **Default:** `false`

- **Example:** [Single Select](https://examples.bootstrap-table.com/#options/single-select.html)

## smartDisplay

- **Attribute:** `data-smart-display`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to display pagination or card view smartly.

- **Default:** `true`

- **Example:** [Smart Display](https://examples.bootstrap-table.com/#options/smart-display.html)

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

  The class name of the `td` elements are sorted.

- **Default:** `undefined`

- **Example:** [Sort Class](https://examples.bootstrap-table.com/#options/sort-class.html)

## sortEmptyLast

- **Attribute:** `data-sort-empty-last`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to sort `<empty string>`, `undefined` and `null` as last value.

- **Default:** `false`

- **Example:** [Sort Empty Last](https://examples.bootstrap-table.com/#options/sort-empty-last.html)

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

  Defines the column sort order, can only be `undefined`, `'asc'` or `'desc'`.

- **Default:** `undefined`

- **Example:** [Sort Name Order](https://examples.bootstrap-table.com/#options/sort-name-order.html)

## sortReset

- **Attribute:** `data-sort-reset`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to reset the sort on the third click.

- **Default:** `false`

- **Example:** [Sort Reset](https://examples.bootstrap-table.com/#options/sort-reset.html)

## sortResetPage

- **Attribute:** `data-sort-reset-page`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to reset the page number when sorting.

- **Default:** `false`

- **Example:** [Sort Reset Page](https://examples.bootstrap-table.com/#options/sort-reset-page.html)

## sortStable

- **Attribute:** `data-sort-stable`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to get a stable sorting. We will add `'_position'` property to the row.

- **Default:** `false`

- **Example:** [Sort Stable](https://examples.bootstrap-table.com/#options/sort-stable.html)

## strictSearch

- **Attribute:** `data-strict-search`

- **Type:** `Boolean`

- **Detail:**

  Enable the strict search.
  Disables the comparison checks.

- **Default:** `false`

- **Example:** [Strict Search](https://examples.bootstrap-table.com/#options/strict-search.html)

## theadClasses

- **Attribute:** `data-thead-classes`

- **Type:** `String`

- **Detail:**

  The class name of table thead. Bootstrap v4, use the modifier classes `.thead-light` or `.thead-dark` to make `thead` appear light or dark gray.

- **Default:** `''`

- **Example:** [Thead Classes](https://examples.bootstrap-table.com/#options/thead-classes.html)

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

## totalField

- **Attribute:** `data-total-field`

- **Type:** `String`

- **Detail:**

  Key in incoming JSON containing `'total'` data.

- **Default:** `'total'`

- **Example:** [Total/Data Field](https://examples.bootstrap-table.com/#options/total-data-field.html)

## totalNotFiltered

- **Attribute:** `data-total-not-filtered`

- **Type:** `Number`

- **Detail:**

  This property is mainly passed in by the pagination server, which is easy to use.

- **Default:** `0`

## totalNotFilteredField

- **Attribute:** `data-total-not-filtered-field`

- **Type:** `string`

- **Detail:**

  The field from the JSON response will be used for `showExtendedPagination`.

- **Default:** `totalNotFiltered`

- **Example:** [Total Not Filtered Field](https://examples.bootstrap-table.com/#options/total-not-filtered-field.html)

## totalRows

- **Attribute:** `data-total-rows`

- **Type:** `Number`

- **Detail:**

  This property is mainly passed in by the pagination server, which is easy to use.

- **Default:** `0`

## trimOnSearch

- **Attribute:** `data-trim-on-search`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to trim spaces in the search field.

- **Default:** `true`

- **Example:** [Trim On Search](https://examples.bootstrap-table.com/#options/trim-on-search.html)

## undefinedText

- **Attribute:** `data-undefined-text`

- **Type:** `String`

- **Detail:**

  Defines the default `undefined` text.

- **Default:** `'-'`

- **Example:** [Undefined Text](https://examples.bootstrap-table.com/#options/undefined-text.html)

## uniqueId

- **Attribute:** `data-unique-id`

- **Type:** `String`

- **Detail:**

  Indicate a unique identifier for each row.
  The Unique id should always be safe for html e.g. alphanumeric, it should not contain chars which can break html e.g. `"`.

- **Default:** `undefined`

- **Example:** [getRowByUniqueId](https://examples.bootstrap-table.com/#methods/get-row-by-unique-id.html)

## url

- **Attribute:** `data-url`

- **Type:** `String`

- **Detail:**

  A URL to request data from remote site.

  Note that the required server response format is different depending on whether the `'sidePagination'` option is specified. See the following examples:

  * [Without server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data1.json)
  * [With server-side pagination](https://github.com/wenzhixin/bootstrap-table-examples/blob/master/json/data2.json)

  **URL parameters:**

  When `sidePagination` is set to `server`, the bootstrap table will make calls to the `url` with the following URL parameters:

  - `offset` with a value between 0 and `total` - 1, indicating the first record to include.
  - `limit` with a value indicating the number of rows per page.

  When implementing server-side pagination, you must implement a JSON view in a format like [this example](https://examples.wenzhixin.net.cn/examples/bootstrap_table/data). That view must take the URL parameter values indicated above and return records starting at the `offset` index and returns the number of records indicated by `limit`.  For example, if you want records 11-20, your view must obtain the `offset=10` and `limit=10` from the URL string and return records like [this example](https://examples.wenzhixin.net.cn/examples/bootstrap_table/data?offset=10&limit=10).

- **Default:** `undefined`

- **Example:** [From URL](https://examples.bootstrap-table.com/#welcomes/from-url.html)

- **Error handling**

  To get loading errors please use [onLoadError](https://bootstrap-table.com/docs/api/events/#onloaderror)

## virtualScroll

- **Attribute:** `data-virtual-scroll`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to enable virtual scroll to display a virtual, "infinite" list.

  **Note:** Currently, the implementation assumes that each line has the same height. If the heights of the lines vary, unpredictable bugs may occur. Please ensure that the height of each line is consistent, or apply the style `td { white-space: nowrap; }` to address this issue.

- **Default:** `false`

- **Example:** [Large Data](https://examples.bootstrap-table.com/#options/large-data.html)

## virtualScrollItemHeight

- **Attribute:** `data-virtual-scroll-item-height`

- **Type:** `Number`

- **Detail:**

  If this option is not defined, we will use the height of the first item by default.

  It is **important** to provide this if the virtual item height is significantly larger than the default height. This dimension is used to help determine how many cells should be created when initialized and to help calculate the height of the scrollable area. This height value can only use `px` units.

- **Default:** `undefined`

## visibleSearch

- **Attribute:** `data-visible-search`

- **Type:** `Boolean`

- **Detail:**

  Set `true` to search only in visible column/data. If the data contains other values which are not displayed, they will be ignored while searching.

- **Default:** `false`

- **Example:** [visible search](https://examples.bootstrap-table.com/#options/visible-search.html)
