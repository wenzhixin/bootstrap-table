/* eslint-disable no-undef */
describe('Check search functionality', () => {
  it('Search', () => {
    cy.visit('./cypress/html/core/core.html')
      .get('.search-input')
      .type('scutech-redmine')
      .get('.fixed-table-body tbody')
      .find('tr')
      .should('have.length', 1)
      .get('td')
      .eq(1)
      .should('contain.text', 24)
  })

  it('Clear Search', () => {
    cy.reload(true)
      .get('.search-input')
      .type('scutech-redmine')
      .clear()
      .get('.fixed-table-body tbody')
      .find('tr')
      .should('have.length', 5)
  })
})
