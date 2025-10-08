import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'
import Constants from '../src/constants/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let errorSum = 0
const exampleFilesFolder = path.join(__dirname, 'bootstrap-table-examples')
const exampleFilesFound = fs.existsSync(exampleFilesFolder)
let exampleFiles = []

if (exampleFilesFound) {
  exampleFiles = [
    ...fs.readdirSync(path.join(exampleFilesFolder, 'welcomes')),
    ...fs.readdirSync(path.join(exampleFilesFolder, 'options')),
    ...fs.readdirSync(path.join(exampleFilesFolder, 'column-options')),
    ...fs.readdirSync(path.join(exampleFilesFolder, 'methods'))
  ]
} else {
  console.log((chalk.yellow(chalk.bold('Warning: ') + 'Cant check if example files are correct formatted and have a valid url.')))
  console.log((chalk.yellow(chalk.bold('Warning: ') + 'To enable that check, please clone the "bootstrap-table-examples" repository in the tools folder or create a symlink (if you already cloned the repository on an other path).')))
}

class API {
  constructor () {
    this.init()
    this.sortOptions()
    this.check()
  }

  sortOptions () {
    this.options.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  }

  check () {
    const file = path.join(__dirname, '..', 'site', 'src', 'pages', 'docs', 'api', this.file)
    const md = {}
    const content = fs.readFileSync(file).toString()
    const lines = content.split('## ')
    const outLines = lines.slice(0, 1)
    const errors = []
    const exampleRegex = /\[.*\]\(.*\/(.*\.html)\)/m
    const attributeRegex = /\*\*Attribute:\*\*\s`(.*)data-(.*)`/m

    for (const item of lines.slice(1)) {
      md[item.split('\n')[0]] = item
    }

    console.log('-------------------------')
    console.log(`Checking file: ${file}`)
    console.log('-------------------------')

    const noDefaults = Object.keys(md).filter(it => !this.options.includes(it))

    if (noDefaults.length) {
      errorSum += noDefaults.length
      console.log(chalk.red(`No default option was found for "${noDefaults.join(', ')}", should the documentation be removed!`))
      return
    }

    for (const [i, key] of this.options.entries()) {
      try {
        if (md[key]) {
          outLines.push(md[key])
          const details = md[key].split('\n\n- ')

          for (let i = 0; i < this.attributes.length; i++) {
            const name = this.attributes[i]

            if (this.ignore && this.ignore[key] && this.ignore[key].includes(name)) {
              continue
            }

            const tmpDetails = details[i + 1].trim()
            if (name === 'Example' && exampleFilesFound) {
              const matches = exampleRegex.exec(tmpDetails)
              if (!matches) {
                errors.push(chalk.red(`[${key}] missing or wrong formatted example`, `"${tmpDetails}"`))
                continue
              }

              if (!exampleFiles.includes(matches[1])) {
                errors.push(chalk.red(`[${key}] example '${matches[1]}' could not be found`))
              }
            } else if (name === 'Attribute' && key !== 'columns') {
              const attributeMatches = attributeRegex.exec(tmpDetails)

              if (!attributeMatches) {
                errors.push(chalk.red(`[${key}] missing or wrong formatted attribute`, `"${tmpDetails}"`))
                continue
              }
            }

            if (!tmpDetails || tmpDetails.indexOf(`**${name}:**`) === -1) {
              errors.push(chalk.red(`[${key}] missing '${name}'`))
            }
          }
        } else {
          errors.push(chalk.red(`[${key}] option could not be found`))
        }
      } catch (ex) {
        console.log(ex)
      }
    }

    errorSum += errors.length
    if (errors.length > 0) {
      errors.forEach((error) => {
        console.log(error)
      })
    }

    fs.writeFileSync(file, outLines.join('## '))
  }
}

class TableOptions extends API {
  init () {
    this.file = 'table-options.mdx'
    this.options = Object.keys(Constants.DEFAULTS).filter(it => {
      return !/^(on|format)[A-Z]/.test(it)
    })
    this.options.unshift('-')
    this.attributes = ['Attribute', 'Type', 'Detail', 'Default', 'Example']
    this.ignore = {
      totalRows: ['Example'],
      totalNotFiltered: ['Example'],
      virtualScrollItemHeight: ['Example']
    }
  }
}

class ColumnOptions extends API {
  init () {
    this.file = 'column-options.mdx'
    this.options = Object.keys(Constants.COLUMN_DEFAULTS)
    this.attributes = ['Attribute', 'Type', 'Detail', 'Default', 'Example']
  }
}

class Methods extends API {
  init () {
    this.file = 'methods.mdx'
    this.options = Constants.METHODS
    this.attributes = ['Parameter', 'Detail', 'Example']
  }
}

class Events extends API {
  init () {
    this.file = 'events.mdx'
    this.options = Object.values(Constants.EVENTS)
    this.attributes = ['jQuery Event', 'Parameter', 'Detail']
  }
}

class Localizations extends API {
  init () {
    this.file = 'localizations.mdx'
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
