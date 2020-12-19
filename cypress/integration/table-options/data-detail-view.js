/* eslint-disable no-undef */
describe('Check data detail view option functionality', () => {
  beforeEach(() => {
    cy.visit('./cypress/html/table-options/data-detail-view.html')
  })
  it('Check if the option works', () => {
    cy.wrap(new Promise(resolve => {
      cy.get('table').then($table => {
        $table.on('load-success.bs.table', resolve)
      })
    })).then(() => {
      cy.wait(100) // I'm not sure about this but if we don't wait, the test fails.
        .get('tr')
        .eq(2)
        .within(() => {
          cy.get('.detail-icon')
            .click()
        })
        .get('.detail-view')
        .should('be.visible')
    })
  })
})
