---
layout: simple
title: News
description: News and announcements for all things Bootstrap Table, including new releases.
---

## Bootstrap Table 1.24.2

<span class="post-date">28 Jul 2025</span>

#### Core

- **Update:** Added `scope` attribute support for table headers.
- **Update:** Fixed bug where `updateCellByUniqueId` throws an error during search.
- **Update:** Fixed "&" not escaped correctly in `unescapeHTML`.
- **Update:** Updated `locales` and `check-locale` tool.

#### Extensions

- **Update(export):** Fixed bug where data was removed when `exportDataType` was set to `selected`.
- **Update(filter-control):** Fixed bug where filters all data out when table cells contain HTML.
- **Update(reorder-columns):** Fixed the catch error when the table calls `dragtable.destroy`.

## Bootstrap Table 1.24.1

<span class="post-date">2 Mar 2025</span>

#### Core

- **New:** Added `lt-LT` locale.
- **Update:** Fixed `filterBy` not working bug after using `filterAlgorithm` option.
- **Update:** Fixed cookie extension throws js error bug.
- **Update:** Fixed icons prefix bugs in extensions.
- **Update:** Fixed bug where totalRows is not integer in formatter.
- **Update:** Fixed bug of table is not destroyed after vue component is unmounted.
- **Update:** Fixed high severity vulnerability issue using `npm-run-all2` instead.

## Bootstrap Table 1.24.0

<span class="post-date">22 Dec 2024</span>

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

## Bootstrap Table 1.23.5

<span class="post-date">1 Oct 2024</span>

#### Core

- **New:** Added `getFooterData` method.
- **Update:** Fixed `refresh` invalid url bug when `url` is relative path.
- **Update:** Fixed `getData` bug with `formatted` param.
- **Update:** Fixed column class option not work bug in td.

## Bootstrap Table 1.23.4

<span class="post-date">20 Sep 2024</span>

#### Core

- **New:** Added support for column options `formatter` and `footerFormatter` methods returning type `jQuery`, `HTMLElement`.
- **New:** Added `sortReset` method to reset the current sort state.
- **New:** Added a presentation role if no matching rows are found.
- **Update:** Fixed `refresh` method doesn't reuse parameters provided as query bug.
- **Update:** Fixed compatibility issues when `colspan` is set as a string.

## Bootstrap Table 1.23.2

<span class="post-date">27 Jul 2024</span>

#### Core

- **New:** Added `buttonsAttributeTitle` option to customize title attribute.
- **Update:** Updated sort icons using SVG instead of PNG.
- **Update:** Fixed search highlight not working when it contains multiple HTML elements.
- **Update:** Fixed the `esbuild` bundle error.
- **Update:** Fixed insertRow, updateRow, and updateCell methods bugs.
- **Update:** Fixed `undefined` error when searching using the dotted field.

## Bootstrap Table 1.23.1

<span class="post-date">13 Jul 2024</span>

#### Core

- **Update:** Improved vue component init twice without `setTimeout`.
- **Update:** Updated `af-ZA`, `fr-BE`, `fr-CH`, `fr-FR`, `fr-LU`, and `id-ID` locales.

#### Extensions

- **Update(editable):** Fixed editable display bug of select type.
- **Update(sticky-header):** Fixed issue if sticky-header extension is loaded but not enabled.

## Bootstrap Table 1.23.0

<span class="post-date">30 Jun 2024</span>

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

## Bootstrap Table 1.22.6

<span class="post-date">15 May 2024</span>

#### Extensions

- **Update(cookie):** Fixed cookie does not work bug with pagination ALL list.
- **Update(editable):** Fixed the `formatter` function does not include the `field` parameter bug.
- **Update(toolbar):** Fixed toolbar display bug when using an HTML title.
- **Update(toolbar):** Fixed toolbar does not update bug when column visible updated.
- **Update(toolbar):** Fixed toolbar does not update bug when the locale is changed.

## Bootstrap Table 1.22.5

<span class="post-date">29 Apr 2024</span>

#### Core

- **New:** Added `sl-SI` locales.
- **New:** Added support for HTML to the `updateColumnTitle` method.
- **Update:** Fixed the `getRowByUniqueId` bug when `uniqueId` is of mixed data formats.
- **Update:** Fixed not triggering `sort` event bug using server-side pagination.
- **Update:** Fixed custom `iconPrefix` and `icons` bugs.
- **Update:** Fixed virtual scroll cannot work bug in modal.

