/* eslint-disable no-undef */
describe('Check data detail filter option functionality', () => {
  beforeEach(() => {
    cy.visit('./cypress/html/table-options/data-detail-filter.html')
  })
  it('Check if the option works', () => {
    cy.wrap(new Promise(resolve => {
      cy.get('table').then($table => {
        $table.on('load-success.bs.table', resolve)
      })
    })).then(() => {
      cy.get('tr')
        .eq(2)
        .get('.detail-icon')
        .should('be.visible')
    })
  })
})
