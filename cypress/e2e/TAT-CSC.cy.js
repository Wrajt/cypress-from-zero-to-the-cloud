describe('TAT Customer Service Center', () => {
    beforeEach(() => {
        cy.visit("../src/index.html")
    })
  it('checks the application title', () => {
    cy.title().should('eq', 'TAT Customer Service Center')
  })
    it('fills in the required fields and submits the form', () => {
        cy.get("[id='firstName']").type('Karolina')
        cy.get("[id='lastName']").type('Surname')
        cy.get("[id='email']").type('kgrabarek59@gmail.com')
        cy.get("[id='open-text-area']").type('Wiadomość testowa',{delay : 0})
        cy.get("[class='button']").click()
        cy.get("[class='success']").should('be.visible')
    })
    it('displays an error message when submitting the form with an email with invalid formatting', () =>{
        cy.get("[id='firstName']").type('Karolina')
        cy.get("[id='lastName']").type('Surname')
        cy.get("[id='email']").type('wrong email')
        cy.get("[id='open-text-area']").type('Wiadomość testowa')
        cy.get("[class='button']").click()
        cy.get("[class='error']").should('be.visible')
    })
    it('only accepts numeric values for phone number', () => {
        cy.get("[id='phone']").type('testtesttest').should('be.empty')
    })
    it('displays an error message when the phone becomes required but is not filled in before the form submission', () => {
        cy.get("[id='firstName']").type('Karolina')
        cy.get("[id='lastName']").type('Surname')
        cy.get("[id='email']").type('kgrabarek59@gmail.com')
        cy.get("[id='open-text-area']").type('Wiadomość testowa')
        cy.get("[id='phone-checkbox']").click()
        cy.get("[class='button']").click()
        cy.get("[class='error']").should('be.visible')
    })
})