module.exports = (theme = '') => {
  const baseUrl = require('../common/utils')(theme, 'extensions')

  describe('Reorder Columns Test', () => {
    it('should render the table with reorderable columns enabled', () => {
      cy.visit(`${baseUrl}reorder-columns.html`)
        .get('.bootstrap-table').should('exist')
        .get('.bootstrap-table thead th').should('have.length.gte', 3)
    })

    it('should have correct default column order', () => {
      cy.visit(`${baseUrl}reorder-columns.html`)
        .get('.bootstrap-table thead th').first()
        .should('have.attr', 'data-field', 'id')
        .get('.bootstrap-table thead th').eq(1)
        .should('have.attr', 'data-field', 'name')
        .get('.bootstrap-table thead th').eq(2)
        .should('have.attr', 'data-field', 'price')
    })

    it('should reorder columns using orderColumns method (name, id, price)', () => {
      cy.visit(`${baseUrl}reorder-columns.html`)
        .get('.bootstrap-table').should('exist')
      cy.window().then(win => {
        win.$('#table').bootstrapTable('orderColumns', {
          name: 0,
          id: 1,
          price: 2
        })
      })
      cy.get('.bootstrap-table thead th').first()
        .should('have.attr', 'data-field', 'name')
      cy.get('.bootstrap-table thead th').eq(1)
        .should('have.attr', 'data-field', 'id')
      cy.get('.bootstrap-table thead th').eq(2)
        .should('have.attr', 'data-field', 'price')
    })

    it('should reorder columns using orderColumns method (price, name, id)', () => {
      cy.visit(`${baseUrl}reorder-columns.html`)
        .get('.bootstrap-table').should('exist')
      cy.window().then(win => {
        win.$('#table').bootstrapTable('orderColumns', {
          price: 0,
          name: 1,
          id: 2
        })
      })
      cy.get('.bootstrap-table thead th').first()
        .should('have.attr', 'data-field', 'price')
      cy.get('.bootstrap-table thead th').eq(1)
        .should('have.attr', 'data-field', 'name')
      cy.get('.bootstrap-table thead th').eq(2)
        .should('have.attr', 'data-field', 'id')
    })
  })
}
