---
layout: simple
title: News
description: News and announcements for all things Bootstrap Table, including new releases.
---

## Bootstrap Table 1.13.3

<span class="post-date">28 Jan 2019</span>

- **New(js):** Supported full table classes of bootstrap v4.
- **New(css):** Rewrited bootstrap-table.css to scss.
- **New(accent-neutralise extension):** Rewrited accent-neutralise extension to ES6.
- **New(addrbar extension):** Rewrited addrbar extension to ES6 and supported attribute option.
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
- **New(cookie extension):** Rewrited cookie extension to ES6.
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

- **New(js):** Added `theadClasses` option to supoort bootstrap v4.
- **New(js):** Updated the default icons to font-awesome 5.
- **New(locale):** Rewrited all locales to ES6.
- **New(editable extension):** Rewrited `bootstrap-table-editable` to ES6.
- **New(filter-control extension):** Rewrited `bootstrap-table-filter-control` to ES6.
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

- **New(js):** Rewrited bootstrap-table to ES6.
- **New(locale):** Added `fi-FI.js` locale.
- **New(build):** Used babel instead of grunt.
- **New(filter-control):** Added `created-controls.bs.table` event to filter-control.
- **New(export extension):** Rewrited export extension to ES6.
- **New(export extension):** Added export extension support bootstrap v4.
- **New(export extension):** Added `exportTable` method.
- **New(toolbar extension):** Rewrited toolbar extension to ES6.
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
- **Update(js):** Fxied older bootstrap version bug.
- **Update(css):** Removed toolbar line-height.
- **Update(css):** Limitted fullscreen CSS rule scope.
- **Update(editable extension):** Fixed editable formatter bug.
- **Update(extension):** Fixed bug with export extension together.
- **Update(extension):** Removed click-edit-row and flat-json extensions.
