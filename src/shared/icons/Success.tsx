import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import { colors } from 'src/theme';

export const SuccessIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.6402 5.2318C21.0645 5.58537 21.1218 6.21593 20.7682 6.64021L10.7682 18.6402C10.5884 18.856 10.326 18.9863 10.0453 18.999C9.76464 19.0117 9.49156 18.9058 9.29289 18.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9.9328 16.5186L19.2318 5.35984C19.5853 4.93556 20.2159 4.87824 20.6402 5.2318Z"
                    fill={colors.secondary600}
                />
            </svg>
        </SvgIcon>
    );
};
