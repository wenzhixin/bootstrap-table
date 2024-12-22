ChangeLog
---------

### 1.24.0

#### Core

- **New:** Added `card-view-field` class to `card-view`.
- **Update:** Fixed `id` not working bug in `rowAttributes`.
- **Update:** Fixed `data` field attr not working bug.
- **Update:** Fixed column is `undefined` bug in `updateFieldGroup` when using `refreshOptions`.
- **Update:** Fixed `post-header` trigger bug after table destroy.
- **Update:** Fixed `strictSearch` not working bug.
- **Update:** Fixed `insertRow` bug after on the last row of the table.
- **Update:** Fixed display error of total rows using load more pagination.
- **Update:** Updated Sass and refined the SCSS file.
- **Update:** Update Eslint and fix some lint errors.

#### Extensions

- **Update(cookie):** Fixed cookie columns display error after adding a column.
- **Update(filter-control):** Fixed select not working bug after an Ajax loaded.

### 1.23.5

#### Core

- **New:** Added `getFooterData` method.
- **Update:** Fixed `refresh` invalid url bug when `url` is relative path.
- **Update:** Fixed `getData` bug with `formatted` param.
- **Update:** Fixed column class option not work bug in td.

### 1.23.4

#### Core

- **New:** Added support for column options `formatter` and `footerFormatter` methods returning type `jQuery`, `HTMLElement`.
- **New:** Added `sortReset` method to reset the current sort state.
- **New:** Added a presentation role if no matching rows are found.
- **Update:** Fixed `refresh` method doesn't reuse parameters provided as query bug.
- **Update:** Fixed compatibility issues when `colspan` is set as a string.

#### Extensions

- **Update(fixed-columns):** Fixed undefined error in some cases.
- **Update(reorder-columns):** Fixed incorrect column values order with detail view.

### 1.23.2

#### Core

- **New:** Added `buttonsAttributeTitle` option to customize title attribute.
- **Update:** Updated sort icons using SVG instead of PNG.
- **Update:** Fixed search highlight not working when it contains multiple HTML elements.
- **Update:** Fixed the `esbuild` bundle error.
- **Update:** Fixed insertRow, updateRow, and updateCell methods bugs.
- **Update:** Fixed `undefined` error when searching using the dotted field.

### 1.23.1

#### Core

- **Update:** Improved vue component init twice without `setTimeout`.
- **Update:** Updated `af-ZA`, `fr-BE`, `fr-CH`, `fr-FR`, `fr-LU`, and `id-ID` locales.

#### Extensions

- **Update(editable):** Fixed editable display bug of select type.
- **Update(sticky-header):** Fixed issue if sticky-header extension is loaded but not enabled.

### 1.23.0

#### Core

- **New:** Add support for vue3 instead of vue2.
- **Update:** Fixed `getData` with `formatted` data bug when a column is missing.
- **Update:** Fixed `toggleColumn` exception when the field does not exist.
- **Update:** Fixed vue component init twice when options and columns both changed.

#### Extensions

- **New(addrbar):** Added `addrCustomParams` option for custom parameters.
- **New(filter-control):** Added `filterControlSearchClear` option to stop clearing the filters when using `showSearchButton` option.
- **Update(filter-control):** Fixed error with clear filters button when not enabled cookie extension.
- **Update(filter-control):** Fixed bug with enabled cookie extension using `localStorage`.
- **Update(multiple-sort):** Fixed not trigger event bug when using server-side pagination.

### 1.22.6

#### Extensions

- **Update(cookie):** Fixed cookie does not work bug with pagination ALL list.
- **Update(editable):** Fixed the `formatter` function does not include the `field` parameter bug.
- **Update(toolbar):** Fixed toolbar display bug when using an HTML title.
- **Update(toolbar):** Fixed toolbar does not update bug when column visible updated.
- **Update(toolbar):** Fixed toolbar does not update bug when the locale is changed.

### 1.22.5

#### Core

- **New:** Added `sl-SI` locales.
- **New:** Added support for HTML to the `updateColumnTitle` method.
- **Update:** Fixed the `getRowByUniqueId` bug when `uniqueId` is of mixed data formats.
- **Update:** Fixed not triggering `sort` event bug using server-side pagination.
- **Update:** Fixed custom `iconPrefix` and `icons` bugs.
- **Update:** Fixed virtual scroll cannot work bug in modal.

#### Extensions

- **Update(multiple-sort):** Fixed the duplicated ID bug in the multiple-sort extension.

### 1.22.4

#### Core

- **New:** Added `paginationLoadMore` option.
- **Update:** Fixed change visibility of multiple headers with the same index.
- **Update:** Fixed footer height bug when setting `table-sm`.
- **Update:** Fixed the `locale` not changed bug using the `refreshOptions` method.
- **Update:** Fixed custom iconPrefix and icons bugs.
- **Update:** Updated `vi-VN`, `zh-CN` and `zh-TW` locales.

#### Extensions

- **New(copy-rows):** Added `copyRowsHandler` option to handle the copy rows data.
- **New(print):** Added `printStyles` option.
- **Update(export):** Updated the trigger timing for export-started.
- **Update(multiple-sort):** Fixed the missing parameters error of the `sorter` function.
- **Update(pipeline):** Fixed loading message not display bug.

