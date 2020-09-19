/* eslint-disable no-undef */
describe('Check custom search option functionality', () => {
  it('Check if the option works', () => {
    cy.visit('./cypress/html/table-options/custom-search.html')
      .get('tbody tr')
      .should('have.length', 1)
      .get('tbody tr td')
      .eq(2)
      .should('have.text', '$1')
  })
})
