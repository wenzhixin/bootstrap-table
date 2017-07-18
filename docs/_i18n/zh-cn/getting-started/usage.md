# 使用 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/getting-started/usage.md)

---

引入 Bootstrap 库（假如你的项目还没有使用）和 `bootstrap-table.css` 到 head 标签下。

```html
<link rel="stylesheet" href="bootstrap.min.css">
<link rel="stylesheet" href="bootstrap-table.css">
```

引入 jQuery 库，bootstrap 库（假如你的项目还没有使用）和 `bootstrap-table.js` 到 head 标签下或者在 body 标签关闭之前（一般建议这么做）。

```html
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<script src="bootstrap-table.js"></script>
<-- put your locale files after bootstrap-table.js -->
<script src="bootstrap-table-zh-CN.js"></script>
```

---

通过 data 属性或者 JavaScript 来启用 Bootstrap Table 插件，显示丰富的功能。

## 通过 data 属性的方式

无需编写 JavaScript 启用 bootstrap table，我们对普通的 table 设置 `data-toggle="table"` 即可。

```html
<table data-toggle="table">
    <thead>
        <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Item Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Item 1</td>
            <td>$1</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Item 2</td>
            <td>$2</td>
        </tr>
    </tbody>
</table>
```

我们也可以通过设置远程的 url 如  `data-url="data1.json"` 来加载数据。

```html
<table data-toggle="table" data-url="data1.json">
    <thead>
        <tr>
            <th data-field="id">Item ID</th>
            <th data-field="name">Item Name</th>
            <th data-field="price">Item Price</th>
        </tr>
    </thead>
</table>
```

## 通过 JavaScript 的方式

通过表格 id 来启用 bootstrap table。

```html
<table id="table"></table>
```

```js
$('#table').bootstrapTable({
    columns: [{
        field: 'id',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, {
        field: 'price',
        title: 'Item Price'
    }],
    data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }]
});
```

我们也可以通过设置远程的 url 如  `url: 'data1.json'` 来加载数据。

```js
$('#table').bootstrapTable({
    url: 'data1.json',
    columns: [{
        field: 'id',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, {
        field: 'price',
        title: 'Item Price'
    }, ]
});
```
