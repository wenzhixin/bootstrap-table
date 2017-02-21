# Table Auto Refresh

Use Plugin: [bootstrap-table-auto-refresh](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/auto-refresh)

## Usage

```html
<link rel="stylesheet" href="extensions/auto-refresh/bootstrap-table-auto-refresh.css">
<script src="extensions/auto-refresh/bootstrap-table-auto-refresh.js"></script>
```

## Options

### autoRefresh

* type: Boolean
* description: Set true to enable auto refresh plugin. **This does not mean enable auto refresh.** This allows the user to enable/disable auto refresh by clicking the button.
* default: `false`

## autoRefreshStatus

* type: Boolean
* description: Set true to enable auto refresh. This is the state auto refresh will be in when the table loads. Clicking the button toggles this property. This is simply the default state of auto refresh as the user can always change it by clicking the button.
* default: `true`

## autoRefreshInterval

* type: Integer
* description: Time in seconds for auto refresh to occur every.
* default: `60`

## autoRefreshSilent

* type: Boolean
* description: Set true to auto refresh silently.
* default: `true`

## Column options

None

### Icons
* autoRefresh: 'glyphicon-time icon-time'

## Events

None
