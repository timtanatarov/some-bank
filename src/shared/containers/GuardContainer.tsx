import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { IS_LOGGED_IN } from 'src/constants';

import { useAppSelector } from 'src/redux/hooks';
import { selectAuthToken } from 'src/redux/selectors';

type GuardContainerProps = {
    path?: string;
    withRedirect?: boolean;
    children: React.ReactNode;
};

export const GuardContainer: FC<GuardContainerProps> = ({ path = '/', children, withRedirect = true }) => {
    const location = useLocation();
    const auth = useAppSelector(selectAuthToken);
    const wasLoggedIn = localStorage.getItem(IS_LOGGED_IN) === 'true';

    if (!auth && wasLoggedIn) return null;

    if (!auth && !wasLoggedIn) {
        return withRedirect ? <Navigate to={path} state={{ from: location }} replace={true} /> : null;
    }

    return children as React.ReactElement;
};
