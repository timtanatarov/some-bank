import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const BurgerIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <rect y="3" width="24" height="2" rx="1" />
            <rect y="11" width="24" height="2" rx="1" />
            <rect y="19" width="24" height="2" rx="1" />
        </SvgIcon>
    );
};
