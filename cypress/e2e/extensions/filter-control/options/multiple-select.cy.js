describe('Filter Control Multiple Select', () => {
  const baseUrl = '/for-tests/extensions/filter-control/'

  it('Test multiple select filter control - basic functionality', () => {
    cy.visit(`${baseUrl}filter-control-multiple-select.html`)
      .get('.table > thead > tr > th > .fht-cell > .filter-control')
      .find('select[multiple]')
      .should('exist')
      .and('have.length.gte', 1)
  })

  it('Test multiple select - selecting multiple options filters correctly', () => {
    cy.visit(`${baseUrl}filter-control-multiple-select.html`)
      .wait(1000)
      .get('.table > thead > tr > th > .fht-cell > .filter-control')
      .find('select[multiple]')
      .first()
      .select(['Option1', 'Option2'])
      .wait(1000)
      .get('.table > tbody > tr')
      .should('have.length.gte', 1)
      .should('have.length.lte', 21) // Should be filtered
  })

  it('Test multiple select - clearing selection shows all rows', () => {
    cy.visit(`${baseUrl}filter-control-multiple-select.html`)
      .wait(1000)
      .get('.table > thead > tr > th > .fht-cell > .filter-control')
      .find('select[multiple]')
      .first()
      .select(['Option1'])
      .wait(1000)
      .get('.table > tbody > tr')
      .then(($filteredRows) => {
        const filteredCount = $filteredRows.length
        
        // Clear selection
        cy.get('.table > thead > tr > th > .fht-cell > .filter-control')
          .find('select[multiple]')
          .first()
          .select([])
          .wait(1000)
          .get('.table > tbody > tr')
          .should('have.length.gt', filteredCount) // Should show more rows
      })
  })

  it('Test multiple select with multiple-select.js plugin integration', () => {
    cy.visit(`${baseUrl}filter-control-multiple-select-plugin.html`)
      .wait(1000)
      .get('.ms-parent') // multiple-select plugin creates this wrapper
      .should('exist')
      .and('have.length.gte', 1)
  })

  it('Test multiple select default values', () => {
    cy.visit(`${baseUrl}filter-control-multiple-select-defaults.html`)
      .wait(1000)
      .get('.table > thead > tr > th > .fht-cell > .filter-control')
      .find('select[multiple] option:selected')
      .should('have.length.gte', 1) // Should have pre-selected options
  })
})