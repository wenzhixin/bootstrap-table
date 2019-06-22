---
layout: docs
title: Browser
description: Learn how to use Bootstrap Table Vue Component in your project using browser.
group: vuejs
toc: true
---

## VueJS JavaScript

In addition to the files that [Quick start](/docs/getting-started/introduction/#quick-start) mentions, you also need to include our vue component file.

{% highlight html %}
<script src="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table-vue.min.js"></script>
{% endhighlight %}

## Usage

{% highlight html %}
<div id="table">
  <bootstrap-table :columns="columns" :data="data" :options="options"></bootstrap-table>
</div>

<script>
  new Vue({
    el: '#table',
    components: {
      'BootstrapTable': BootstrapTable
    },
    data: {
      columns: [
        {
          title: 'Item ID',
          field: 'id'
        },
        {
          field: 'name',
          title: 'Item Name'
        }, {
          field: 'price',
          title: 'Item Price'
        }
      ],
      data: [
        {
          id: 1,
          name: 'Item 1',
          price: '$1'
        }
      ],
      options: {
        search: true,
        showColumns: true
      }
    }
  })
</script>
{% endhighlight %}

## Starter template

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, Bootstrap Table!</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.css">
  </head>
  <body>
    <div id="table">
      <bootstrap-table :columns="columns" :data="data" :options="options"></bootstrap-table>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.js"></script>
    <script src="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table-vue.min.js"></script>
    <script>
      new Vue({
        el: '#table',
        components: {
          'BootstrapTable': BootstrapTable
        },
        data: {
          columns: [
            {
              title: 'Item ID',
              field: 'id'
            },
            {
              field: 'name',
              title: 'Item Name'
            }, {
              field: 'price',
              title: 'Item Price'
            }
          ],
          data: [
            {
              id: 1,
              name: 'Item 1',
              price: '$1'
            },
            {
              id: 2,
              name: 'Item 2',
              price: '$2'
            },
            {
              id: 3,
              name: 'Item 3',
              price: '$3'
            },
            {
              id: 4,
              name: 'Item 4',
              price: '$4'
            },
            {
              id: 5,
              name: 'Item 5',
              price: '$5'
            }
          ],
          options: {
            search: true,
            showColumns: true
          }
        }
      })
    </script>
  </body>
</html>
{% endhighlight %}
