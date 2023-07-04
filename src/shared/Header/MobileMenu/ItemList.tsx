import { Grid } from '@mui/material';
import { useAppDispatch } from 'src/redux/hooks';
import { logOut } from 'src/redux/slices/authToken';

import { NavItem } from 'src/shared/VerticalNavbar';

import { ExitIcon } from 'src/shared/icons';

import { MobileMenuItem } from './Item';

type MobileMenuItemListProps = {
    menuItems: NavItem[];
    isLogoutOption?: boolean;
    onClose: VoidFunction;
};

export const MobileMenuItemList = ({ menuItems, isLogoutOption, onClose }: MobileMenuItemListProps) => {
    const dispatch = useAppDispatch();

    return (
        <Grid container={true} spacing={{ mobile: 2, tablet: 3 }} sx={{ pb: 4 }}>
            {menuItems.map((el, i) => (
                <Grid item={true} mobile={6} tablet={4} key={i}>
                    <MobileMenuItem path={el.path} icon={el.icon} onClick={onClose} text={el.text} />
                </Grid>
            ))}
            {isLogoutOption && (
                <Grid item={true} mobile={6} tablet={4}>
                    <MobileMenuItem
                        outlined={true}
                        path="/"
                        icon={<ExitIcon />}
                        onClick={() => dispatch(logOut())}
                        text="Выход"
                    />
                </Grid>
            )}
        </Grid>
    );
};
