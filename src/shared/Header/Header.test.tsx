import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import { colors } from 'src/theme';

import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

import { Header } from '.';

const renderWithRouterAndProvider = (element: React.ReactElement) => {
    render(
        <Router>
            <Provider store={store}>{element}</Provider>
        </Router>
    );
};

const setup = () => {
    renderWithRouterAndProvider(<Header />);
};

it('links check', () => {
    setup();
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(1);
    const [first, ...rest] = links;
    const logo = screen.getByTestId('logo');
    expect(first).toContainElement(logo);
    rest.forEach((el) => expect(el).toContainHTML('svg'));
});

it('header tag check', () => {
    setup();
    const headerTag = screen.getByRole('banner');
    expect(headerTag).toBeInTheDocument();
});

it('logo check', () => {
    setup();
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
});

it('absolute position check', () => {
    renderWithRouterAndProvider(<Header position="absolute" />);
    const appBar = screen.getByTestId('appBar');
    expect(appBar).toBeInTheDocument();
    expect(appBar).toHaveStyle('position: absolute');
});

it('static position check', () => {
    renderWithRouterAndProvider(<Header position="static" />);
    const appBar = screen.getByTestId('appBar');
    expect(appBar).toBeInTheDocument();
    expect(appBar).toHaveStyle('position: static');
});

it('color check', () => {
    setup();
    const links = screen.getAllByRole('link');
    links.slice(1).forEach((el) => {
        expect(el).toHaveStyle(`color: ${colors.neutral0}`);
    });
});

it('white theme color check', () => {
    renderWithRouterAndProvider(<Header colorTheme="white" />);
    const links = screen.getAllByRole('link');
    links.slice(1).forEach((el) => {
        expect(el).toHaveStyle(`color: ${colors.primary}`);
    });
});

it('hover color check', () => {
    setup();
    const links = screen.getAllByRole('link');
    links.slice(1).forEach(async (el) => {
        fireEvent.mouseEnter(el);
        await waitFor(
            () => {
                expect(el).toHaveStyle(`color: ${colors.secondary200}`);
            },
            { timeout: 1000 }
        );
    });
});

it('white theme hover color check', () => {
    renderWithRouterAndProvider(<Header colorTheme="white" />);
    const links = screen.getAllByRole('link');
    links.slice(1).forEach(async (el) => {
        fireEvent.mouseEnter(el);
        await waitFor(
            () => {
                expect(el).toHaveStyle(`color: ${colors.secondary200}`);
            },
            { timeout: 1000 }
        );
    });
});