#### Extensions

- **Update(multiple-sort):** Fixed the duplicated ID bug in the multiple-sort extension.

## Bootstrap Table 1.22.4

<span class="post-date">26 Mar 2024</span>

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

## Bootstrap Table 1.22.3

<span class="post-date">27 Feb 2024</span>

#### Core

- **New:** Added `fixedScroll` option.
- **New:** Added support for setting icons automatically by `iconsPrefix`.
- **Update:** Fixed search bug when the field has `.` character.
- **Update:** Updated `tr-TR`, `es-ES`, `pt-BR` and `pt-PT` locales.

#### Extensions

- **New(addrbar):** Fixed addrbar bug when using `sortReset` option.
- **Update(jump-to):** Fixed page jump to bug when using both pagination display.
- **Update(print):** Fixed print bug when field is not set.

## Bootstrap Table 1.22.2

<span class="post-date">11 Jan 2024</span>

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
- **Update(group-by):** Fixed group by bug when using `singleSelect` option.
- **Update(reorder-rows):** Fixed reorder bug when using pagination.

#### Documentation

- **Update:** Improved the parameter of `updateCellByUniqueId` method.
- **Update:** Improved the print docs.

## Bootstrap Table 1.22.1

<span class="post-date">6 Jul 2023</span>

#### Core

- **Update:** Fixed maximum call stack size exceeded error.
- **Update:** Updated `ca-ES` locale.

## Bootstrap Table 1.22.0

<span class="post-date">16 Jun 2023</span>

#### Core

- **New:** Added `sortBy` method.
- **New:** Added `switchableLabel` column option.
- **New:** Added support for `class` attribute in toolbar buttons.
- **Update:** Removed title from columns button.

#### Extensions

- **Update(addrbar):** Fixed clear search bug when clicking clearSearch button.
- **Update(filter-control):** Fixed pagination server side not working bug.

## Bootstrap Table 1.21.4

<span class="post-date">1 Apr 2023</span>

#### Core

- **New:** Added searchable table option to enable sending searchable (columns) parameters.
- **Update:** Fixed Maximum call stack size exceeded error.
- **Update:** Fixed getData bug with hidden rows.
- **Update:** Added support for `select` form to the `searchSelector` option.

#### Extensions

- **Update(filter-control):** Fixed inputs losing their content when using nested attributes.
- **Update(reorder-rows):** Fixed reorder row bug when side-pagination is server.

## Bootstrap Table 1.21.3

<span class="post-date">4 Mar 2023</span>

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

## Bootstrap Table 1.21.2

<span class="post-date">12 Dec 2022</span>

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

## Bootstrap Table 1.21.1

<span class="post-date">22 Sep 2022</span>

#### Core

- **Update:** Improved `updateCell` to update one HTML cell only.
- **Update:** Updated `fr-FR` locale.
- **Update:** Added missing locales for aria-label.

#### Extensions

- **Update(export):** Added missing locales for aria-label.

## Bootstrap Table 1.21.0

<span class="post-date">20 Aug 2022</span>

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

## Bootstrap Table 1.20.2

<span class="post-date">25 May 2022</span>

#### Core

- **Update:** Fixed small memory leak.
- **Update:** Fixed the detail view bug with the `td` instead of `icon`.

#### Extensions

- **Update(export):** Fixed XSS vulnerability bug by onCellHtmlData.
- **Update(export):** Fixed export footer bug without setting height.
- **Update(filter-control):** Fixed the comparison of dates when using the `datepicker`.

## Bootstrap Table 1.20.1

<span class="post-date">12 May 2022</span>

#### Core

- **Update:** Fixed toggle column bug with complex headers.
- **Update:** Fixed icons option cannot work bug when it's a string.
- **Update:** Updated TypeScript definitions.

#### Extensions

- **Update(cookie):** Fixed cookie extension error with multiple-sort.
- **Update(export):** Fixed the `exportOptions` option cannot support the data attribute.
- **Update(reorder-rows):**  Fixed reorder-rows cannot work because of missing default functions.

## Bootstrap Table 1.20.0

<span class="post-date">25 Apr 2022</span>

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

## Bootstrap Table 1.19.1

<span class="post-date">12 Nov 2021</span>

#### Core

