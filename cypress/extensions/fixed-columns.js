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
}
