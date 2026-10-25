module.exports = (theme, dir) => theme ? `./cypress/html/for-test-${theme}.html?url=${dir}/` :
  `./cypress/html/for-test.html?url=${dir}/`