### 1.22.3

#### Core

- **New:** Added `fixedScroll` option.
- **New:** Added support for setting icons automatically by `iconsPrefix`.
- **Update:** Fixed search bug when the field has `.` character.
- **Update:** Updated `tr-TR`, `es-ES`, `pt-BR` and `pt-PT` locales.

#### Extensions

- **New(addrbar):** Fixed addrbar bug when using `sortReset` option.
- **Update(jump-to):** Fixed page jump-to bug when using both pagination displays.
- **Update(print):** Fixed print bug when field is not set.

### 1.22.2

#### Core

- **New:** Added `footerStyle` column option.
- **Update:** Fixed empty style in header and footer bug.
- **Update:** Fixed the trigger order of `sort` event.
- **Update:** Updated `ar-SA` locale.

#### Extensions

- **New(cookie):** Added cookie support for custom view extension.
- **Update(cookie):** Fixed cookie bug when using `cardView` option.
- **Update(cookie):** Fixed cookie bug with column switchable.
- **Update(editable):** Fixed `export-saved` event error when `exportDataType` is `all`.
- **Update(filter-control):** Fixed `searchAccentNeutralise` option not work.
- **Update(filter-control):** Fixed `filterOrderBy` not work bug for select.
- **Update(group-by):** Fixed group-by bug when using `singleSelect` option.
- **Update(reorder-rows):** Fixed reorder bug when using pagination.

#### Documentation

- **Update:** Improved the parameter of `updateCellByUniqueId` method.
- **Update:** Improved the print docs.

### 1.22.1

#### Core

- **Update:** Fixed maximum call stack size exceeded error.
- **Update:** Updated `ca-ES` locale.

### 1.22.0

#### Core

- **New:** Added `sortBy` method.
- **New:** Added `switchableLabel` column option.
- **New:** Added support for `class` attributes in toolbar buttons.
- **Update:** Removed title from columns button.

#### Extensions

- **Update(addrbar):** Fixed clear search bug when clicking clearSearch button.
- **Update(filter-control):** Fixed pagination server side not working bug.

### 1.21.4

#### Core

- **New:** Added searchable table option to enable sending searchable (columns) parameters.
- **Update:** Fixed Maximum call stack size exceeded error.
- **Update:** Fixed getData bug with hidden rows.
- **Update:** Added support for `select` form to the `searchSelector` option.

#### Extensions

- **Update(filter-control):** Fixed inputs losing their content when using nested attributes.
- **Update(reorder-rows):** Fixed reorder row bug when side-pagination is server.

### 1.21.3

#### Core

- **New:** Added `escapeTitle` table option.
- **New:** Added Aria Label to the search input for screen readers.
- **New:** Persist data attributes for the header(`th`).
- **Update:** Fixed wrong condition for searching with server-side pagination.
- **Update:** Fixed overwriting the `filterOptions` after rebuild.
- **Update:** Fixed apostrophe issue when table via `html`.
- **Update:** Updated extend util instead of `$.extend`.
- **Update:** Updated Constructor.EVENTS to events.
- **Update:** Updated packages to the latest version.

#### Extensions

- **Update(cookie):** Fixed issue with hidden and radio/checkbox columns.
- **Update(export):** Fixed `exportTypes` option not working bug.
- **Update(filter-control):** Fixed selector scope issues with multiple tables.
- **Update(filter-control):** Fixed filtering values issue of select with `html` value.
- **Update(reorder-columns):** Fixed same internal function name with `reorder-rows`.
- **Update(treegrid):** Fixed `treegrid` not working when id is text.

### 1.21.2

#### Core

- **New:** Added `sortResetPage` option to reset the page number when sorting.
- **Update:** Fixed overwrite default option bug.
- **Update:** Updated es-ES, es-CR locale.
- **Update:** Improved scss style and lint.
- **Update:** Used scss vars for sorting background image URLs.

#### Extensions

- **New(custom-view):** Added `onToggleCustomView` event.
- **Update(cookie):** Fixed cookie name compare bug on using `cookiesEnabled` option.
- **Update(custom-view):** Fixed `showCustomView` option cannot work.
- **Update(filter-control):** Fixed bug while using a select filter and set `searchFormatter` to false.
- **Update(filter-control):** Fixed missing class when specifying `iconSize`.
- **Update(reorder-rows):** Updated default value to `reorder-rows-on-drag-class` of `onDragClass` option.

### 1.21.1

#### Core

- **Update:** Improved `updateCell` to update one HTML cell only.
- **Update:** Updated `fr-FR` locale.
- **Update:** Added missing locales for aria-label.

#### Extensions

- **Update(export):** Added missing locales for aria-label.

### 1.21.0

#### Core

- **New:** Added `sortEmptyLast` option to allow sorting empty data.
- **Update:** Fixed bug on nested search with null child.
- **Update:** Fixed detail view with filter click error.
- **Update:** Fixed header does not center correctly for the sortable column.
- **Update:** Fixed `regexpCompare` bug when filtering columns.
- **Update:** Fixed `showToggle` title display error.
- **Update:** Fixed `remove` and `removeByUniqueId` using object param bug.
- **Update:** Fixed `searchHighlight` bug while using `searchAccentNeutralise`.
- **Update:** Fixed missing sort for `customSearch` option.
- **Update:** Removed duplicated escaping of the column value.
- **Update:** Updated `uk-UA` locale.

