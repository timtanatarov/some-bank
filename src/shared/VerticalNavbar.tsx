import { FC, ReactElement } from 'react';

import { useLocation, Link } from 'react-router-dom';

import { Box, Tabs, Tab, SxProps } from '@mui/material';

import { colors } from 'src/theme';

export type NavItem = {
    path: string;
    text: string;
    icon?: ReactElement;
};

type VerticalNavbarProps = {
    color?: string;
    activeColor?: string;
    orientation?: 'vertical' | 'horizontal';
    navList: NavItem[];
    extraTabsStyles?: SxProps;
};

export const VerticalNavbar: FC<VerticalNavbarProps> = ({
    navList,
    color = colors.neutral600,
    activeColor = colors.primary,
    orientation = 'vertical',
    extraTabsStyles,
}) => {
    const location = useLocation();

    function getMatchIndex(): number | false {
        if (location.pathname === '/main') return 0;
        for (let i = 1; i < navList.length; i++) {
            if (location.pathname.includes(navList[i].path)) {
                return i;
            }
        }
        return false;
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                orientation={orientation}
                value={getMatchIndex()}
                sx={{
                    borderBottom: { laptop: '0', tablet: `1px solid ${colors.neutral200}` },
                    '.MuiTabs-indicator': {
                        left: 0,
                        background: activeColor,
                        width: '3px',
                        borderRadius: '10px',
                    },
                    ...extraTabsStyles,
                }}
            >
                {navList.map((el, i) => (
                    <Tab
                        data-cy={`VerticalNavbar-tabItem-${i}`}
                        component={Link}
                        to={el.path}
                        label={el.text}
                        icon={el.icon}
                        iconPosition="start"
                        value={i}
                        key={i}
                        sx={{
                            display: 'flex',
                            padding: { laptop: '1px 0 1px 14px', mobile: '1px 14px' },
                            minHeight: 'auto',
                            textAlign: 'left',
                            alignItems: 'center',
                            justifyContent: 'start',
                            textTransform: 'none',
                            fontSize: { laptop: '20px', tablet: '16px', mobile: '14px' },
                            lineHeight: '30px',
                            color,

                            '&:hover': {
                                color: activeColor,
                            },

                            '&.Mui-selected': {
                                color: `${activeColor} !important`,
                            },

                            '& .MuiTab-iconWrapper': {
                                mr: '16px',
                            },
                        }}
                    />
                ))}
            </Tabs>
        </Box>
    );
};
