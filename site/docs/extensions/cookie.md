---
layout: docs
title: Table Cookie
description: Table Cookie extension of Bootstrap Table.
group: extensions
toc: true
---

## Usage

{% highlight html %}
<script src="extensions/cookie/bootstrap-table-cookie.js"></script>
{% endhighlight %}

## Options

### cookie

- **type:** `Boolean`

- **Detail:**

   Set `true` to save the state of a table (its paging position, ordering state, records per page).

- **Default:** `false`

### cookieExpire

- **type:** `String`

- **Detail:**

   You must set this property if cookie option is enable to know when will expire the cookie created. Must use this format: `'number{letter}'` like `'2h'`, in the letter position you can use: `'s'`, `'mi'`, `'h'`, `'d'`, `'m'`, `'y'`, these means: `'seconds'`, `'minutes'`, `'hours'`, `'days'`, `'months'`, `'years'`.

- **Default:** `2h`

### cookiePath

- **type:** `String`

- **Detail:**

   you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.

- **Default:** `null`

### cookieDomain

- **type:** `String`

- **Detail:**

   This is the website domain, with the www. prefix removed.

- **Default:** `null`

### cookieSecure

- **type:** `Boolean`

- **Detail:**

   This property keeps cookie communication limited to encrypted transmission, directing browsers to use cookies only via secure/encrypted connections.

- **Default:** `null`

### cookieIdTable

- **type:** `String`

- **Detail:**

   You must set this property if the cookie property is enabled to set an unique cookie with an identifier for each table in your page or project. You must set this property because we need create cookies with an identifier.

- **Default:** `''`

### cookieStorage

- **type:** `String`

- **Detail:**

   Set the storage that this extension will use. Use `cookieStorage` or `localStorage` or `sessionStorage`.

- **Default:** `cookieStorage`

### cookiesEnabled

- **type:** `Array`

- **Detail:**

   Set this array with the table properties (sortOrder, sortName, pageNumber, pageList, columns, searchText, filterControl) that you want to save

- **Default:** `['bs.table.sortOrder', 'bs.table.sortName', 'bs.table.pageNumber', 'bs.table.pageList', 'bs.table.columns', 'bs.table.searchText', 'bs.table.filterControl']`

## Methods

### getCookies

- **parameters:** `undefined`

- **Detail:**

   Return the saved cookies.

### deleteCookie

- **parameters:** `cookieName`

- **Detail:**

   Delete the saved cookie by cookie name.

## This plugin saves

* Sort order
* Page number
* Page number from the list
* Visible columns
* Search text
