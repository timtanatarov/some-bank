import { Suspense, useLayoutEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import { AppRoutes } from 'src/constants';

import { GuardContainer } from 'src/shared/containers/GuardContainer';

import { createErrorStack } from 'src/shared/containers/GlobalErrorBoundary';

import { lazilyLoadNameExportedComponent } from './utils/lazilyLoadNameExportedComponent';

import { PaperContainer } from './shared/containers/PaperContainer';

import { Loader } from './shared/Loader';
import { useTabTitle } from './hooks/useTabTitle';

const { IndexPage } = lazilyLoadNameExportedComponent(() => import('src/components/IndexPage'), 'IndexPage');
const { BranchesAndAtms } = lazilyLoadNameExportedComponent(
    () => import('src/components/BranchesAndAtms'),
    'BranchesAndAtms'
);
const { ExchangeRatesPage } = lazilyLoadNameExportedComponent(
    () => import('src/components/ExchangeRatesPage'),
    'ExchangeRatesPage'
);
const { ContactsPage } = lazilyLoadNameExportedComponent(() => import('src/components/ContactsPage'), 'ContactsPage');
const { ProfilePage } = lazilyLoadNameExportedComponent(() => import('src/components/ProfilePage'), 'ProfilePage');
const { ProfileBlock } = lazilyLoadNameExportedComponent(
    () => import('src/components/ProfilePage/Profile'),
    'ProfileBlock'
);
const { SecuritySettingsBlock } = lazilyLoadNameExportedComponent(
    () => import('src/components/ProfilePage/Security'),
    'SecuritySettingsBlock'
);
const { NotificationsSettingsBlock } = lazilyLoadNameExportedComponent(
    () => import('src/components/ProfilePage/Notifications/index'),
    'NotificationsSettingsBlock'
);
const { Accounts } = lazilyLoadNameExportedComponent(() => import('src/components/MainPage/Accounts'), 'Accounts');
const { CardDetails } = lazilyLoadNameExportedComponent(
    () => import('src/components/MainPage/Accounts/CardDetails'),
    'CardDetails'
);
const { DepositDetails } = lazilyLoadNameExportedComponent(
    () => import('src/components/MainPage/Deposits/DepositDetails'),
    'DepositDetails'
);
const { Credits } = lazilyLoadNameExportedComponent(() => import('src/components/MainPage/Credits'), 'Credits');
const { CreditDetails } = lazilyLoadNameExportedComponent(
    () => import('src/components/MainPage/Credits/CreditDetails'),
    'CreditDetails'
);
const { Deposits } = lazilyLoadNameExportedComponent(() => import('src/components/MainPage/Deposits'), 'Deposits');

const { MainContent } = lazilyLoadNameExportedComponent(
    () => import('src/components/MainPage/MainContent'),
    'MainContent'
);
const { MainPage } = lazilyLoadNameExportedComponent(() => import('src/components/MainPage'), 'MainPage');

const { ErrorPageNotFound } = lazilyLoadNameExportedComponent(
    () => import('src/shared/ErrorPageNotFound'),
    'ErrorPageNotFound'
);
const { ComingSoonPage } = lazilyLoadNameExportedComponent(() => import('src/shared/ComingSoonPage'), 'ComingSoonPage');

export const App = () => {
    useLayoutEffect(() => {
        document.querySelector<HTMLDivElement>('#preloader')?.remove();
    }, []);

    useTabTitle('');

    // eslint-disable-next-line max-params
    window.onerror = (msg, file, line, col, error: Error | undefined) => {
        if (error) {
            createErrorStack(error);
        }
    };

    return (
        <Routes>
            <Route
                path="*"
                element={
                    <Suspense fallback={<Loader />}>
                        <ErrorPageNotFound
                            subTitle="Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был
                                    введен неверный адрес в адресной строке."
                        />
                    </Suspense>
                }
            />
            <Route
                path={AppRoutes.indexPageRoute}
                element={
                    <Suspense fallback={<Loader />}>
                        <IndexPage />
                    </Suspense>
                }
            />
            <Route
                path={AppRoutes.branchesRoute}
                element={
                    <Suspense fallback={<Loader />}>
                        <BranchesAndAtms />
                    </Suspense>
                }
            />
            <Route
                path={AppRoutes.currencyRoute}
                element={
                    <Suspense fallback={<Loader />}>
                        <ExchangeRatesPage />
                    </Suspense>
                }
            />
            <Route
                path={AppRoutes.contactsRoute}
                element={
                    <Suspense fallback={<Loader />}>
                        <ContactsPage />
                    </Suspense>
                }
            />
            <Route
                path={AppRoutes.profileRoute}
                element={
                    <GuardContainer>
                        <Suspense fallback={<Loader />}>
                            <ProfilePage />
                        </Suspense>
                    </GuardContainer>
                }
            >
                <Route
                    index={true}
                    element={
                        <Suspense fallback={<Loader />}>
                            <ProfileBlock />
                        </Suspense>
                    }
                />
                <Route
                    path={AppRoutes.securityRoute}
                    element={
                        <Suspense fallback={<Loader />}>
                            <SecuritySettingsBlock />
                        </Suspense>
                    }
                />
                <Route
                    path={AppRoutes.notificationsRoute}
                    element={
                        <Suspense fallback={<Loader />}>
                            <NotificationsSettingsBlock />
                        </Suspense>
                    }
                />
            </Route>
            <Route
                path={AppRoutes.mainRoute}
                element={
                    <Suspense fallback={<Loader />}>
                        <GuardContainer>
                            <MainPage />
                        </GuardContainer>
                    </Suspense>
                }
            >
                <Route
                    index={true}
                    element={
                        <Suspense fallback={<Loader />}>
                            <MainContent />
                        </Suspense>
                    }
                />
                <Route
                    path={AppRoutes.accountsRoute}
                    element={
                        <Suspense fallback={<Loader />}>
                            <PaperContainer>
                                <Outlet />
                            </PaperContainer>
                        </Suspense>
                    }
                >
                    <Route
                        index={true}
                        element={
                            <Suspense fallback={<Loader />}>
                                <Accounts />
                            </Suspense>
                        }
                    />
                    <Route
                        path=":id"
                        element={
                            <Suspense fallback={<Loader />}>
                                <CardDetails />
                            </Suspense>
                        }
                    />
                </Route>
                <Route
                    path={AppRoutes.depositsRoute}
                    element={
                        <Suspense fallback={<Loader />}>
                            <PaperContainer>
                                <Outlet />
                            </PaperContainer>
                        </Suspense>
                    }
                >
                    <Route
                        index={true}
                        element={
                            <Suspense fallback={<Loader />}>
                                <Deposits />
                            </Suspense>
                        }
                    />
                    <Route
                        path={`${AppRoutes.depositsRoute}/:id`}
                        element={
                            <Suspense fallback={<Loader />}>
                                <DepositDetails />
                            </Suspense>
                        }
                    />
                </Route>
                <Route
                    path={AppRoutes.creditsRoute}
                    element={
                        <Suspense fallback={<Loader />}>
                            <PaperContainer>
                                <Outlet />
                            </PaperContainer>
                        </Suspense>
                    }
                >
                    <Route
                        index={true}
                        element={
                            <Suspense fallback={<Loader />}>
                                <Credits />
                            </Suspense>
                        }
                    />
                    <Route
                        path=":id"
                        element={
                            <Suspense fallback={<Loader />}>
                                <CreditDetails />
                            </Suspense>
                        }
                    />
                </Route>
                <Route
                    path={AppRoutes.insuranceRoute}
                    element={
                        <Suspense fallback={<Loader />}>
                            <ComingSoonPage title="Страхование" />
                        </Suspense>
                    }
                />
                <Route
                    path={AppRoutes.investmentsRoute}
                    element={
                        <Suspense fallback={<Loader />}>
                            <ComingSoonPage title="Инвестиции" />
                        </Suspense>
                    }
                />
                <Route
                    path={AppRoutes.promoRoute}
                    element={
                        <Suspense fallback={<Loader />}>
                            <ComingSoonPage title="Инвестиции" />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
};
