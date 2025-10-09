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

  versions: [
    '1.21.4',
    '1.20.2',
    '1.19.1',
    '1.18.3',
    '1.17.1',
    '1.16.0',
    '1.15.5'
  ]
}
