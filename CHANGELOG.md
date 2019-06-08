ChangeLog
---------

### 2.0.0

#### Core

- **New:** Added virtual scroll to support large data sets ([#4268](https://github.com/wenzhixin/bootstrap-table/pull/4268)).
- **New:** Added webpack support and user rollup to build the src ([#4272](https://github.com/wenzhixin/bootstrap-table/pull/4272)).
- **New:** Added support comparisons search(<, >, <=, =<, >=, =>) ([#4218](https://github.com/wenzhixin/bootstrap-table/pull/4218)).
- **New:** Added `detailViewByClick` table option and `detailFormatter` column option ([#4219](https://github.com/wenzhixin/bootstrap-table/pull/4219)).
- **New:** Added `showExtendedPagination` and `totalNotFilteredField` table options ([#4226](https://github.com/wenzhixin/bootstrap-table/pull/4226)).
- **New:** Improved `filterBy` method with `or` condition and custom filter algorithm ([#4230](https://github.com/wenzhixin/bootstrap-table/pull/4230)).
- **New:** Improved `showColumn` and `hideColumn` methods with array of fields ([#4238](https://github.com/wenzhixin/bootstrap-table/pull/4238)).
- **New:** Improved `scrollTo` method to allow `rows` units ([#4240](https://github.com/wenzhixin/bootstrap-table/pull/4240)).
- **New:** Added `onPostFooter`(`post-footer.bs.table`) event ([#4232](https://github.com/wenzhixin/bootstrap-table/pull/4232)).
- **New:** Added `detailViewIcon` and `toggleDetailView` method to hide the show/hide icons ([#4259](https://github.com/wenzhixin/bootstrap-table/pull/4259)).
- **New:** Added `widthUnit` option allow any unit ([#4276](https://github.com/wenzhixin/bootstrap-table/pull/4276)).
- **New:** Added `multipleSelectRow` option to support ctrl and shift select ([4881222](https://github.com/wenzhixin/bootstrap-table/pull/4256/commits/4881222a994f7348ea9b0e08dcd110307f89d177)).
- **New:** Supported checkbox and radio auto checked from html ([#4288](https://github.com/wenzhixin/bootstrap-table/pull/4288)).
- **Update:** Rewrote all code to ES6 ([#4256](https://github.com/wenzhixin/bootstrap-table/pull/4256)).
- **Update:** Improved `pageList` options to support localization ([a9d9722](https://github.com/wenzhixin/bootstrap-table/commit/a9d9722bcb8be0f82499aae2389309936b094268)).
- **Update:** Fixed `smartDisplay` option pagination bug ([5dbbe8d](https://github.com/wenzhixin/bootstrap-table/commit/5dbbe8dc973bdee849c91dc1618540b38925551f)).
- **Update:** Set the `totalRows` option always ([#4228](https://github.com/wenzhixin/bootstrap-table/pull/4228)).
- **Update:** Improved table footer ([5814a18](https://github.com/wenzhixin/bootstrap-table/commit/5814a18a9b35b6610087dbefd275974f4dd6e45e)).
- **Update:** Fixed data-* attribute is an object bug ([c1d834e](https://github.com/wenzhixin/bootstrap-table/commit/c1d834e5025928bb3492bb97f90a437363ec461f)).
- **Update:** Fixed page separators click bug ([#4251](https://github.com/wenzhixin/bootstrap-table/pull/4251)).
- **Update:** Applied `cellStyle` to checkbox field ([#4253](https://github.com/wenzhixin/bootstrap-table/pull/4253)).
- **Update:** Fixed card view value to be aligned incorrectly bug ([#4262](https://github.com/wenzhixin/bootstrap-table/pull/4262)).
- **Update:** Updated parameters of the (un)checkAll events to `rowsAfter, rowsBefore` ([#4273](https://github.com/wenzhixin/bootstrap-table/pull/4273)).
- **Update:** Renamed table `maintainSelected` option to `maintainMetaData` ([#4280](https://github.com/wenzhixin/bootstrap-table/pull/4280)).
- **Update:** Improved css frameworks themes ([#4236](https://github.com/wenzhixin/bootstrap-table/pull/4236)).

#### Extensions

- **New(cell-input):** Added cell-input extension ([#3647](https://github.com/wenzhixin/bootstrap-table/pull/3647)).
- **Remove:** Removed multi-column-toggle, multiple-search, multiple-selection-row, group-by and tree-column extensions ([#4256](https://github.com/wenzhixin/bootstrap-table/pull/4256)).
- **Update(export):** Only export table header ([#4279](https://github.com/wenzhixin/bootstrap-table/pull/4279)).
- **Update(filter-control):** Added ability to handle boolean ([#4241](https://github.com/wenzhixin/bootstrap-table/pull/4241)).
- **Update(filter-control):** Fixed DatePicker of filter-control does not work bug ([#4220](https://github.com/wenzhixin/bootstrap-table/pull/4220)).
- **Update(filter-control):** Fixed clear filterControl with Cookie bug ([#4202](https://github.com/wenzhixin/bootstrap-table/pull/4202)).
- **Update(filter-control):** Fixed loading screen with filter control ([#4274](https://github.com/wenzhixin/bootstrap-table/pull/4274)).
- **Update(multiple-sort):** Fixed multiple-sort does not work with data-query-params bug ([#4222](https://github.com/wenzhixin/bootstrap-table/pull/4222)).
- **New(editable):** Added `onExportSaved` event ([#4275](https://github.com/wenzhixin/bootstrap-table/pull/4275)).
- **Update(editable):** Updated parameters of `onEditableSave` to `field, row, rowIndex, oldValue, $el` ([#4229](https://github.com/wenzhixin/bootstrap-table/pull/4229)).
- **Update(editable):** Fixed editable rerender bug after saving data. ([#4225](https://github.com/wenzhixin/bootstrap-table/pull/4225))
- **Update(treegrid):** Fixed treegrid cannot work bug.

### 1.14.2

- **New(fixed-columns extension):** Added new version fixed-columns extension.
- **New(js):** Updated the style of loading message.
- **Update(js):** Updated refresh event params.
- **Update(locale):** Updated all locale translation with English as default.
- **Update(export extension):** Fixed export all rows to pdf bug.
- **Update(export extension):** Disabled export button when exportDataType is 'selected' and selection empty.
- **Update(addrbar extension):** Fixed addrbar extension remove hash from url bug.

### 1.14.1

- **New(css):** Added CSS Frameworks supported.
- **New(css):** Added [Semantic UI](http://semantic-ui.com) theme.
- **New(css):** Added [Bulma](http://bulma.io) theme.
- **New(css):** Added [Materialize](https://materializecss.com/) theme.
- **New(css):** Added [Foundation](https://foundation.zurb.com/) theme.
- **New(js):** Added data attribute support for `ignoreClickToSelectOn` option.
- **Update(js):** Fixed `detailView` find td elements bug.
- **Update(js):** Fixed `showColumns` close dropdown bug when item label clicking.
- **Update(js):** Fixed reset width error after `toggleFullscreen`.
- **Update(js):** Fixed `cardview` click event bug.

### 1.13.5

- **New(auto-refresh extension):** Rewrote auto-refresh extension to ES6.
- **Update(js):** Fixed showFullscreen cannot work bug.
- **Update(js):** Redefined customSearch option.
- **Update(js):** Fixed show footer cannot work bug.
- **Update(js):** Updated the parameter of `footerStyle`.
- **Update(js):** Added classes supported for `footerStyle`.
- **Update(js):** Fixed IE11 transform bug.
- **Update(js):** Removed beginning and end whitespace from td.
- **Update(export extension):** Fixed export selected bug.

### 1.13.4

- **New(sticky-header extension):** Rewrote sticky-header extension to ES6.
- **New(sticky-header extension):** Added to support bootstrap v4 and `theadClasses` option.
- **New(auto-refresh extension):** Icons update to font-awesome 5.
- **New(examples):** Added examples Algolia search.
- **Update(js):** Fixed `theadClasses` is not set when a `thead` exists.
- **Update(js):** Fixed table resize after mergeCell the first row.
- **Update(cookie extension):** Fixed cookie extension broken bug.
- **Update(cookie extension):** Fixed cookie extension unicode encode bug.
- **Update(package):** Added `sass` devDependencies.

### 1.13.3

- **New(js):** Supported full table classes of bootstrap v4.
- **New(css):** Rewrote bootstrap-table.css to scss.
- **New(accent-neutralise extension):** Rewrote accent-neutralise extension to ES6.
- **New(addrbar extension):** Rewrote addrbar extension to ES6 and supported attribute option.
- **New(group-by-v2 extension):** New `groupByFormatter` option.
- **New(pipeline extension):** New pipeline extension `bootstrap-table-pipeline`.
- **Remove(js):** Removed `striped` option and use classes instead.
- **Update(js):** Fixed `locale` option bug.
- **Update(js):** Fixed `sortClass` option bug.
- **Update(js):** Fixed `sortStable` option cannot work bug.
- **Update(js):** Improved built-in sort function and `customSort` logic.
- **Update(js):** Fixed horizontal scrollbar bug.
- **Update(cookie extension):** Improved cookie extension code.

### 1.13.2

- **New(js):** Added `paginationSuccessivelySize`, `paginationPagesBySide` and `paginationUseIntermediate` pagination options.
- **New(cookie extension):** Rewrote cookie extension to ES6.
- **New(cookie extension):** Saved `filterBy` method.
- **New(filter-control extension):** Added `placeholder` as a empty option to the select controls.
- **New(filter-control extension):** Added `clearFilterControl` method in order to clear all filter controls.
- **New(docs)** Added algolia search.
- **Update(js):** Fixed sort column shows hidden rows in `server` side pagination bug.
- **Update(js):** Fixed `scrollTo` bug.
- **Update(css):** Fixed no-bordered problem of bootstrap v4.
- **Update(filter-control extension):** Added bootstrap v4 icon support.

### 1.13.1

- feat(js): add `theadClasses` option to supoort bootstrap v4
- feat(js): fix #3727, icons update to font-awesome 5
- feat(locale): rewrite all locales to ES6
- feat(editable extension): rewrite bootstrap-table-editable to ES6
- feat(filter-control extension): rewrite bootstrap-table-filter-control to ES6
- feat(treegrid extension): add `rootParentId` option
- fix(js): fix #3653, getHiddenRows method bug
- fix(js): fix #4066, `getOptions` method remove data property
- fix(js): fix #4088, no matches display error
- fix(js): fix eslint warning and error
- fix(locale): fix #3999, improve es-ES locale
- fix(filter-control extension): fix #3474, multiple choice bug
- fix(filter-control extension): fix #4008, select all rows and `keyup` event error
- fix(export extension): fix #4086, export in cardView display error

### 1.13.0

- feat(js): rewrite bootstrap-table to ES6
- feat(locale): add fi-FI.js locale
- feat(build): use babel instead grunt
- feat(filter-control): add `created-controls.bs.table` event to filter-control
- feat(export extension): rewrite export extension to ES6
- feat(export extension): export extension support bootstrap v4
- feat(export extension): add `exportTable` method
- feat(toolbar extension): rewrite toolbar extension to ES6
- feat(toolbar extension): toolbar extension supports bootstrap v4
- feat(toolbar extension): add server sidePagination support
- feat(resizable extension): new resizable extension version 2.0.0
- feat(editable extension): allow different x-editable configuration per table row
- feat(addrbar extension): add addrbar extension
- fix(js): fix #1769, improve check/uncheck methods
- fix(js): fix #1983, cookie with pageNumber and searchText bug
- fix(js): fix #2485, selections bugs
- fix(js): fix #2545, customSearch support data attribute
- fix(js): fix #3696, can't search data with formatter
- fix(js): fix #4081, getRowByUniqueId error when row unique id is undefined
- fix(js): fix older bootstrap version bug
- fix(css): fix #1848, remove toolbar line-height
- fix(css): limit fullscreen CSS rule scope
- fix(editable extension): fix #1819, #2072, editable formatter bug
- fix(extension): fix #3720, fix #3682, bug with export extension together
- fix(extension): remove lick-edit-row and flat-json extensions

### 1.12.2

- fix(js): fix #3656, toggle icon typo release error

### 1.12.1

- fix(js): fix #3656, toggle icon typo
- fix(js): fix #3657, opencollective postinstall error
- fix(group-by-v2 extension): fix #3598, detailView display bug
- feat(tree-grid extension): fix #3607, add `rowStyle` support

### 1.12.0

- fix(js): fix zoom header width bug
- fix(js): fix #3452, reset the table data when url loaded error
- fix(js): fix #3380, check-all was wrong with the sub-table
- fix(js): fix #2963, singleSelect, maintainSelected and pagination bug
- fix(js): fix #3342, remove limit when it is 0
- fix(js): fix #3472, group header style bug
- fix(js): fix #3310, searchText causes two requests
- fix(js): fix #3029, IE8 does not support getOwnPropertyNames
- fix(js): fix #3204, sortName cannot work in server side pagination
- fix(js): fix #3163, `showToolbar` bug when using extensions
- fix(js): fix #3087, only send pagination parameters when `sidePagination` is `server`
- fix(export extension): fix #3477, server pagination mode cannot export all data
- fix(filter-control extension): fix #3271, duplicate select option with fixed header and client pagination
- feat(js): add `detailFilter` option
- feat(js): add `rememberOrder` option
- feat(js): improve pageList `All` option locale independent
- feat(js): add `Bootstrap v4.0` support
- feat(js): add `row` data to sorter function
- feat(js): add `ignoreClickToSelectOn` option
- feat(js): add `onScrollBody` / `scroll-body.bs.table` event
- feat(js): add `showFullscreen` option
- feat(js): add `showSelectTitle` column option
- feat(js): add `$el` to collapse-row
- feat(locale): add `eu-EU` locale
- feat(export extension): add `exportFooter` option
- feat(multiple-sort extension): add `showMultiSortButton` option
- feat(filter-control extension): add `searchOnEnterKey` option
- feat(page-jumpto extension): add `page-jumpto` extension
- feat(resizable extension): add `resizeMode` option
- feat(sticky-header extension): add `Bootstrap v4.0` support
- feat(treegrid extension): add `treegrid` extension
- feat(print extension): add support to print complex table
- feat(extension): add cookie in combination with filter-control and strict search

#### Breaking changes in 1.12.0

- feat(js): add `toggleOn` and `toggleOff` icons instead `toggle` icon


### 1.11.1

- fix(js): fix #2439, `filterBy` cannot filter array keys
- fix(js): fix #2424, from html with checkbox bug
- fix(js): fix #2385, checkbox render bug with formatter
- fix(js): fix #750, showRow and hideRow bug
- fix(js): fix #2387, page list bug
- fix(js): decrement totalRows on remove if using server side pagination
- fix(js): bug in the calculation of toolbar and pagination heights
- feat(js): fix #2414, add `paginationLoop` option
- feat(js): update method `getRowsHidden` to `getHiddenRows`
- feat(js): add `sortClass` option
- feat(js): add `totalField` Option
- feat(js): add 'pageNumber' and 'pageSize' to 'refresh' method
- feat(js): add `escape` column option
- fix(js): fix #2461, adding the initPagination call to updateByUniqueId and updateRow methods
- fix(js): fix #2879, IE8 bug
- fix(js): fix #2719, remove `tabindex`
- fix(css): fix #2208, dropdown-menu style bug
- fix(filter-control extension): fix #2418, `height` cause datepicker not display the selected date
- fix(export extension): fix #2220, selected rows does not work when data-pagination-side is server
- fix(reorder-row extension): fix #1343, reorder rows bug with pagination
- fix(cookie extension): correction regex to match 'mi'
- feat(locale): fix #2759, add es-CL and uz-UZ locales
- feat(cookie extension): fix #2386, add `getCookies` method
- feat(cookie extension): fix #2371, add `cookieStorage` option
- feat(multiple-selection-row extension): add multiple-selection-row extension
- feat(filter-control extension): fix #1540, disable unnecessary/unused values from select options
- feat(filter-control extension): fix #2448, create a css file which contains the style for this extension
- feat(filter-control extension): fix #2189, set placeholder of the filter-control input
- feat(print extension): add print extension
- feat(auto-refresh extension): add auto refresh extension
- feat(tree-column extension): add tree column extension

#### Breaking changes in 1.11.1

- **Filter-Control extension**: deleted the inline-style and now this extension is using a separated css file.


### 1.11.0

- fix(js): fix cardVisible doesn't work bug
- fix(js): int field break toggleColumn
- fix(js): table elements inside bootstrap table bug
- fix(js): move formatter after cellStyle
- fix(js): the footer is hidden in card view
- fix(js): fix sorting rows not working bug
- fix(js): return field from visible cells
- fix(js): onSearch event is not fire when we press the arrows keys
- fix(js): fix fromHtml error
- fix(js): fix event cannot work when some columns are hideen
- fix(js): remove page size and number when pagination is false
- fix(js): remove getFieldIndexFromColumnIndex because it cause events bug
- fix(js): fix getSelections method bug
- fix(js): update records to rows
- fix(locale): update it-IT locale
- fix(locale): add formatAllRows in template locale
- fix(filter-control extension): add check for null values on existsOptionInSelectControl
- fix(filter-control extension): fix show-clear button bug
- fix(editable extesion): fix editable formatter error when refreshOptions
- feat(js): add support for transfer from rowspan / colspan table
- feat(js): add data variable to post-body event
- feat(js): add `buttonsClass` option
- feat(js): add `getVisibleColumns` method
- feat(js): add resize event to fit the header
- feat(js): add `onRefresh` event
- feat(js): add field parameter in the click and dblClick row events
- feat(js): add div.card-views surrounds all the card view divs
- feat(js): add `field` parameter to cellStyle
- feat(js): add `sortStable` option
- feat(js): add `footerStyle` option
- feat(extension): add select2 filter and i18n enhance extensions
- feat(extension): add multi-column-toggle extension
- feat(filter-control extension): add select list data to be passed in as JSON string and filter control starts with search
- feat(angular extension): add constant in order to get it from angular scope
- feat(export extension): add `formatExport` locale
- feat(multiple-sort extension): add `formatSortOrders` option
- feat(multiple-sort extension): support pagination server
- refactor(filter-control extension): refactor the filterDataType method
- refactor(filter-control extension): adding all unique values to select control and performance improvements
- refactor(extension): refactor filter cookies extension to avoid dbcalls
- docs(filter-control extension): add documentation for filterData


### 1.10.1

- revert: feat: update escape to false
- feat: add `checkInvert` method
- feat: add `bootstrap-table-he-IL.js`
- bug: update grunt to development dependency
- bug: press on toolbar elements, the key-events it will not run
- bug: remove bogus conditions that will always be true
- bug: refactor filter control select input initialization
- bug: typo in Slovak translation

### 1.10.0

- [bug] Fixed #1619: sub-table checkbox selects all the table.
- [bug] Fixed icons for ability customizing.
- [bug] Fixed #1677: paginationSwitch for server-side.
- [bug] Fixed #1613: padding in footer.
- [bug] Fixed #1742: showRow & hideRow param checks.
- [bug] Fixed getItemField bug.
- [bug] Fixed #617: server side pagination uses `this.options.searchText`.
- [bug] Fixed class name does not apply to checkbox field bug.
- [bug] Fixed clear function and searchFormatter option of filter-control extension.
- [bug] Fixed year computation on cookie extension.
- [bug] Fixed ReorderRows init when reorderable is false.
- [bug] Fix #1660: removed powerpoint type of export extension.
- [enh] Added `title` attribute to pagination controls defining the page number.
- [enh] Added `escape` option.
- [enh] Added `searchOnEnterKey` option.
- [enh] Added `updateFormatText` method.
- [enh] Added a third parameter to `detailFormatter` method passing the jQuery element.
- [enh] Added new param for `updateCell` method to avoid table reinitialization.
- [enh] Removed outline of th.
- [enh] Added extension.json and composer.json files.
- [enh] Added alternative group-by extension.
- [enh] Added sticky-header extension.
- [enh] Added filterLocal option to filter-control extension.
- [enh] Enabled data attributes for editable column.
- [enh] Added IconSize option to export extension.
- [enh] Added tooltip for filter-control toolbar button.

### 1.9.1

- [bug] Removed no records events.
- [bug] Fixed cardView fieldIndex error.
- [bug] Fixed #1130: table-condensed is not working.
- [bug] Fixed #1482: export all server sidePagination bug(export extension).
- [bug] Fixed #1248: IE8 does not support indexOf function.
- [bug] Fixed #1491: (un)check event element argument missing.
- [bug] Fixed Italian translation.
- [bug] Unified naming of MS in type names(export extension).
- [bug] Fixed selectPage method fails(cookie extension).
- [bug] Add ja-JP and ms-MY translation for formatAllRows.
- [enh] UniqueId can also be stored in a row's data property.
- [enh] Use default settings when cookie settings don't exist(cookie extension).
- [enh] Expand `filterBy` to accept and array of values.
- [enh] Added `updateByUniqueId` method.
- [doc] Added `iconSize` docs.

### 1.9.0

- [enh] Update bootstrap-table-cookie.js.
- [enh] Use options for detailView's open/close icons.
- [enh] Added `refreshOptions` and `gtHiddenColumns` method.
- [enh] Added `datepicker` option to Filter Control.
- [bug] Fix #936 Sort carets should not be inline-styled by JS.
- [bug] Fix table header width bug when setting table to no bordered.
- [bug] Fix #938, fix #940: Multiple Sort and Hide/Show column.
- [bug] Fix #970: `click`and `dblclick` bug on no-rows table.
- [bug] Fix #967: unselected column while column sorted display error.
- [enh] Support title feature in cells.
- [enh] Improved cookie, mobile extension.
- [enh] Added group-by, angular extension.
- [enh] Added option for setting locale.
- [enh] Added `exportDataType` option for export extension.
- [enh] Add fa-IR, ca-ES, es-ES, et-EE and af-ZA locales.
- [enh] Supported complex header with `rowspans` and `colspans`.
- [enh] Added `searchFomatter` column option.
- [bug] Fixed ResetRow function and undefined column search bug.
- [bug] Fixed #639: footer resizing problem.
- [enh] Added resetSearch method to reset the search text.
- [enh] Supported flat json.
- [enh] Improved reorder-columns extension.
- [enh] Added multiple-search, accent-neutralise extension.
- [enh] Added fixed-columns extension.
- [enh] Added `$.fn.bootstrapTable.utils` tools.
- [enh] Added `expandRow` and `collapseRow` methods.
- [enh] Updated `showRow`, `hideRow` and `updateCell` methods.
- [bug] Fix #1390: radio maintainSelected bug.
- [bug] Fix #1421: checkBy filter enabled.
- [bug] Remove `bootstrap-table-all.js` and `bootstrap-table-all.min.js`.

### 1.8.1

- [enh] Accessing field name in formatter.
- [enh] Improve function option to support string format for example formatter.
- [enh] Added multiple sort extension.
- [enh] Improve filter control extension.
- [enh] Added jsdelivr CDN.
- [bug] Fix #912: Bug when switching to card view.
- [bug] Fix #914: extra empty toolbar div bug.
- [bug] Fix bootstrap-table-pt-PT.js typo.

### 1.8.0

- [enh] Added state saving for visible columns and the ability to use extension with multiple simultaneous tables.
- [enh] Added `ajax` option to replace jquery ajax method.
- [enh] Added `resetWidth` method to reset header and footer width.
- [enh] Added key-events, mobile, filter-control, reorder-columns, reorder-rows, resizable, natural-sorting, toolbar extensions, and update the extensions name.
- [enh] Added `onToggle`, `onCheckSome` and `onUncheckSome` events.
- [enh] Added `getScrollPosition`, `removeAll`, `removeByUniqueId` methods.
- [bug] Fix double header bug after table show from hidden.
- [bug] Fix #279: scrollWidth bug.
- [enh] `getData` method support to get the current page data.
- [enh] Added 'getAllSelections' method to get checked rows across all pages.
- [enh] Added `ro-RO` locale.
- [enh] Added `table-no-bordered` class to remove table-bordered style.
- [enh] Added `bootstrap-table-all.js` and `bootstrap-table-locale-all.js` files to dist.
- [enh] Added detail view feature.
- [enh] Added `updateCell` method.
- [enh] Added `onClickCell` and `onDblClickCell` events.
- [bug] Fix #672: Column Fixed Width in Percentage bug.
- [bug] Fix row state field value bug when there are disabled rows.
- [bug] Fix #762: save tr's data-* attributes.
- [bug] Fix #823, #850: break rowspan bug, data-attribute bug.

### 1.7.0

- [enh] Add `showFooter`, `keyEvents`, `searchText` and `uniqueId` options.
- [enh] Add `cardVisible` column options.
- [enh] Add `checkBy` and `uncheckBy`, `showRow` and `hideRow` and `getRowsHidden` methods.
- [enh] Add nb-NO, ar-SA, es-MX, ka-GE locales.
- [enh] Add cookie, resizable, natural-sorting, toolbar extensions.
- [enh] Add exportOptions to export extension.
- [enh] Fix #263: prepend method support object and array.
- [enh] Card View support checkbox and radio.
- [bug] Fix Card View events bug.
- [enh] Keep all `data-*` attributes when transform from normal table.
- [enh] Load method support fixedScroll param.
- [enh] Added 'all' option in pagination.
- [enh] Added pagination detail align.

### 1.6.0

- [bug] Fix queryParams bug when use `sidePagination='server'`.
- [enh] Add uk-UA, sv-SE, pt-PT, ms-MY, ja-JP locales.
- [enh] Add `searchTimeOut` option.
- [bug] Fix #220: state column hideColumn bug.
- [bug] Fix #221: cellStyle bug.
- [enh] Add `iconsPrefix` and `icons` options to support custom icons.
- [enh] Add i18n support for docs.
- [enh] Allow `query` params to be specified during refresh.
- [bug] Fix bug of ellipsis string.
- [bug] Fix pageList smartDisplay.
- [bug] Fix #188: Export Button is not shown only use `showExport=true`.
- [bug] Fix page-change event params bug.
- [enh] Add limit and offset params only if pagination is activated.
- [enh] Add `ajaxOptions` option to custom $.ajax options.
- [enh] Add a toggle pagination toolbar button.
- [enh] Add `iconSize` option.
- [enh] Add `buttonsAlign` option and update `toolbarAlign` option.
- [enh] Add `prepend`, `insertRow` and `toggleView` methods.
- [enh] Add `editable-save.bs.table` event to editatble extension.
- [enh] #431: load method support pagination.

### 1.5.0

- [bug] Fix #144: `onCheck` and `onUncheck` events are reversed when using `clickToSelect` option. (jQuery 1.7.2 bug).
- [bug] Fix IE browser display header bug when use `mergeCells` method.
- [bug] Fix #269: array as row bug.
- [bug] Fix #314: `rowStyle` bug.
- [enh] Add de-DE, hu-HU, sk-SK locales.
- [enh] Fix #261: add namespace to `.table` style.
- [bug] Fix #160, #323: operate events don't work in card view.
- [enh] Add `filterBy`, `scrollTo`, `prevPage` and `nextPage`, `check` and `uncheck` methods.
- [enh] Add `onPreBody` and `onPostBody` events.
- [enh] Add `searchable` column option.
- [enh] Fix #59: support load multiple locale files.
- [enh] Modify the scope of the column events.
- [enh] Improve editable extension.

### 1.4.0

- [enh] Fix #119, #123: Save all `id` and `class` of `tr` and `td` for html table.
- [enh] Fix #149: Hide empty data on Card view.
- [enh] Fix #131: Add `onPageChange` event.
- [enh] Add `onSearch` event.
- [enh] Apply `width` column option to row style.
- [enh] Add bootstrap-table-filter extension.
- [enh] Add cs-CZ, es-CR, es-NI, pl-PL, ur-PK, ko-KR, th-TH locales.
- [bug] Fix `minimumCountColumns` option init error.
- [bug] Fix #161: `undefined` or `null` string sort bug.
- [bug] Fix #171: IE disabled button can be clicked bug.
- [bug] Fix #185: Reset the page to the first page when changing the url with `refresh` method.
- [bug] Fix #202: updateRow method keep the scroll position.
- [enh] Add `smartDisplay` option.
- [enh] Add `searchAlign` and `toolbarAlign` options.
- [enh] Fix #193: Add `dataType` option.
- [enh] Add flatJSON and editable extensions.
- [enh] Add `rowAttributes` option.
- [enh] Update documentation.

### 1.3.0

- [enh] Take `showHeader` option effect to the card view.
- [enh] Rename and update locale files.
- [bug] Fix #102: Wrong `options.columns` initialization.
- [enh] Fix #121: Add extensions for bootstrap table.
- [bug] Fix #138: IE8 search data and remove method error.
- [bug] Fix bug: sorter and check all do not work in some case.
- [enh] Add `bootstrap-table-nl-NL.js` and `bootstrap-table-el-GR.js`.
- [enh] Support search without data-field set, trim search input.
- [enh] Fix #81: Allow the `class` to be applied to the radio or checkbox row.
- [bug] Fix #135, #142: Search use formatted data.
- [enh] Verify search text before send queryParams.
- [bug] Fix #148: column events support namespace.
- [enh] Support to disable radio or checkbox column by formatter.

### 1.2.4

- [enh] Fix #23: Add css and classes parameters to column cell.
- [enh] Fix #64: Add support for change remote url.
- [enh] Fix #112: update the `refresh` method.
- [bug] Fix #113: Using radio type and cardView error.
- [enh] Fix #117: Add `updateRow` method.
- [enh] Fix #96, #103: apply `class` option to td elements.
- [enh] Fix #97: add `sortable` class to header cells instead of `cursor: pointer`.
- [enh] Fix #124: change `queryParams` and `queryParamsType` default option.
- [enh] Remove the `eval` method.
- [enh] Add `bootstrap-table-it-IT.js` locale.

### 1.2.3

- [bug] Fix the selected row class reset after toggle column bug.
- [bug] Fix #86: invisible column are still searchable.
- [bug] Fix search result error when toggle column display.
- [enh] Add `clickToSelect` to columns.
- [bug] Fix click-row event bug.
- [enh] When field is undefined, use index instead.
- [enh] Add `cache` option for AJAX calls.
- [enh] Improve zh-TW translation.
- [enh] #82: Add `getData` method.
- [enh] #82: Add `remove` method.

### 1.2.2

- Fix #68: Add `showColumn`/`hideColumn` methods.
- Fix #69: Add `bootstrap-table-es_AR.js` locale.
- Fix #88: Add `bootstrap-table-fr_BE.js` locale.
- Fix #85: Select row and add row class.
- Add `halign` column option.

### 1.2.1

- Fix #56: Pagination issue in bootstrap 2.3.
- Fix #76: After refreshing table data, search no longer works.
- Fix #77: After searching and then clearing the search field, table is no longer sortable.
- Add `sortable` option, `false` to disable sortable of all columns.
- Support localization for docs.

### 1.2.0

- Fix bootstrap 2 table border bug.
- Fix loading and not found record display bug.
- Update `minimunCountColumns` option to `minimumCountColumns`.
- Fix sort order bug.

### 1.1.5

- Fix the bottom border bug on Chrome.
- Add horizontal scroll for support.
- Fix scroll header width error.
- Add `showRefresh` and `showToggle` options.

### 1.1.4

- Fix `destroy` method bug.
- Initialize table data from HTML.
- Fix the hidden table reset header bug.

### 1.1.3

- Add `events` column option.
- Add `checkboxHeader` option.
- Add `queryParamsType` option.
- Fix ie class bug, and fix duplicated data error.

### 1.1.2

- Add switchable column option.
- Add `data-toggle` attribute.
- Add support for number search.
- Use html function instead of text in header th.

### 1.1.1

- Remove `bootstrapVerion` option.
- Add `data-page-list` attribute.
- Fix search data error.
- Non case sensitive search in client side.
- Added support for Danish translation.

### 1.1.0

- Fix old firefox browser display error.
- Add minimunCountColumns option.
- Update the table body header implementation and resetView method.
- Remove bootstrapVersion option.
- Fix search data error.

### 1.0.6

- Add jQuery events.
- Add `onDblClickRow` event and `onAll` event.
- Add `singleSelect` option.
- Search improvent: add a timeout and trigger the search event when the text has changed to improve the search.
- Scroll to top after data loaded.
- Add `toolbar` option.
- Add `rowStyle` option.
- Add `bootstrapVersion` option.

### 1.0.5

- Update the pagination list position.
- Update `queryParams` option.
- Add `contentType` and `onBeforeLoad` options.
- Add server side pagination(`pageSize, pageNumber, searchText, sortName, sortOrder`).
- Add `COLUMN_DEFAULTS`.
- Add `refresh` method.
- Add `index` argument in `formatter` function.
- Update card view display.

### 1.0.4

- Add `showLoading` and `hideLoading` methods.
- Add `onLoadSuccess` and `onLoadError` events.
- Add `clickToSelect` option.
- Add `cardView` option.
- Add loading with `formatLoadingMessage` function.
- Add `idField` option.

### 1.0.3

- Update fixed headers.
- Add zh-TW locale file.
- Add `showColumns` option and `visible` column option.
- Update `hideHeader` option to `showHeader`.
- Add `formatNoMatches` locale function.
- Add table events.

### 1.0.2

- Add i18n support.
- Add `selectItemName` option.
- Update the `pageList` default.
- Add `search` option.
- Add `destroy` method.
- Add page list support.

### 1.0.1

- Add `pagination` support.

### 1.0.0

- Initial release
