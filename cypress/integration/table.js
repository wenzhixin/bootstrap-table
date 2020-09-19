/* eslint-disable no-undef */
describe('Core functionality', () => {
  it('Table loading', () => {
    cy.visit('./cypress/html/core/core.html')
      .get('div.bootstrap-table').should('exist')
      .get('tr.no-records-found').should('not.be.visible')
  })

  it('Table with data - check if "no records" text is not visible', () => {
    cy.visit('./cypress/html/core/core.html')
      .get('tr.no-records-found').should('not.be.visible')
  })

  it('Table loading without data', () => {
    cy.visit('./cypress/html/core/no-data.html')
      .get('div.bootstrap-table').should('exist')
      .get('tr.no-records-found').should('be.visible')
  })

  it('Table without data - check if "no records" text is visible', () => {
    cy.visit('./cypress/html/core/no-data.html')
      .get('tr.no-records-found').should('not.be.visible')
  })
})
