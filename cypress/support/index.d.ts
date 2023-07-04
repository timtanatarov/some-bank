import { EnhancedStore } from '@reduxjs/toolkit';
import { store } from 'src/redux/store';
import { MemoryRouterProps } from 'react-router-dom';

declare global {
    namespace Cypress {
        interface Chainable {
            login(): Chainable<void>;
            /**
             * Mounts a React node
             * @param component React Node to mount
             * @param options Additional options to pass into mount
             */
            mount(
                component: React.ReactNode,
                options?: MountOptions & { reduxStore?: EnhancedStore<RootState>; routerProps?: MemoryRouterProps }
            ): Cypress.Chainable<MountReturn>;
            getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
        }
    }

    interface Window {
        store: typeof store;
        Cypress: Cypress.Cypress;
    }
}
