/* eslint-disable no-undef */
describe('Check data field option functionality', () => {
  beforeEach(() => {
    cy.visit('./cypress/html/table-options/data-field.html')
  })
  it('Check if the option works', () => {
    cy.wrap(new Promise(resolve => {
      cy.get('table').then($table => {
        $table.on('load-success.bs.table', resolve)
      })
    })).then(() => {
      cy.get('.pagination-info')
        .contains('200')
    })
  })
})
