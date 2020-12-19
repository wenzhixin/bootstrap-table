/* eslint-disable no-undef */
describe('Check data detail view align option functionality', () => {
  beforeEach(() => {
    cy.visit('./cypress/html/table-options/data-detail-view-align.html')
  })
  it('Check if the right align works', () => {
    cy.wrap(new Promise(resolve => {
      cy.get('table').then($table => {
        $table.on('load-success.bs.table', resolve)
      })
    })).then(() => {
      cy.wait(100)
        .get('tbody tr')
        .eq(2)
        .within(() => {
          cy.get('td')
            .last()
            .within(() => {
              cy.get('.detail-icon')
                .click()
            })
        })
        .get('.detail-view')
        .should('be.visible')
    })
  })

  it('Check if the left align works', () => {
    cy.wrap(new Promise(resolve => {
      cy.get('table').then($table => {
        $table.on('load-success.bs.table', resolve)
      })
    })).then(() => {
      cy.get('#radioLeft').click()
      cy.wait(100)
        .get('tbody tr')
        .eq(2)
        .within(() => {
          cy.get('td')
            .first()
            .within(() => {
              cy.get('.detail-icon')
                .click()
            })
        })
        .get('.detail-view')
        .should('be.visible')
    })
  })
})
