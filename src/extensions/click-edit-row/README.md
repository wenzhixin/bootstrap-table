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

* type: Boolean
* description: Set false to disabled editable of all columns.
* default: `true`

All options can be defined via `data-editable-*` HTML attributes. Table wide options are used for every row but can be overridden:

````html
<table id="my_table_id"
  data-url="data1.json">
  <thead>
    <tr>
      <th data-field="id">ID</th>
      <th data-field="name" data-editable="true">Item Name</th>
      <th data-field="price" data-editable="true">Item Price</th>
    </tr>
  </thead>
</table>
````