/* eslint-disable no-undef */
describe('Check custom sort option functionality', () => {
  it('Check if the option works', () => {
    cy.visit('./cypress/html/table-options/custom-sort.html')
      .wait(200)
      .get('thead th')
      .first()
      .click()
      .get('tbody td')
      .first()
      .should('have.text', '7')
  })
})
