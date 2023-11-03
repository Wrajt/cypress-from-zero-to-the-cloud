describe('TAT Customer Service Center', () => {
    beforeEach(() => {
        cy.visit("../src/index.html")
    })
    it('1 selects a file from the fixtures folder', () => {
        cy.get("input[id='file-upload']").selectFile('cypress/fixtures/example.json')
            .should(input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })
    it('selects a file simulating drag and drop', () => {
        cy.get("input[id='file-upload']").selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
            .should(input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })
    it('selects a file using a fixture to which an alias was given', () => {
        cy.fixture('example.json').as('sampleFile')
        cy.get("input[id='file-upload']").selectFile('@sampleFile')
            .should(input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })
})