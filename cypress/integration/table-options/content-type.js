/* eslint-disable no-undef */
describe('Check content type option functionality', () => {
  beforeEach(() => {
    cy.visit('./cypress/html/table-options/content-type.html')
  })
  it('Check if the option works', () => {
    cy.wrap(new Promise(resolve => {
      cy.get('table').then($table => {
        $table.on('load-success.bs.table', resolve)
      })
    })).then(() => {
      cy.get('tbody tr')
        .should($trs => {
          expect($trs.length).to.be.greaterThan(0)
        })
    })
  })
})
