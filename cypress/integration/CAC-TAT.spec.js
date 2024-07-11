// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Teste de Título da Aplicação', () => {
    beforeEach(() => {
        // Visitando a página local com o caminho relativo ao diretório raiz do projeto
        cy.visit('src/index.html');
        // Certifique-se de que a página foi carregada antes de iniciar cada teste
    });
    
    it('Verifica o título da aplicação', () => {
        // Verifica o título da página
        cy.title().should('eq', 'Formulário de Teste');
        // Certifica-se de que o título da página corresponde ao esperado
    });
    
    it('Tentando escrever palavras no "telefone"', function(){
        cy.get('#name').type('Bárbara').should('have.value','Bárbara')
        cy.get('#email').type('barbara@email.com').should('have.value','barbara@email.com')
        cy.get('#age').type(35).should('have.value',35)
        cy.get('#gender').select(1).should('have.value','male')
        cy.get('input[type="radio"][value="phone"]').check().should('have.value','phone')
        cy.get('#phone').type('TST').should('have.value','')
        cy.get('#terms').check()
        cy.get('#message').type('Im writing a simple text for test' , {delay: 0})
        cy.contains('button','Enviar').click()
    })

    it('Tentando Escrever Palavras na Idade',function(){
        cy.get('#name').type('Bárbara').should('have.value','Bárbara')
        cy.get('#email').type('barbara@email.com').should('have.value','barbara@email.com')
        cy.get('#age').type('TEST').should('have.value','')
        cy.get('#gender').select(1).should('have.value','male')
        cy.get('input[type="radio"][value="phone"]').check().should('have.value','phone')
        cy.get('#phone').type(123456789).should('have.value',123456789)
        cy.get('#terms').check()
        cy.get('#message').type('Im writing a simple text for test' , {delay: 0})
        cy.contains('button','Enviar').click()
    })
    
    it('Tentando Passar o Formulário sem selecionar uma opção no genero',function(){
        cy.get('#name').type('Bárbara').should('have.value','Bárbara')
        cy.get('#email').type('barbara@email.com').should('have.value','barbara@email.com')
        cy.get('#age').type('TEST').should('have.value','')
        cy.get('#gender').select(0).should('have.value','')
        cy.get('input[type="radio"][value="email"]').check();
        cy.get('input[type="radio"][value="phone"]').check().should('have.value','phone')
        cy.get('#phone').type(7599821245).should('have.value',7599821245)
        cy.get('#terms').check()
        cy.get('#message').type('Im writing a simple text for test' , {delay: 0})
        cy.contains('button','Enviar').click()
        
    })

    it('Tentando Passar o Formulário sem por o nome',function(){
        cy.get('#email').type('barbara@email.com').should('have.value','barbara@email.com')
        cy.get('#age').type('TEST').should('have.value','')
        cy.get('#gender').select(0).should('have.value','')
        cy.get('input[type="radio"][value="email"]').check();
        cy.get('input[type="radio"][value="phone"]').check().should('have.value','phone')
        cy.get('#phone').type(7599821245).should('have.value',7599821245)
        cy.get('#terms').check()
        cy.get('#message').type('Im writing a simple text for test' , {delay: 0})
        cy.contains('button','Enviar').click()
        
    })
    
    it('Tentando Passar o Formulário sem por o Email',function(){
        cy.get('#name').type('Bárbara').should('have.value','Bárbara')
        cy.get('#age').type('TEST').should('have.value','')
        cy.get('#gender').select(0).should('have.value','')
        cy.get('input[type="radio"][value="email"]').check();
        cy.get('input[type="radio"][value="phone"]').check().should('have.value','phone')
        cy.get('#phone').type(7599821245).should('have.value',7599821245)
        cy.get('#terms').check()
        cy.get('#message').type('Im writing a simple text for test' , {delay: 0})
        cy.contains('button','Enviar').click()
        
    })
    it('Preechendo todos os campos obrigatórios', function(){
        cy.get('#name').type('Paulo Gustavo').should('have.value','Paulo Gustavo')
        cy.get('#email').type('paulo@email.com').should('have.value','paulo@email.com')
        cy.get('#age').type(20).should('have.value',20)
        cy.get('#gender').select(1).should('have.value','male')
        cy.get('input[type="radio"][value="email"]').check();
        cy.get('input[type="radio"][value="phone"]').check().should('have.value','phone')
        cy.get('#phone').type(7599821245).should('have.value',7599821245)
        cy.get('#terms').check()
        cy.get('#message').type('Im writing a simple text for test' , {delay: 0})
        cy.contains('button','Enviar').click()
        cy.get('.success-message').should('be.visible')
        
        

    })

    // Aqui você pode adicionar mais testes conforme necessário
});
