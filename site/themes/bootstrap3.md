---
layout: simple
title: Bootstrap v3
description: A getting started of add Bootstrap Table to Bootstrap v3, how to download and use, basic templates, and more.
group: themes
toc: true
---

## Quick start

Looking to quickly add Bootstrap Table to your <a href="https://getbootstrap.com/docs/3.4/" target="_blank">Bootstrap v3</a> project? Use CDN, provided for free by the folks at UNPKG. Using a package manager or need to download the source files? [Head to the downloads page]({{ site.baseurl }}/docs/getting-started/download/).

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

Put it all together and your pages should look like this:

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.css">

    <title>Hello, Bootstrap Table!</title>
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

    <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
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
