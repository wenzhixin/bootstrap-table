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
