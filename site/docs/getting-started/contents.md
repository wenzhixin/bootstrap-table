---
layout: docs
title: Contents
description: The Bootstrap Table source code download includes the precompiled CSS, JavaScript, locales, extensions and provides both compiled and minified variations, along with documentation.
group: getting-started
toc: true
---

## Precompiled Bootstrap Table

More specifically, it includes the following and more:

{% highlight plaintext %}
bootstrap-table/
└── dist/
    ├── extensions/
    ├── locale/
    ├── bootstrap-table-locale-all.js
    ├── bootstrap-table-locale-all.min.js
    ├── bootstrap-table.css
    ├── bootstrap-table.min.css
    ├── bootstrap-table.js
    └── bootstrap-table.min.js
{% endhighlight %}

The `dist/` folder includes everything compiled and minified with `src/`. For ease of use, we also compile all locale files into one file `bootstrap-table-locale-all.js`.

## Source Code

{% highlight plaintext %}
bootstrap-table/
├── site/
└── src/
    ├── extensions/
    ├── locale/
    ├── bootstrap-table.css
    └── bootstrap-table.js
{% endhighlight %}

The `src/`, `locale/`, and `extensions/` are the source code for our CSS, JS. The `site/` folder includes the source code for our documentation. Beyond that, any other included file supports packages, license information, and development.
