// const { describe } = require("eslint/lib/rule-tester/rule-tester");


describe('Navigation', () => {
    it('should navigate to the books page', () => {
        cy.visit('http://localhost:3000/')
        
        cy.get('a[href*="books"]').click()
        
        cy.url().should('include', '/books')
    })
    
    it('should navigate to the javascript page', () => {
        cy.visit('http://localhost:3000/')
        
        cy.get('[data-cy="dropDownContent"]').invoke('show')

        cy.get('a[href*="javascript"]').click()
        
        cy.url().should('include', '/javascript')
    })

    it('should navigate to the react page', () => {
        cy.visit('http://localhost:3000/')
        
        cy.get('[data-cy="dropDownContent"]').invoke('show')

        cy.get('a[href*="react"]').click()
        
        cy.url().should('include', '/react')
    })

    it('should navigate to the about page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="about"]').click()

        cy.url().should('include', '/about')
    })
})