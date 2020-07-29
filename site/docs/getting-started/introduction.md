---
layout: docs
title: Introduction
description: An overview of Bootstrap Table, how to download and use, basic templates, and more.
group: getting-started
redirect_from:
  - "/docs/"
  - "/getting-started/"
  - "/themes/bootstrap4"
toc: true
---

## Quick start

Looking to quickly add Bootstrap Table to your <a href="https://getbootstrap.com/" target="_blank">Bootstrap v4</a> project? Use CDN, provided for free by the folks at UNPKG. Using a package manager or need to download the source files? [Head to the downloads page]({{ site.baseurl }}/docs/getting-started/download/).

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

{% highlight html %}
<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.css">
{% endhighlight %}

### JS

Place the following `<script>`s near the end of your pages, right before the closing `</body>` tag, to enable them. jQuery must come first, then Bootstrap.js, and then our JavaScript plugins.

{% highlight html %}
<script src="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.js"></script>
{% endhighlight %}

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.

For Bootstrap v4, we use [Font Awesome](https://fontawesome.com/icons) as the default icons, so need to import Font Awesome link.

Put it all together and your pages should look like this:

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, Bootstrap Table!</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.css">
  </head>
  <body>
    <table data-toggle="table">
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Item Name</th>
          <th>Item Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Item 1</td>
          <td>$1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Item 2</td>
          <td>$2</td>
        </tr>
      </tbody>
    </table>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.js"></script>
  </body>
</html>
{% endhighlight %}

### HTML5 doctype

Bootstrap Table requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{% highlight html %}
<!doctype html>
<html lang="en">
  ...
</html>
{% endhighlight %}

## Community

Stay up to date on the development of Bootstrap Table and reach out to the community with these helpful resources.

- Follow [@{{ site.twitter }} on Twitter](https://twitter.com/{{ site.twitter }}).
- Read [The Official Bootstrap Table News]({{ site.base_url }}/news).
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-table`](https://stackoverflow.com/questions/tagged/bootstrap-table)).
