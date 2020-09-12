/* eslint-disable no-undef */
describe('Check Pagination functionality', () => {
  it('Check if pagination was initialized', () => {
    cy.visit('./cypress/html/core/pagination.html')
      .get('div.pagination-detail').should('have.length', 1)
      .get('div.pagination').should('have.length', 1)
  })

  it('Check page size', () => {
    cy.reload(true)
      .get('.fixed-table-body')
      .find('tbody tr')
      .should('have.length', 2)
  })

  it('Check page change', () => {
    cy.reload(true)
      .get('.pagination li.page-item')
      .eq(3)
      .click()
      .get('body')
      .find('tbody tr')
      .should('have.length', 1)
  })

  it('Check next page button', () => {
    cy.reload()
      .get('.pagination li.page-item.page-next')
      .click()
      .get('.pagination')
      .find('.page-item.active')
      .should('have.text', '2')
  })

  it('Check previous page button', () => {
    cy.reload()
      .get('.pagination li.page-item.page-pre')
      .click()
      .get('.pagination')
      .find('.page-item.active')
      .should('have.text', '3')
  })

  it('Check page size change', () => {
    cy.reload()
      .get('.pagination-detail span.page-list button')
      .click()
      .get('.pagination-detail span.page-list a.dropdown-item')
      .eq(2)
      .click()
      .get('div.pagination ul.pagination li')
      .should('have.length', 4)
      .get('.pagination-info')
      .should('include.text', 'Showing 1 to 3 of 5 rows')
  })
})