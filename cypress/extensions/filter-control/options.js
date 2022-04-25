module.exports = (theme = '') => {
    const baseUrl = require('../../common/utils')(theme, 'for-tests/extensions/filter-control')
  
    describe('Test basic filter control', () => {
      it('Test basic filter control', () => {
        cy.visit(`${baseUrl}filter-control.html`)
          .get('.table > thead > tr > th > .fht-cell > .filter-control')
          .its('length')
          .should('be.gte', 1)
      })

      it('Test if filter control visible is set to false, controls shouldnt be visible.', () => {
        cy.visit(`${baseUrl}filter-control-filterControlVisible.html`)
          .get('.table > thead > tr > th > .fht-cell > .filter-control')
          .invoke('attr', 'style')
          .should('eq', 'display: none;')
      })

      it('Test if filter control searchOnEnteyKey is set to true. Type "cypress" and validate table should not perform any action.', () => {
        cy.visit(`${baseUrl}filter-control-searchOnEnterKey.html`)
          .wait(1000)
          .get('.table > thead > tr > th > .fht-cell > .filter-control')
          .find('input')
          .type('cypress')
          .get('.table > tbody > tr')
          .its('length')
          .should('eq', 21)
      })

      it('Test if filter control searchOnEnteyKey is set to true. Type "Item 0", hit enter and validate table should perform search action.', () => {
        cy.visit(`${baseUrl}filter-control-searchOnEnterKey.html`)
          .wait(1000)
          .get('.table > thead > tr > th > .fht-cell > .filter-control')
          .find('input')
          .type('Item 0')
          .type('{enter}')
          .wait(1000)
          .get('.table > tbody > tr')
          .its('length')
          .should('eq', 1)
      })
    })
  }
  