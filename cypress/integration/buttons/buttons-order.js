/* eslint-disable no-undef */
describe('Check Buttons order functionality', () => {
  it('Check if buttons order was initialized', () => {
    cy.visit('./cypress/html/buttons/buttons-order.html')
      .get('div.fixed-table-toolbar').should('have.length', 1)
      .get('div.fixed-table-toolbar > .columns').should('have.length', 1)
  })

  it('Check if refresh button is the first one', () => {
    cy.reload(true)
      .get('div.fixed-table-toolbar > .columns > button')
      .first()
      .invoke('attr', 'name')
      .should('equal', 'refresh')
  })
})
