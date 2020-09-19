/* eslint-disable no-undef */
describe('Check toggle card view functionality', () => {
  it('Card-view toggle', () => {
    cy.visit('./cypress/html/core/toggle-card-view.html')
      .get('button[title="Show card view"]')
      .should('have.length', 1)
      .click()
      .get('.fixed-table-body tbody')
      .find('.card-views')
      .should('have.length.greaterThan', 0)
  })

  it('Card-view toggle to normal view', () => {
    cy.reload(true)
      .get('button[title="Show card view"]')
      .should('have.length', 1)
      .click()
      .get('.fixed-table-body tbody')
      .find('.card-views')
      .get('button[title="Show card view"]')
      .click()
      .get('.fixed-table-body tbody')
      .find('.card-views')
      .should('have.length', 0)
  })
})
