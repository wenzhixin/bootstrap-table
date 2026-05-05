const stubWindowOpen = win => {
  const originalOpen = win.window.open
  let capturedHtml = ''
  const linkElements = []

  const fakeDoc = {
    write (html) {
      capturedHtml = html
    },
    close () {},
    getElementsByTagName () {
      return []
    },
    querySelectorAll (selector) {
      if (selector === 'link[rel="stylesheet"]') {
        return linkElements
      }
      return []
    }
  }

  win.window.open = () => ({
    document: fakeDoc,
    focus () {},
    print () {},
    close () {}
  })

  return {
    getHtml () {
      return capturedHtml
    },
    getLinkElements () {
      return linkElements
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

    // Options: showFooter with print and rowspan/colspan columns
    it('Test print footer output with rowspan/colspan columns', () => {
      cy.visit(`${baseUrl}print-footer-rowspan-colspan.html`)
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

            const tfootMatch = html.match(/<tfoot>[\s\S]*?<\/tfoot>/)

            expect(tfootMatch).to.not.be.null

            const tfootCells = tfootMatch[0].match(/<th>/g) || []

            expect(tfootCells.length).to.equal(3)

            // Verify footerFormatter results
            expect(tfootMatch[0]).to.include('$600')
            expect(tfootMatch[0]).to.include('3 items')
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
            expect(html).to.include('print-color-adjust')
          } finally {
            stub.restore()
          }
        })
    })

    // rowStyle and cellStyle support
    it('Test rowStyle applies css and classes to print output', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          instance.options.rowStyle = () => ({
            css: { 'background-color': 'yellow' },
            classes: 'row-highlight'
          })

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('style="background-color: yellow"')
            expect(html).to.include('class="row-highlight"')
          } finally {
            stub.restore()
          }
        })
    })

    it('Test cellStyle applies css and classes to print output', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          instance.options.columns[0][0].cellStyle = () => ({
            css: { color: 'red' },
            classes: 'cell-bold'
          })
          instance.header.cellStyles = instance.header.cellStyles || []
          instance.header.cellStyles[0] = instance.options.columns[0][0].cellStyle

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('style="color: red"')
            expect(html).to.include('class="cell-bold"')
          } finally {
            stub.restore()
          }
        })
    })

    it('Test cellStyle with string css format', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          instance.options.columns[0][0].cellStyle = () => ({
            css: 'background-color: blue'
          })
          instance.header.cellStyles = instance.header.cellStyles || []
          instance.header.cellStyles[0] = instance.options.columns[0][0].cellStyle

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('style="background-color: blue"')
          } finally {
            stub.restore()
          }
        })
    })

    it('Test cellStyle with array css format', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          instance.options.columns[0][0].cellStyle = () => ({
            css: ['color: red', { 'font-weight': 'bold' }]
          })
          instance.header.cellStyles = instance.header.cellStyles || []
          instance.header.cellStyles[0] = instance.options.columns[0][0].cellStyle

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('color: red')
            expect(html).to.include('font-weight: bold')
          } finally {
            stub.restore()
          }
        })
    })

    it('Test rowStyle with string css format', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          instance.options.rowStyle = (row, index) => ({
            css: index === 0 ? 'background-color: blue' : { color: 'white' }
          })

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('background-color: blue')
            expect(html).to.include('color: white')
          } finally {
            stub.restore()
          }
        })
    })

    it('Test rowStyle with array css format', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          instance.options.rowStyle = () => ({
            css: ['color: red', { 'font-weight': 'bold' }]
          })

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('color: red')
            expect(html).to.include('font-weight: bold')
          } finally {
            stub.restore()
          }
        })
    })

    it('Test rowStyle handles falsy items in array css', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          const condition = false

          instance.options.rowStyle = () => ({
            css: [condition && { color: 'red' }, 'font-size: 14px']
          })

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('font-size: 14px')
          } finally {
            stub.restore()
          }
        })
    })

    it('Test rowStyle with HTML-sourced _class and _style', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          data[0]._class = 'row-from-html'
          data[1]._style = 'background-color: green'

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('class="row-from-html"')
            expect(html).to.include('style="background-color: green"')
          } finally {
            stub.restore()
          }
        })
    })

    it('Test cellStyle with HTML-sourced _field_class and _field_style', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          data[0]._name_class = 'cell-from-html'
          data[1]._name_style = 'color: blue'

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('class="cell-from-html"')
            expect(html).to.include('style="color: blue"')
          } finally {
            stub.restore()
          }
        })
    })

    // printStyles loading
    it('Test printStyles injects link tags into print HTML', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          instance.options.printStyles = ['style1.css', 'style2.css']

          try {
            instance.doPrint(data)
            const html = stub.getHtml()

            expect(html).to.include('href="style1.css"')
            expect(html).to.include('href="style2.css"')
          } finally {
            stub.restore()
          }
        })
    })

    it('Test printStyles waits for all stylesheets to load before printing', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()

          let printCount = 0
          const loadCallbacks = []

          const originalOpen = win.window.open

          const createFakeLink = () => {
            const link = {
              eventListeners: {},
              addEventListener (event, callback) {
                if (!link.eventListeners[event]) {
                  link.eventListeners[event] = []
                }
                link.eventListeners[event].push(callback)
              },
              triggerLoad () {
                (link.eventListeners.load || []).forEach(cb => cb())
              },
              triggerError () {
                (link.eventListeners.error || []).forEach(cb => cb())
              }
            }

            return link
          }

          win.window.open = () => {
            const links = []

            for (let i = 0; i < 3; i++) {
              const link = createFakeLink()

              links.push(link)
              loadCallbacks.push(link)
            }
            return {
              document: {
                write () {},
                close () {},
                querySelectorAll (selector) {
                  if (selector === 'link[rel="stylesheet"]') {
                    return links
                  }
                  return []
                }
              },
              focus () {},
              print () {
                printCount++
              },
              close () {}
            }
          }

          instance.options.printStyles = ['a.css', 'b.css', 'c.css']

          try {
            instance.doPrint(data)

            // Trigger first two loads - print should not be called yet
            loadCallbacks[0].triggerLoad()
            loadCallbacks[1].triggerLoad()
            expect(printCount).to.equal(0)

            // Trigger third load - print should now be called
            loadCallbacks[2].triggerLoad()
            expect(printCount).to.equal(1)
          } finally {
            win.window.open = originalOpen
          }
        })
    })

    it('Test printStyles handles stylesheet load error', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()

          let printCount = 0
          const loadCallbacks = []

          const originalOpen = win.window.open

          const createFakeLink = () => {
            const link = {
              eventListeners: {},
              addEventListener (event, callback) {
                if (!link.eventListeners[event]) {
                  link.eventListeners[event] = []
                }
                link.eventListeners[event].push(callback)
              },
              triggerLoad () {
                (link.eventListeners.load || []).forEach(cb => cb())
              },
              triggerError () {
                (link.eventListeners.error || []).forEach(cb => cb())
              }
            }

            return link
          }

          win.window.open = () => {
            const links = []

            for (let i = 0; i < 2; i++) {
              const link = createFakeLink()

              links.push(link)
              loadCallbacks.push(link)
            }
            return {
              document: {
                write () {},
                close () {},
                querySelectorAll (selector) {
                  if (selector === 'link[rel="stylesheet"]') {
                    return links
                  }
                  return []
                }
              },
              focus () {},
              print () {
                printCount++
              },
              close () {}
            }
          }

          instance.options.printStyles = ['valid.css', 'broken.css']

          try {
            instance.doPrint(data)

            // One loads, one errors - print should be called after both
            loadCallbacks[0].triggerLoad()
            expect(printCount).to.equal(0)

            loadCallbacks[1].triggerError()
            expect(printCount).to.equal(1)
          } finally {
            win.window.open = originalOpen
          }
        })
    })

    it('Test waits for stylesheet injected by custom printPageBuilder', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()

          let printCount = 0
          const loadCallbacks = []

          const originalOpen = win.window.open

          const createFakeLink = () => {
            const link = {
              eventListeners: {},
              addEventListener (event, callback) {
                if (!link.eventListeners[event]) {
                  link.eventListeners[event] = []
                }
                link.eventListeners[event].push(callback)
              },
              triggerLoad () {
                (link.eventListeners.load || []).forEach(cb => cb())
              }
            }

            return link
          }

          win.window.open = () => {
            const link = createFakeLink()

            loadCallbacks.push(link)
            return {
              document: {
                write () {},
                close () {},
                querySelectorAll (selector) {
                  if (selector === 'link[rel="stylesheet"]') {
                    return [link]
                  }
                  return []
                }
              },
              focus () {},
              print () {
                printCount++
              },
              close () {}
            }
          }

          instance.options.printStyles = []
          instance.options.printPageBuilder = table =>
            `<html><head><link rel="stylesheet" href="custom.css" /></head><body>${table}</body></html>`

          try {
            instance.doPrint(data)

            expect(printCount).to.equal(0)

            loadCallbacks[0].triggerLoad()
            expect(printCount).to.equal(1)
          } finally {
            win.window.open = originalOpen
          }
        })
    })

    it('Test printPageBuilder receives styles as second argument', () => {
      cy.visit(`${baseUrl}print.html`)
        .get('.fixed-table-toolbar [name="print"]')
        .should('exist')
        .window().then(win => {
          const instance = win.$('#table').data('bootstrap.table')
          const data = instance.getData()
          const stub = stubWindowOpen(win)

          let receivedStyles = null

          instance.options.printStyles = ['custom.css']
          instance.options.printPageBuilder = (table, styles) => {
            receivedStyles = styles
            return `<html><body>${table}</body></html>`
          }

          try {
            instance.doPrint(data)

            expect(receivedStyles).to.include('href="custom.css"')
            expect(receivedStyles).to.include('<link')
            expect(receivedStyles).to.not.include('onload=')
            expect(receivedStyles).to.not.include('onerror=')
          } finally {
            stub.restore()
          }
        })
    })
  })
}
