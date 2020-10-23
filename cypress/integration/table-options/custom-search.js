/* eslint-disable no-undef */
describe('Check custom search option functionality', () => {
  beforeEach(() => {
    cy.visit('./cypress/html/table-options/custom-search.html')
  })
  it('Check if the custom search works', () => {
    cy.wrap(new Promise(resolve => {
      cy.get('table').then($table => {
        $table.on('load-success.bs.table', resolve)
      })
    })).then(() => {
      cy.get('tbody tr')
        .should('have.length', 1)
        .get('tbody tr td')
        .eq(2)
        .should('have.text', '$1')
    })
  })
})
