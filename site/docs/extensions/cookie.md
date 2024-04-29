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

## Example

[Cookie](https://examples.bootstrap-table.com/#extensions/cookie.html)

## Options

### cookie

- **Attribute:** `data-cookie`

- **type:** `Boolean`

- **Detail:**

  Set `true` to save the state of a table (its paging position, ordering state, and records per page).

- **Default:** `false`

### cookieCustomStorageDelete

- **Attribute:** `data-cookie-custom-storage-delete`

- **type:** `function`

- **parameter**

  - `cookieName` - The name of the value e.g. the search

- **Detail:**

  This option allows deleting values with your custom function.
  This option is only required if you use `customStorage` on the `cookieStorage` option!

- **Default:** `undefined`

### cookieCustomStorageGet

- **Attribute:** `data-cookie-custom-storage-get`

- **type:** `function`

- **parameter**

  - `cookieName` - The name of the value e.g. the search

- **Detail:**

  This option allows getting the saved value from your custom function.
  This option is only required if you use `customStorage` on the `cookieStorage` option!

- **Default:** `undefined`

### cookieCustomStorageSet

- **Attribute:** `data-cookie-custom-storage-set`

- **type:** `function`

- **parameter**

  - `cookieName` - The name of the value e.g. the search
  - `value` - The value that will be saved

- **Detail:**

  This option allows saving values with your custom function.
  This option is only required if you use `customStorage` on the `cookieStorage` option!

- **Default:** `undefined`

### cookieDomain

- **Attribute:** `data-cookie-domain`

- **type:** `String`

- **Detail:**

  This is the website domain, with the www. prefix removed.

- **Default:** `null`

### cookieExpire

- **Attribute:** `data-cookie-expire`

- **type:** `String`

- **Detail:**

  You must set this property if the cookie option is enabled to know when will expire the cookie. Must use this format: `'number{letter}'` like `'2h'`, in the letter position you can use: `'s'`, `'mi'`, `'h'`, `'d'`, `'m'`, `'y'`, these means: `'seconds'`, `'minutes'`, `'hours'`, `'days'`, `'months'`, `'years'`.

- **Default:** `2h`

### cookieIdTable

- **Attribute:** `data-cookie-id-table`

- **type:** `String`

- **Detail:**

  You must set this property if the cookie property is enabled to set a unique cookie with an identifier for each table in your page or project. You must set this property because we need to create cookies with an identifier.

- **Default:** `''`

### cookiePath

- **Attribute:** `data-cookie-path`

- **type:** `String`

- **Detail:**

  you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.

- **Default:** `null`

### cookieSecure

- **Attribute:** `data-cookie-secure`

- **type:** `Boolean`

- **Detail:**

  This property keeps cookie communication limited to encrypted transmission, directing browsers to use cookies only via secure/encrypted connections.

- **Default:** `null`

### cookieSameSite

- **Attribute:** `data-cookie-same-site`

- **type:** `string`

- **Detail:**

  This property defines the value of the `SameSite` cookie attribute, for more information please check the [SameSite Documentation](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

- **Default:** `Lax`


### cookieStorage

- **Attribute:** `data-cookie-storage`

- **type:** `String`

- **Detail:**

  Set the storage that this extension will use. Use `cookieStorage`, `localStorage`, `sessionStorage`, or `customStorage`.

  Info for `customStorage`:
  You have use `cookieCustomStorageGet`, `cookieCustomStorageSet` and `cookieCustomStorageDelete`.

- **Default:** `cookieStorage`

### cookiesEnabled

- **Attribute:** `data-cookies-enabled`

- **type:** `Array`

- **Detail:**

  Set this array with the table properties (`sortOrder`, `sortName`, `sortPriority`, `pageNumber`, `pageList`, `hiddenColumns`, `searchText`, `filterControl`) that you want to save

- **Default:** `['bs.table.sortOrder', 'bs.table.sortName', 'bs.table.sortPriority', 'bs.table.pageNumber', 'bs.table.pageList', 'bs.table.hiddenColumns', 'bs.table.searchText', 'bs.table.filterControl', 'bs.table.cardView', 'bs.table.customView']`

## Methods

### deleteCookie

- **parameters:** `cookieName`

- **Detail:**

  Delete the saved cookie by cookie name.

### getCookies

- **parameters:** `undefined`

- **Detail:**

  Return the saved cookies.

## This plugin saves

* Page number
* Page size (Rows per page)
* Search text
* Search filter control
* Sort order
* Sort name
* Multiple Sort order
* Hidden columns
* Card view state
