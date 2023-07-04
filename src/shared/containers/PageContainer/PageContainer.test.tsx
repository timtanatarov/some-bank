import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { colors } from 'src/theme';

import { store } from 'src/redux/store';

import { PageContainer } from '.';

const renderWithRouterAndProvider = (element: React.ReactElement) => {
    render(
        <MemoryRouter>
            <Provider store={store}>{element}</Provider>
        </MemoryRouter>
    );
};

test('render default PageContainer', () => {
    renderWithRouterAndProvider(<PageContainer theme="black" />);
    expect(screen.getByTestId('defaultContainer')).toBeInTheDocument();
});

test('render default PageContainer with children', () => {
    renderWithRouterAndProvider(
        <PageContainer theme="black">
            <div data-testid="children" />
        </PageContainer>
    );
    expect(screen.getByTestId('children')).toBeInTheDocument();
});

test('render PageContainer with header', () => {
    renderWithRouterAndProvider(<PageContainer theme="black" />);
    expect(screen.getByTestId('appBar')).toBeInTheDocument();
});

test('render PageContainer with header props', () => {
    renderWithRouterAndProvider(
        <PageContainer
            theme="black"
            headerProps={{ extraItem: <div data-testid="extraItem" /> }}
            headerPosition="absolute"
        />
    );
    expect(screen.getByTestId('appBar')).toBeInTheDocument();
    expect(screen.getByTestId('extraItem')).toBeInTheDocument();
    expect(screen.getByTestId('appBar')).toHaveClass('MuiAppBar-positionAbsolute');
});

test('render PageContainer with black theme props', () => {
    renderWithRouterAndProvider(<PageContainer theme="black" />);
    const links = screen.getAllByRole('link');
    links.slice(1).forEach((el) => {
        expect(el).toHaveStyle('color: #FFF');
    });
});

test('render PageContainer with white theme props', () => {
    renderWithRouterAndProvider(<PageContainer theme="white" />);
    const links = screen.getAllByRole('link');
    links.slice(1).forEach((el) => {
        expect(el).toHaveStyle(`color: ${colors.primary}`);
    });
});

test('render PageContainer with footer', () => {
    renderWithRouterAndProvider(<PageContainer theme="black" hasFooter={true} />);
    expect(screen.getByTestId('hasFooter')).toBeInTheDocument();
});

test('render PageContainer with header and footer', () => {
    renderWithRouterAndProvider(<PageContainer theme="black" hasFooter={true} />);
    expect(screen.getByTestId('appBar')).toBeInTheDocument();
    expect(screen.getByTestId('hasFooter')).toBeInTheDocument();
});
