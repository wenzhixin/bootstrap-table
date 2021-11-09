module.exports = (theme = '') => {
  const baseUrl = require('./utils')(theme, 'welcomes')

  describe('Welcome Test', () => {
    it('Test From HTML', () => {
      cy.visit(`${baseUrl}from-html.html`)
        .get('.bootstrap-table').should('exist')
        .get('.fixed-table-toolbar > .columns').should('exist')
        .get('.fixed-table-toolbar > .search').should('exist')
    })

    it('Test From Data', () => {
      cy.visit(`${baseUrl}from-data.html`)
        .get('div.bootstrap-table tbody tr').should('have.length', 6)
    })

    it('Test From URL', () => {
      cy.visit(`${baseUrl}from-url.html`)
        .get('div.bootstrap-table tbody tr').should('have.length', 21)
    })

    it('Test No Data', () => {
      cy.visit(`${baseUrl}no-data.html`)
        .get('div.bootstrap-table').should('exist')
        .get('tr.no-records-found').should('be.visible')
    })

    it('Test Modal Table', () => {
      const html = theme ? `modal-table-${theme}.html` : 'modal-table.html'

      cy.visit(`${baseUrl}${html}`)
        .get('#button').wait(200).click()
        .get('.bootstrap-table').should('be.visible')
        .get('.fixed-table-container').should('have.css', 'height', '345px')
        .invoke('css', 'padding-bottom').then(str => parseInt(str)).should('be.greaterThan', 0)
    })

    it('Test Group Columns', () => {
      cy.visit(`${baseUrl}group-columns.html`)
        .get('.fixed-table-body thead tr:eq(0) th:eq(0)')
        .should('have.attr', 'colspan', '2')

      cy.get('.fixed-table-body  thead tr:eq(0) th:eq(1)')
        .should('have.attr', 'rowspan', '2')

      cy.get('.columns .keep-open > button').click()

      if (theme === 'materialize') {
        cy.get('.columns input[data-field="name"]').parent().click()
          .get('.columns input[data-field="price"]').parent().click()
      } else {
        cy.get('.columns input[data-field="name"]').click()
          .get('.columns input[data-field="price"]').click()
      }

      cy.get('.fixed-table-body thead tr').should('have.length', 1)
    })

    it('Test Sub Table', () => {
      cy.visit(`${baseUrl}sub-table.html`)
        .get('a.detail-icon').click()
        .get('tr.detail-view a.detail-icon').click()
        .get('.bootstrap-table').should('have.length', 3)
    })

    it('Test Multiple Table', () => {
      cy.visit(`${baseUrl}multiple-table.html`)
        .get('.bootstrap-table').should('have.length', 4)
    })

    it('Test Flat Json', () => {
      cy.visit(`${baseUrl}flat-json.html`)
        .get('.bootstrap-table tr[data-index="0"] td:eq(1)').should('contain', 768)
    })

    it('Test Large data', () => {
      cy.visit(`${baseUrl}large-data.html`)
        .get('.bootstrap-table').should('exist')
        .get('#load').click()
        .get('#total').should('contain', '10000')

      cy.get('#append').click()
        .get('#total').should('contain', '20000')

      cy.get('#table tr[data-index]').should('have.length', 200)
    })

    it('Test Vue Component', () => {
      cy.visit(`${baseUrl}vue-component.html`)
        .get('.bootstrap-table').should('exist')
        .get('.fixed-table-toolbar > .columns').should('exist')
        .get('.fixed-table-toolbar > .search').should('exist')
        .get('.bootstrap-table tr[data-index]').should('have.length', 6)
    })
  })
}
