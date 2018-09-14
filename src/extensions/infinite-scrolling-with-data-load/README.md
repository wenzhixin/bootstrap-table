# Table Infinite Scrolling with dynamically data reload

Use Plugin: [bootstrap-table-infinite-scrolling-with-data-load](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/bootstrap-table-infinite-scrolling-with-data-load) </br>

## Usage

```html
<script src="extensions/infinite-scrolling-with-data-load/bootstrap-table-infinite-scrolling-with-data-load.js"></script>
```

## Options

### infiniteScrolling

* type: Boolean
* description: Set true to activate plugin.
* default: `false`

### ajaxUrl

* type: String
* description: Url to get data for the table. This function has to be implemented in your backend.
* default: `data`

### append

* type: Boolean
* description: Set false if data should be cleared when scrolling reached bottom or top.
* default: `true`

### pageSize

* type: Integer
* description: How many items should be lreloaded on scrolling.
* default: ``



