import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const PlusSignIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <path
                d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                fill="white"
            />
            <path
                d="M12 21C11.4477 21 11 20.5523 11 20V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V20C13 20.5523 12.5523 21 12 21Z"
                fill="white"
            />
        </SvgIcon>
    );
};