#### Extensions

- **New(cookie):** : Added `hiddenColumns` cookie to prevent issues with new added columns.
- **New(editable):** Added `field` param to `noEditFormatter` option.
- **New(export):** Added `onExportStarted` event.
- **New(filter-control):** Added accent normalization check.
- **New(filter-control):** Added `filterControlMultipleSearch` and `filterControlMultipleSearchDelimiter` options.
- **Update(custom-by):** Fixed the custom view attributes.
- **Update(group-by):** Fixed not handle complex objects bug.
- **Update(filter-control):** Fixed select values not clear bug after search.
- **Update(filter-control):** Fixed the select sorting error.
- **Update(filter-control):** Fixed wrong selector for caching values with multiple tables.
- **Update(filter-control):** Fixed the `filterDefault` option bug as filter if multiple filters exists.
- **Update(filter-control):** Fixed filter control special char.
- **Update(filter-control):** Updated default value to false of `filterStrictSearch`.
- **Update(filter-control):** Supported not visible columns when using `filterControlContainer` option.
- **Update(multiple-sort):** Fixed `showMultiSortButton` option bug.
- **Update(print):** Fixed not handle complex objects bug.
- **Update(print):** Removed switched-off columns from printed table.

### 1.20.2

#### Core

- **Update:** Fixed small memory leak.
- **Update:** Fixed the detail view bug with the `td` instead of `icon`.

#### Extensions

- **Update(export):** Fixed XSS vulnerability bug by onCellHtmlData.
- **Update(export):** Fixed export footer bug without setting height.
- **Update(filter-control):** Fixed the comparison of dates when using the `datepicker`.

### 1.20.1

#### Core

- **Update:** Fixed toggle column bug with complex headers.
- **Update:** Fixed icons option cannot work bug when it's a string.
- **Update:** Updated TypeScript definitions.

#### Extensions

- **Update(cookie):** Fixed cookie extension error with multiple-sort.
- **Update(export):** Fixed the `exportOptions` option cannot support the data attribute.
- **Update(reorder-rows):**  Fixed reorder-rows cannot work because of missing default functions.


### 1.20.0

#### Core

- **New:** Used `bootstrap5` as the default theme.
- **New:** Added column-switch-all event of toggle all columns.
- **New:** Added hi-IN and lb-LU locales.
- **Update:** Fixed the toolbar cannot refresh search bug.
- **Update:** Fixed the card view align style bug.
- **Update:** Fixed custom search filter bug if the value is Object.
- **Update:** Fixed table border displays bug when setting height.
- **Update:** Fixed error when the column events are undefined.
- **Update:** Fixed escape column option doesn't override table option bug.
- **Update:** Fixed toggle all columns error when column switchable is false.
- **Update:** Fixed check if the column is visible on card view.
- **Update:** Fixed hide loading bug when canceling the request.
- **Update:** Fixed default value of `clickToSelect` column option.
- **Update:** Fixed `onVirtualScroll` not define default method.
- **Update:** Updated cs-CZ, ko-KR, nl-NL, nl-BE, bg-BG, fr-LU locales.

#### Extensions

- **New(filter-control):** New version of filter-control with new features.
- **New(reorder-rows):**: Added `onAllowDrop` and `onDragStop` options.
- **Update(cookie):** Fixed `sortName` and `sortOrder` bug with cookie.
- **Update(cookie):** Fixed the toggle column bug with the cookie.
- **Update(export):** Fixed selector error if only one export type is defined.
- **Update(filter-control):** Fixed new input class `form-select` of bootstrap 5.
- **Update(multiple-sort):** Fixed the modal cannot close after sorting.
- **Update(print):** Fixed missing print button for bootstrap 5.
- **Update(print):** Fixed `printPageBuilder` option cannot define in html attribute.
- **Update(toolbar):** Fixed toolbar extension modal bug with bootstrap 5.

### 1.19.1

#### Core

- **Update:** Fixed the CVE security problem.
- **Update:** Fixed cannot search for special characters when using `searchHighlight`.

#### Extensions

- **Update(auto-refresh):** Updated the `showAutoRefresh` option as default.
- **Update(export):** Fixed export with only one export type bug.
- **Update(filter-control):** Fixed filter-control cannot work bug.
- **Update(filter-control):** Prevent duplicated elements for filter-control.

### 1.19.0

#### Core

- **New:** Added `onlyCurrentPage` param for `checkBy/uncheckBy` methods.
- **New:** Used `bootstrap icons` as default icons for bootstrap v5.
- **New:** Added `regexSearch` option which allows to filter the table using regex.
- **New:** Added support for allow importing stylesheets.
- **New:** Added `toggle-pagination` event.
- **New:** Added `virtual-scroll` event.
- **Update:** Fixed `vue` component cannot work.
- **Update:** Fixed infinite loop error with wrong server-side pagination metadata.
- **Update:** Improved the behavior of `ajax` abort.
- **Update:** Fixed click bug when paginationLoop is false.
- **Update:** Fixed the highlighting bug when using radio/checkboxes.
- **Update:** Fixed width bug caused by loading css.
- **Update:** Removed the `input-group-append` class for bootstrap v5.
- **Update:** Fixed duplicate definition `id` bug.
- **Update:** Fixed the comparison of search inputs.
- **Update:** Fixed broken page-list selector.
- **Update:** Fixed overwrite custom locale function bug.
- **Update:** Fixed bug with server side pagination and the page size `all`.
- **Update:** Fixed all checkbox not auto check after pagination changed.
- **Update:** Updated the `es-MX` locate.

