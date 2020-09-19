/* eslint-disable no-undef */
describe('Check click to select option functionality', () => {
  it('Check if the option works', () => {
    cy.visit('./cypress/html/table-options/click-to-select.html')
      .wait(100)
      .get('tr').eq(2)
      .click()
      .get('input[type="checkbox"]').eq(2)
      .should('be.checked')
  })
})
