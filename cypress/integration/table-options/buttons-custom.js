/* eslint-disable no-undef */
describe('Check custom buttons functionality', () => {
  it('Check if custom buttons was initialized', () => {
    cy.visit('./cypress/html/table-options/buttons-custom.html')
      .get('div.fixed-table-toolbar').should('have.length', 1)
      .get('div.fixed-table-toolbar button').should('have.length.above', 0)
  })

  it('Check if custom icon works', () => {
    cy.reload(true)
      .get('div.fixed-table-toolbar button')
      .first()
      .find('.fa-users').should('have.length', 1)
  })

  it('Check if custom attribute is set', () => {
    cy.reload(true)
      .get('div.fixed-table-toolbar button')
      .first()
      .invoke('attr', 'title')
      .should('equal', 'TITLE')
  })

  it('Check if custom event works', () => {
    cy.reload(true)
      .get('div.fixed-table-toolbar button')
      .first()
      .click()
      .get('#eventTest').should('have.text', 'event works!')
  })

  it('Check if render option works', () => {
    cy.reload(true)
      .get('div.fixed-table-toolbar').should('have.length', 1)
      .get('div.fixed-table-toolbar button').should('have.length', 2)
  })

  it('Check if custom html works', () => {
    cy.reload(true)
      .get('div.fixed-table-toolbar a#custom').should('have.length', 1)
  })
})
