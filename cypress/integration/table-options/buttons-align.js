/* eslint-disable no-undef */
describe('Check Buttons Align functionality', () => {
  it('Check if buttons align was initialized', () => {
    cy.visit('./cypress/html/table-options/buttons-align.html')
      .get('div.fixed-table-toolbar').should('have.length', 1)
      .get('div.fixed-table-toolbar > .columns-left').should('have.length', 1)
  })
})
