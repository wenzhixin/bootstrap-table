---
layout: docs
title: Table Addrbar
description: Table Addrbar extension of Bootstrap Table.
group: extensions
toc: true
---

Every time when changing page, sorting and searching operation, it will change the query params of the address bar. And while page loading, this plugin will use the query params in the address bar to make the request.

## Usage

{% highlight html %}
<script src="extensions/addrbar/bootstrap-table-addrbar.js"></script>
{% endhighlight %}

## Example

[Addrbar](https://examples.bootstrap-table.com/#extensions/addrbar.html)

## Options

### addrbar

- **Attribute:** `data-addrbar`

- **Type:** `Boolean`

- **Detail:**

  Set to `true` if you want to use the addrbar feature.

- **Default:** `false`

### addrCustomParams

- **Attribute:** `data-addr-custom-params`

- **Type:** `Function|Object`

- **Detail:**

  Define an object in which key and value pairs will be added as custom/additional get parameters to the URL, for example, custom filters.
  The `key` is the GET parameter name, and the `value` is the value of the GET parameter.

- **Default:** `{}`

### addrPrefix

- **Attribute:** `data-addr-prefix`

- **Type:** `String`

- **Detail:**

  The prefix of the query params, it should be used for multi tables.

  While there are many tables in one page, and you want each of them can use this, then you may need the `addrPrefix` option.

  There are 5 parameters in default. They are

  * `page`: page number
  * `size`: page size
  * `order`: asc/dsc
  * `sort`: the sort keyword
  * `search`: search keyword

  If you want each table can use this plugin, this parameters will make the tables bothering each other. The `addrPrefix` filed will get the tables a unique prefix to avoid.

- **Default:** `''`

## Note

* Only support server side pagination.
