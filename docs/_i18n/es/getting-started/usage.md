# Usage []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/getting-started/usage.md)

---

Incluya la libreria de Bootstrap (solo si su proyecto no la utiliza aún) y `bootstrap-table.css` en el tag head de su documento html.

```html
<link rel="stylesheet" href="bootstrap.min.css">
<link rel="stylesheet" href="bootstrap-table.css">
```

Incluya la libreria jQuery, bootstrap (solo si su proyecto no los utiliza aún) y `bootstrap-table.js` en el tag head o al final de su documento, justo antes de cerra el tag body (se recomienda para mejor rendimiento).

```html
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<script src="bootstrap-table.js"></script>
<-- put your locale files after bootstrap-table.js -->
<script src="bootstrap-table-zh-CN.js"></script>
```

---

El plugin Bootstrap Table muestra los datos en formato tabular, vía atributos o via JavaScript.

## Via data attributes

Active bootstrap table sin escribir código JavaScript. Setee `data-toggle="table"` en una tabla normal.

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

También podemos usar una URL remota para cargar los datos, setee `data-url="data1.json"` en una tabla normal.

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

Llame a bootstrap table con el id de la tabla con JavaScript.

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

También podemos usar una URL remota para cargar los datos, setee `url: 'data1.json'`.

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
