# Copy Rows

Use Plugin: [copy-rows](https://github.com/wenzhixin/bootstrap-table/tree/develop/src/extensions/copy-rows)

## Usage

```html
<script src="extensions/copy-rows/bootstrap-table-copy-rows.js"></script>
```

## Options

### copyBtn

* type: Boolean
* description: Set true to show the copy button. This button copys the contents of the selected rows to the clipboard.
* default: `false`

### copyWHiddenBtn

* type: Boolean
* description: Set true to show the copy with hidden button. This button copys the contents of the selected rows to the clipboard, *including hidden rows*.
* default: `false`

### copyDelemeter

* type: String
* description: This string will be inserted inbetween the column values when copying
* default: ` `

## Methods

### copyColumnsToClipboard

* copys the contents of the selected rows to the clipboard.

### copyColumnsToClipboardWithHidden

* copys the contents of the selected rows to the clipboard, *including hidden rows*.
