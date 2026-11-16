module.exports = (theme = '') => {
  const baseUrl = require('../common/utils')(theme, 'extensions')

  describe('Fixed Columns Test', () => {
    it('should sync hover-row class between main table and fixed columns', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('.bootstrap-table').should('exist')
        .get('.fixed-columns').should('exist')

      // Hover a row in the main table body
      cy.get('.fixed-table-container > .fixed-table-body tr[data-index="0"]')
        .invoke('trigger', 'mouseenter')
      cy.get('.fixed-columns .fixed-table-body tr[data-index="0"]')
        .should('have.class', 'hover-row')

      // Leave the row - hover-row should be removed from the synced fixed row
      cy.get('.fixed-table-container > .fixed-table-body tr[data-index="0"]')
        .invoke('trigger', 'mouseleave')
      cy.get('.fixed-columns .fixed-table-body tr[data-index="0"]')
        .should('not.have.class', 'hover-row')
    })

    it('should sync hover-row class from fixed columns to main table', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('.bootstrap-table').should('exist')
        .get('.fixed-columns').should('exist')

      // Hover a row in the fixed columns body
      cy.get('.fixed-columns .fixed-table-body tr[data-index="1"]')
        .invoke('trigger', 'mouseenter')
      cy.get('.fixed-columns .fixed-table-body tr[data-index="1"]')
        .should('have.class', 'hover-row')
      cy.get('.fixed-table-container > .fixed-table-body tr[data-index="1"]')
        .should('have.class', 'hover-row')

      // Leave the row
      cy.get('.fixed-columns .fixed-table-body tr[data-index="1"]')
        .invoke('trigger', 'mouseleave')
      cy.get('.fixed-columns .fixed-table-body tr[data-index="1"]')
        .should('not.have.class', 'hover-row')
      cy.get('.fixed-table-container > .fixed-table-body tr[data-index="1"]')
        .should('not.have.class', 'hover-row')
    })

    it('should keep a single tab stop per cell (#6849)', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('.fixed-columns').should('exist')
        .get('.fixed-columns-right').should('exist')

      cy.window().then(win => {
        const $ = win.jQuery
        const table = $('#table', win.document).data('bootstrap.table')

        // The example renders plain text cells. Inject a focusable control into
        // every cell (main table and both cloned panes) so the tab stops can
        // be asserted without depending on a native Tab key press.
        $('.fixed-table-container td', win.document).each((i, td) => {
          $(td).append(`<input class="tab-probe" value="${td.cellIndex}">`)
        })
        table.updateFixedColumnsTabIndex()

        const left = table.getFixedColumnsCellRange()
        const right = table.getFixedColumnsCellRange(true)
        const tabbable = el => el.tabIndex !== -1
        const probe = td => $(td).find('.tab-probe')[0]

        // The left pane is prepended so Tab continues from it into the main table
        expect($('.fixed-table-container', win.document).children().first()
          .hasClass('fixed-columns')).to.equal(true)

        const panes = [
          { selector: '.fixed-columns', keep: left },
          { selector: '.fixed-columns-right', keep: right },
          { selector: '.fixed-table-container > .fixed-table-body', keep: null }
        ]

        panes.forEach(({ selector, keep }) => {
          $(`${selector} tbody tr[data-index] td`, win.document)
            .each((i, td) => {
              const index = td.cellIndex
              const expected = keep ? keep.includes(index) :
                !left.includes(index) && !right.includes(index)

              expect(tabbable(probe(td)), `${selector} cell ${index}`)
                .to.equal(expected)
            })
        })
      })
    })

    it('should keep footer cells tabbable (#6849)', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('#showFooter').check()
        .get('.fixed-table-footer th').should('have.length.greaterThan', 0)

      cy.window().then(win => {
        const $ = win.jQuery
        const table = $('#table', win.document).data('bootstrap.table')

        $('.fixed-table-footer th', win.document).each((i, th) => {
          $(th).append('<input class="tab-probe">')
        })
        table.updateFixedColumnsTabIndex()

        // The footer is never cloned into the panes, so it has no duplicate
        // tab stop and must stay fully tabbable.
        $('.fixed-table-footer .tab-probe', win.document).each((i, el) => {
          expect(el.tabIndex, `footer cell ${i}`).to.not.equal(-1)
        })
      })
    })
  })
}
