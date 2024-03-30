///<reference types="cypress"/>

describe ('funcionalidade: login', () => {

beforeEach(() => {
    cy.visit ('http://lojaebac.ebaconline.art.br/my-account/')
});


afterEach(() => {
    cy.screenshot()
});
    
    it ('deve fazer login com sucesso' , () => {
        cy.get('#username').type ('lais.teste@teste.com.br')
        cy.get('#password').type ('teste@123')
        cy.get('.woocommerce-form > .button').click()


        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lais.teste (não é lais.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ai inserir usuário inválido', () => {
        cy.get('#username').type ('lais@teste.com.br')
        cy.get('#password').type ('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should ('contain', 'Endereço de e-mail desconhecido')
        
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type ('lais.teste@teste.com.br')
        cy.get('#password').type ('teste@126')
        cy.get('.woocommerce-form > .button').click()
    });

} )

 
