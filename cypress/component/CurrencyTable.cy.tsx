import { currencyData } from 'src/services/exchangeRatesService/currencyData';
import { currencies } from 'src/mocks/data/infoServiceData';
import { CurrencyTable } from 'src/shared/CurrencyTable';

const mockData = currencies
    .filter((el) => el.currencyCode in currencyData)
    .sort((a, b) => ['USD', 'EUR', 'CNY'].indexOf(a.currencyCode) - ['USD', 'EUR', 'CNY'].indexOf(b.currencyCode));

describe('Currency Table', () => {
    it('Renders error message when failed to fetch', () => {
        cy.viewport(380, 650);
        cy.intercept(/exchange-rates/, { statusCode: 500 });
        cy.mount(<CurrencyTable />);

        cy.findByText('Сервис временно недоступен');
    });

    it('Has loading state when fetching', () => {
        cy.intercept(/exchange-rates/, { delay: 1000, body: mockData });
        cy.viewport(420, 650);
        cy.mount(<CurrencyTable />);

        cy.get('[data-cy="CurrencyTable-skeleton0"]').should('exist');
        cy.get('[data-cy="CurrencyTable-skeleton0"]').should('exist');
        cy.get('[data-cy="CurrencyTable-skeleton0"]').should('exist');
    });
});
