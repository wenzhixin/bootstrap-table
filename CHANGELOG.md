## ChangeLog

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

* [enh] Fix #23: Add css and classes parameters to column cell.
* [enh] Fix #64: Add support for change remote url.
* [enh] Fix #112: update the `refresh` method.
* [bug] Fix #113: Using radio type and cardView error.
* [enh] Fix #117: Add `updateRow` method.
* [enh] Fix #96, #103: apply `class` option to td elements.
* [enh] Fix #97: add `sortable` class to header cells instead of `cursor: pointer`.
* [enh] Fix #124: change `queryParams` and `queryParamsType` default option.
* [enh] Remove the `eval` method.
* [enh] Add `bootstrap-table-it-IT.js` locale.

### 1.2.3

* [bug] Fix the selected row class reset after toggle column bug.
* [bug] Fix #86: invisible column are still searchable.
* [bug] Fix search result error when toggle column display.
* [enh] Add `clickToSelect` to columns.
* [bug] Fix click-row event bug.
* [enh] When field is undefined, use index instead.
* [enh] Add `cache` option for AJAX calls.
* [enh] Improve zh-TW translation.
* [enh] #82: Add `getData` method.
* [enh] #82: Add `remove` method.

### 1.2.2

* Fix #68: Add `showColumn`/`hideColumn` methods.
* Fix #69: Add `bootstrap-table-es_AR.js` locale.
* Fix #88: Add `bootstrap-table-fr_BE.js` locale.
* Fix #85: Select row and add row class.
* Add `halign` column option.

### 1.2.1

* Fix #56: Pagination issue in bootstrap 2.3.
* Fix #76: After refreshing table data, search no longer works.
* Fix #77: After searching and then clearing the search field, table is no longer sortable.
* Add `sortable` option, `false` to disable sortable of all columns.
* Support localization for docs.

### 1.2.0

* Fix bootstrap 2 table border bug.
* Fix loading and not found record display bug.
* Update ```minimunCountColumns``` option to ```minimumCountColumns```.
* Fix sort order bug.

### 1.1.5

* Fix the bottom border bug on Chrome.
* Add horizontal scroll for support.
* Fix scroll header width error.
* Add ```showRefresh``` and ```showToggle``` options.

### 1.1.4

* Fix ```destroy``` method bug.
* Initialize table data from HTML.
* Fix the hidden table reset header bug.

### 1.1.3

* Add ```events``` column option.
* Add ```checkboxHeader``` option.
* Add ```queryParamsType``` option.
* Fix ie class bug, and fix duplicated data error.

### 1.1.2

* Add switchable column option.
* Add ```data-toggle``` attribute.
* Add support for number search.
* Use html function instead of text in header th.

### 1.1.1

* Remove ```bootstrapVerion``` option.
* Add ```data-page-list``` attribute.
* Fix search data error.
* Non case sensitive search in client side.
* Added support for Danish translation.

### 1.1.0

* Fix old firefox browser display error.
* Add minimunCountColumns option.
* Update the table body header implementation and resetView method.
* Remove bootstrapVersion option.
* Fix search data error.

### 1.0.6

* Add jQuery events.
* Add ```onDblClickRow``` event and ```onAll``` event.
* Add ```singleSelect``` option.
* Search improvent: add a timeout and trigger the search event when the text has changed to improve the search.
* Scroll to top after data loaded.
* Add ```toolbar``` option.
* Add ```rowStyle``` option.
* Add ```bootstrapVersion``` option.

### 1.0.5

* Update the pagination list position.
* Update ```queryParams``` option.
* Add ```contentType``` and ```onBeforeLoad``` options.
* Add server side pagination(```pageSize, pageNumber, searchText, sortName, sortOrder```).
* Add ```COLUMN_DEFAULTS```.
* Add ```refresh``` method.
* Add ```index``` argument in ```formatter``` function.
* Update card view display.

### 1.0.4

* Add ```showLoading``` and ```hideLoading``` methods.
* Add ```onLoadSuccess``` and ```onLoadError``` events.
* Add ```clickToSelect``` option.
* Add ```cardView``` option.
* Add loading with ```formatLoadingMessage``` function.
* Add ```idField``` option.

### 1.0.3

* Update fixed headers.
* Add zh-TW locale file.
* Add ```showColumns``` option and ```visible``` column option.
* Update ```hideHeader``` option to ```showHeader```.
* Add ```formatNoMatches``` locale function.
* Add table events.

### 1.0.2

* Add i18n support.
* Add ```selectItemName``` option.
* Update the ```pageList``` default.
* Add ```search``` option.
* Add ```destroy``` method.
* Add page list support.

### 1.0.1

* Add ```pagination``` support.

### 1.0.0

* Initial release
