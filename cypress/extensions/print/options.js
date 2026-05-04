const stubWindowOpen = win => {
  const originalOpen = win.window.open
  let capturedHtml = ''

  win.window.open = () => ({
    document: {
      write (html) {
        capturedHtml = html
      },
      close () {}
    },
    focus () {},
    print () {},
    close () {}
  })

  return {
    getHtml () {
      return capturedHtml
    },
    restore () {
      win.window.open = originalOpen
    }
  }
}

module.exports = (theme = '') => {
  const baseUrl = require('../../common/utils')(theme, 'for-tests/extensions/print')

  describe('Print Extension Options', () => {
    // Options: showPrint
    it('Test showPrint shows print button', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
    })

    // Options: showPrint
    it('Test showPrint option is enabled when data-show-print is true', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')

          expect(instance).to.exist
          expect(instance.options.showPrint).to.be.true
        })
    })

    // Options: printIgnore column
    it('Test printIgnore excludes column from print output', () => {
      cy.visit(`${baseUrl}print-printIgnore.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            // Price column should be excluded from body
            expect(html).to.include('ID')
            expect(html).to.include('Name')
            expect(html).to.not.include('$100')
            expect(html).to.not.include('$200')
            expect(html).to.not.include('$300')

            // Price column should also be excluded from tfoot
            expect(instance.options.showFooter).to.be.true
            const tfootMatch = html.match(/<tfoot>[\s\S]*?<\/tfoot>/)

            expect(tfootMatch).to.not.be.null
            expect(tfootMatch[0]).to.not.include('$100')
            expect(tfootMatch[0]).to.not.include('Total')
          } finally {
            stub.restore()
          }
        })
    })

    // Column options: printFormatter
    it('Test printFormatter formats column value in print output', () => {
      cy.visit(`${baseUrl}print-printFormatter.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            // printFormatter should format price as $X.00
            expect(html).to.include('$100.00')
            expect(html).to.include('$200.00')
            expect(html).to.include('$300.00')
          } finally {
            stub.restore()
          }
        })
    })

    // Options: printSortColumn and printSortOrder
    it('Test printSortColumn and printSortOrder sort data in print output', () => {
      cy.visit(`${baseUrl}print-printSort.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            // Descending order: Cherry, Banana, Apple
            const cherryPos = html.indexOf('Cherry')
            const bananaPos = html.indexOf('Banana')
            const applePos = html.indexOf('Apple')

            expect(cherryPos).to.be.at.least(0)
            expect(bananaPos).to.be.at.least(0)
            expect(applePos).to.be.at.least(0)
            expect(cherryPos).to.be.lessThan(bananaPos)
            expect(bananaPos).to.be.lessThan(applePos)
          } finally {
            stub.restore()
          }
        })
    })

    // Column options: printFilter
    it('Test printFilter filters rows in print output', () => {
      cy.visit(`${baseUrl}print-printFilter.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            // Only active rows should be printed
            expect(html).to.include('Item 1')
            expect(html).to.include('Item 3')
            expect(html).to.not.include('Item 2')
          } finally {
            stub.restore()
          }
        })
    })

    // Options: showFooter with print
    it('Test print output contains tfoot tag when showFooter is enabled', () => {
      cy.visit(`${baseUrl}print-showFooter.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('<tfoot>')
            expect(html).to.include('</tfoot>')

            // Verify footer contains all columns with footerFormatter
            const tfootMatch = html.match(/<tfoot>[\s\S]*?<\/tfoot>/)

            expect(tfootMatch).to.not.be.null

            const tfootCells = tfootMatch[0].match(/<th>/g) || []

            expect(tfootCells.length).to.equal(3)

            // Verify footerFormatter result (total = 100+200+300=600)
            expect(tfootMatch[0]).to.include('$600')
          } finally {
            stub.restore()
          }
        })
    })

    // Options: printAsFilteredAndSortedOnUI
    it('Test printAsFilteredAndSortedOnUI defaults to true', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')

          expect(instance.options.printAsFilteredAndSortedOnUI).to.be.true
        })
    })

    // Print output contains all columns when no printIgnore
    it('Test print output contains all columns by default', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            // All three columns should be present
            expect(html).to.include('ID')
            expect(html).to.include('Name')
            expect(html).to.include('Price')

            // Header row
            expect(html).to.include('<thead>')
            expect(html).to.include('</thead>')

            // Body rows
            expect(html).to.include('<tbody>')
            expect(html).to.include('</tbody>')
            expect(html).to.include('$100')
            expect(html).to.include('$200')
            expect(html).to.include('$300')
          } finally {
            stub.restore()
          }
        })
    })

    // Print output uses custom printPageBuilder
    it('Test printPageBuilder option is used for print output', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          let customBuilderCalled = false
          const originalBuilder = instance.options.printPageBuilder

          instance.options.printPageBuilder = table => {
            customBuilderCalled = true
            return `<html><body><div class="custom-print">${table}</div></body></html>`
          }

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(customBuilderCalled).to.be.true
            expect(html).to.include('custom-print')
          } finally {
            instance.options.printPageBuilder = originalBuilder
            stub.restore()
          }
        })
    })

    // Print output structure validation
    it('Test print output contains valid HTML table structure', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            // Validate HTML structure
            expect(html).to.include('<html>')
            expect(html).to.include('<head>')
            expect(html).to.include('</head>')
            expect(html).to.include('<body>')
            expect(html).to.include('</body>')
            expect(html).to.include('Printed on:')
          } finally {
            stub.restore()
          }
        })
    })
  })
}
