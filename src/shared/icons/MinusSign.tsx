import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const MinusSignIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <path
                d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                fill="white"
            />
        </SvgIcon>
    );
};
