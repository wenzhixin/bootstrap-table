/* eslint-disable no-undef */
describe('Check data type option functionality', () => {
  beforeEach(() => {
    cy.visit('./cypress/html/table-options/data-type.html')
  })
  it('Check if the option works', () => {
    cy.wrap(new Promise(resolve => {
      cy.get('table').then($table => {
        $table.on('load-success.bs.table', resolve)
      })
    })).then(() => {
      cy.get('tbody tr')
        .should('be.length.above', 0)
    })
  })
})
