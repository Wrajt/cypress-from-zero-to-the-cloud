describe('TAT Customer Service Center', () => {
    beforeEach(() => {
        cy.visit("../src/index.html")
    })
    it('1 selects a product (Youtube) by its content', () => {
        cy.get('select').select('YouTube')
        cy.get('select option:selected').should('have.text', 'YouTube')
    })
    it('2 selects a product (Mentorship) by its value', () => {
        cy.get('select').select('mentorship')
        cy.get('select option:selected').should('have.text', 'Mentorship')
    })
    it('3 selects a product (Blog) by its index', () => {
        cy.get('select').select(1)
        cy.get('select option:selected').should('have.text', 'Blog')
    })
})