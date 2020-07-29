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

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.css">
  </head>
  <body>
    <div id="table">
      <bootstrap-table :columns="columns" :data="data" :options="options"></bootstrap-table>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
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
