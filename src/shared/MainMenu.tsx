import { ListItemIcon, Box, Link, MenuItem, Stack, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { menuItems, AppRoutes } from 'src/constants';
import { useAppDispatch } from 'src/redux/hooks';
import { logOut } from 'src/redux/slices/authToken';

import { VerticalNavbar } from 'src/shared/VerticalNavbar';

import { colors } from 'src/theme';
import { ExitIcon } from 'src/shared/icons';

import { ATinkLogo } from './ATinkLogo';

const menuStyle = {
    color: colors.neutral0,
    whiteSpace: 'pre-line',
    '& > *': {
        fontSize: '20px !important',
    },
    '&.Mui-selected': {
        color: colors.secondary200,
        background: 'none',
        '&:hover': {
            background: 'none',
        },
    },
    '&:hover': {
        background: 'none',
        color: colors.secondary200,
    },
};

export const MainMenu = () => {
    const dispatch = useAppDispatch();

    return (
        <Stack
            sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Box sx={{ position: 'absolute', left: '56px', top: '10px' }}>
                <Link component={RouterLink} to={AppRoutes.mainRoute} underline="none">
                    <ATinkLogo variant="white" />
                </Link>
            </Box>
            <VerticalNavbar
                navList={menuItems}
                color="white"
                activeColor="#B3E0B8"
                extraTabsStyles={{ '.MuiTabs-flexContainer': { justifyContent: 'space-between', height: '53vh' } }}
            />
            <MenuItem sx={menuStyle} disableRipple={true} onClick={() => dispatch(logOut())}>
                <ListItemIcon sx={{ color: 'inherit' }}>
                    <ExitIcon />
                </ListItemIcon>
                <Typography>Выход</Typography>
            </MenuItem>
        </Stack>
    );
};
