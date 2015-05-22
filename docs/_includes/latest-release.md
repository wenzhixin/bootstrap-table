### Latest release

#### v{{ site.current_version }} (2015-05-22)

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