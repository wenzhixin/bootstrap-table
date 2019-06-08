const fs = require('fs')
const safeEval = require('safe-eval')
const _ = require('lodash')
const chalk = require('chalk')

const DIR = '../src/locale/'
const readObj = text => {
  return safeEval(text.replace('($ => {', '')
    .replace('})(jQuery)', '')
    .replace(/\$\.fn\.bootstrapTable\.locales\['.*'\] = /, '')
    .replace(/\$\.extend.*/, '').trim())
}
const readString = (obj, text) => {
  const lines = text.split('\n')
  for (const key in obj) {
    if (obj[key]) {
      const index = _.findIndex(lines, line => line.includes(key))
      if (Object.keys(obj).pop() === key) {
        lines[index + 2] += ','
      }
      obj[key] = lines.slice(index, index + 3).join('\n')
    }
  }
  return obj
}
const baseText = fs.readFileSync(DIR + 'bootstrap-table-en-US.js').toString()
const baseObj = readString(readObj(baseText), baseText)

fs.readdir(`${DIR}`, (err, files) => {
  let errorSum = 0
  for (const file of files) {
    if (!/\.js$/.test(file) || file === 'bootstrap-table-en-US.js') {
      continue
    }

    const text = fs.readFileSync(DIR + file).toString()
    const obj = readString(readObj(text), text)
    const keys = Object.keys(obj)
    let offset = 0
    const errors = []

    for (const [i, key] of Object.keys(baseObj).entries()) {
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
