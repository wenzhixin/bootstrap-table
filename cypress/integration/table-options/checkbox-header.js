/* eslint-disable no-undef */
describe('Check checkbox-header option functionality', () => {
  it('Check if the option works', () => {
    cy.visit('./cypress/html/table-options/checkbox-header.html')
      .get('input[name="btSelectAll"]')
      .should('have.length', 0)
  })
})
