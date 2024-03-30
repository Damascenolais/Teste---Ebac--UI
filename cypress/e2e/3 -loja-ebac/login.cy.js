///<reference types="cypress"/>

describe ('funcionalidade: login', () => {
    it ('deve fazer login com sucesso' , () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type ('lais.teste@teste.com.br')
        cy.get('#password').type ('teste@123')
        cy.get('.woocommerce-form > .button').click()


        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lais.teste (não é lais.teste? Sair)')
    })

} )
