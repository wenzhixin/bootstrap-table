/* eslint-disable no-undef */
describe('Check columns option functionality', () => {
  it('Check if the option works', () => {
    cy.visit('./cypress/html/table-options/columns.html')
      .get('thead tr th')
      .should('have.length', 2)
  })
})
