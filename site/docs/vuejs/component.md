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
  @on-post-body="onPostBody"
/>
{% endhighlight %}

**Note:** when using `v-if`, it is recommended to wrap `BootstrapTable` with a `div` to avoid unnecessary errors.

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

The calling method syntax: `@on-event="onEvent"`.

All events (without `onAll`) are defined in [Events API](/docs/api/events/).

**Note:** you need to convert event name to lowercase + hyphen format, for example: `onClickRow` should be `on-click-row`.

## Methods

The calling method syntax: `this.$refs.table.methodName(parameter)`.

Example: `this.$refs.table.getOptions()`.

All methods are defined in [Methods API](/docs/api/methods/).
