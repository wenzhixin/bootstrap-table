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

### Export extension does not support unicode characters?

The extension is using the Plugin: [tableExport.jquery.plugin](https://github.com/kayalshri/tableExport.jquery.plugin), because this plugin has [this same problem](https://github.com/carlo/jquery-base64/issues/1), so it doesn't belong to the category of the bootstrap-table, but I think we can try to use this: [jquery.base64.js](https://gist.github.com/wenzhixin/09e218c884f4f380b68a) to replace the base64 plugin.