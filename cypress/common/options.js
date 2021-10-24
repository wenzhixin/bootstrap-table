module.exports = (theme = '') => {
  const baseUrl = require('./utils')(theme, 'options')

  describe('Welcome Test', () => {
    it('Test Custom AJAX', () => {
      cy.visit(`${baseUrl}table-ajax.html`)
        .get('.fixed-table-pagination >.pagination-detail').should('have.length', 1)
        .get('.fixed-table-pagination > .pagination').should('have.length', 1)
        .get('span.pagination-info').should('contain', '800')
    })

    it('Test AJAX Options', () => {
      cy.visit(`${baseUrl}ajax-options.html`)
        .intercept('GET', '**/json/data1.json').as('ajax')
        .wait('@ajax')
        .should(({ request }) => {
          expect(request.headers).to.have.property('custom-auth-token')
            .and.eq('custom-auth-token')
        })
    })

    it('Test Basic Columns', () => {
      cy.visit(`${baseUrl}basic-columns.html`)
        .get('.fixed-table-toolbar .columns').should('exist')
    })
  })
}
