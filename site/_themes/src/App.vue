<template>
  <div>
    <Categories
      :categories="categories"
      @active="onActive"
    />

    <List
      v-for="(value, key) in themes"
      v-show="current === 'all' || current === key"
      :key="key"
      :title="categories[key]"
      :themes="value"
    />
  </div>
</template>

<script>
import Categories from './components/Categories'
import List from './components/List'

export default {
  name: 'App',
  components: {
    Categories,
    List
  },
  data () {
    return {
      current: 'all',
      categories: {
        all: 'All Themes',
        admin: 'Admin & Dashboards',
        css: 'CSS Frameworks',
        vue: 'Vuejs',
        others: 'Others'
      },
      themes: {
        admin: [
          {
            name: 'Light Bootstrap Dashboard Pro',
            desc: 'Responsive Bootstrap 4 Admin Template.',
            img: '/assets/images/light-bootstrap.jpg',
            url: 'https://secure.2checkout.com/affiliate.php?ACCOUNT=CREATIV&AFFILIATE=117417&PATH=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Flight-bootstrap-dashboard-pro%3FAFFILIATE%3D117417',
            demo: 'https://secure.2checkout.com/affiliate.php?ACCOUNT=CREATIV&AFFILIATE=117417&PATH=https%3A%2F%2Fdemos.creative-tim.com%2Flight-bootstrap-dashboard-pro%2Fexamples%2Ftables%2Fbootstrap-table.html%3FAFFILIATE%3D117417',
            price: '$39'
          },
          {
            name: 'Paper Dashboard Pro',
            desc: 'Premium Bootstrap Admin Template.',
            img: '/assets/images/pager-dashboard.jpg',
            url: 'https://secure.2checkout.com/affiliate.php?ACCOUNT=CREATIV&AFFILIATE=117417&PATH=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fpaper-dashboard-pro%3FAFFILIATE%3D117417',
            demo: 'https://secure.2checkout.com/affiliate.php?ACCOUNT=CREATIV&AFFILIATE=117417&PATH=https%3A%2F%2Fdemos.creative-tim.com%2Fpaper-dashboard-pro%2Fexamples%2Ftables%2Fbootstrap-table.html%3FAFFILIATE%3D117417',
            price: '$39'
          },
          {
            name: 'Remark',
            desc: 'Responsive Bootstrap 4 Admin Template.',
            img: 'https://themeforest.img.customer.envatousercontent.com/files/256697282/Preview.__large_preview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=c4340f8d5e70cd6fb77fd5b2f670b486',
            url: 'https://1.envato.market/j0mdP',
            demo: 'https://1.envato.market/PEbGe',
            price: '$24'
          },
          {
            name: 'Ubold',
            desc: 'Admin & Dashboard Template.',
            img: 'https://themeforest.img.customer.envatousercontent.com/files/273195428/01_ubold.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=a1318683a895fcf026cecd3e0b74d97b',
            url: 'https://1.envato.market/5EnJ2',
            demo: 'https://1.envato.market/kEWdL',
            price: '$29'
          },
          {
            name: 'Metronic',
            desc: 'Bootstrap 4, Angular 8, React Admin Dashboard Theme.',
            img: 'https://themeforest.img.customer.envatousercontent.com/files/276839308/plyushka.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=b7f0504d8697450845aa1d2f71a8c80b',
            url: 'https://1.envato.market/KmzbN',
            demo: 'https://1.envato.market/7qMPg',
            price: '$35'
          },
          {
            name: 'Pages',
            desc: 'Admin Dashboard Template with Angular 6, Bootstrap 4 & HTML.',
            img: 'https://themeforest.img.customer.envatousercontent.com/files/253934566/preview.__large_preview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=bcc481514196e409152ae30e8668f0eb',
            url: 'https://1.envato.market/LB26M',
            demo: 'https://1.envato.market/q9yMY',
            price: '$24'
          }
        ],
        css: [
          {
            name: 'Bootstrap v5',
            desc: 'The most popular HTML, CSS, and JavaScript framework.',
            img: '/assets/images/bootstrap5.jpg',
            url: '/themes/bootstrap5/',
            demo: 'https://examples.bootstrap-table.com/index.html?bootstrap5',
            price: ''
          },
          {
            name: 'Bootstrap v4',
            desc: 'The most popular HTML, CSS, and JavaScript framework.',
            img: '/assets/images/bootstrap4.jpg',
            url: '/docs/getting-started/introduction/',
            demo: 'https://examples.bootstrap-table.com/',
            price: ''
          },
          {
            name: 'Bootstrap v3',
            desc: 'The most popular HTML, CSS, and JavaScript framework.',
            img: '/assets/images/bootstrap3.jpg',
            url: '/themes/bootstrap3/',
            demo: 'https://examples.bootstrap-table.com/index.html?bootstrap3',
            price: ''
          },
          {
            name: 'Bootstrap Table',
            desc: 'Our custom theme of Bootstrap Table.',
            img: '/assets/images/bootstrap-table.jpg',
            url: '/themes/bootstrap-table/',
            demo: 'https://examples.bootstrap-table.com/index.html?bootstrap-table',
            price: ''
          },
          {
            name: 'Semantic UI',
            desc: 'UI component framework based around useful principles from natural language.',
            img: '/assets/images/semantic.jpg',
            url: '/themes/semantic/',
            demo: 'https://examples.bootstrap-table.com/index.html?semantic',
            price: ''
          },
          {
            name: 'Bulma',
            desc: 'Modern CSS framework based on Flexbox.',
            img: '/assets/images/bulma.jpg',
            url: '/themes/bulma/',
            demo: 'https://examples.bootstrap-table.com/index.html?bulma',
            price: ''
          },
          {
            name: 'Materialize',
            desc: 'A modern responsive front-end framework based on Material Design.',
            img: '/assets/images/materialize.jpg',
            url: '/themes/materialize/',
            demo: 'https://examples.bootstrap-table.com/index.html?materialize',
            price: ''
          },
          {
            name: 'Foundation',
            desc: 'The most advanced responsive front-end framework in the world.',
            img: '/assets/images/foundation.jpg',
            url: '/themes/foundation/',
            demo: 'https://examples.bootstrap-table.com/index.html?foundation',
            price: ''
          }
        ],
        vue: [
          {
            name: 'Element Table',
            desc: 'An extended table to integration with bootstrap-table and element-ui.',
            img: '/assets/images/element-table.jpg',
            url: 'https://element.bootstrap-table.com/',
            demo: 'https://element.bootstrap-table.com/',
            price: ''
          }
        ],
        others: [
          {
            name: 'Fresh Bootstrap Table',
            desc: 'Fresh Bootstrap Table Template.',
            img: '/assets/images/fresh-table.jpg',
            url: 'https://secure.2checkout.com/affiliate.php?ACCOUNT=CREATIV&AFFILIATE=117417&PATH=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Ffresh-bootstrap-table%3FAFFILIATE%3D117417',
            demo: 'https://wenzhixin.github.io/fresh-bootstrap-table/compact-table.html',
            price: ''
          }
        ]
      }
    }
  },
  methods: {
    onActive (current) {
      this.current = current
    }
  }
}
</script>

<style>
  .bs-tooltip-top .arrow::before {
    border-top-color: #FAE5A8;
  }
  .tooltip-inner {
    background: #FAE5A8;
    color: #724729;
  }
</style>
