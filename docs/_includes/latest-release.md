### Latest release (2018-11-29)

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
