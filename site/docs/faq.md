---
layout: docs
title: FAQ
description: Frequently Asked Questions.
group: faq
redirect_from:
  - "/faq/"
  - "/zh-cn/faq/"
  - "/es/faq/"
toc: false
---

### When resizing the window, the table header does not adjust automatically, how to solve it?

When you set the `height` of the bootstrap table, the `fixed header` feature is automatically enabled, that is what causes the problem, you need to listen to the `resize` event of the window and use the `resetView` method to solve this problem, code example:

```js
$(function () {
  $('#tableId').bootstrapTable() // init via javascript

  $(window).resize(function () {
    $('#tableId').bootstrapTable('resetView')
  })
})
```

---

### How to better merge cells?

For merged cells, when you do refresh, next page or switch columns to show, the merge cells will be unmerged. We can listen the events(on load success, on column switch, on page change and on search) to solve this problem, code example:

```js
$table.on('load-success.bs.table column-switch.bs.table page-change.bs.table search.bs.table', function () {
  $table.bootstrapTable('mergeCells', {...})
})
```

---

### Is event parameter put in the wrong order?

When you use like this:

```
$('#eventsTable').on('click-row.bs.table', function (event, row, $element) {

})
```

the first parameter is always `event`: [https://live.bootstrap-table.com/code/wenzhixin/46](https://live.bootstrap-table.com/code/wenzhixin/46)

and use onClickRow event:

```
onClickRow: function (row, $element) {

}
```

---

### How can I support the development of bootstrap-table?

All your ideas and feedback are very appreciated! Please feel free to open issues on GitHub or send me an email.

I'm also grateful for your donations: <a href="/donate">https://opencollective.com/bootstrap-table</a>.
