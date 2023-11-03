describe('TAT Customer Service Center', () => {
    beforeEach(() => {
        cy.visit("../src/index.html")
    })
    it('1 checks the type of service "Feedback"', () => {
        cy.get("input[value='feedback']").check()
        cy.get("input[value='feedback']").should('be.checked')
    })
    it('2 checks each type of service', () => {
        cy.get('input[type="radio"]').each((dot) => {
            cy.get(dot).check()
            cy.get(dot).should('be.checked')
        })
    })
    it('2 checks each type of service', () => {
        cy.get('#support-type')
            .find('input[type="radio"]')
            .each(typeOfService => {
                cy.wrap(typeOfService)
                    .check()
                    .should('be.checked')
            })
        })
    })