describe('Main page test', () => {
    beforeEach(() => {
        cy.viewport(1200, 956);
        cy.visit('http://localhost:3000');
    });
    it('has a logo', () => {
        cy.visit('/');
        cy.get('[data-testid="logo"]').should('be.visible');
        cy.get('[data-cy="logo-text"]').should('have.text', 'A-Tink');
    });
    it('Input Login and Input Password', () => {
        cy.visit('/');
        cy.get('#login').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.get('[data-cy="button-submit-login"]').should('be.disabled');
        cy.get('#login').type('5397210865').should('have.value', '+7 (539) 721 08 65');
        cy.get('#password').type('5pZYP9hw6z&').should('have.value', '5pZYP9hw6z&');
    });
    it('Login button available', () => {
        cy.visit('/');
        cy.get('#login').type('5397210865');
        cy.get('#password').type('5pZYP9hw6z&');
        cy.get('[data-cy="button-submit-login"]').should('not.be.disabled');
    });
    it('Validation input password', () => {
        cy.visit('/');
        cy.get('#password').type('12');
        cy.get('[data-testid="password-helpText"]').should('have.text', 'Длина пароля должна быть от 6 до 20 символов');
        cy.get('#password').clear().type('22222222222222222222222222222222222');
        cy.get('[data-testid="password-helpText"]').should('have.text', 'Длина пароля должна быть от 6 до 20 символов');
        cy.get('#password').clear().type('122qq@');
        cy.get('[data-testid="password-helpText"]').should(
            'have.text',
            'Пароль должен содержать символы следующих групп: заглавные и строчные латинские буквы, цифры, специальные'
        );
    });
    it('Validation input phone number', () => {
        cy.visit('/');
        cy.get('#login').type('539721');
        cy.get('[data-testid="logo"]').click();
        cy.get('#login-helper-text').should('have.text', 'Номер телефона должен быть не короче 10 символов');
    });
    it('Correct work of links', () => {
        cy.visit('/');
        cy.get('a').contains('Отделения и банкоматы').click();
        cy.url().should('eq', 'http://localhost:3000/branches');
        cy.visit('/');
        cy.get('a').contains('Курсы валют').click();
        cy.url().should('eq', 'http://localhost:3000/currency');
        cy.visit('/');
        cy.get('a').contains('Контакты').click();
        cy.url().should('eq', 'http://localhost:3000/contacts');
    });
    it('Wrong login or password', () => {
        cy.get('#login').type('8888888888');
        cy.get('#password').type('qwerty*7H{enter}');
        cy.get('[data-cy="invalid-auth-message"]').should('not.be.disabled');
        cy.get('#login').clear().type('5397210865');
        cy.get('#password').clear().type('qwerty*44TT{enter}');
        cy.get('[data-cy="invalid-auth-message"]').should('not.be.disabled');
    });
    it('Correct slider operation', () => {
        cy.visit('/');
        cy.get('h2').contains('Платежи и переводы без комиссий').should('be.visible');
        cy.get('[data-cy="slider-right-button"]').click();
        cy.get('h2').contains('Платежи и переводы без комиссий').should('not.be.visible');
        cy.get('h2').contains('Кредит без визита в отделение').should('be.visible');
        cy.get('[data-cy="slider-right-button"]').click();
        cy.get('h2').contains('Кредит без визита в отделение').should('not.be.visible');
        cy.get('h2').contains('Индивидуальный курс валют').should('be.visible');
        cy.get('[data-cy="slider-left-button"]').click();
        cy.get('h2').contains('Кредит без визита в отделение').should('be.visible');
        cy.get('h2').contains('Индивидуальный курс валют').should('not.be.visible');
        cy.get('[data-cy="slider-left-button"]').click();
        cy.get('h2').contains('Платежи и переводы без комиссий').should('be.visible');
        cy.get('h2').contains('Кредит без визита в отделение').should('not.be.visible');
    });
});
