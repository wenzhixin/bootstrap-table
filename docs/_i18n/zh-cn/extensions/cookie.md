# Table Cookie

Use Plugin: [bootstrap-table-cookie](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/cookie)

## Usage

```html
<script src="extensions/cookie/bootstrap-table-cookie.js"></script>
```

## Options

### stateSave

* type: Boolean
* description: Set true to save the state of a table (its paging position, ordering state, records per page).
* default: `false`

### stateSaveExpire

* type: String
* description: You must set this property if stateSave is enable to know when will expire the cookie created. Must use this format: 'number{letter}' like '2h', in the letter position
               		you can use: 's','mi','h','d','m','y', these means: 'seconds', 'minutes', 'hours', 'days', 'months', 'years'.
* default: `2h`

### stateSaveIdTable

* type: String
* description: You must set this property if stateSave is enable to sets an unique cookie with an identifier for each table in your page or project. You must set this property because we need create cookies with an identifier.
* default: ``