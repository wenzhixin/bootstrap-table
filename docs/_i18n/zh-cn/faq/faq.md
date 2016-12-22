# 常见问题 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/faq/faq.md)

---

### 当浏览器窗口变化是，表头与表格不对齐，应该怎么办？

当你使用 `height` 参数的时候，会启用 `固定表头` 的功能，这个功能会导致不对齐的问题，你可以通过监听 `resize` 事件来解决问题，代码如下：

```js
$(function () {
    $('#tableId').bootstrapTable(); // init via javascript

    $(window).resize(function () {
        $('#tableId').bootstrapTable('resetView');
    });
});
```

---

### 如何更好的合并表格列？

对于合并的表格，当你使用刷新，点击下一页或者切换列的显示，合并的表格会变回去，我们可以监听一下的事件来解决这个问题，代码如下：

```js
$table.on('load-success.bs.table column-switch.bs.table page-change.bs.table search.bs.table', function () {
    $table.bootstrapTable('mergeCells', {...});
});
```

---

### 我要如何支持 Bootstrap Table 的开发？

非常感谢你的想法和建议，你可以到 GitHub 上提 issue 或者发邮件给我。

当然，假如你也可以 <a href="donate">{% t pages.donate.title %}</a> 我们的项目。