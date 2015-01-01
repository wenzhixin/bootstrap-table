# 使用 []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/getting-started/usage.md)

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

The Bootstrap Table plugin displays data in a tabular format, via data attributes or JavaScript.

## Via data attributes

Activate bootstrap table without writing JavaScript. Set `data-toggle="table"` on a normal table.

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

We can also use remote url data by setting `data-url="data1.json"` on a normal table.

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

## Via JavaScript

Call a bootstrap table with id table with JavaScript.

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

We can also use remote url data by setting `url: 'data1.json'`.

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
