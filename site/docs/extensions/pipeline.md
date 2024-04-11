---
layout: docs
title: Table Pipeline
description: Table Pipeline extension of Bootstrap Table.
group: extensions
toc: true
---

This plugin enables client-side data caching for server-side requests which will
eliminate the need to issue a new request every page change. This will allow
for a performance balance for a large data set between returning all data at once
(client-side paging) and a new server-side request (server-side paging).

There are two new options:
- `usePipeline`: enables this feature
- `pipelineSize`: the size of each cache window

The size of the pipeline must be evenly divisible by the current page size. This is
assured by rounding up to the nearest evenly divisible value. For example, if
the pipeline size is 4990 and the current page size is 25, then the pipeline size will
be dynamically set to 5000.

The cache windows are computed based on the pipeline size and the total number of rows
returned by the server-side query. For example, with pipeline size 500 and total rows
1300, the cache windows will be:

[{'lower': 0, 'upper': 499}, {'lower': 500, 'upper': 999}, {'lower': 1000, 'upper': 1499}]

Using the limit (i.e. the `pipelineSize`) and offset parameters, the server-side request
**MUST** return only the data in the requested cache window **AND** the total number of rows.
To wit, the server-side code must use the offset and limit parameters to prepare the response
data.

On a page change, the new offset is checked if it is within the current cache window. If so,
the requested page data is returned from the cached data set. Otherwise, a new server-side
request will be issued for the new cache window.

The current cached data is only invalidated on these events:

- sorting
- searching
- page size change
- page change moves into a new cache window

There are two new events:
- `cached-data-hit.bs.table`: issued when cached data is used on a page change
- `cached-data-reset.bs.table`: issued when the cached data is invalidated and the new server-side request is issued

## Usage

{% highlight html %}
<script src="extensions/pipeline/bootstrap-table-pipeline.js"></script>
{% endhighlight %}

## Usage

## Example

[Pipeline](https://examples.bootstrap-table.com/#extensions/pipeline.html)

## Options

## pipelineSize

* type: Number
* description: Size of each cache window. Must be greater than 0.
* default: `1000`

### usePipeline

* type: Boolean
* description: Set true to enable pipelining
* default: `false`

## Events

### onCachedDataHit(cached-data-hit.bs.table)

* Fires when paging can use the locally cached data.

### onCachedDataReset(cached-data-reset.bs.table)

* Fires when the locally cached data needs to be reset (i.e. on sorting, searching, page size change or page out of the current cache window).
