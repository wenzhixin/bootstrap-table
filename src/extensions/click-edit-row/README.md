# Table click-edit-row

Use Plugin: [bootstrap-click-edit-row](https://github.com/wenzhixin/bootstrap-table/tree/develop/src/extensions/click-edit-row) </br>
You must include the editable.css file in order to get the appropriate style.
Ps. Used this plugin is better on table columns not more than five.

## Usage

```html
<script src="extensions/click-edit-row/bootstrap-table-click-edit.js"></script>
```

## Options

### editable

* type: input、select
* default: `input`
* description: Set select must setup `$.selectArray` for select options.
* $.selectArray example: `$.selectArray= {price: [{idxNum: '$', name: '100'}, {idxNum: '$', name: '500'}, {idxNum: '$', name: '5000'}]}`, obj name must same as 'data-field' value.

All options can be defined via `data-editable-*` HTML attributes. Table wide options are used for every row but can be overridden:

````html
<table id="my_table_id"
  data-url="data1.json">
  <thead>
    <tr>
      <th data-field="id">ID</th>
      <th data-field="name" data-editable="input">Item Name</th>
      <th data-field="price" data-editable="select">Item Price</th>
    </tr>
  </thead>
</table>
````