#### Extensions

- **New(cookie):** Added `Multiple Sort order` stored in cookie extension.
- **New(cookie):** Added `Card view state` stored in cookie extension.
- **New(copy):** Added `ignoreCopy` column option to prevent copying the column data.
- **New(copy):** Added `rawCopy` column option to copy the raw value instead of the formatted value.
- **Update(cookie):** Fixed `switchable` column bug with the cookie extension.
- **Update(export):** Fixed the export dropdown cannot be closed bug.
- **Update(filter-control):** Updated `filterMultipleSelectOptions` to `filterControlMultipleSelectOptions` option.
- **Update(filter-control):** Fixed bug with cookie deletion of none filter cookies.
- **Update(filter-control):** Fixed bug when using the `load` method.
- **Update(group-by):** Fixed overwriting the column classes bug on group collapsed rows.
- **Update(multiple-sort):** Fixed hide/show column error with no sortPriority defined.
- **Update(page-jump-to):** Fixed jump-to display bug in bootstrap v3.
- **Update(print):** Fixed print formatter bug.
- **Update(reorder-rows):** Fixed `reorder-rows` not work property.
- **Update(reorder-rows):** Fixed the drag selector to prevent a checkbox bug on mobile.
- **Update(resizable):** Fixed the reinitialization after the table changed.
- **Update(sticky-header):** Fixed sticky-header not work property with group header.
- **Update(treegrid):** Fixed bug of treegrid from html.

### 1.18.3

#### Core

- **Update:** Fixed negative number bug when searching with comparison.
- **Update:** Fixed non-conform HTML-Standard problems.
- **Update:** Fixed `td` width bug using card view.
- **Update:** Fixed exact match problem when searching term with accent.
- **Update:** Update `pt-PT` and `fa-IR` locales.

#### Extensions

- **New(page-jump-to):** Added `showJumpToByPages` option.
- **Update(auth-refresh):** Fixed auto refresh not clear interval bug.
- **Update(multiple-sort):** Fixed multiple-sort cannot support iconSize bug.
- **Update(sticky-header):** Fixed `stickyHeaderOffsetY` option cannot work.
- **Update(sticky-header):** Updated the stickyHeader `offset` options to number.

### 1.18.2

#### Core

- **Update:** Fixed bootstrap5 cannot work bug.
- **Update:** Fixed checkbox display bug when using `formatter`.
- **Update:** Fixed search highlight bug.
- **Update:** Updated `ru-RU` and `de-DE` locales.

#### Extensions

- **New(filter-control):** Added support for flat JSON.
- **Update(cookie):** Fixed not deleted cookie bug when the sort was reset.
- **Update(export):** Not export the detail view icon column.
- **Update(filter-control):** Fixed not working when using `filterControlContainer`.
- **Update(multiple-sort):** Fixed multiple-sort cannot work bug.
- **Update(resizable):** Fixed resizable cannot work in modal.

### 1.18.1

#### Core

