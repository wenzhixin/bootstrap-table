---
layout: docs
title: Browser
description: Learn how to use Bootstrap Table Vue Component in your project using the browser.
group: vuejs
toc: true
---

## VueJS JavaScript

In addition to the files that [Quick Start](/docs/getting-started/introduction/#quick-start) mentions, you also need to include our vue component file.

{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table-vue.umd.js"></script>
{% endhighlight %}

## Usage

{% highlight html %}
<div id="app">
  <bootstrap-table :columns="columns" :data="data" :options="options"></bootstrap-table>
</div>

<script>
  const { createApp, ref } = Vue
  const app = createApp({
    setup () {
      const columns = ref([
        {
          field: 'state',
          checkbox: true
        },
        {
          title: 'Item ID',
          field: 'id'
        },
        {
          field: 'name',
          title: 'Item Name'
        },
        {
          field: 'price',
          title: 'Item Price'
        },
        {
          field: 'action',
          title: 'Actions',
          align: 'center',
          formatter () {
            return '<a href="javascript:" class="like"><i class="fa fa-star"></i></a>'
          },
          events: {
            'click .like' (e, value, row) {
              alert(JSON.stringify(row))
            }
          }
        }
      ])
      const data = ref([
        {
          id: 0,
          name: 'Item 0',
          price: '$0'
        },
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
      ])
      const options = ref({
        search: true,
        showColumns: true
      })

      return {
        columns,
        data,
        options
      }
    }
  })

  app.component('BootstrapTable', BootstrapTable)
  app.mount('#app')
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

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.css">
  </head>
  <body>
    <div id="app">
      <bootstrap-table :columns="columns" :data="data" :options="options"></bootstrap-table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-table@{{ site.current_version }}/dist/bootstrap-table-vue.umd.js"></script>
    <script>
      const { createApp, ref } = Vue
      const app = createApp({
        setup () {
          const columns = ref([
            {
              field: 'state',
              checkbox: true
            },
            {
              title: 'Item ID',
              field: 'id'
            },
            {
              field: 'name',
              title: 'Item Name'
            },
            {
              field: 'price',
              title: 'Item Price'
            },
            {
              field: 'action',
              title: 'Actions',
              align: 'center',
              formatter () {
                return '<a href="javascript:" class="like"><i class="fa fa-star"></i></a>'
              },
              events: {
                'click .like' (e, value, row) {
                  alert(JSON.stringify(row))
                }
              }
            }
          ])
          const data = ref([
            {
              id: 0,
              name: 'Item 0',
              price: '$0'
            },
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
          ])
          const options = ref({
            search: true,
            showColumns: true
          })

          return {
            columns,
            data,
            options
          }
        }
      })

      app.component('BootstrapTable', BootstrapTable)
      app.mount('#app')
    </script>
  </body>
</html>
{% endhighlight %}
