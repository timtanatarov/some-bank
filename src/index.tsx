import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { reportWebVitals } from 'src/reportWebVitals';
import { store } from 'src/redux/store';
import { theme } from 'src/theme';
import { App } from 'src/App';
import { GlobalErrorBoundary } from 'src/shared/containers/GlobalErrorBoundary';

import { IS_MOCK_MODE } from 'src/constants';

if (IS_MOCK_MODE) {
    const { worker } = require('src/mocks/browser');
    worker.start({ onUnhandledRequest: 'bypass' });
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <GlobalErrorBoundary>
                        <App />
                    </GlobalErrorBoundary>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
