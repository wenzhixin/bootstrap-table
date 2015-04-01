# Table Editable

Use Plugin: [x-editable](https://github.com/vitalets/x-editable)

## Usage

```html
<script src="extensions/editable/bootstrap-table-editable.js"></script>
```

## Options

### editable

* type: Boolean
* description: Set false to disabled editable of all columns.
* default: `true`

## Column options

### editable

* type: Object
* description: Configuration of x-editable. Full list of options: http://vitalets.github.io/x-editable/docs.html#editable
* default: `undefined`

## Events

### onEditableInit(editable-init.bs.table)

Fired when all columns was initialized by `$().editable()` method.

### onEditableSave(editable-save.bs.table)

Fired when an editable cell is saved.

## The existing problems

* Editable extension does not support searchable in the select type.