- **Update:** Fixed the CVE security problem.
- **Update:** Fixed cannot search for special characters when using `searchHighlight`.

#### Extensions

- **Update(auto-refresh):** Updated the `showAutoRefresh` option as default.
- **Update(export):** Fixed export with only one export type bug.
- **Update(filter-control):** Fixed filter-control cannot work bug.
- **Update(filter-control):** Prevent duplicated elements for filter-control.

## Bootstrap Table 1.19.0

<span class="post-date">8 Nov 2021</span>

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

## Bootstrap Table 1.18.3

<span class="post-date">29 Mar 2021</span>

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

## Bootstrap Table 1.18.2

<span class="post-date">23 Jan 2021</span>

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

## Bootstrap Table 1.18.1

<span class="post-date">6 Dec 2020</span>

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

## Bootstrap Table 1.18.0

<span class="post-date">20 Sep 2020</span>

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

## Bootstrap Table 1.17.1

<span class="post-date">11 Jul 2020</span>

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

## Bootstrap Table 1.16.0

<span class="post-date">11 Feb 2020</span>

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

## Bootstrap Table 1.15.5

<span class="post-date">12 Oct 2019</span>

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

## Bootstrap Table 1.15.4

<span class="post-date">13 Aug 2019</span>

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

## Bootstrap Table 1.15.3

<span class="post-date">11 Jul 2019</span>

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

## Bootstrap Table 1.15.2

<span class="post-date">24 Jun 2019</span>

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

## Bootstrap Table 1.14.2

<span class="post-date">19 Mar 2019</span>

- **New(fixed-columns extension):** Added new version fixed-columns extension.
- **New(js):** Updated the style of loading message.
- **Update(js):** Updated refresh event params.
- **Update(locale):** Updated all locale translation with English as default.
- **Update(export extension):** Fixed export all rows to pdf bug.
- **Update(export extension):** Disabled export button when exportDataType is 'selected' and selection empty.
- **Update(addrbar extension):** Fixed addrbar extension remove hash from url bug.

## Bootstrap Table 1.14.1

<span class="post-date">5 Mar 2019</span>

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

## Bootstrap Table 1.13.5

<span class="post-date">23 Feb 2019</span>

- **New(auto-refresh extension):** Rewrote auto-refresh extension to ES6.
- **Update(js):** Fixed showFullscreen cannot work bug.
- **Update(js):** Redefined customSearch option.
- **Update(js):** Fixed show footer cannot work bug.
- **Update(js):** Updated the parameter of `footerStyle`.
- **Update(js):** Added classes supported for `footerStyle`.
- **Update(js):** Fixed IE11 transform bug.
- **Update(js):** Removed beginning and end whitespace from td.
- **Update(export extension):** Fixed export selected bug.

## Bootstrap Table 1.13.4

<span class="post-date">05 Feb 2019</span>

- **New(sticky-header extension):** Rewrote sticky-header extension to ES6.
- **New(sticky-header extension):** Added to support bootstrap v4 and `theadClasses` option.
- **New(auto-refresh extension):** Icons update to font-awesome 5.
- **New(examples):** Added examples Algolia search.
- **Update(js):** Fixed `theadClasses` is not set when a `thead` exists.
- **Update(js):** Fixed table resize after mergeCell the first row.
- **Update(cookie extension):** Fixed cookie extension broken bug.
- **Update(cookie extension):** Fixed cookie extension unicode encode bug.
- **Update(package):** Added `sass` devDependencies.

## Bootstrap Table 1.13.3

<span class="post-date">28 Jan 2019</span>

- **New(js):** Supported full table classes of bootstrap v4.
- **New(css):** Updated bootstrap-table.css to scss.
- **New(accent-neutralise extension):** Updated accent-neutralise extension to ES6.
- **New(addrbar extension):** Updated addrbar extension to ES6 and supported attribute option.
- **New(group-by-v2 extension):** New `groupByFormatter` option.
- **New(pipeline extension):** New pipeline extension `bootstrap-table-pipeline`.
- **Remove(js):** Removed `striped` option and use classes instead.
- **Update(js):** Fixed `locale` option bug.
- **Update(js):** Fixed `sortClass` option bug.
- **Update(js):** Fixed `sortStable` option cannot work bug.
- **Update(js):** Improved built-in sort function and `customSort` logic.
- **Update(js):** Fixed horizontal scrollbar bug.
- **Update(cookie extension):** Improved cookie extension code.

