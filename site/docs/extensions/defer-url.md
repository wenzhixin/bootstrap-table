---
layout: docs
title: Table Defer URL
description: Table Defer URL extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<script src="extensions/defer-url/bootstrap-table-defer-url.js"></script>
{% endhighlight %}

## Options

### deferUrl

- **type:** `String`

- **Detail:**

   When using server-side processing, the default mode of operation for bootstrap-table is to simply throw away any data that currently exists in the table and make a request to the server to get the first page of data to display. This is fine for an empty table, but if you already have the first page of data displayed in the plain HTML, it is a waste of resources. As such, you can use data-defer-url instead of data-url to allow you to instruct bootstrap-table to not make that initial request, rather it will use the data already on the page.

- **Default:** `null`
