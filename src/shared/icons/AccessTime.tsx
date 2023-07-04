import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const AccessTimeIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_26633)">
                    <path
                        d="M11.99 2.41016C6.47 2.41016 2 6.89016 2 12.4102C2 17.9302 6.47 22.4102 11.99 22.4102C17.52 22.4102 22 17.9302 22 12.4102C22 6.89016 17.52 2.41016 11.99 2.41016ZM12 20.4102C7.58 20.4102 4 16.8302 4 12.4102C4 7.99016 7.58 4.41016 12 4.41016C16.42 4.41016 20 7.99016 20 12.4102C20 16.8302 16.42 20.4102 12 20.4102ZM12.5 7.41016H11V13.4102L16.25 16.5602L17 15.3302L12.5 12.6602V7.41016Z"
                        fill="#212529"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_5_26633">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.410156)" />
                    </clipPath>
                </defs>
            </svg>
        </SvgIcon>
    );
};
