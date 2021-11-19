module.exports = (theme = '') => {
    const baseUrl = require('../../common/utils')(theme, 'extensions')
  
    describe('Test basic filter control', () => {
      it('Test basic filter control', () => {
        cy.visit(`${baseUrl}filter-control.html`)
          .get('.table > thead > tr > th > .fht-cell > .filter-control').its('length').should('be.gte', 1)
      })
    })
  }
  