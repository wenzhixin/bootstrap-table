import packageJson from '../../package.json' with { type: 'json' }

export default {
  currentVersion: packageJson.version,
  currentYear: new Date().getFullYear(),

  title: 'Bootstrap Table',
  description: 'An extended table to the integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)',
  author: 'Zhixin Wen, and Bootstrap Table contributors',
  keywords: 'bootstrap,table,pagination,checkbox,radio,datatables,css,css-framework,semantic,semantic-ui,bulma,material,material-design,materialize,foundation',

  baseurl: '',
  repo: 'https://github.com/wenzhixin/bootstrap-table',
  website: 'http://wenzhixin.net.cn',
  repos: 'http://repos.wenzhixin.net.cn',
  email: 'wenzhixin2010@gmail.com',
  twitter: 'wenzhixin2010',
  opencollective: 'bootstrap-table',
  masterZip: 'https://github.com/wenzhixin/bootstrap-table/archive/master.zip',

  algolia: {
    appId: process.env.ALGOLIA_APP_ID || 'FXDJ517Z8G',
    apiKey: process.env.ALGOLIA_API_KEY || '9b89c4a7048370f4809b0bc77b2564ac',
    indexName: process.env.ALGOLIA_INDEX_NAME || 'bootstrap-table-test'
  },

  versions: [
    '1.24.2',
    '1.23.5',
    '1.22.6',
    '1.21.4',
    '1.20.2',
    '1.19.1',
    '1.18.3',
    '1.17.1',
    '1.16.0',
    '1.15.5'
  ]
}