- **New(locale):** Added short locales based on [ISO Language](http://www.lingoes.net/en/translator/langcode.htm).
- **Update:** Updated `sk-SK`, `fr-FR`, `de-DE`, and `es-*` locales.
- **Update:** Fixed `toggleCheck`, `getSelections` and `remove` bug.
- **Update:** Fixed `buttons` option bug using in data attribute.
- **Update:** Fixed custom `icons` option bug.
- **Update:** Fixed `cellStyle` column option not work in card view.
- **Update:** Fixed getSelection bug when using search.
- **Update:** Fixed `pageList` option with `all` display bug using `smartDisplay`.
- **Update:** Fixed search highlight cannot work bug when data field is number.
- **Update:** Fixed `updateColumnTitle` is undo bug after pagination.
- **Update:** Fixed `multipleSelectRow` option bug.
- **Update:** Fixed `icon-size` option bug with pagination.

#### Extensions

- **New(page-jump-to):** Added `min`, `max` and enter support for jump input.
- **Update(export):** Fixed export cannot work with `materialize` and `foundation` themes.
- **Update(filter-control):** Updated `filterDatepickerOptions` to support datepicker option.
- **Update(filter-control):** Fixed select bug when using `&` in the value.
- **Update(fixed-columns):** Fixed `toggleView` display bug.
- **Update(group-by):** Fixed not collapse detail view expanded row bug.
- **Update(group-by):** Fixed display error using `formatter` column option.
- **Update(group-by):** Fixed `groupByFormatter` option  bug using in data attribute.
- **Update(multiple-sort):** Fixed cannot work bug using in server `sidePagination`.
- **Update(page-jump-to):** Fixed page jump input and button bug with `icon-size` option.
- **Update(print):** Fixed print with `rowspan` or `colspan`.
- **Update(reorder-columns):** Fixed reorder column when a column is removed or added.

### 1.18.0

#### Core

- **New(option):** Added `buttons` to add custom buttons to the button bar.
- **New(option):** Added `footerField` to support `server` side pagination.
- **New(option):** Added new parameter `value` to `footerFormatter`.
- **New(option):** Added `searchHighlight` and `searchHighlightFormatter`.
- **New(option):** Added `searchSelector` to custom the search input.
- **New(event):** Added `BootstrapTable` object as last parameter to all `event`.
- **New(css):** Added CSS transitions for loading style.
- **New:** Added support for `style` attribute of `tr` or `td`.
- **New:** Added ability to use `colspan` in the footer.
- **Update:** Updated search input type from `text` to `search`.
- **Update:** Fixed `normalize` not string bug when using `searchAccentNeutralise`.
- **Update:** Fixed complex group header bug.
- **Update:** Fixed `resize` and `scroll` event bug with multiple tables.
- **Update:** Fixed `getScrollPosition` bug when using group-by extension.
- **Update:** Fixed `updateRow` with `customSearch` and `sortReset` bug.
- **Update:** Fixed `colspan` and `mergeCell` bug when using `detailFormatter`.
- **Update:** Fixed `init` bug when using `onPostBody`.
- **Update:** Fixed sort bug when the `field` is set to `0`.
- **Update:** Fixed `showFooter` display bug after resize table width.
- **Update:** Fixed not update selected rows bug when using `checkAll`/`uncheckAll`.
- **Update:** Fixed `checked` property bug using `formatter` when the field has a value.
- **Update:** Fixed default data shared bug with multiple tables.
- **Remove(method):** Removed `getAllSelections` method.

#### Extensions

- **New(addrbar):** Added support for `client` side pagination.
- **New(cookie):** Added `cookieSameSite` option to prevent breaking changes.
- **New(group-by):** Added `groupByToggle` and `groupByShowToggleIcon` options.
- **New(group-by):** Added `groupByCollapsedGroups` option to allow collapse groups.
- **Update(cookie):** Fixed cookie size is too big bug when saving columns.
- **Update(cookie):** Fixed checkbox column disappears bug.
- **Update(export):** Fixed cannot export `all` data bug with pagination.
- **Update(group-by):** Fixed `scrollTo` not working properly bug.
- **Update(multiple-sort):** Fixed cannot work bug.
- **Update(sticky-header):** Fixed vertical scroll cannot work bug.

### 1.17.1

#### Core

- **New:** Added `bootstrap-table` theme without any framework.
- **New:** Added support for Bootstrap v5.
- **New:** Added `$index` field for `remove` method.
- **New:** Added `on-all` event for vue component.
- **New:** Added `bg-BG` locale.
- **New:** Added `loadingFontSize` option.
- **New:** Added `loadingTemplate` option.
- **New:** Added `detailView` support for `cardView`.
- **New:** Added the `searchable` columns to the query params for server side.
- **New:** Added `collapseRowByUniqueId` and `expandRowByUniqueId` methods.
- **New:** Added `detailViewAlign` option for the detail view icon.
- **New:** Added tr `class` support for `thead`.
- **New:** Added `formatted` parameter for `getData` method to get formatted data.
- **New:** Added `paginationParts` option instead of `onlyInfoPagination`.
- **New:** Added `sortReset` option to reset sort on third click.
- **New:** Added support for auto merge the table body cells.
- **Update:** Fixed `updateByUniqueId` method cannot update multiple rows bug.
- **Update:** Fixed `insertRow` not write to source data array bug.
- **Update:** Fixed events bug with `detailViewIcon` option.
- **Update:** Fixed server side pagination sort bug.
- **Update:** Fixed the `page-change` event before init server.
- **Update:** Fixed no records found `colspan` error.
- **Update:** Fixed the `page-change` event before init server.
- **Update:** Fixed `font-size` of the loading text.
- **Update:** Fixed table `border` bug when table is hidden.
- **Update:** Fixed `showRow` method show all hidden rows bug.
- **Update:** Fixed columnsSearch non-unique id warning.
- **Remove:** Removed the `onlyInfoPagination` option.
- **Remove:** Removed accent neutralise extension and moved it to core.

#### Extensions

- **New(cookie)**: Added support for toggle all columns options.
- **New(custom-view):** Added `custom-view` extension.
- **New(editable):** Added `alwaysUseFormatter` option.
- **New(export):** Added `forceHide` column option.
- **New(filter-control):** Added `filterOrderBy` column option support order by `server`.
- **New(filter-control):** Added radio support for `filterControlContainer`.
- **New(filter-control):** Added support for array filter.
- **New(filter-control):** Added `filterControlVisible` option and `toggleFilterControl` method.
- **New(filter-control):** Added `showFilterControlSwitch` option.
- **New(fixed-columns):** Added support for sticky-header.
- **New(pipeline):** Added `pipeline` extension.
- **New(print):** Added support for print footer and merge cells.
- **Update(accent-neutralise):** Fixed comparison with arrays.
- **Update(cookie):** Updated cookie columns to always visible when `switchable` is `false`.
- **Update(cookie):** Fixed cookie value from existing options bug.
- **Update(copy-rows):** Fixed copy rows bug with fixed-column.
- **Update(editable):** Fixed not handle quotation marks bug.
- **Update(editable):** Updated `noeditFormatter` to `noEditFormatter`.
- **Update(export):** Fixed export error with `maintainMetaData` and `clientSidePagination`.
- **Update(filter-control):** Fixed not work with `height` option.
- **Update(filter-control):** Fixed not work in multiple tables.
- **Update(filter-control):** Fixed ignore default search text bug.
- **Update(filter-control):** Fixed not work with html formatter.
- **Update(filter-control):** Fixed reset `filterBy` method bug.
- **Update(filter-control):** Fixed issue with a custom filter control container.
- **Update(filter-control):** Fixed filter control disappear after column switched.
- **Update(fixed-columns):** Fixed loading message not hide bug.
- **Update(group-by):** Fixed params error of `checkAll`/`uncheckAll`.
- **Update(multiple-sort):** Fixed not working with multiple level field bug.
- **Update(reorder-columns):** Fixed cannot work bug.
- **Update(reorder-rows):** Fixed `this` context of `onPostBody` error.
- **Update(treegrid):** Fixed treegrid `destroy` bug.

### 1.16.0

#### Core

- **New:** Added `buttonsOrder` option.
- **New:** Added `headerStyle` option.
- **New:** Added `showColumnsSearch` option.
- **New:** Added `serverSort` option.
- **New:** Added `unfiltered` parameter for `getData` method.
- **Update:** Updated `event` name to lowercase hyphen format for vue component.
- **Update:** Updated `es-AR` locale.
- **Update:** Updated the default classes of semantic theme.
- **Update:** Improved the `resize` problem with multiple tables.
- **Update:** Fixed `checkAll` event bug with sortable checkbox field.
- **Update:** Fixed `checkbox` and not-found td style errors.
- **Update:** Fixed `customSearch` return empty array bug.
- **Update:** Fixed column checkboxes not being disabled when using `toggleAll`.
- **Update:** Fixed `flat` not polyfilled error in vue cli3.
- **Update:** Fixed `height` and `border` not aligned bug.
- **Update:** Fixed `jqXHR` `undefined` error using custom ajax.
- **Update:** Fixed `pageSize` set to all bug with filter.
- **Update:** Fixed `refreshOptions` bug with radio and checkbox.
- **Update:** Fixed `removeAll` bug in the last page when sidePagination is server.
- **Update:** Fixed `search` not always trigger in IE11 bug.
- **Update:** Fixed `search` width `escape` bug.
- **Update:** Fixed `showColumns` cannot work of foundation theme.
- **Update:** Fixed `showFullscreen` bug when setting height.
- **Update:** Fixed `sort` cannot work after searching.
- **Update:** Fixed `sortable` style error when using `table-sm`.
- **Update:** Fixed `sortStable` not work bug.
- **Update:** Fixed `triggerSearch` not work bug.
- **Update:** Supported build cross all platforms.
- **Remove:** Removed `resetWidth` method and use `resetView` instead.

#### Extensions

- **New(cookie):** Added new options to get/set/delete the values by a custom function.
- **New(cookie):** Added save re-order and resize support.
- **New(filter-control):** Added `filterControlContainer` option.
- **New(filter-control):** Added `filterCustomSearch` option.
- **New(filter-control):** Added object and function support in `filterData` column option.
- **New(filter-control):** Added support for using sticky-header extension.
- **New(filter-control):** Added support comparisons search(<, >, <=, =<, >=, =>).
- **New(fixed-columns):** Added all themes support.
- **New(fixed-columns):** Added `fixedRightNumber` option.
- **New(fixed-columns):** Added support for using filter-control extension.
- **New(group-by):** Add `Array` support for `groupByField` option.
- **New(group-by):** Added `customSort` option support.
- **New(multiple-sort):** Added custom `sorter` support.
- **New(multiple-sort):** Added `multiSortStrictSort` option.
- **New(multiple-sort):** Added `multiSort` method.
- **New(print):** Added `printFormatter` data-attribute support.
- **New(reorder-columns):** Added `orderColumns` method.
- **New(reorder-rows):** Added `search` and `cardView` supported.
- **New(sticky-header):** Added support for all themes.
- **New(toolbar):** Added support for all themes.
- **New(reorder-rows):** Added `search` and `cardView` support.
- **Update(cookie):** Fixed cookie localeStorage not work bug with filter-control.
- **Update(cookie):** Fixed `minimumCountColumns` not working bug.
- **Update(cookie):** Improved `cookiesEnabled` to support ' in `data-attribute`.
- **Update(editable):** Fixed `formatter` bug if the column was edited.
- **Update(filter-control):** Fixed `hideUnusedSelectOptions` not work bug.
- **Update(filter-control):** Fixed filter not work bug with `undefined`.
- **Update(filter-control):** Fixed missing parameter of `resetSearch` and `filterDataType`.
- **Update(filter-control):** Fixed `search` with filter-control `search` bug.
- **Update(filter-control):** Fixed the `value` of select display error using editable.
- **Update(fixed-columns):** Fixed checkbox bug with fixed columns.
- **Update(fixed-columns):** Updated default value to `0` of `fixedNumber` option.
- **Update(group-by):** Improved `number` type support.
- **Update(group-by):** Fixed new table using modal bug.
- **Update(group-by):** Fixed `scrollTo` method using group-by.
- **Update(mobile):** Fixed input keyboard bug.
- **Update(multiple-sort):** Fixed not destroy bug.
- **Update(multiple-sort):** Fixed sort not work with `boolean` bug.
- **Update(print):** Improved to use `undefinedText` option.
- **Update(print):** Fixed IE11 not work bug.
- **Update(reorder-columns):** Fixed detail view column reorder bug.
- **Update(resizable):** Fixed columns resizing not work bug.
- **Update(resizable):** Fixed not work via JavaScript.
- **Update(sticky-header):** Fixed not work bug with fullscreen.
- **Update(treegrid):** Fixed `virtualScroll` option bug.
- **Remove:** Removed natural-sorting extension.

### 1.15.5

- **New:** Added `jqXHR` for `responseHandler` option and `onLoadSuccess` event.
- **New:** Added `stickyHeaderOffsetLeft` and `stickyHeaderOffsetRight` for sticky-header.
- **New:** Added Serbian RS cyrillic and latin locales.
- **Update:** Improved `export` button when there is only one type.
- **Update:** Fixed column events click error with `detailView`.
- **Update:** Fixed bug for `searchOnEnterKey` and `showSearchButton` are true.
- **Update:** Fixed `onScrollBody` event and added parameter.
- **Update:** Fixed search input size bug with `iconSize` option.
- **Update:** Fixed filter control select cannot work more than one table.
- **Update:** Fixed virtual scroll to top error when using `append` method.
- **Update:** Fixed `events` cannot work on virtual scroll.
- **Update:** Fixed bottom border bug with `height` option.
- **Update:** Fixed min version throw cannot convert object to primitive value error.

### 1.15.4

- **New:** Added `query` to `queryParams` option.
- **New:** Added `filter` parameter of `customSearch` option.
- **Update:** Fixed search bug in hidden columns.
- **Update:** Fixed table zoom width calculating bug.
- **Update:** Fixed events of column formatted by nested table.
- **Update:** Fixed checkbox style display bug.
- **Update:** Fixed stack overflow error of `checkBy` method.
- **Update:** Fixed `showSearchButton` and `showSearchClearButton` style bug.
- **Update:** Fixed filter-control select `null` value handle error.
- **Update:** Fixed `showSearchClearButton` bug in filter-control extension.
- **Update:** Fixed `print` button appears twice bug.

### 1.15.3

- **New:** Added nl-BE, fr-CH and fr-LU locale.
- **Update:** Updated nl-NL, pt-BR, fr-BE, fr-FR, nl-BE and nl-NL locale.
- **Update:** Fixed treegrid duplicate rows bug.
- **Update:** Fixed `updateCellByUniqueId` method bug on a filtered table.
- **Update:** Fixed colspan group header display bug.
- **Update:** Fixed table footer display bug in some case.
- **Update:** Fixed `getOptions` bug.
- **Update:** Fixed `detailView` bug when hiding columns.
- **Update:** Fixed IE minify bug.
- **Update:** Fixed full screen scrolling bug.

### 1.15.2

#### Core

- **New:** Added `virtualScroll` and `virtualScrollItemHeight` options to support large data.
- **New:** Added vue component support.
- **New:** Added support comparisons search(<, >, <=, =<, >=, =>).
- **New:** Added `detailViewByClick` table option and `detailFormatter` column option.
- **New:** Added `showExtendedPagination` and `totalNotFilteredField` table options.
- **New:** Added `widthUnit` option to allow any unit.
- **New:** Added `multipleSelectRow` option to support ctrl and shift select.
- **New:** Added `onPostFooter`(`post-footer.bs.table`) event.
- **New:** Added `detailViewIcon` and `toggleDetailView` method to hide the show/hide icons.
- **New:** Added `showSearchButton` and `showSearchClearButton` options to improve the search.
- **New:** Added `showButtonIcons` and `showButtonText` options to improve the icons display.
- **New:** Added `visibleSearch` option search only on displayed/visible columns.
- **New:** Added `showColumnsToggleAll` option to toggle all columns.
- **New:** Added `cellStyle` to support checkbox field.
- **New:** Added checkbox and radio auto checked from html support.
- **New:** Added screen reader support for pagination.
- **New:** Added travis lint src and check docs scripts.
- **New:** Added webpack support and user rollup to build the src.
- **New:** Added a version number property.
- **New:** Improved `filterBy` method with `or` condition and custom filter algorithm.
- **New:** Improved `showColumn` and `hideColumn` methods with array of fields.
- **New:** Improved `scrollTo` method to allow `rows` units.
- **Update:** Rewrote all code to ES6.
- **Update:** Improved `pageList` options to support localization.
- **Update:** Improved the `totalRows` option.
- **Update:** Improved table footer.
- **Update:** Improved `getSelections` and `getAllSelections` methods.
- **Update:** Improved css frameworks themes.
- **Update:** Updated parameters of the `getData` method.
- **Update:** Updated parameters of the (un)checkAll events to `rowsAfter, rowsBefore`.
- **Update:** Updated parameters of the `updateRow` method to support `replace`.
- **Update:** Updated page number to 1 while making a server side sort.
- **Update:** Renamed table `maintainSelected` option to `maintainMetaData`.
- **Update:** Renamed method `refreshColumnTitle` to `updateColumnTitle`.
- **Update:** Fixed card view value to be aligned incorrectly bug.
- **Update:** Fixed `smartDisplay` option pagination bug.
- **Update:** Fixed data-* attribute is an object bug.
- **Update:** Fixed page separators click bug.
- **Update:** Fixed scrolling bug in IE11.
- **Update:** Fixed initHeader error caused by toggleColumn.
- **Update:** Fixed search input trigger multiple times bug.
- **Update:** Fix Pagination/totalRows not updated on `hideRow`.
- **Update:** Fixed columns title error.

#### Extensions

- **New(editable):** Added `onExportSaved` event.
- **New(export):** Added `forceExport` column option force export columns with hidden.
- **New(export):** Added function support of `fileName` option.
- **New(filter-control):** Added `filterDataCollector` to control the filter select options.
- **New(filter-control):** Added `filterOrderBy` and filterDefault column options.
- **New(multiple-sort):** Added bootstrap v4 theme support.
- **New(print):** Added RTL dir support.
- **Remove:** Removed group-by, multi-column-toggle, multiple-search, multiple-selection-row, select2-filter and tree-column extensions.
- **Update(cookie):** Fixed cookie search cannot work bug.
- **Update(editable):** Updated parameters of `onEditableSave` to `field, row, rowIndex, oldValue, $el`.
- **Update(editable):** Fixed editable rerender bug after saving data.
- **Update(export):** Updated to only export table header.
- **Update(export):** Fixed bug with the footer extensions while sorting.
- **Update(filter-control):** Added ability to handle boolean.
- **Update(filter-control):** Fixed DatePicker of filter-control does not work bug.
- **Update(filter-control):** Fixed clear filterControl with Cookie bug.
- **Update(filter-control):** Fixed loading screen with filter control.
- **Update(filter-control):** Fixed overwriting the searchText bug.
- **Update(filter-control):** Fixed filtering does not work json sub-object.
- **Update(filter-control):** Fixed select filter with formatter.
- **Update(multiple-sort):** Fixed multiple-sort does not work with data-query-params bug.
- **Update(page-jump-to):** Fixed `click` bug when paginationVAlign is 'both'.
- **Update(reorder-columns):** Fixed reorder columns cannot work bug.
- **Update(reorder-columns):** Fix search and columns bug after reorder columns.
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
- **Update(js):** Fixed `cardView` click event bug.

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
- **New(docs)** Added Algolia search.
- **Update(js):** Fixed sort column shows hidden rows in `server` side pagination bug.
- **Update(js):** Fixed `scrollTo` bug.
- **Update(css):** Fixed no-bordered problem of bootstrap v4.
- **Update(filter-control extension):** Added bootstrap v4 icon support.

### 1.13.1

- feat(js): add `theadClasses` option to support bootstrap v4
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
- feat(page-jump-to extension): add `page-jump-to` extension
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
- fix(js): fix event cannot work when some columns are hidden
- fix(js): remove page size and number when pagination is false
- fix(js): remove getFieldIndexFromColumnIndex because it cause events bug
- fix(js): fix getSelections method bug
- fix(js): update records to rows
- fix(locale): update it-IT locale
- fix(locale): add formatAllRows in template locale
- fix(filter-control extension): add check for null values on existsOptionInSelectControl
- fix(filter-control extension): fix show-clear button bug
- fix(editable extension): fix editable formatter error when refreshOptions
- feat(js): add support for transfer from rowspan / colspan table
- feat(js): add data variable to post-body event
- feat(js): add `buttonsClass` option
- feat(js): add `getVisibleColumns` method
- feat(js): add resize event to fit the header
- feat(js): add `onRefresh` event
- feat(js): add field parameter in the click and dblClick row events
- feat(js): add div.card-views surrounds all the card view div
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
- refactor(extension): refactor filter cookies extension to avoid double calls
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
- [bug] Fix #1660: removed PowerPoint type of export extension.
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
- [bug] Fix #970: `click` and `dblclick` bug on no-rows table.
- [bug] Fix #967: unselected column while column sorted display error.
- [enh] Support title feature in cells.
- [enh] Improved cookie, mobile extension.
- [enh] Added group-by, angular extension.
- [enh] Added option for setting locale.
- [enh] Added `exportDataType` option for export extension.
- [enh] Add fa-IR, ca-ES, es-ES, et-EE and af-ZA locales.
- [enh] Supported complex header with `rowspan` and `colspan`.
- [enh] Added `searchFormatter` column option.
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
- [bug] Fix #762: save data-* attributes of tr.
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
- [enh] Add `editable-save.bs.table` event to editable extension.
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
- Rename `minimumCountColumns`.
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

- Remove `bootstrapVersion` option.
- Add `data-page-list` attribute.
- Fix search data error.
- Non case sensitive search in client side.
- Added support for Danish translation.

### 1.1.0

- Fix old firefox browser display error.
- Add minimumCountColumns option.
- Update the table body header implementation and resetView method.
- Remove bootstrapVersion option.
- Fix search data error.

### 1.0.6

- Add jQuery events.
- Add `onDblClickRow` event and `onAll` event.
- Add `singleSelect` option.
- Search improve: add a timeout and trigger the search event when the text has changed to improve the search.
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
