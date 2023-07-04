import '@testing-library/cypress';
import '@testing-library/cypress/add-commands';

import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { mount } from 'cypress/react18';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../../src/theme/index';

import { store } from '../../src/redux/store';

import { registerToken } from '../../src/redux/slices/authToken';

import { MOCK_TOKEN_DATA } from '../../src/mocks/constants';

Cypress.Commands.add('login', () => {
    cy.window().its('store').invoke('dispatch', registerToken(MOCK_TOKEN_DATA.accessToken));
});

Cypress.Commands.add('getByData', (testId) => {
    return cy.get(`[data-cy="${testId}"]`);
});

Cypress.Commands.add('mount', (component, options = {}) => {
    const { reduxStore = store, routerProps = { initialEntries: ['/'] }, ...mountOptions } = options;

    const wrapped = (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Provider store={reduxStore}>
                    <MemoryRouter {...routerProps} children={component} />
                </Provider>
            </ThemeProvider>
        </>
    );

    return mount(wrapped, mountOptions);
});
