---
layout: docs
title: Introduction
description: An overview of Bootstrap Table Vue Component, how to install and what's includes vue files.
group: vuejs
redirect_from:
  - "/vuejs/"
toc: true
---

We have a Bootstrap Table Component for [Vue.js 2.0+](https://vuejs.org), and it should be able to work with the full [API](/docs/api/), the full [extensions](/extensions/) and the full [CSS frameworks](/themes/).

## Installation

### Dependencies

* [Vue.js](https://vuejs.org) (2.0+)
* [jQuery](http://jquery.com)

### NPM

Install and manage Bootstrap table's CSS, JavaScript, locales, and extensions using [npm](https://www.npmjs.com/package/bootstrap-table).

{% highlight sh %}
npm install bootstrap-table
{% endhighlight %}

### UNPKG

The folks over at [UNPKG](https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/) graciously provide CDN support for CSS and JavaScript of Bootstrap table. Just use these links.

{% highlight html %}
https://unpkg.com/bootstrap-table@{{ site.current_version }}
{% endhighlight %}

## Build Files

`dist/` folder includes the following vue component files:

{% highlight plaintext %}
bootstrap-table/
└── dist/
    ├── bootstrap-table-vue.js
    ├── bootstrap-table-vue.min.js
    ├── bootstrap-table-vue.esm.js
    └── bootstrap-table-vue.esm.min.js
{% endhighlight %}

* **bootstrap-table-vue.js:** UMD builds can be used directly in the browser via a `<script>` tag.
* **bootstrap-table-vue.esm.js** ES module builds are intended for use with modern bundlers like [webpack 2](https://webpack.js.org/) or [rollup](http://rollupjs.org/).
