// eslint-disable-next-line no-global-assign
require = require('esm')(module)
const fs = require('fs')
const chalk = require('chalk')
const Constants = require('../src/constants/index.js').default
let errorSum = 0

class API {
  constructor () {
    this.init()
    this.check()
  }

  check () {
    const file = `../site/docs/api/${this.file}`
    const md = {}
    const content = fs.readFileSync(file).toString()
    const lines = content.split('## ')
    const outLines = lines.slice(0, 1)
    const errors = []

    for (const item of lines.slice(1)) {
      md[item.split('\n')[0]] = item
    }

    const mds = Object.keys(md)
    for (const [i, key] of this.options.entries()) {
      if (md[key]) {
        outLines.push(md[key])
        const details = md[key].split('\n\n- ')

        for (let i = 0; i < this.attributes.length; i++) {
          const name = this.attributes[i]
          if (this.ignore && this.ignore[key] && this.ignore[key].includes(name)) {
            continue
          }
          if (!details[i + 1] || details[i + 1].indexOf(`**${name}:**`) === -1) {
            errors.push(chalk.red(`[${key}] missing '${name}'`))
          }
        }
      } else {
        outLines.push(key + '\n\n')
      }
    }

    errorSum += errors.length
    if (errors.length > 0) {
      console.log('-------------------------')
      console.log(`Checking file: ${file}`)
      console.log('-------------------------')

      errors.forEach((error) => {
        console.log(error)
      })
    }
    fs.writeFileSync(file, outLines.join('## '))
  }
}

class TableOptions extends API {
  init () {
    this.file = 'table-options.md'
    this.options = Object.keys(Constants.DEFAULTS).filter(it => {
      return !/^(on|format)[A-Z]/.test(it)
    })
    this.options.unshift('-')
    this.attributes = ['Attribute', 'Type', 'Detail', 'Default', 'Example']
    this.ignore = {
      totalRows: ['Example'],
      totalNotFiltered: ['Example']
    }
  }
}

class ColumnOptions extends API {
  init () {
    this.file = 'column-options.md'
    this.options = Object.keys(Constants.COLUMN_DEFAULTS)
    this.attributes = ['Attribute', 'Type', 'Detail', 'Default', 'Example']
  }
}

class Methods extends API {
  init () {
    this.file = 'methods.md'
    this.options = Constants.METHODS
    this.attributes = ['Parameter', 'Detail', 'Example']
    this.ignore = {
      resetWidth: ['Example']
    }
  }
}

class Events extends API {
  init () {
    this.file = 'events.md'
    this.options = Object.values(Constants.EVENTS)
    this.attributes = ['jQuery Event', 'Parameter', 'Detail']
  }
}

class Localizations extends API {
  init () {
    this.file = 'localizations.md'
    this.options = Object.keys(Constants.LOCALES.en)
    this.attributes = ['Parameter', 'Default']
  }
}

new TableOptions()
new ColumnOptions()
new Methods()
new Events()
new Localizations()

if (errorSum === 0) {
  console.log('Good job! Anything up to date!')
  process.exit(0)
}

process.exit(1)