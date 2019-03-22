---
layout: docs
title: Table Editable
description: Table Editable extension of Bootstrap Table.
group: extensions
toc: true
---

Use Plugin: [x-editable](https://github.com/vitalets/x-editable)

## Usage

{% highlight html %}
<script src="extensions/editable/bootstrap-table-editable.js"></script>
{% endhighlight %}

## Options

### editable

- **type:** `Boolean`

- **Detail:**

   Set false to disabled editable of all columns.

- **Default:** `true`

## Column options

### editable

- **type:** `Object | Function`

- **Detail:**

  Configuration of x-editable. Full list of options: [http://vitalets.github.io/x-editable/docs.html#editable](http://vitalets.github.io/x-editable/docs.html#editable).

  If it is type of Function, it is called with params: index, row, element for
  each row of the table. It should return Object of the x-editable configuration.

  All options can be defined via `data-editable-*` HTML attributes. Table wide options are used for every column but can be overridden:

  {% highlight html %}
  <table id="my_table_id"
    data-url="data/url.json"
    data-id-field="id"
    data-editable-emptytext="Default empty text."
    data-editable-url="/my/editable/update/path">
    <thead>
      <tr>
        <th class="col-md-1" data-field="id" data-sortable="true" data-align="center">#</th>
        <th class="col-md-4" data-field="name" data-editable="true">Name</th>
        <th class="col-md-7" data-field="description" data-editable="true" data-editable-emptytext="Custom empty text.">Description</th>
      </tr>
    </thead>
  </table>
  {% endhighlight %}

- **Default:** `undefined`

## Events

### onEditableInit(editable-init.bs.table)

Fired when all columns was initialized by `$().editable()` method.

### onEditableSave(editable-save.bs.table)

Fired when an editable cell is saved.

parameters: field, row, rowIndex, oldValue, $el

### onEditableShown(editable-shown.bs.table)

Fired when an editable cell is opened for edits.

parameters: field, row, $el

### onEditableHidden(editable-hidden.bs.table)

Fired when an editable cell is hidden / closed.

parameters: field, row, $el, reason

## The existing problems

* Editable extension does not support searchable in the select type.
