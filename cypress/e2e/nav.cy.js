// const { describe } = require("eslint/lib/rule-tester/rule-tester");


describe('Navigation', () => {
    it('should navigate to the about page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="about"]').click()

        cy.url().should('include', '/about')
    })
    it('should navigate to the books page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="books"]').click()

        cy.url().should('include', '/books')
    })
})