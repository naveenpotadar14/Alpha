describe('my first test',()=> {
    it('test1', ()=>{
        cy.visit('http://localhost:8000/')
        cy.title().should('Login')
    })
})