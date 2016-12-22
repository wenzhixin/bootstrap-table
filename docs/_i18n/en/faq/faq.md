# FAQ []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/faq/faq.md)

---

### When resize the window, the table header does not adjust automatically, how to solve it?

When you set the `height` of bootstrap table, the `fixed header` feature is automatically enabled, that is what cause the problem, you need to listen the `resize` event of window and use the `resetView` method to solve this problem, code example:

```js
$(function () {
    $('#tableId').bootstrapTable(); // init via javascript

    $(window).resize(function () {
        $('#tableId').bootstrapTable('resetView');
    });
});
```

---

### How to better merge cells?

For merged cells, when you do refresh, next page or switch columns to show, the merge cells will be unmerged. We can listen the events(on load success, on column switch, on page change and on search) to solve this problem, code example:

```js
$table.on('load-success.bs.table column-switch.bs.table page-change.bs.table search.bs.table', function () {
    $table.bootstrapTable('mergeCells', {...});
});
```

---

### How can I support development of bootstrap-table?

All your ideas and feedback are very appreciated! Please feel free to open issues on GitHub or send me email.

I'm also grateful for your donations: <a href="donate">{% t pages.donate.title %}</a>