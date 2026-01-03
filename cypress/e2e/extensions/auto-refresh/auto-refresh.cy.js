describe('Auto Refresh', () => {
    it('should toggle active state', () => {
        cy.visit('cypress/e2e/extensions/auto-refresh/test.html')
        cy.get('[name="autoRefresh"]').click()
        cy.get('[name="autoRefresh"]').should('have.class', 'active')
        cy.get('[name="autoRefresh"]').click()
        cy.get('[name="autoRefresh"]').should('not.have.class', 'active')
    })
})
