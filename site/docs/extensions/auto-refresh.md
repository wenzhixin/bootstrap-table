---
layout: docs
title: Table Auto Refresh
description: Table Auto Refresh extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<script src="extensions/auto-refresh/bootstrap-table-auto-refresh.js"></script>
{% endhighlight %}

## Example

[Auto Refresh](https://examples.bootstrap-table.com/#extensions/auto-refresh.html)

## Options

### autoRefresh

- **Attribute:** `data-auto-refresh`

- **type:** `Boolean`

- **Detail:**

  Set `true` to enable the auto refresh plugin.

- **Default:** `false`

### autoRefreshInterval

- **Attribute:** `data-auto-refresh-interval`

- **type:** `Number`

- **Detail:**

  Time in seconds for the auto refresh to occur every.

- **Default:** `60`

### autoRefreshSilent

- **Attribute:** `data-auto-refresh-silent`

- **type:** `Boolean`

- **Detail:**

  Set true to auto refresh silently.

- **Default:** `true`

### autoRefreshStatus

- **Attribute:** `data-auto-refresh-status`

- **type:** `Boolean`

- **Detail:**

  Set `true` to enable auto refresh. This is the state auto refresh will be in when the table loads. Clicking the button toggles this property. This is simply the default state of auto refresh as the user can always change it by clicking the button.

- **Default:** `true`

### showAutoRefresh

- **Attribute:** `data-show-auto-refresh`

- **type:** `Boolean`

- **Detail:**

  Set `false` to hide the auto refresh button, for example, if you want to disallow deactivating the auto fresh by the user.

- **Default:** `true`

### Icons

- autoRefresh: 'fa-clock'

## Localizations

### formatAutoRefresh

- **Parameter:** `undefined`

- **Default:** `function () { return "Auto Refresh" }`
