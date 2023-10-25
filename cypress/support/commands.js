// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
    cy.get("#firstName").type('Karolina')
    cy.get("[id='lastName']").type('Surname')
    cy.get("[id='email']").type('kgrabarek59@gmail.com')
    cy.get("[id='open-text-area']").type('Wiadomość testowa',{delay : 0})
    cy.get("[class='button']").click()
    cy.get("[class='success']").should('be.visible')
})