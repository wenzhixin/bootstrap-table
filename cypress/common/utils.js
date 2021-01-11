module.exports = (theme, dir) => {
  return theme ? `./cypress/html/for-test-${theme}.html?url=${dir}/` :
    `./cypress/html/for-test.html?url=${dir}/`
}
