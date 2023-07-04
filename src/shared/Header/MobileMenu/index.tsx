import { useState } from 'react';

import { Box, Divider, IconButton, SwipeableDrawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { BurgerIcon } from 'src/shared/icons';

import { colors } from 'src/theme';

import { headerNavItems, menuItems } from 'src/constants';

import { GuardContainer } from 'src/shared/containers/GuardContainer';
import { ProfileLink } from 'src/shared/ProfileLink';

import { MobileMenuItemList } from './ItemList';

export const MobileMenu = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const handleOpen = () => {
        setIsMobileMenu(true);
    };
    const handleClose = () => {
        setIsMobileMenu(false);
    };

    return (
        <Box>
            <SwipeableDrawer
                anchor="left"
                open={isMobileMenu}
                onClose={handleClose}
                onOpen={handleOpen}
                sx={{
                    height: '100vh',
                    zIndex: 20000,
                    '.MuiDrawer-paper': {
                        width: '100vw',
                    },
                    '.MuiBackdrop-root': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <Box
                    m={{ tablet: '60px 56px 48px 60px', mobile: '56px 16px 44px 16px' }}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                    <GuardContainer withRedirect={false}>
                        <ProfileLink />
                    </GuardContainer>
                </Box>
                <Box px={{ mobile: 2, tablet: 7 }}>
                    <GuardContainer withRedirect={false}>
                        <>
                            <MobileMenuItemList menuItems={menuItems} onClose={handleClose} isLogoutOption={true} />
                            <Divider sx={{ mb: { tablet: 4, mobile: 3 } }} />
                        </>
                    </GuardContainer>
                    <MobileMenuItemList menuItems={headerNavItems} onClose={handleClose} />
                </Box>
            </SwipeableDrawer>
            <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                <BurgerIcon sx={{ color: colors.neutral600 }} />
            </IconButton>
        </Box>
    );
};
