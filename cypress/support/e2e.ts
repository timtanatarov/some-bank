import '@testing-library/cypress/add-commands';

import { registerToken } from 'src/redux/slices/authToken';

import { MOCK_TOKEN_DATA } from 'src/mocks/constants';

Cypress.Commands.add('login', () => {
    cy.window().its('store').invoke('dispatch', registerToken(MOCK_TOKEN_DATA.accessToken));
});
