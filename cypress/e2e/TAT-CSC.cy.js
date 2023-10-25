describe('TAT Customer Service Center', () => {
    beforeEach(() => {
        cy.visit("../src/index.html")
    })
    it('checks the application title', () => {
    cy.title().should('eq', 'TAT Customer Service Center')
  })
    it('1 fills in the required fields and submits the form', () => {
        cy.get("#firstName").type('Karolina')
        cy.get("#lastName").type('Surname')
        cy.get("#email").type('kgrabarek59@gmail.com')
        cy.get("#open-text-area").type('Test message',{delay : 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    it('2 displays an error message when submitting the form with an email with invalid formatting', () =>{
        cy.get("#firstName").type('Karolina')
        cy.get("#lastName").type('Surname')
        cy.get("#email").type('wrong email')
        cy.get("#open-text-area").type('Wiadomość testowa')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('3 only accepts numeric values for phone number', () => {
        cy.get("#phone").type('testtesttest').should('be.empty')
    })
    it('4 displays an error message when the phone becomes required but is not filled in before the form submission', () => {
        cy.get("#firstName").type('Karolina')
        cy.get("#lastName").type('Surname')
        cy.get("#email").type('kgrabarek59@gmail.com')
        cy.get("#open-text-area").type('Wiadomość testowa')
        cy.get("#phone-checkbox").click()
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('5 fills and clears the first name, last name, email, and phone fields', () => {
        cy.get("#firstName").type('Karolina').should('have.value', 'Karolina')
        cy.get("#firstName").clear().should('have.value', "")

        cy.get("#lastName").type('Surname').should('have.value', 'Surname')
        cy.get("#lastName").clear().should('have.value', "")

        cy.get("#email").type('kgrabarek59@gmail.com').should('have.value', 'kgrabarek59@gmail.com')
        cy.get("#email").clear().should('have.value', "")

        cy.get("#phone").type('123456789').should('have.value', '123456789')
        cy.get("#phone").clear().should('have.value', "")
    })
    it('6 displays an error message when submitting the form without filling the required fields', () => {
        cy.get('button[type="submit"]').click()
        cy.get(".error").should('be.visible')
    })
    it('7 successfully submits the form using a custom command', () => {
        cy.fillMandatoryFieldsAndSubmit()
    })
    it('8 identify the button for later clicking, where instead of identifying that element with cy.get(), we will' +
        ' use cy.contains()', () => {
        cy.contains('button', "Send")
    })
})