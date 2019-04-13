---
layout: docs
title: Table Page Jump To
description: Table Page Jump To extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<link rel="stylesheet" href="extensions/page-jumpto/bootstrap-table-jumpto.css"></style>
<script src="extensions/page-jumpto/bootstrap-table-jumpto.js"></script>
{% endhighlight %}

## Options

### showJumpto

- **type:** `Boolean`

- **Detail:**

   Set true to enable show 'jump to page'. can be defined via `data-show-jumpto` HTML attributes.

- **Default:** `false`
* button style: can be styled via bootstrap-table buttonsClass attributes.

`{% highlight html %}
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
{% endhighlight %}`
