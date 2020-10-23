/* eslint-disable no-undef */
describe('Check custom sort option functionality', () => {
  beforeEach(() => {
    cy.visit('./cypress/html/table-options/custom-sort.html')
  })
  it('Check if the custom sort works', () => {
    cy.wrap(new Promise(resolve => {
      cy.get('table').then($table => {
        $table.on('load-success.bs.table', resolve)
      })
    })).then(() => {
      cy.get('thead th:first-of-type')
        .dblclick()
        .get('tbody tr td')
        .first()
        .should('have.text', '7')
    })
  })
})
