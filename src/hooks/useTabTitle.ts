import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { headerNavItems, menuItems, profileMenuItems } from '../constants';

const navLinks = menuItems.concat(profileMenuItems, headerNavItems);

export const useTabTitle = (title: string) => {
    const location = useLocation();
    const paths = location.pathname.split('/');
    const currentLocation = paths.at(-1) || '';

    useEffect(() => {
        if (title) {
            document.title = `A-Tink ${title}`;
        } else {
            const matchedPath = navLinks.find((item) => item.path.includes(currentLocation));
            document.title = `A-Tink ${matchedPath?.text || ''}`;
        }
    }, [title, currentLocation]);
};
