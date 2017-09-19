# Table Jump-to

## Usage

```html
<link rel="stylesheet" href="extensions/page-jumpto/bootstrap-table-jumpto.css"></style>
<script src="extensions/page-jumpto/bootstrap-table-jumpto.js"></script>
```

## Options

### showJumpto

* type: Boolean
* description: Set true to enable show 'jump to page'. can be defined via `data-show-jumpto` HTML attributes.
* default: `false`
* button style: can be styled via bootstrap-table buttonsClass attributes.

````html
<table id="my_table_id"
  data-url="data/url.json"
  data-id-field="id"
  data-show-jumpto="true">
  <thead>
    <tr>
      <th class="col-md-1" data-field="id" data-sortable="true" data-align="center">#</th>
      <th class="col-md-4" data-field="name" data-editable="true">Name</th>
      <th class="col-md-7" data-field="description" data-editable="true" data-editable-emptytext="Custom empty text.">Description</th>
    </tr>
  </thead>
</table>
````
