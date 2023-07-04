describe('Lets a registered user login', () => {
    beforeEach(() => {
        cy.viewport(1200, 956);
        cy.visit('http://localhost:3000');
    });

    it('Logins', () => {
        cy.location().should('contain', /\/main/);
        cy.title().should('contain', 'A-Tink Вход');

        cy.login();

        cy.get('[data-cy="header-link-0"]').should('have.text', 'Отделения и банкоматы');
        cy.get('[data-cy="header-link-1"]').should('have.text', 'Курсы валют');
        cy.get('[data-cy="header-link-2"]').should('have.text', 'Контакты');

        cy.get('[data-cy="profile-link"]').should('contain', 'Иван Иванов');
    });

    it('Logins a user that is registered', () => {
        cy.get('#login').type('9999999999');
        cy.get('#password').type('qwerty*7H{enter}');

        cy.location().should('contain', /\/main/);
    });

    it('Does not login a user who is not registered', () => {
        cy.get('#login').type('8888888888');
        cy.get('#password').type('qwerty*7H{enter}');

        cy.findByText('Неверный логин или пароль');
    });
});
