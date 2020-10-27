/* eslint-disable no-undef */
describe('Check data option functionality', () => {
  it('Check if the option works', () => {
    cy.visit('./cypress/html/table-options/data.html')
      .get('tbody tr')
      .should('be.length.above', 2)
  })
})
