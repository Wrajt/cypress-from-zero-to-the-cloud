describe('TAT Customer Service Center', () => {
    beforeEach(() => {
        cy.visit("../src/index.html")
    })
    it('verifies that the privacy policy page opens in another tab without the need for a click', () =>{
        cy.contains('a', 'Privacy Policy').should('have.attr', 'target', '_blank')
    })
    it('access the privacy policy page by removing the target, then clicking on the link', () => {
        cy.contains('a', 'Privacy Policy').invoke('removeAttr', 'target').click()
        cy.contains('h1', 'TAT SCS - Privacy Policy')
    })
    it('independently test the privacy policy page', () => {
        cy.visit("../src/privacy.html")
        cy.contains('h1', 'TAT CSC - Privacy Policy').should('be.visible')
        cy.contains('p', 'Talking about testing').should('be.visible')

    })
})