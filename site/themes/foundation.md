---
layout: simple
title: Foundation
description: A getting started of add Bootstrap Table to Foundation, how to download and use, basic templates, and more.
group: themes
toc: true
---

## Quick start

Looking to quickly add Bootstrap Table to your <a href="https://foundation.zurb.com/" target="_blank">Foundation</a> project? Use CDN, provided for free by the folks at UNPKG. Using a package manager or need to download the source files? [Head to the downloads page]({{ site.baseurl }}/docs/getting-started/download/).

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

{% highlight html %}
<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/themes/foundation/bootstrap-table-foundation.min.css">
{% endhighlight %}

### JS

Place the following `<script>`s near the end of your pages, right before the closing `</body>` tag, to enable them. jQuery must come first, then our JavaScript plugins.

{% highlight html %}
<script src="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.js"></script>
<script src="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/themes/foundation/bootstrap-table-foundation.min.js"></script>
{% endhighlight %}

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.

For Foundation, we use [Font Awesome](https://fontawesome.com/icons) as the default icons, so need to import Font Awesome link.

Put it all together and your pages should look like this:

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/css/foundation.min.css" integrity="sha256-xpOKVlYXzQ3P03j397+jWFZLMBXLES3IiryeClgU5og= sha384-gP4DhqyoT9b1vaikoHi9XQ8If7UNLO73JFOOlQV1RATrA7D0O7TjJZifac6NwPps sha512-AKwIib1E+xDeXe0tCgbc9uSvPwVYl6Awj7xl0FoaPFostZHOuDQ1abnDNCYtxL/HWEnVOMrFyf91TDgLPi9pNg==" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/themes/foundation/bootstrap-table-foundation.min.css">

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

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/js/foundation.min.js" integrity="sha256-/PFxCnsMh+nTuM0k3VJCRch1gwnCfKjaP8rJNq5SoBg= sha384-9ksAFjQjZnpqt6VtpjMjlp2S0qrGbcwF/rvrLUg2vciMhwc1UJJeAAOLuJ96w+Nj sha512-UMSn6RHqqJeJcIfV1eS2tPKCjzaHkU/KqgAnQ7Nzn0mLicFxaVhm9vq7zG5+0LALt15j1ljlg8Fp9PT1VGNmDw==" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.js"></script>
    <script src="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/themes/foundation/bootstrap-table-foundation.min.js"></script>
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