## Bootstrap Table 1.13.2

<span class="post-date">18 Jan 2019</span>

- **New(js):** Added `paginationSuccessivelySize`, `paginationPagesBySide` and `paginationUseIntermediate` pagination options.
- **New(cookie extension):** Updated cookie extension to ES6.
- **New(cookie extension):** Saved `filterBy` method.
- **New(filter-control extension):** Added `placeholder` as a empty option to the select controls.
- **New(filter-control extension):** Added `clearFilterControl` method in order to clear all filter controls.
- **New(docs)** Added algolia search.
- **Update(js):** Fixed sort column shows hidden rows in `server` side pagination bug.
- **Update(js):** Fixed `scrollTo` bug.
- **Update(css):** Fixed no-bordered problem of bootstrap v4.
- **Update(filter-control extension):** Added bootstrap v4 icon support.


## New Website for Bootstrap v4

<span class="post-date">10 Jan 2019</span>

Bootstrap has released the latest version v4.2.1. Since Bootstrap Table has been mainly used for Bootstrap v3, We have rebuilt the official documentation of Bootstrap Table while upgrading the code to Bootstrap v4.

Bootstrap Table Website is a fork of [Bootstrap](http://getbootstrap.com/).

### What’s new

Here are the highlights of what’s new and updated in new website.

- **New:** More detailed documentation.
- **New:** Added Extensions documentation.
- **New:** Supported for searching documentation.
- **New:** Added News Menu.
- **New:** Added New Examples for Bootstrap v4 instead v3.
- **Update:** Used new API display style instead table.
- **Remove:** Removed Translation Documentations.

## Bootstrap Table 1.13.1

<span class="post-date">01 Jan 2019</span>

- **New(js):** Added `theadClasses` option to support bootstrap v4.
- **New(js):** Updated the default icons to font-awesome 5.
- **New(locale):** Updated all locales to ES6.
- **New(editable extension):** Updated `bootstrap-table-editable` to ES6.
- **New(filter-control extension):** Updated `bootstrap-table-filter-control` to ES6.
- **New(treegrid extension):** Added `rootParentId` option.
- **Update(js):** Fixed `getHiddenRows` method bug.
- **Update(js):** Fixed `getOptions` method to remove data property.
- **Update(js):** Fixed no matches display error.
- **Update(js):** Fixed eslint warning and error.
- **Update(locale):** Improved `es-ES` locale.
- **Update(filter-control extension):** Fixed multiple choice bug.
- **Update(filter-control extension):** Fixed select all rows and `keyup` event error.
- **Update(export extension):** Fixed export in cardView display error.


## Bootstrap Table 1.13.0

<span class="post-date">27 Dec 2019</span>

- **New(js):** Updated bootstrap-table to ES6.
- **New(locale):** Added `fi-FI.js` locale.
- **New(build):** Used babel instead of grunt.
- **New(filter-control):** Added `created-controls.bs.table` event to filter-control.
- **New(export extension):** Updated export extension to ES6.
- **New(export extension):** Added export extension support bootstrap v4.
- **New(export extension):** Added `exportTable` method.
- **New(toolbar extension):** Updated toolbar extension to ES6.
- **New(toolbar extension):** Added toolbar extension supports bootstrap v4.
- **New(toolbar extension):** Added server sidePagination support
- **New(resizable extension):** Released new resizable extension version 2.0.0.
- **New(editable extension):** Allowed different x-editable configuration per table row.
- **New(addrbar extension):** Added addrbar extension.
- **Update(js):** Improved `check/uncheck` methods
- **Update(js):** Fixed cookie with `pageNumber` and `searchText` bug.
- **Update(js):** Fix `selections` bugs.
- **Update(js):** Added `customSearch` support data attribute.
- **Update(js):** Fixed can't search data with formatter.
- **Update(js):** Fixed `getRowByUniqueId` error when row unique id is undefined.
- **Update(js):** Fixed older bootstrap version bug.
- **Update(css):** Removed toolbar line-height.
- **Update(css):** Limited fullscreen CSS rule scope.
- **Update(editable extension):** Fixed editable formatter bug.
- **Update(extension):** Fixed bug with export extension together.
- **Update(extension):** Removed click-edit-row and flat-json extensions.
