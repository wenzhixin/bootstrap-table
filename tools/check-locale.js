const fs = require('fs')
const _ = require('lodash')
const chalk = require('chalk')

const DIR = '../src/locale/'
const readKeys = text => {
  return text.match(/ {2}(format\w*) \(/g)
    .map(it => it.replace('  ', '').replace(' (', ''))
}
const baseText = fs.readFileSync(DIR + 'bootstrap-table-en-US.js').toString()
const baseKeys = readKeys(baseText)

fs.readdir(`${DIR}`, (err, files) => {
  let errorSum = 0
  for (const file of files) {
    if (!/\.js$/.test(file) || file === 'bootstrap-table-en-US.js') {
      continue
    }

    const text = fs.readFileSync(DIR + file).toString()
    const keys = readKeys(text)
    let offset = 0
    const errors = []

    for (const [i, key] of baseKeys.entries()) {
      if (!keys.includes(key)) {
        errors.push(chalk.red(`Missing key: '${key}'`))
        offset++
      } else if (keys[i - offset] !== key) {
        errors.push(chalk.red(`Order error: '${key}'`))
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
  }

  if (errorSum === 0) {
    console.log('Good job! Anything up to date!')
    process.exit(0)
  }

  process.exit(1)
})
