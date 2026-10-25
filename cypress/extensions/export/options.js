module.exports = (theme = '') => {
  const baseUrl = require('../../common/utils')(theme, 'for-tests/extensions/export')

  describe('Export Extension Options', () => {
    // Options: showExport
    it('Test showExport shows export button with dropdown', () => {
      cy.visit(`${baseUrl}export-showExport.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .get('.fixed-table-toolbar .export .dropdown-toggle')
        .should('exist')
        .get('.fixed-table-toolbar .export [data-type]')
        .should('have.length', 6) // json, xml, csv, txt, sql, excel
    })

    // Options: exportTypes (single type)
    it('Test exportTypes with single type shows button without dropdown', () => {
      cy.visit(`${baseUrl}export-singleType.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .get('.fixed-table-toolbar .export .dropdown-toggle')
        .should('not.exist')
        .get('.fixed-table-toolbar .export button')
        .should('exist')
        .get('.fixed-table-toolbar .export')
        .should('have.attr', 'data-type', 'csv')
    })

    // Options: exportTypes (custom all types)
    it('Test exportTypes with all built-in types shows correct dropdown items', () => {
      cy.visit(`${baseUrl}export-customTypes.html`)
        .get('.fixed-table-toolbar .export [data-type="json"]').should('exist')
        .get('.fixed-table-toolbar .export [data-type="xml"]').should('exist')
        .get('.fixed-table-toolbar .export [data-type="csv"]').should('exist')
        .get('.fixed-table-toolbar .export [data-type="txt"]').should('exist')
        .get('.fixed-table-toolbar .export [data-type="sql"]').should('exist')
        .get('.fixed-table-toolbar .export [data-type="excel"]').should('exist')
    })

    // Options: exportTypes (multiple types - partial list)
    it('Test exportTypes with multiple types shows correct dropdown items', () => {
      cy.visit(`${baseUrl}export-multipleTypes.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .get('.fixed-table-toolbar .export [data-type]')
        .should('have.length', 2)
        .get('.fixed-table-toolbar .export [data-type="json"]').should('exist')
        .get('.fixed-table-toolbar .export [data-type="csv"]').should('exist')
    })

    // Options: exportDataType = 'selected', button disabled when no selection
    it('Test exportDataType=selected disables button when no rows selected', () => {
      cy.visit(`${baseUrl}export-dataType-selected.html`)
        .get('.fixed-table-toolbar .export > button')
        .should('be.disabled')
    })

    // Options: exportDataType = 'selected', button enabled after selection
    it('Test exportDataType=selected enables button after row selection', () => {
      cy.visit(`${baseUrl}export-dataType-selected.html`)
        .get('.fixed-table-toolbar .export > button')
        .should('be.disabled')
        .get('tbody tr[data-index="0"] input[type="checkbox"]').check()
        .get('.fixed-table-toolbar .export > button')
        .should('not.be.disabled')
    })

    // Options: exportDataType = 'all' with pagination
    it('Test exportDataType=all with pagination shows export button', () => {
      cy.visit(`${baseUrl}export-dataType-all.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .get('.fixed-table-pagination')
        .should('exist')
        .get('tbody tr')
        .its('length')
        .should('eq', 10) // pageSize=10
    })

    // Options: exportFooter
    it('Test exportFooter shows footer in table', () => {
      cy.visit(`${baseUrl}export-footer.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .get('.fixed-table-footer')
        .should('exist')
    })

    // Column options: forceExport
    it('Test forceExport column option is set in column configuration', () => {
      cy.visit(`${baseUrl}export-forceExport.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .window().then(win => {
          const allCols = win.$('#table').bootstrapTable('getOptions').columns[0]
          const secretCol = allCols.find(c => c.field === 'secret')

          expect(secretCol).to.not.be.undefined
          expect(secretCol.forceExport).to.equal(true)
        })
    })

    // Column options: forceHide
    it('Test forceHide column option is set in column configuration', () => {
      cy.visit(`${baseUrl}export-forceHide.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .window().then(win => {
          const allCols = win.$('#table').bootstrapTable('getOptions').columns[0]
          const iconCol = allCols.find(c => c.field === 'icon')

          expect(iconCol).to.not.be.undefined
          expect(iconCol.forceHide).to.equal(true)
        })
    })

    // Events: export-started
    it('Test export-started internal event mapping', () => {
      cy.visit(`${baseUrl}export-events.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .window().then(win => {
          const events = win.$.fn.bootstrapTable.events

          expect(events).to.have.property('export-started.bs.table')
          expect(events['export-started.bs.table']).to.equal('onExportStarted')
        })
    })

    it('Test export-started jQuery event listener fires correctly', () => {
      cy.visit(`${baseUrl}export-events.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .window().then(win => {
          expect(win._exportStarted).to.be.undefined

          win.$('#table').trigger('export-started.bs.table')
          expect(win._exportStarted).to.equal(true)
        })
    })

    // Events: export-saved
    it('Test export-saved internal event mapping', () => {
      cy.visit(`${baseUrl}export-events.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .window().then(win => {
          const events = win.$.fn.bootstrapTable.events

          expect(events).to.have.property('export-saved.bs.table')
          expect(events['export-saved.bs.table']).to.equal('onExportSaved')
        })
    })

    it('Test export-saved jQuery event listener receives data', () => {
      cy.visit(`${baseUrl}export-events.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .window().then(win => {
          expect(win._exportSaved).to.be.undefined
          expect(win._exportedData).to.be.undefined

          const testData = [{ id: 1 }, { id: 2 }]

          win.$('#table').trigger('export-saved.bs.table', [testData])

          expect(win._exportSaved).to.equal(true)
          expect(win._exportedData).to.deep.equal(testData)
        })
    })

    // Methods: exportTable
    it('Test exportTable() method triggers export with events', () => {
      cy.visit(`${baseUrl}export-method.html`)
        .get('.fixed-table-body')
        .should('exist')
        .window().then(win => {
          const $table = win.$('#table')

          // Verify the method exists
          expect(typeof $table.bootstrapTable).to.equal('function')

          let tableExportCalled = false
          const originalTableExport = win.$.fn.tableExport

          try {
            // eslint-disable-next-line no-unused-vars
            win.$.fn.tableExport = function (_options) {
              tableExportCalled = true
              return this
            }

            let exportStarted = false
            let exportSaved = false

            $table.on('export-started.bs.table', () => {
              exportStarted = true
            })
            $table.on('export-saved.bs.table', () => {
              exportSaved = true
            })

            $table.bootstrapTable('exportTable', { type: 'csv' })

            expect(exportStarted, 'export-started event should be triggered').to.be.true
            expect(exportSaved, 'export-saved event should be triggered').to.be.true
            expect(tableExportCalled, 'tableExport plugin should be called').to.be.true
          } finally {
            win.$.fn.tableExport = originalTableExport
          }
        })
    })

    // Options: exportOptions.fileName as function
    it('Test exportOptions.fileName as function', () => {
      cy.visit(`${baseUrl}export-fileName-function.html`)
        .get('.fixed-table-toolbar .export')
        .should('exist')
        .window().then(win => {
          const opts = win.$('#table').bootstrapTable('getOptions')

          expect(typeof opts.exportOptions.fileName).to.equal('function')
          expect(opts.exportOptions.fileName()).to.equal('custom-export-name')
        })
    })
  })
}
