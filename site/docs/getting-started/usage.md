---
layout: docs
title: Usage
description: The Bootstrap Table plugin displays data in a tabular format, via data attributes or JavaScript.
group: getting-started
toc: true
---

## Via data attributes

{% highlight html %}
<table data-toggle="table">
  <thead>
    <tr>
      <th>Item ID</th>
      <th>Item Name</th>
      <th>Item Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Item 1</td>
      <td>$1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Item 2</td>
      <td>$2</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

We can also use remote URL data by setting `data-url="data1.json"` on a normal table.

{% highlight html %}
<table
  data-toggle="table"
  data-url="data1.json">
  <thead>
    <tr>
      <th data-field="id">Item ID</th>
      <th data-field="name">Item Name</th>
      <th data-field="price">Item Price</th>
    </tr>
  </thead>
</table>
{% endhighlight %}

You can also add `pagination`, `search`, and `sorting` to a table like the following table.

{% highlight html %}
<table
  data-toggle="table"
  data-url="data1.json"
  data-pagination="true"
  data-search="true">
  <thead>
    <tr>
      <th data-sortable="true" data-field="id">Item ID</th>
      <th data-field="name">Item Name</th>
      <th data-field="price">Item Price</th>
    </tr>
  </thead>
</table>
{% endhighlight %}

## Via JavaScript

Call a bootstrap table with id table via JavaScript.

{% highlight html %}
<table id="table"></table>
{% endhighlight %}

{% highlight javascript %}
$('#table').bootstrapTable({
  columns: [{
    field: 'id',
    title: 'Item ID'
  }, {
    field: 'name',
    title: 'Item Name'
  }, {
    field: 'price',
    title: 'Item Price'
  }],
  data: [{
    id: 1,
    name: 'Item 1',
    price: '$1'
  }, {
    id: 2,
    name: 'Item 2',
    price: '$2'
  }]
})
{% endhighlight %}

We can also use remote URL data by setting `url: 'data1.json'`.

{% highlight javascript %}
$('#table').bootstrapTable({
  url: 'data1.json',
  columns: [{
    field: 'id',
    title: 'Item ID'
  }, {
    field: 'name',
    title: 'Item Name'
  }, {
    field: 'price',
    title: 'Item Price'
  }]
})
{% endhighlight %}

You can also add `pagination`, `search`, and `sorting` to a table like the following table.

{% highlight javascript %}
$('#table').bootstrapTable({
  url: 'data1.json',
  pagination: true,
  search: true,
  columns: [{
    field: 'id',
    title: 'Item ID'
  }, {
    field: 'name',
    title: 'Item Name'
  }, {
    field: 'price',
    title: 'Item Price'
  }]
})
{% endhighlight %}
