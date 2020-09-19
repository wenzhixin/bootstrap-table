/* eslint-disable no-undef */
describe('Check classes option functionality', () => {
  it('Check if the option works', () => {
    cy.visit('./cypress/html/table-options/classes.html')
      .get('table')
      .should('have.class', 'custom-classes')
  })
})
