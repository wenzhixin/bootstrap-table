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

  describe('Fixed Columns Footer Test', () => {
    it('should render footers in the fixed columns when showFooter is enabled', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('.bootstrap-table').should('exist')
        .get('.fixed-columns').should('exist')

      // Enable the footer, which triggers a rebuild of the table
      cy.get('#showFooter').check()

      // The fixed left column renders a footer cloned from the main footer
      cy.get('.fixed-columns > .fixed-table-footer').should('exist')
      // The fixed right column renders a footer too
      cy.get('.fixed-columns-right > .fixed-table-footer').should('exist')

      // The fixed footer cells mirror the main footer content
      cy.get('.fixed-table-container > .fixed-table-footer th').its('length').then(total => {
        cy.get('.fixed-columns > .fixed-table-footer th').its('length')
          .should('eq', total)
      })
    })

    it('should not render footers when showFooter is disabled', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('.bootstrap-table').should('exist')

      // showFooter is unchecked by default
      cy.get('#showFooter').uncheck()
      cy.get('.fixed-columns > .fixed-table-footer').should('not.exist')
      cy.get('.fixed-columns-right > .fixed-table-footer').should('not.exist')
    })

    it('should keep the footer inside the body when height is not set', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('.bootstrap-table').should('exist')
        .get('.fixed-columns').should('exist')

      // Without a fixed height, the footer is a <tfoot> within the table body.
      // The fixed columns must not clone a separate footer area in that case.
      cy.get('#height').uncheck()
      cy.get('#showFooter').check()

      cy.get('.fixed-columns > .fixed-table-footer').should('not.exist')
      cy.get('.fixed-columns-right > .fixed-table-footer').should('not.exist')
      // the <tfoot> footer still renders inside the fixed body
      cy.get('.fixed-columns .fixed-table-body tfoot').should('exist')
    })

    it('should align the fixed footers with the main footer', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('.bootstrap-table').should('exist')
        .get('.fixed-columns').should('exist')

      cy.get('#showFooter').check()

      cy.get('.fixed-columns > .fixed-table-footer').should($fixedFooter => {
        const mainFooter = $fixedFooter[0].ownerDocument
          .querySelector('.fixed-table-container > .fixed-table-footer')

        expect($fixedFooter[0].getBoundingClientRect().bottom)
          .to.be.closeTo(mainFooter.getBoundingClientRect().bottom, 1)
      })

      cy.get('.fixed-columns-right > .fixed-table-footer').should($fixedFooterRight => {
        const mainFooter = $fixedFooterRight[0].ownerDocument
          .querySelector('.fixed-table-container > .fixed-table-footer')

        // the footer sits in the same band as the main footer
        expect($fixedFooterRight[0].getBoundingClientRect().bottom)
          .to.be.closeTo(mainFooter.getBoundingClientRect().bottom, 1)
        // and reserves the same vertical scroll bar gutter as the main footer,
        // so its columns stay aligned with the right fixed header/body
        const win = $fixedFooterRight[0].ownerDocument.defaultView

        expect(win.getComputedStyle($fixedFooterRight[0]).marginRight)
          .to.equal(win.getComputedStyle(mainFooter).marginRight)
      })
    })

    it('should align the fixed footer columns with the fixed header columns', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('.bootstrap-table').should('exist')
        .get('.fixed-columns').should('exist')

      cy.get('#showFooter').check()

      // the left footer is pinned to the left edge like the left header
      cy.get('.fixed-columns > .fixed-table-footer th').first().should($footerTh => {
        const doc = $footerTh[0].ownerDocument
        const headerTh = doc.querySelector('.fixed-columns > .fixed-table-header th')

        expect($footerTh[0].getBoundingClientRect().left)
          .to.be.closeTo(headerTh.getBoundingClientRect().left, 2)
      })

      // the right footer reserves the vertical scroll bar gutter, so its last
      // column must end where the last right header column ends
      cy.get('.fixed-columns-right > .fixed-table-footer th').last().should($footerTh => {
        const doc = $footerTh[0].ownerDocument
        const headerThs = doc.querySelectorAll('.fixed-columns-right > .fixed-table-header th')
        const lastHeaderTh = headerThs[headerThs.length - 1]

        expect($footerTh[0].getBoundingClientRect().right)
          .to.be.closeTo(lastHeaderTh.getBoundingClientRect().right, 2)
      })
    })

    it('should keep the fixed footers pinned when the table is scrolled horizontally', () => {
      cy.visit(`${baseUrl}fixed-columns.html`)
        .get('.bootstrap-table').should('exist')
        .get('.fixed-columns').should('exist')

      cy.get('#showFooter').check()

      // scroll the main body horizontally to the right
      cy.get('.fixed-table-container > .fixed-table-body').scrollTo('right')

      // the left fixed footer stays pinned to its leftmost position
      cy.get('.fixed-columns > .fixed-table-footer').then($el => {
        expect($el.scrollLeft()).to.eq(0)
      })
      // the right fixed footer stays pinned to its rightmost position
      cy.get('.fixed-columns-right > .fixed-table-footer').then($el => {
        expect($el.scrollLeft()).to.be.greaterThan(0)
      })
    })
  })
}
