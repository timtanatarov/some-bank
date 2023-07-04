import { Box, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { NavItem } from 'src/shared/VerticalNavbar';

import { colors } from 'src/theme';

type MobileNavbarProps = {
    navList: NavItem[];
    onClick: VoidFunction;
};

export const MobileNavbar = ({ navList, onClick }: MobileNavbarProps) => {
    return (
        <Stack spacing={3} onClick={onClick}>
            {navList.map((el, i) => (
                <Link to={el.path} component={RouterLink} underline="none" key={i}>
                    <Box>
                        <Stack spacing={2} direction="row">
                            <Box sx={{ color: colors.secondary600, height: '24px', width: '24px' }}>{el.icon}</Box>
                            <Box>
                                <Typography align="center" sx={{ fontSize: '20px', lineHeight: '26px' }}>
                                    {el.text}
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Link>
            ))}
        </Stack>
    );
};
