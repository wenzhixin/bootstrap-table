import fs from 'fs'
import chalk from 'chalk'
import shell from 'shelljs'
import _ from 'lodash'

const autoFix = process.argv[2] === '--fix'
const DIR = '../src/locale/'
const readKeys = text => {
  const map = {}
  let key = 'start'
  let value = []

  for (const line of text.split('\n')) {
    if (line === '}') {
      map[key] = value.slice(0, -1).join('\n')
      value = [line]
    } else if (line.startsWith('  format')) {
      map[key] = value.join('\n')
      value = [line]
      key = line.trim().split(' ')[0]
    } else {
      value.push(line)
    }
  }
  map.end = value.join('\n')
  return map
}
const baseText = fs.readFileSync(DIR + 'bootstrap-table-en-US.js').toString()
const baseKeys = readKeys(baseText)

for (const key of Object.keys(baseKeys)) {
  if (!shell.exec(`grep -r "${key}" --exclude-dir="*locale*" ../src`, { silent: true }).stdout) {
    console.log(`Defined but unused key: '${key}'`)
    process.exit(1)
  }
}

fs.readdir(`${DIR}`, (err, files) => {
  let errorSum = 0
  for (const file of files) {
    if (!/\.js$/.test(file) || file === 'bootstrap-table-en-US.js') {
      continue
    }

    const text = fs.readFileSync(DIR + file).toString()
    const map = readKeys(text)
    const keys = Object.keys(map)
    let offset = 0
    const errors = []

    for (const [i, key] of Object.keys(baseKeys).entries()) {
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
