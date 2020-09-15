/* eslint-disable no-undef */
describe('Check Buttons Class functionality', () => {
  it('Check if buttons class was initialized', () => {
    cy.visit('./cypress/html/core/buttons-class.html')
      .get('div.fixed-table-toolbar').should('have.length', 1)
      .get('div.fixed-table-toolbar > .columns > .btn-primary').should('have.length', 1)
  })
})