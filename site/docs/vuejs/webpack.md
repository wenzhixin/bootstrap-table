---
layout: docs
title: Webpack
description: Learn how to use Bootstrap Table Vue Component in your project using webpack.
group: vuejs
toc: true
---

## Importing JavaScript

Import Bootstrap Table’s JavaScript by adding this line to your app’s entry point (usually `index.js` or `app.js`):

{% highlight js %}
import 'bootstrap-table/dist/bootstrap-table.js'
{% endhighlight %}

Of course, you can also import themes, locales or extensions you need:

{% highlight js %}
// import theme
import 'bootstrap-table/dist/themes/materialize/bootstrap-table-materialize.js'

// import locale
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.js'

// import extension and dependencies
import 'tableexport.jquery.plugin'
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export.js'
{% endhighlight %}

By default, Bootstrap Table is dependent on [jQuery](https://jquery.com/), [Bootstrap](https://getbootstrap.com) and [Popper](https://popper.js.org/), these are defined as peerDependencies, this means that you will have to make sure to add both of them to your `package.json` using `npm install --save jquery bootstrap popper.js`.

## Importing CSS

Import Bootstrap Table’s CSS by adding this line to your app’s entry point:

{% highlight js %}
import 'bootstrap-table/dist/bootstrap-table.min.css'
{% endhighlight %}

Of course, you can also import themes or extensions you need:

{% highlight js %}
// import theme
import 'bootstrap-table/dist/themes/materialize/bootstrap-table-materialize.min.css'

// import extension
import 'bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns.min.css'
{% endhighlight %}

## Usage

{% highlight vue %}
<template>
  <BootstrapTable :columns="columns" :data="data" :options="options"></BootstrapTable>
</template>

<script>
import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js'

export default {
  components: {
    BootstrapTable
  },
  data () {
    return {
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
  }
}
</script>
{% endhighlight %}

## Starter template

There is an [vue-starter](https://github.com/wenzhixin/bootstrap-table-examples/tree/develop/vue-starter) example in bootstrap-table-example project.

`plugins/jquery.js`

{% highlight js %}
import jQuery from 'jquery'
window.jQuery = jQuery
{% endhighlight %}

`plugins/table.js`

{% highlight js %}
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.css'

import './jquery.js'
import Vue from 'vue'
import 'bootstrap'
import 'bootstrap-table/dist/bootstrap-table.js'
import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js'

Vue.component('BootstrapTable', BootstrapTable)
{% endhighlight %}

`main.js`

{% highlight js %}
import './plugins/table.js'
{% endhighlight %}

`View.vue`

{% highlight vue %}
<template>
  <BootstrapTable :columns="columns" :data="data" :options="options"></BootstrapTable>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>
{% endhighlight %}
