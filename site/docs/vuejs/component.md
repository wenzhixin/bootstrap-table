---
layout: docs
title: Component
description: The API of Bootstrap Table Vue Component.
group: vuejs
toc: true
---

## Usage Example

{% highlight vue %}
<BootstrapTable
  ref="table"
  :columns="columns"
  :data="data"
  :options="options"
  @onPostBody="onPostBody"
/>
{% endhighlight %}

## Props

### columns

- **Type:** `Object`

- **Detail:**

  The [column options](/docs/api/column-options/) of Bootstrap Table. This prop is required.

- **Default:** `undefined`

### data

- **Type:** `Array | Object`

- **Detail:**

  The data to be loaded.

- **Default:** `undefined`

### options

- **Type:** `Object`

- **Detail:**

  The [table options](/docs/api/table-options/) of Bootstrap Table.

- **Default:** `{}`

## Events

The calling method syntax: `@onEvent="onEvent"`.

All events (without `onAll`) are defined in [Events API](/docs/api/events/).

## Methods

The calling method syntax: `this.$refs.table.methodName(parameter)`.

Example: `this.$refs.table.getOptions()`.

All methods are defined in [Methods API](/docs/api/methods/).
